import React from "react";

const index = () => {
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
          <div className="relative -top-[70px] flex flex-col desktop:flex-row justify-between">
            <div className="bg-[#fcf9f2] shadow-lg shadow-white w-[300px] rounded-full py-5 flex flex-col items-center justify-center">
              <img src="/images/call.png" />
              <h3 className="border-b-4 mt-2 border-[#d06d52] pb-1">PHONE</h3>
              <p className="mt-2 font-bold">+91 97694 46633</p>
            </div>
            <div className="bg-[#fcf9f2] shadow-lg shadow-white w-[300px] rounded-full py-5 flex flex-col items-center justify-center">
              <img src="/images/email.png" />
              <h3 className="border-b-4 mt-2 border-[#d06d52] pb-1">EMAIL</h3>
              <p className="mt-2 font-bold">sales@yuubynahar.in</p>
            </div>
            <div className="bg-[#fcf9f2] shadow-lg shadow-white w-[300px] rounded-full py-5 flex flex-col items-center justify-center">
              <img src="/images/location.png" />
              <h3 className="border-b-4 mt-2 border-[#d06d52] pb-1">
                SALES OFFICE
              </h3>
              <small className="mt-2 font-bold text-xs">
                {" "}
                NAS, Chandivali, Andheri East,
                <br />
                Mumbai – 400072
              </small>
            </div>
          </div>
          <div className="flex flex-col desktop:flex-row justify-between pb-5 desktop:pb-10">
            <div className="bg-[#fcf9f2] flex flex-col justify-center items-center rounded-full width-[300px] desktop:w-[650px] drop-shadow-xl h-56">
              <h3>Life at YUU goes beyond four walls</h3>
              <p className="mt-4">Discover how we’re building stories</p>
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
            <form className="w-1/2 enquiry-form">
              <div className="flex justify-between gap-x-3 mt-3 desktop:gap-x-6 desktop:mt-6">
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="NAME"
                    className="text-xl w-full placeholder-[#000] shadow-lg shadow-white rounded-full bg-[#f7f4ed] py-2 px-4 desktop:py-3"
                  />
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="OCCUPATION"
                    className="text-xl w-full placeholder-[#000] shadow-lg shadow-white rounded-full bg-[#f7f4ed] py-2 px-4 desktop:py-3"
                  />
                </div>
              </div>

              <div className="flex justify-between gap-x-6 mt-6">
                <div className="w-full">
                  <input
                    type="tel"
                    placeholder="PHONE NUMBER"
                    className="text-xl w-full placeholder-[#000] shadow-lg shadow-white rounded-full bg-[#f7f4ed] py-2 px-4 desktop:py-3"
                  />
                </div>
                <div className="w-full">
                  <input
                    type="email"
                    placeholder="EMAIL"
                    className="text-xl w-full placeholder-[#000] shadow-lg shadow-white rounded-full bg-[#f7f4ed] py-2 px-4 desktop:py-3"
                  />
                </div>
              </div>

              <div className="mt-6 w-[55%]">
                <select className="text-xl w-full placeholder-[#000] shadow-lg shadow-white rounded-full bg-[#f7f4ed] py-2 px-4 desktop:py-3">
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
                  className="text-xl w-full placeholder-[#000] rounded-2xl shadow-white bg-[#f7f4ed] py-2 px-4 desktop:py-3"
                />
              </div>
              <div className="flex items-center gap-x-5 mt-6">
                <button
                  className="rounded-full bg-[#000] bg-opacity-25 shadow-sm shadow-black px-4 py-2 text-lg"
                  type="submit"
                >
                  <h3 className="text-2xl text-[#000]">SUBMIT</h3>
                </button>
                <small className="font-thin">
                  Our team typically responds within 24 hours
                </small>
              </div>
            </form>
            <img
              className="absolute top-[35%] right-0"
              src="/images/phone-hand.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
