import React, { useState } from "react";

const index = () => {
  const [form, setForm] = useState({
    name: "",
    occupation: "",
    phone: "",
    email: "",
    interestedIn: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const updateField = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // minimal client validation
    if (!form.name || !form.phone || !form.email || !form.interestedIn) {
      alert("Please fill required fields: Name, Phone, Email, Interested In.");
      return;
    }

    setLoading(true);
    try {
      const body = new FormData();
      body.append("formType", "contact");
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
      if (!data.ok) throw new Error(data.error || "Unknown error");

      // reset form
      setForm({
        name: "",
        occupation: "",
        phone: "",
        email: "",
        interestedIn: "",
        message: "",
      });
      alert("Thanks! Your details have been submitted.");
    } catch (err) {
      console.error("Submit failed:", err);
      alert(err.message || "Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <img
        className="w-full h-screen hidden desktop:block"
        src="/images/contact-banner.png"
      />
      <img
        className="w-full h-screen block desktop:hidden"
        src="/images/contact-mobile-banner.png"
      />

      <div className="bg-[#f7f4ed]">
        <div className="w-full desktop:w-[75%] mx-auto relative">
          <div className="relative -top-[70px] flex flex-col desktop:flex-row justify-between max-[768px]:ml-[43px]">
            <div className="bg-[#fcf9f2] shadow-lg shadow-white w-[300px] rounded-full py-5 flex flex-col items-center justify-center max-[768px]:mb-8">
              <img src="/images/call.png" />
              <h3 className="border-b-4 mt-2 border-[#d06d52] pb-1 text-[30px]">PHONE</h3>
              <p className="mt-2 font-bold">+91 97694 46633</p>
            </div>
            <div className="bg-[#fcf9f2] shadow-lg shadow-white w-[300px] rounded-full py-5 flex flex-col items-center justify-center max-[768px]:mb-8">
              <img src="/images/email.png" />
              <h3 className="border-b-4 mt-2 border-[#d06d52] pb-1 text-[30px]">EMAIL</h3>
              <p className="mt-2 font-bold">sales@yuubynahar.in</p>
            </div>
            <div className="bg-[#fcf9f2] shadow-lg shadow-white w-[300px] rounded-full py-5 flex flex-col items-center justify-center max-[768px]:mb-8">
              <img src="/images/location.png" />
              <h3 className="border-b-4 mt-2 border-[#d06d52] pb-1 text-[30px]">
                SALES OFFICE
              </h3>
              <p className="mt-2 font-bold text-[14px]">
                {" "}
                NAS, Chandivali, Andheri East,
                <br />
                Mumbai – 400072
              </p>
            </div>
          </div>
          <div className="flex flex-col desktop:flex-row justify-between pb-5 desktop:pb-10">
            <div className="bg-[#fcf9f2] flex flex-col justify-center items-center rounded-full width-[300px] desktop:w-[650px] drop-shadow-xl h-56 max-[768px]:mb-8">
              <h3 className="max-[768px]:text-[25px]">Life at YUU goes beyond four walls</h3>
              <p className="mt-4 max-[768px]:text-[15px]">Discover how we’re building stories</p>
              <img className="mt-4" src="/images/sm.png" />
            </div>
            <img
              className="absolute right-0 z-50 hidden desktop:block"
              src="/images/contact-map.png"
            />
            <img
              className="mx-4 desktop:hidden"
              src="/images/contact-map.png"
            />
          </div>
        </div>
        <div className="bg-[#fcf9f2] relative w-full py-10">
          <div className="w-[75%] mx-auto">
            <form className="w-1/2 enquiry-form max-[768px]:w-full" onSubmit={handleSubmit} noValidate>
              <div className="flex justify-between gap-x-3 mt-3 desktop:gap-x-6 desktop:mt-6">
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="NAME"
                    value={form.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    className="text-xl w-full placeholder-[#000] shadow-lg shadow-white rounded-full bg-[#f7f4ed] py-2 px-4 desktop:py-3"
                  />
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="OCCUPATION"
                    value={form.occupation}
                    onChange={(e) => updateField("occupation", e.target.value)}
                    className="text-xl w-full placeholder-[#000] shadow-lg shadow-white rounded-full bg-[#f7f4ed] py-2 px-4 desktop:py-3"
                  />
                </div>
              </div>

              <div className="flex justify-between gap-x-6 mt-6">
                <div className="w-full">
                  <input
                    type="tel"
                    placeholder="PHONE NUMBER"
                    value={form.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    className="text-xl w-full placeholder-[#000] shadow-lg shadow-white rounded-full bg-[#f7f4ed] py-2 px-4 desktop:py-3"
                  />
                </div>
                <div className="w-full">
                  <input
                    type="email"
                    placeholder="EMAIL"
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className="text-xl w-full placeholder-[#000] shadow-lg shadow-white rounded-full bg-[#f7f4ed] py-2 px-4 desktop:py-3"
                  />
                </div>
              </div>

              <div className="mt-6 w-[55%]">
                <select
                  className="text-xl w-full placeholder-[#000] shadow-lg shadow-white rounded-full bg-[#f7f4ed] py-2 px-4 desktop:py-3"
                  value={form.interestedIn}
                  onChange={(e) => updateField("interestedIn", e.target.value)}
                >
                  <option value="" disabled>
                    INTERESTED IN
                  </option>
                  <option value="studio apartment">Studio Apartments</option>
                  <option value="retail showroom">Retail Showrooms</option>
                  <option value="restaurant space">Restaurant Space</option>
                </select>
              </div>

              <div className="mt-6">
                <textarea
                  placeholder="MESSAGE (OPTIONAL)"
                  value={form.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  className="text-xl w-full placeholder-[#000] rounded-2xl shadow-white bg-[#f7f4ed] py-2 px-4 desktop:py-3"
                />
              </div>
              <div className="flex items-center gap-x-5 mt-6">
                <button
                  className="rounded-full bg-[#000] bg-opacity-25 shadow-sm shadow-black px-4 py-2 text-lg"
                  type="submit"
                  disabled={loading}
                >
                  <h3 className="text-2xl text-[#000]">{loading ? "Submitting..." : "SUBMIT"}</h3>
                </button>
                <small className="font-thin max-[768px]:text-[12px]">
                  Our team typically responds within 24 hours
                </small>
              </div>
            </form>
            <img
              className="absolute top-[35%] right-0 max-[768px]:hidden"
              src="/images/phone-hand.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
