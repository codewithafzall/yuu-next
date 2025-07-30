import React, { useState, useEffect } from "react";

const heroImages = [
  "/images/location-banner.png",
  "/images/Hero.png",
  "/images/Hero-2.png",
];

const heroTitles = [
  "DISCOVER THE WORLD OF YUU",
  "YUU BY NAHAR",
  "EXPERIENCE LUXURY LIVING",
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Manual pill click
  const handlePillClick = (idx) => setCurrentIndex(idx);

  return (
    <div
      className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroImages[currentIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-orange-50 bg-opacity-25 z-10" />
      {/* Title */}
      <h1
        className="z-20 text-white text-3xl md:text-5xl font-bold text-center w-full px-4"
        style={{ letterSpacing: "2px" }}
      >
        {heroTitles[currentIndex]}
      </h1>
      {/* Pills */}
      <div className="absolute left-6 bottom-6 flex gap-2 z-20">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            className={`w-6 h-2 rounded-full transition-all duration-300 border border-white ${
              currentIndex === idx ? "bg-white" : "bg-transparent"
            }`}
            onClick={() => handlePillClick(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const LocationAbout = () => (
  <section className="relative pb-20 w-full bg-[#fdf7f0] flex flex-row max-[768px]:flex-col items-center justify-between px-4 max-[768px]:px-6 pt-52 max-[768px]:pt-10 max-[768px]:pb-[200px] overflow-visible">
    {/* Illustration */}
    <div className="w-2/5 max-[768px]:w-full flex justify-end max-[768px]:justify-center relative  max-[768px]:mt-10">
      <div className="w-[500px] max-w-[600px] max-[768px]:w-[80vw] max-[768px]:max-w-[400px] relative z-10 -mt-32 max-[768px]:-mt-0">
        <img
          src="/images/location-1.png"
          alt="Location Illustration"
          className="w-full h-auto rounded-3xl shadow-lg border-4 border-[#f6f2e7] object-cover"
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
    {/* Text Content */}
    <div className="w-1/2 max-[768px]:w-full z-20">
      <div className="border-r-4 border-[#a97c6d] pl-8 max-[768px]:pl-4">
        <h2
          className="text-[#7a4c3b] text-3xl max-[768px]:text-2xl font-semibold mb-4"
          style={{ fontFamily: "Montserrat, sans-serif", letterSpacing: "1px" }}
        >
          YUU BELONGS HERE, IN THE HEART <br />
          OF CONNECTION AND CALM
        </h2>
        <p
          className="text-[#513335] text-sm text-justify pr-5 max-[768px]:text-sm mb-4"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          At YUU, location is more than geography , it’s a feeling of arrival.
          Tucked within the evolving landscape of Chandivali, YUU is
          strategically placed at the intersection of connectivity, community,
          and culture. A short drive from the bustle of Powai, Andheri, and BKC;
          and yet thoughtfully distanced from the noise ,this is where the city
          slows down just enough to breathe.
          <br />
          <br /> Surrounded by a thriving township ecosystem built by Nahar
          Group, and seamlessly connected to Mumbai’s most vital arteries, YUU
          is not just well-placed, it’s perfectly positioned for the modern
          urban lifestyle.
          <br />
          <br /> Whether you’re stepping out for work, a quick coffee, or a
          weekend stroll, everything you need is intuitively close. Because YUU
          isn’t just a place you live, it’s where your life flows.
        </p>
      </div>
    </div>
  </section>
);

const ConnectYou = () => {
  return (
    <>
      <section className="relative w-full bg-[#f7ce9f] flex flex-row max-[768px]:flex-col items-center  px-4 max-[768px]:px-6  max-[768px]:pt-10 pb-10 overflow-visible mt-0">
        {/* Text Content */}
        <div className="w-1/2 max-[768px]:w-full z-20 flex  justify-center">
          <div className="max-w-xl">
            <h2
              className="text-[#7a4c3b] text-2xl max-[768px]:text-xl font-semibold mb-2"
              style={{
                fontFamily: "Montserrat, sans-serif",
                letterSpacing: "1px",
              }}
            >
              WHAT YUU CONNECTS YOU TO:
            </h2>
            <ul className="text-[#513335] text-base text-sm mb-4"
              style={{ fontFamily: "Montserrat, sans-serif" }}>
                <li className="mb-4"><strong>• 5 mins to Saki Naka Metro Station</strong> <br/><span className="text-[12px] pl-3">2 km | 15 mins east</span></li>
                <li className="mb-4">• 5 mins to Powai Lake & Hiranandani Business Park</li>
                <li className="mb-4">• 5 mins to IIT and IIM Mumbai campuses</li>
                <li className="mb-4">• 20 mins to BKC, JVLR & Western Express Highway</li>
                <li className="mb-4">• Walking distance from Nahar International School, Nahar 
                Medical Centre and Nahar Business Centre</li>
                <li className="mb-4">• Surrounded by a vibrant community of professionals, 
                creatives & young families</li>
            </ul>
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

const YuuBelongs =() => {
    return(
        <>
            <section className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
                <img src="/images/location-2.png" alt="location-image" className="relative w-full h-[70vh] md:h-[80vh]"/>
            </section>
        </>
    )
}

const Location = () => {
  return (
    <>
      <HeroCarousel />
      <LocationAbout />
      <ConnectYou/>
      <YuuBelongs/>
    </>
  );
};

export default Location;
