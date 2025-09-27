"use client";

import { useState } from "react";

const ImageReveal = () => {
  const [mode, setMode] = useState("day"); // "day" or "night"

  const toggleMode = () => {
    setMode((prev) => (prev === "day" ? "night" : "day"));
  };

  return (
    <section>
      <div className="relative w-[95%] desktop:w-full desktop:max-w-5xl mx-auto overflow-hidden select-none mt-8 desktop:mt-16 mb-8 rounded-3xl">
        {/* Background image */}
        <img
          src={mode === "day" ? "/images/Day.webp" : "/images/Night.webp"}
          alt={mode === "day" ? "Day view" : "Night view"}
          className="w-full h-auto block transition-all duration-700"
        />

        {/* Toggle button */}
        <button
          onClick={toggleMode}
          className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-md hover:bg-white transition"
        >
          {mode === "day" ? (
            <>
              <img
                src="/images/moon.png"
                alt="Switch to Night"
                className="w-5 h-5 object-contain"
              />
              <span className="text-gray-800 font-medium">Night</span>
            </>
          ) : (
            <>
              <img
                src="/images/sun.png"
                alt="Switch to Day"
                className="w-5 h-5 object-contain"
              />
              <span className="text-gray-800 font-medium">Day</span>
            </>
          )}
        </button>
      </div>

      <h3 className="text-center mt-8 mb-8 desktop:mb-16 max-[768px]:text-2xl">
        TAP TO SWITCH BETWEEN DAY & NIGHT
      </h3>
    </section>
  );
};

export default ImageReveal;
