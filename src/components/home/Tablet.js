"use client";
import React, { useState, useEffect, useRef } from "react";
import firebase from "firebase/app";
import "firebase/auth";

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

const Tablet = () => {
  const [activeForm, setActiveForm] = useState(null);

  // Auth state
  const [user, setUser] = useState(null);
  const [isOTPSent, setIsOTPSent] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [loading, setLoading] = useState(false);

  // reCAPTCHA (keep container mounted at all times)
  const recaptchaRef = useRef(null);
  const [recaptchaVerifier, setRecaptchaVerifier] = useState(null);

  // Form state
  const [name, setName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [interestedIn, setInterestedIn] = useState("");
  const [message, setMessage] = useState("");

  // Keep auth state synced
  useEffect(() => {
    const unsub = firebase.auth().onAuthStateChanged((u) => setUser(u));
    return () => unsub();
  }, []);

  // Sessions non-persistent to avoid sticky login
  useEffect(() => {
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.NONE)
      .catch(console.error);
  }, []);

  // ── Helpers ────────────────────────────────────────────────────────────────
  // Fully reset auth + OTP + reCAPTCHA so each attempt is fresh
  const forceFreshVerification = async () => {
    try {
      if (firebase.auth().currentUser) {
        await firebase.auth().signOut();
      }
    } catch (e) {
      console.warn("signOut warn:", e);
    }

    setUser(null);
    setIsOTPSent(false);
    setVerificationCode("");

    if (typeof window !== "undefined" && window.confirmationResult) {
      window.confirmationResult = null;
    }

    // Try to clear existing verifier instance (widget stays mounted)
    try {
      if (recaptchaVerifier?.clear) {
        await recaptchaVerifier.clear();
      }
    } catch (e) {
      console.warn("recaptchaVerifier.clear issue:", e);
    }
    setRecaptchaVerifier(null);

    // Reset widget if present
    try {
      if (window.grecaptcha && typeof window.recaptchaWidgetId !== "undefined") {
        window.grecaptcha.reset(window.recaptchaWidgetId);
      }
    } catch (e) {
      console.warn("grecaptcha.reset issue:", e);
    }
  };

  // Ensure a fresh/valid RecaptchaVerifier before each OTP
  const ensureRecaptcha = async () => {
    // If we already have one, try a clean reset of the widget
    if (recaptchaVerifier) {
      try {
        if (window.grecaptcha && typeof window.recaptchaWidgetId !== "undefined") {
          window.grecaptcha.reset(window.recaptchaWidgetId);
        }
        return recaptchaVerifier;
      } catch (e) {
        // If reset fails, fall through to recreate
      }
    }

    const verifier = new firebase.auth.RecaptchaVerifier("recaptcha-container", {
      size: "invisible",
      callback: () => {
        // Auto-solved when signInWithPhoneNumber is called
      },
    });
    setRecaptchaVerifier(verifier);
    const widgetId = await verifier.render();
    window.recaptchaWidgetId = widgetId;
    return verifier;
  };

  // ── Event handlers ─────────────────────────────────────────────────────────
  const openForm = async (type) => {
    await forceFreshVerification(); // must OTP every time
    setActiveForm(type);
  };

  const closeForm = async () => {
    await forceFreshVerification();
    setActiveForm(null);
  };

  const sendOTP = async () => {
    if (!phone) return alert("Please enter your phone number.");

    setLoading(true);
    try {
      const verifier = await ensureRecaptcha();

      // Simple normalization: 10 digits => assume +91; otherwise pass through
      const trimmed = phone.replace(/\s+/g, "");
      const phoneNumber =
        trimmed.startsWith("+")
          ? trimmed
          : trimmed.match(/^\d{10}$/)
          ? `+91${trimmed}`
          : trimmed;

      const confirmationResult = await firebase
        .auth()
        .signInWithPhoneNumber(phoneNumber, verifier);

      window.confirmationResult = confirmationResult;
      setIsOTPSent(true);
    } catch (err) {
      console.error("Error sending OTP:", err);
      alert(err?.message || "Failed to send OTP.");

      // Hard reset path if something went wrong with verifier
      try {
        if (recaptchaVerifier?.clear) await recaptchaVerifier.clear();
      } catch {}
      setRecaptchaVerifier(null);
    } finally {
      setLoading(false);
    }
  };

  const verifyOTP = async () => {
    if (!verificationCode) return alert("Enter the OTP.");
    const confirmationResult = window.confirmationResult;
    if (!confirmationResult) return alert("Please request an OTP first.");

    setLoading(true);
    try {
      const result = await confirmationResult.confirm(verificationCode);
      setUser(result.user);
      // Clear OTP UI after success
      setIsOTPSent(false);
      setVerificationCode("");
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

    const payload = {
      formType: activeForm, // "callback" | "visit" | "brochure"
      name,
      occupation,
      phone,
      email,
      interestedIn,
      message,
      authUid: user?.uid || null,
      authPhone: user?.phoneNumber || null,
      submittedAt: new Date().toISOString(),
    };

    console.log("FORM SUBMISSION →", payload);
    alert(`Submitted ${activeForm} form`);

    // Clear for next attempt (forces OTP again next time)
    await forceFreshVerification();
    setActiveForm(null);

    // Reset fields
    setName("");
    setOccupation("");
    setPhone("");
    setEmail("");
    setInterestedIn("");
    setMessage("");
  };

  // ── UI ─────────────────────────────────────────────────────────────────────
  return (
    <div className="relative w-full">
      {/* Button Group */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-[60%] py-7 shadow-2xl rounded-full bg-[#f7f6f2] flex justify-between items-center mx-auto">
        <button
          onClick={() => openForm("callback")}
          className="text-2xl text-[#595959] mx-auto flex max-[768px]:text-base"
        >
          Request Callback
        </button>
        <div className="w-[2px] h-12 bg-[#d16f52] max-[768px]:h-8" />
        <button
          onClick={() => openForm("visit")}
          className="text-2xl text-[#595959] mx-auto flex max-[768px]:text-base"
        >
          Schedule Visit
        </button>
        <div className="w-[2px] h-12 bg-[#d16f52] max-[768px]:h-8" />
        <button
          onClick={() => openForm("brochure")}
          className="text-2xl text-[#595959] mx-auto flex max-[768px]:text-base"
        >
          Brochure
        </button>
      </div>

      {/* IMPORTANT: Keep this mounted at all times */}
      <div id="recaptcha-container" ref={recaptchaRef} />

      {/* Form Modal */}
      {activeForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#fef9f3] shadow-lg rounded-lg w-[90%] py-4">
            <button
              type="button"
              onClick={closeForm}
              className="text-gray-500 hover:text-gray-700 text-4xl ml-4 leading-none"
            >
              ×
            </button>

            <div className="flex items-center text-[#d7b18d]">
              <div className="w-1/2">
                <form className="px-16 enquiry-form" onSubmit={handleSubmit}>
                  <small className="text-sm">
                    Fill out the form below to get exclusive
                    <br />
                    updates and be the first to know about offers
                    <br />
                    and availability at YUU by Nahar.
                  </small>

                  <div className="flex justify-between gap-x-6 mt-6">
                    <input
                      type="text"
                      placeholder="NAME"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="text-xl w-full placeholder-[#d7b18d] rounded-full bg-transparent border border-[#513335] px-4 py-3"
                    />
                    <input
                      type="text"
                      placeholder="OCCUPATION"
                      value={occupation}
                      onChange={(e) => setOccupation(e.target.value)}
                      className="text-xl w-full placeholder-[#d7b18d] rounded-full bg-transparent border border-[#513335] px-4 py-3"
                    />
                  </div>

                  <div className="flex justify-between gap-x-6 mt-6">
                    <input
                      type="text"
                      placeholder="PHONE NUMBER (include country code or 10 digits)"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="text-xl w-full placeholder-[#d7b18d] rounded-full bg-transparent border border-[#513335] px-4 py-3"
                    />
                    <input
                      type="email"
                      placeholder="EMAIL"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="text-xl w-full placeholder-[#d7b18d] rounded-full bg-transparent border border-[#513335] px-4 py-3"
                    />
                  </div>

                  <select
                    className="text-xl w-[55%] mt-6 rounded-full bg-transparent border border-[#513335] px-4 py-3"
                    value={interestedIn}
                    onChange={(e) => setInterestedIn(e.target.value)}
                  >
                    <option value="" disabled>
                      INTERESTED IN
                    </option>
                    <option value="studio">Studio Apartments</option>
                    <option value="retail">Retail Showrooms</option>
                    <option value="restaurant">Restaurant Space</option>
                  </select>

                  <textarea
                    placeholder="MESSAGE (OPTIONAL)"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="text-xl w-full placeholder-[#d7b18d] mt-6 rounded-2xl bg-transparent border border-[#513335] px-4 py-3"
                  />

                  {/* Auth/Submit area — forces OTP each time */}
                  {!user ? (
                    <div className="mt-6">
                      {!isOTPSent ? (
                        <button
                          type="button"
                          onClick={sendOTP}
                          className="rounded-full bg-[#d06d52] text-[#fef9f3] px-5 py-3 w-1/3 text-xl disabled:opacity-60"
                          disabled={loading || !phone}
                        >
                          {loading ? "Sending OTP..." : "Send OTP"}
                        </button>
                      ) : (
                        <div className="flex items-center gap-4">
                          <input
                            type="text"
                            placeholder="Enter OTP"
                            value={verificationCode}
                            onChange={(e) => setVerificationCode(e.target.value)}
                            className="text-xl w-[40%] placeholder-[#d7b18d] rounded-full bg-transparent border border-[#513335] px-4 py-3"
                          />
                          <button
                            type="button"
                            onClick={verifyOTP}
                            className="rounded-full bg-[#d06d52] text-[#fef9f3] px-5 py-3 text-xl disabled:opacity-60"
                            disabled={loading || !verificationCode}
                          >
                            {loading ? "Verifying..." : "Verify OTP"}
                          </button>
                        </div>
                      )}

                      <small className="block mt-2 text-[#513335]">
                        Verify your phone number to enable submission.
                      </small>
                    </div>
                  ) : (
                    <button
                      className="rounded-full bg-[#d06d52] text-[#fef9f3] px-5 py-3 w-1/3 mt-6 text-xl"
                      type="submit"
                    >
                      SUBMIT
                    </button>
                  )}
                </form>

                <small className="text-xs block mt-6 ml-16">
                  By submitting this form, you agree to receive updates and
                  <br />
                  communications from YUU by Nahar
                </small>
              </div>

              <img className="w-1/2" src="/images/Form-Img.png" alt="Form visual" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tablet;
