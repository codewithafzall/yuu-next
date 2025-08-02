import React from "react";

const Tablet = () => {
  return (
    <div
      className="absolute left-1/2 transform -translate-x-1/2 w-[60%] py-7 shadow-2xl rounded-full bg-[#f7f6f2] flex justify-between items-center mx-auto"
    > 
      <button className="text-2xl text-[#595959] mx-auto flex max-[768px]:text-base">
        Request Callback
      </button>
      <div className="w-[2px] h-12 bg-[#d16f52] max-[768px]:h-8"></div>
      <button className="text-2xl text-[#595959] mx-auto flex max-[768px]:text-base">
        Schedule Visit
      </button>
      <div className="w-[2px] h-12 bg-[#d16f52] max-[768px]:h-8"></div>
      <button className="text-2xl text-[#595959] mx-auto flex max-[768px]:text-base">
        Brochure
      </button>
    </div>
  );
};

export default Tablet;
