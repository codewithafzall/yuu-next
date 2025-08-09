import React from "react";

const HeroCarousel = () => {
  return (
    <div
      className="relative w-full h-[100vh] md:h-[80vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(/images/location-banner.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-20 z-10" />

      {/* Main content container */}
      <div className="relative z-20 text-center px-4 max-[768px]:px-6 w-full max-w-6xl mt-[200px]">
        {/* Main title */}
        <h1
          className="text-white  mb-4 max-[768px]:text-3xl"
          style={{ letterSpacing: "3px" }}
        >
          YUU BELONG HERE
        </h1>

        {/* Subtitle */}
        <p
          className="text-white mb-8 max-[768px]:text-base"
          style={{ letterSpacing: "1px" }}
        >
          Right Where Calm Meets Connection
        </p>

        {/* Description box */}
        <div className="max-w-2xl mt-[150px] mx-auto">
          <div className="bg-transparent text-center border border-white border-opacity-30 rounded-full p-6 md:p-8 max-[768px]:p-4">
            <p className="text-white leading-relaxed max-[768px]:text-[10px]">
              At YUU, location goes beyond coordinates. It's that quiet sense of
              arriving home. Tucked into the evolving heart of Chandivali, YUU
              is placed just right, close to the action, but far enough to let
              you breathe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const LocationAbout = () => (
  <section className="relative w-full bg-[#eee9d6] flex flex-row max-[768px]:flex-col items-center justify-between px-8 max-[768px]:px-6 py-16 max-[768px]:py-10">
    {/* Text Content - Left Side */}
    <div className="w-1/2 max-[768px]:w-full z-20 pr-8 max-[768px]:pr-0 max-[768px]:mb-8">
      <div className="max-w-lg relative left-[20%] max-[768px]:left-[0%]">
        {/* Main Heading */}
        <h2
          className="mb-6"
        >
          EVERYTHING YOU NEED,
          JUST AROUND YUU
        </h2>

        {/* First Paragraph */}
        <p
          className="max-[768px]:text-sm mb-6"
        >
          Life flows easily here, whether it's a quick coffee
          <br />
          run, your morning commute, or a weekend
          <br />
          stroll. YUU keeps you close to what matters, so you
          <br />
          can spend less time traveling and more time
          <br />
          living.
        </p>

        {/* Second Paragraph */}
        <p
          className="max-[768px]:text-sm"
        >
          You're a short drive from Powai, Andheri, BKC and
          <br />
          Mumbai's busiest hubs, but once you're home, the
          <br />
          city slows down just for YUU.
        </p>
      </div>
    </div>

    {/* 3D Architectural Rendering - Right Side */}
    <div className="w-1/2 max-[768px]:w-full flex justify-center max-[768px]:justify-center ">
      <div className=" max-[768px]:w-[90vw] max-[768px]:max-w-[500px] relative">
        {/* Organic rounded shape container */}
        <div className="">
          <img
            src="/images/location-about.png"
            alt="3D Architectural Rendering of YUU Buildings"
            className="relative left-[30px] max-[768px]:left-[20px]"
          />
        </div>
      </div>
    </div>
  </section>
);

const DistanceMap = () => (
  <section className="relative w-[100%] h-[100vh] max-[768px]:h-[60vh]">
    {/* Background Image */}
    <div
      className="  w-full h-[100vh]"
      style={{
        backgroundImage: `url(/images/distance-about.png)`,
        backgroundSize: "cover",
        // backgroundPosition: "center",
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-10" />
    </div>

    {/* Proximity Markers */}

    {/* Walking Distance Amenities - Left Side */}
    <div className="absolute left-8 bottom-20 max-[768px]:left-4 max-[768px]:bottom-16 z-20">
      <div className="p-4 max-[768px]:p-3 shadow-lg">
        <h3 className="text-[#fff] text-[25px] max-[768px]:text-base mb-3">
          WALKING DISTANCE FROM
        </h3>
        <div className="space-y-2">
          <div
            className="p-3 text-white rounded-full bg-transparent border border-white mt-5"
            style={{ marginBottom: "30px" }}
          >
            <p className="text-[#fff] text-center text-sm max-[768px]:text-xs font-semibold">
              Nahar International<br/> School
            </p>
          </div>
          <div
            className="p-3 text-white rounded-full bg-transparent border border-white"
            style={{ marginBottom: "30px" }}
          >
            <p className="text-[#fff] text-center text-sm max-[768px]:text-xs font-semibold">
              Nahar Medical<br/> Centre
            </p>
          </div>
          <div className="p-3 text-white rounded-full bg-transparent border border-white">
            <p className="text-[#fff] text-center text-sm max-[768px]:text-xs font-semibold">
              Nahar Business<br/> Centre
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ConnectYou = () => {
  return (
    <>
      <section className="relative w-full bg-[#eee9d6] flex flex-row max-[768px]:flex-col items-center py-4 px-4 max-[768px]:px-6  max-[768px]:pt-10 pb-10 overflow-visible mt-0">
        {/* Text Content */}
        <div className="w-1/2 max-[768px]:w-full z-20 flex  justify-center">
          <div className="max-w-xl">
            <h1
              className=" mb-6"
            >
              Part of a Thoughtfully
              <br />
              Built Community
            </h1>
            <p className="mb-4">
              YUU is part of a larger story, the one<br/> that the Nahar Group has
              been<br/> shaping for years in Chandivali. Here,<br/> you’re surrounded by
              everything that<br/> makes daily life smoother, warmer,<br/> and more
              balanced.
            </p>
          </div>
        </div>
        {/* Image */}
        <div className="w-2/5 max-[768px]:w-full flex justify-end max-[768px]:justify-center relative max-[768px]:mt-10">
          <div className="w-[400px] max-w-[500px] max-[768px]:w-[90vw] max-[768px]:max-w-[350px] relative bottom-[60px] max-[768px]:pt-5 z-10  max-[768px]:-mt-0">
            <img
              src="/images/location-map.png"
              alt="Map Section"
              className="w-full h-auto shadow-lg rounded-t-full border-4 border-[#f6f2e7] object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

const YuuBelongs = () => {
  return (
    <>
      <section className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <img
          src="/images/location-2.png"
          alt="location-image"
          className="relative w-full h-[70vh] md:h-[80vh]"
        />
      </section>
    </>
  );
};

const Location = () => {
  return (
    <>
      <HeroCarousel />
      <LocationAbout />
      <DistanceMap />
      <ConnectYou />
      <YuuBelongs />
    </>
  );
};

export default Location;
