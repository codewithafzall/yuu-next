import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAySIVMOzfjZV7sx-k0v0SIRsQ0waegDqs",
  authDomain: "yuubynahar-9e090.firebaseapp.com",
  projectId: "yuubynahar-9e090",
  storageBucket: "yuubynahar-9e090.firebasestorage.app",
  messagingSenderId: "573212874650",
  appId: "1:573212874650:web:fe6f5d41ec3e27d22c0c23"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const formConfig = {
  callback: {
    label: "Preferred Callback Time",
    options: ["Morning", "Afternoon", "Evening"],
  },
  visit: {
    label: "Preferred Visit Slot",
    options: ["9:00 AM - 11:00 AM", "12:00 PM - 2:00 PM", "3:00 PM - 5:00 PM"],
  },
  brochure: {
    label: "Brochure Format",
    options: ["PDF", "Physical Copy"],
  },
};

const Tablet = () => {
  const [activeForm, setActiveForm] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState(""); // User's phone number or OTP input
  const [verificationCode, setVerificationCode] = useState(""); // OTP code
  const [isOTPSent, setIsOTPSent] = useState(false); // Flag to check if OTP is sent
  const [recaptchaVerifier, setRecaptchaVerifier] = useState(null); // Store reCAPTCHA instance

  // Initialize reCAPTCHA only when phone number form is shown
  useEffect(() => {
    if (activeForm === "callback" && !recaptchaVerifier) {
      const recaptchaVerifierInstance = new firebase.auth.RecaptchaVerifier(
        "recaptcha-container", // This is the id of the element that will hold reCAPTCHA
        {
          size: "invisible", // Invisible reCAPTCHA
          callback: (response) => {
            console.log("reCAPTCHA verified:", response); // reCAPTCHA callback
          },
        }
      );

      // Set the reCAPTCHA instance to state
      setRecaptchaVerifier(recaptchaVerifierInstance);

      // Render reCAPTCHA inside the modal
      recaptchaVerifierInstance.render().then((widgetId) => {
        window.recaptchaWidgetId = widgetId;
      });
    }
  }, [activeForm, recaptchaVerifier]);

  const openForm = (type) => {
    setActiveForm(type);
    console.log(`Form Opened: ${type}`); // Debugging statement
  };

  const closeForm = () => setActiveForm(null);

  const handlePhoneAuth = () => {
    setLoading(true);

    // Reset reCAPTCHA verifier for each OTP request
    const appVerifier = recaptchaVerifier;
    const phoneNumber = `+${phone}`; // Include country code, e.g., +91 for India

    // Ensure reCAPTCHA is reinitialized before each OTP request
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult; // Store confirmationResult for OTP verification
        setIsOTPSent(true);
        setLoading(false);
        console.log("OTP sent to phone number:", phoneNumber);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error during OTP sending:", error);
        alert(error.message);
      });
  };

  const verifyOTP = () => {
    const confirmationResult = window.confirmationResult;

    confirmationResult
      .confirm(verificationCode)
      .then((result) => {
        setUser(result.user);
        console.log("User verified:", result.user); // Debugging statement
      })
      .catch((error) => {
        alert("Invalid OTP. Please try again.");
        console.error("Error during OTP verification:", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted ${activeForm} form`);
    closeForm();
  };

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

      {/* OTP Verification */}
      <div id="recaptcha-container"></div>

      {activeForm && !user && (
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
              <div>
                <input
                  type="text"
                  placeholder={isOTPSent ? "Enter OTP" : "Enter Phone Number"}
                  value={isOTPSent ? verificationCode : phone}
                  onChange={(e) =>
                    isOTPSent
                      ? setVerificationCode(e.target.value)
                      : setPhone(e.target.value)
                  }
                  className="text-xl w-full placeholder-[#d7b18d] rounded-full bg-transparent border border-[#513335] px-4 py-3"
                />
                <button
                  onClick={isOTPSent ? verifyOTP : handlePhoneAuth}
                  className="bg-blue-500 text-white rounded-full py-3 px-6 mt-4"
                  disabled={loading}
                >
                  {loading ? (isOTPSent ? "Verifying..." : "Sending...") : isOTPSent ? "Verify OTP" : "Send OTP"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Form */}
      {user && activeForm && (
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
                      className="text-xl w-full placeholder-[#d7b18d] rounded-full bg-transparent border border-[#513335] px-4 py-3"
                    />
                    <input
                      type="text"
                      placeholder="OCCUPATION"
                      className="text-xl w-full placeholder-[#d7b18d] rounded-full bg-transparent border border-[#513335] px-4 py-3"
                    />
                  </div>
                  <div className="flex justify-between gap-x-6 mt-6">
                    <input
                      type="text"
                      placeholder="PHONE NUMBER"
                      className="text-xl w-full placeholder-[#d7b18d] rounded-full bg-transparent border border-[#513335] px-4 py-3"
                    />
                    <input
                      type="email"
                      placeholder="EMAIL"
                      className="text-xl w-full placeholder-[#d7b18d] rounded-full bg-transparent border border-[#513335] px-4 py-3"
                    />
                  </div>
                  <select className="text-xl w-[55%] mt-6 rounded-full bg-transparent border border-[#513335] px-4 py-3">
                    <option value="" disabled selected>
                      INTERESTED IN
                    </option>
                    <option value="studio">Studio Apartments</option>
                    <option value="retail">Retail Showrooms</option>
                    <option value="restaurant">Restaurant Space</option>
                  </select>

                  <textarea
                    placeholder="MESSAGE (OPTIONAL)"
                    className="text-xl w-full placeholder-[#d7b18d] mt-6 rounded-2xl bg-transparent border border-[#513335] px-4 py-3"
                  />
                  <button
                    className="rounded-full bg-[#d06d52] text-[#fef9f3] px-5 py-3 w-1/3 mt-6 text-xl"
                    type="submit"
                  >
                    SUBMIT
                  </button>
                </form>
                <small className="text-xs block mt-6 ml-16">
                  By submitting this form, you agree to receive updates and
                  <br />
                  communications from YUU by Nahar
                </small>
              </div>
              <img className="w-1/2" src="/images/Form-Img.png" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tablet;
