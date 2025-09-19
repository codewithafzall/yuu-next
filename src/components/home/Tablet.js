"use client";
import React, { useState, useEffect, useRef } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import axios from "axios";

// ── Firebase config (unchanged) ──────────────────────────────────────────────
const firebaseConfig = {
  apiKey: "AIzaSyAySIVMOzfjZV7sx-k0v0SIRsQ0waegDqs",
  authDomain: "yuubynahar-9e090.firebaseapp.com",
  projectId: "yuubynahar-9e090",
  storageBucket: "yuubynahar-9e090.firebasestorage.app",
  messagingSenderId: "573212874650",
  appId: "1:573212874650:web:fe6f5d41ec3e27d22c0c23",
};

// Initialize Firebase (client-side only)
if (typeof window !== "undefined" && !firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const initialForm = {
  name: "",
  occupation: "",
  phone: "",
  email: "",
  interestedIn: "",
  message: "",
  verificationCode: "",
};

const Tablet = () => {
  const [activeForm, setActiveForm] = useState(null); // "callback" | "visit" | "brochure"
  const [user, setUser] = useState(null);
  const [isOTPSent, setIsOTPSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const recaptchaRef = useRef(null);
  const [recaptchaVerifier, setRecaptchaVerifier] = useState(null);

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // ── Auth state sync & non-persistent sessions ─────────────────────────────
  useEffect(() => {
    const unsub = firebase.auth().onAuthStateChanged((u) => setUser(u));
    return () => unsub();
  }, []);

  const downloadBrochure = () => {
  const link = document.createElement("a");
  link.href = "/images/white-logo.png"; // path to your brochure file in public folder
  link.download = "Yuu-Brochure";    // suggested filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
 };


  useEffect(() => {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE).catch(console.error);
  }, []);

  // ── Validation helpers ────────────────────────────────────────────────────
  const validators = {
    name: (v) => (!v.trim() ? "Name is required." : v.trim().length < 2 ? "Enter full name." : ""),
    occupation: (v) => (v && v.trim().length < 2 ? "Too short." : ""),
    phone: (v) => {
      const trimmed = v.replace(/\s+/g, "");
      if (!trimmed) return "Phone is required.";
      if (trimmed.startsWith("+")) {
        // E.164-ish: +, 8–15 digits
        return /^\+\d{8,15}$/.test(trimmed) ? "" : "Enter a valid phone format.";
      }
      return /^\d{10}$/.test(trimmed) ? "" : "Enter 10-digit number";
    },
    email: (v) =>
      !v.trim()
        ? "Email is required."
        : !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)
          ? "Enter a valid email."
          : "",
    interestedIn: (v) => (!v ? "Please select an option." : ""),
    message: (v) => (v.length > 1000 ? "Message too long (max 1000 chars)." : ""),
    verificationCode: (v) =>
      !v ? "Enter the OTP." : !/^\d{4,8}$/.test(v) ? "OTP should be 4–8 digits." : "",
  };

  const validateField = (name, value) => {
    const fn = validators[name];
    return fn ? fn(value) : "";
  };

  const validateForm = (fields) => {
    const nextErrors = {};
    Object.keys(validators).forEach((k) => {
      nextErrors[k] = validateField(k, fields[k] ?? "");
    });
    // Only enforce OTP if OTP flow is in progress (isOTPSent)
    if (!isOTPSent) delete nextErrors.verificationCode;
    return nextErrors;
  };

  const hasErrors = (errs) => Object.values(errs).some((e) => e);

  // ── State helpers ─────────────────────────────────────────────────────────
  const updateField = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const markTouched = (name) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, form[name]) }));
  };

  // ── Auth + reCAPTCHA lifecycle ────────────────────────────────────────────
  const forceFreshVerification = async () => {
    try {
      if (firebase.auth().currentUser) await firebase.auth().signOut();
    } catch (e) {
      console.warn("signOut warn:", e);
    }
    setUser(null);
    setIsOTPSent(false);
    setForm((f) => ({ ...f, verificationCode: "" }));

    if (typeof window !== "undefined" && window.confirmationResult) {
      window.confirmationResult = null;
    }

    try {
      if (recaptchaVerifier?.clear) await recaptchaVerifier.clear();
    } catch (e) {
      console.warn("recaptchaVerifier.clear issue:", e);
    }
    setRecaptchaVerifier(null);

    try {
      if (window.grecaptcha && typeof window.recaptchaWidgetId !== "undefined") {
        window.grecaptcha.reset(window.recaptchaWidgetId);
      }
    } catch (e) {
      console.warn("grecaptcha.reset issue:", e);
    }
  };

  const ensureRecaptcha = async () => {
    if (recaptchaVerifier) {
      try {
        if (window.grecaptcha && typeof window.recaptchaWidgetId !== "undefined") {
          window.grecaptcha.reset(window.recaptchaWidgetId);
        }
        return recaptchaVerifier;
      } catch (e) {
        // fall through and recreate
      }
    }

    const verifier = new firebase.auth.RecaptchaVerifier("recaptcha-container", {
      size: "invisible",
      callback: () => { },
    });
    setRecaptchaVerifier(verifier);
    const widgetId = await verifier.render();
    window.recaptchaWidgetId = widgetId;
    return verifier;
  };

  // ── Event handlers ─────────────────────────────────────────────────────────
  const openForm = async (type) => {
    await forceFreshVerification();
    setActiveForm(type);
    setForm(initialForm);
    setErrors({});
    setTouched({});
  };

  const closeForm = async () => {
    await forceFreshVerification();
    setActiveForm(null);
    setForm(initialForm);
    setErrors({});
    setTouched({});
  };

  const sendOTP = async () => {
    // validate minimal fields needed for OTP (phone + email/name if you want)
    const phoneError = validators.phone(form.phone);
    setErrors((prev) => ({ ...prev, phone: phoneError }));
    setTouched((prev) => ({ ...prev, phone: true }));
    if (phoneError) return;

    setLoading(true);
    try {
      const verifier = await ensureRecaptcha();

      const trimmed = form.phone.replace(/\s+/g, "");
      const phoneNumber =
        trimmed.startsWith("+")
          ? trimmed
          : /^\d{10}$/.test(trimmed)
            ? `+91${trimmed}`
            : trimmed;

      const confirmationResult = await firebase.auth().signInWithPhoneNumber(phoneNumber, verifier);
      window.confirmationResult = confirmationResult;
      setIsOTPSent(true);
    } catch (err) {
      console.error("Error sending OTP:", err);
      alert(err?.message || "Failed to send OTP.");
      try {
        if (recaptchaVerifier?.clear) await recaptchaVerifier.clear();
      } catch { }
      setRecaptchaVerifier(null);
    } finally {
      setLoading(false);
    }
  };

  const verifyOTP = async () => {
    const otpErr = validators.verificationCode(form.verificationCode);
    setErrors((prev) => ({ ...prev, verificationCode: otpErr }));
    setTouched((prev) => ({ ...prev, verificationCode: true }));
    if (otpErr) return;

    const confirmationResult = window.confirmationResult;
    if (!confirmationResult) return alert("Please request an OTP first.");

    setLoading(true);
    try {
      const result = await confirmationResult.confirm(form.verificationCode);
      setUser(result.user);
      setIsOTPSent(false);
      setForm((f) => ({ ...f, verificationCode: "" }));
    } catch (err) {
      console.error("Error verifying OTP:", err);
      alert("Invalid OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!user) return alert("Please verify your phone number before submitting.");

  // Validate before send
  const nextErrors = validateForm(form);
  setErrors(nextErrors);
  setTouched(Object.keys(form).reduce((acc, k) => ((acc[k] = true), acc), {}));
  if (hasErrors(nextErrors)) return;

  setLoading(true);
  try {
    // Build simple FormData body — avoids preflight CORS
    const body = new FormData();
    body.append("formType", activeForm || "");
    body.append("name", form.name || "");
    body.append("occupation", form.occupation || "");
    body.append("phone", form.phone || "");
    body.append("email", form.email || "");
    body.append("interestedIn", form.interestedIn || "");
    body.append("message", form.message || "");
    body.append("submittedAt", new Date().toISOString());

    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbxqbfU-RKQkxxOiSaW6fJkJPiLG6sX64Gh8XAQ1xR61QfPvQkNn-JJb0RfD-2nViW6OpQ/exec",
      {
        method: "POST",
        body, 
      }
    );

    if (!res.ok) {
      const txt = await res.text().catch(() => "");
      throw new Error(`GAS error ${res.status}: ${txt}`);
    }

    const data = await res.json().catch(() => ({}));
    if (!data.ok) throw new Error(data.error || "Unknown GAS error");

    await forceFreshVerification();
    setActiveForm(null);
    setForm(initialForm);
    setErrors({});
    setTouched({});
    if (activeForm === "brochure") {
      downloadBrochure();
    }

  } catch (err) {
    console.error("Submit failed:", err);
    alert(err.message || "Failed to submit. Please try again.");
  } finally {
    setLoading(false);
  }
};

const errorText = (key) =>
  touched[key] && errors[key] ? (
    <small className="text-red-600 text-xs ml-3 block mt-1">{errors[key]}</small>
  ) : null;

return (
  <div className="relative w-full" id="form">
    {/* Button Group */}
    <div className="absolute left-1/2 transform -translate-x-1/2 w-[90%] desktop:w-[60%] py-3 desktop:py-7 shadow-2xl rounded-full bg-[#f7f6f2] flex justify-between items-center mx-auto">
      <button
        onClick={() => openForm("callback")}
        className="text-xs desktop:text-2xl text-[#595959] mx-auto flex"
      >
        Request Callback
      </button>
      <div className="w-[2px] h-12 bg-[#d16f52] max-[768px]:h-8" />
      <button
        onClick={() => openForm("visit")}
        className="text-xs desktop:text-2xl text-[#595959] mx-auto flex "
      >
        Schedule Visit
      </button>
      <div className="w-[2px] h-12 bg-[#d16f52] max-[768px]:h-8" />
      <button
        onClick={() => openForm("brochure")}
        className="text-xs desktop:text-2xl text-[#595959] mx-auto flex"
      >
        Brochure
      </button>
    </div>

    {/* IMPORTANT: Keep this mounted at all times */}
    <div id="recaptcha-container" ref={recaptchaRef} />

    {/* Form Modal */}
    {activeForm && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-[#fef9f3] h-[90vh] desktop:h-auto shadow-lg rounded-lg w-[90%] py-4">
          <button
            type="button"
            onClick={closeForm}
            className="text-gray-500 hover:text-gray-700 text-4xl ml-4 leading-none"
          >
            ×
          </button>

          <div className="flex items-center text-[#d7b18d]">
            <div className="w-full desktop:w-1/2">
              <form className="px-4 desktop:px-16 enquiry-form" onSubmit={handleSubmit} noValidate>
                <small className="text-xs desktop:text-sm">
                  Fill out the form below to get exclusive
                  <br />
                  updates and be the first to know about offers
                  <br />
                  and availability at YUU by Nahar.
                </small>

                <div className="flex justify-between gap-x-3 mt-3 desktop:gap-x-6 desktop:mt-6">
                  <div className="w-full">
                    <input
                      type="text"
                      placeholder="NAME*"
                      value={form.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      onBlur={() => markTouched("name")}
                      className="text-xl w-full placeholder-[#d7b18d] rounded-full bg-transparent border border-[#513335] py-2 px-4 desktop:py-3"
                    />
                    {errorText("name")}
                  </div>
                  <div className="w-full">
                    <input
                      type="text"
                      placeholder="OCCUPATION*"
                      value={form.occupation}
                      onChange={(e) => updateField("occupation", e.target.value)}
                      onBlur={() => markTouched("occupation")}
                      className="text-xl w-full placeholder-[#d7b18d] rounded-full bg-transparent border border-[#513335] py-2 px-4 desktop:py-3"
                    />
                    {errorText("occupation")}
                  </div>
                </div>

                <div className="flex justify-between gap-x-6 mt-6">
                  <div className="w-full">
                    <input
                      type="tel"
                      placeholder="PHONE NUMBER*"
                      value={form.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      onBlur={() => markTouched("phone")}
                      className="text-xl w-full placeholder-[#d7b18d] rounded-full bg-transparent border border-[#513335] py-2 px-4 desktop:py-3"
                    />
                    {errorText("phone")}
                  </div>
                  <div className="w-full">
                    <input
                      type="email"
                      placeholder="EMAIL*"
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      onBlur={() => markTouched("email")}
                      className="text-xl w-full placeholder-[#d7b18d] rounded-full bg-transparent border border-[#513335] py-2 px-4 desktop:py-3"
                    />
                    {errorText("email")}
                  </div>
                </div>

                <div className="mt-6 w-[55%]">
                  <select
                    className="text-xl w-full rounded-full bg-transparent border border-[#513335] py-2 px-4 desktop:py-3"
                    value={form.interestedIn}
                    onChange={(e) => updateField("interestedIn", e.target.value)}
                    onBlur={() => markTouched("interestedIn")}
                  >
                    <option value="" disabled>
                      INTERESTED IN*
                    </option>
                    <option value="studio apartment">Studio Apartments</option>
                    <option value="retail showroom">Retail Showrooms</option>
                    <option value="restaurant space">Restaurant Space</option>
                  </select>
                  {errorText("interestedIn")}
                </div>

                <div className="mt-6">
                  <textarea
                    placeholder="MESSAGE (OPTIONAL)"
                    value={form.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    onBlur={() => markTouched("message")}
                    className="text-xl w-full placeholder-[#d7b18d] rounded-2xl bg-transparent border border-[#513335] py-2 px-4 desktop:py-3"
                  />
                  {errorText("message")}
                </div>

                {/* Auth/Submit area — forces OTP each time */}
                {!user ? (
                  <div className="mt-6">
                    {!isOTPSent ? (
                      <button
                        type="button"
                        onClick={sendOTP}
                        className="rounded-full cursor-pointer bg-[#d06d52] text-[#fef9f3] px-5 py-3 w-1/2 desktop:w-1/3 text-lg disabled:opacity-50"
                        disabled={loading || !form.phone.length === 10}
                      >
                        {loading ? "Sending OTP..." : "Send OTP"}
                      </button>
                    ) : (
                      <div className="flex items-center gap-4">
                        <input
                          type="text"
                          placeholder="Enter OTP"
                          value={form.verificationCode}
                          onChange={(e) => updateField("verificationCode", e.target.value)}
                          onBlur={() => markTouched("verificationCode")}
                          className="text-xl w-[40%] placeholder-[#d7b18d] rounded-full bg-transparent border border-[#513335] py-2 px-4 desktop:py-3"
                        />
                        <button
                          type="button"
                          onClick={verifyOTP}
                          className="rounded-full bg-[#d06d52] text-[#fef9f3] py-2 px-4 desktop:py-3 text-lg disabled:opacity-60"
                          disabled={loading || !form.verificationCode}
                        >
                          {loading ? "Verifying..." : "Verify OTP"}
                        </button>
                      </div>
                    )}
                    {isOTPSent && errorText("verificationCode")}
                    <small className="block text-xs mt-3 text-[#513335]">
                      Verify your phone number to enable submission.
                    </small>
                  </div>
                ) : (
                  <button
                    className="rounded-full bg-[#d06d52] text-[#fef9f3] px-5 py-3 w-1/3 mt-6 text-lg"
                    type="submit"
                  >
                    SUBMIT
                  </button>
                )}
              </form>

              <small className="text-xs block mt-3 ml-0 px-4 desktop:px-0 desktop:mt-6 desktop:ml-16">
                By submitting this form, you agree to receive updates and
                communications from YUU by Nahar
              </small>
            </div>

            <img className="w-1/2 desktop:block hidden" src="/images/Enquiry-img.png" alt="Form visual" />
          </div>
        </div>
      </div>
    )}
  </div>
);
};

export default Tablet;
