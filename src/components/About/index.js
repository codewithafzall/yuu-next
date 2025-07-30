import React, { useState, useEffect } from "react";

const heroImages = [
  "/images/about-bg.png",
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

const AboutSection = () => (
  <section className="relative pb-20 w-full bg-[#fdf7f0] flex flex-row max-[768px]:flex-col items-center justify-between px-4 max-[768px]:px-6 pt-32 max-[768px]:pt-10 max-[768px]:pb-[200px] overflow-visible">
    {/* Text Content */}
    <div className="w-1/2 max-[768px]:w-full z-20">
      <div className="border-l-4 border-[#a97c6d] pl-8 max-[768px]:pl-4">
        <h2
          className="text-[#7a4c3b] text-3xl max-[768px]:text-2xl font-semibold mb-4"
          style={{ fontFamily: "Montserrat, sans-serif", letterSpacing: "1px" }}
        >
          A LIFESTYLE CRAFTED AROUND YUU
        </h2>
        <p
          className="text-[#513335] text-base max-[768px]:text-sm mb-4"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          "Yuu" by Nahar is not just a name; it's a philosophy that places you
          at the heart of every experience. The name "Yuu" is a thoughtful blend
          of the word "you" and the Japanese character for "悠", which means
          "leisurely" or "relaxed." At YUU by Nahar, we believe that the essence
          of great living lies in balance—where modern convenience meets
          thoughtful design. Drawing inspiration from the Japanese philosophy of
          Wabi-Sabi, we embrace the beauty of simplicity, functionality, and
          finding elegance in imperfection.
        </p>
        <p
          className="text-[#513335] text-base max-[768px]:text-sm"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Inspired by the dynamic studio living culture of New York and Dubai,
          YUU introduces a fresh perspective to Mumbai’s real estate
          landscape—one that redefines space, structure, and seamless living.
          With fully furnished studio apartments, high-street retail, and a
          vibrant community hub, YUU fills the gap in today’s urban lifestyle,
          offering an organized retail and living experience unlike any other.
        </p>
      </div>
    </div>
    {/* Illustration */}
    <div className="w-1/2 max-[768px]:w-full flex justify-end max-[768px]:justify-center relative  max-[768px]:mt-10">
      <div className="w-[500px] max-w-[600px] max-[768px]:w-[80vw] max-[768px]:max-w-[400px] relative z-10 -mt-32 max-[768px]:-mt-0">
        <img
          src="/images/about1.png"
          alt="Lifestyle Illustration"
          className="w-full h-auto rounded-t-full shadow-lg border-4 border-[#fdf7f0]"
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  </section>
);

const VisionarySection = () => (
  <>
    <section className="relative w-full bg-[#e0d1b6] flex flex-row max-[768px]:flex-col items-center justify-between px-4 max-[768px]:px-6  max-[768px]:pt-10 pb-10 overflow-visible mt-0">
      {/* Image */}
      <div className="w-2/5 max-[768px]:w-full flex justify-end max-[768px]:justify-center relative max-[768px]:mt-10">
        <div className="w-[400px] max-w-[500px] max-[768px]:w-[90vw] max-[768px]:max-w-[350px] relative bottom-[60px] max-[768px]:bottom-[150px] z-10  max-[768px]:-mt-0">
          <img
            src="/images/about2.png"
            alt="Visionary Section"
            className="w-full h-auto rounded-3xl shadow-lg border-4 border-[#f6f2e7] object-cover"
          />
        </div>
      </div>
      {/* Text Content */}
      <div className="w-1/2 max-[768px]:w-full z-20 flex flex-col justify-center">
        <div className="max-w-xl">
          <h2
            className="text-[#7a4c3b] text-2xl max-[768px]:text-xl font-semibold mb-2"
            style={{
              fontFamily: "Montserrat, sans-serif",
              letterSpacing: "1px",
            }}
          >
            FROM THE VISIONARIES OF YUU
          </h2>
          <h3
            className="text-[#7a4c3b] text-xl max-[768px]:text-lg font-semibold mb-4"
            style={{
              fontFamily: "Montserrat, sans-serif",
              letterSpacing: "1px",
            }}
          >
            AJAY NAHAR – THE MIND BEHIND YUU BY NAHAR
          </h3>
          <p
            className="text-[#513335] text-base text-sm mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            A visionary leader and a pioneer in redefining Mumbai’s skyline,
            Ajay Nahar, MD of Nahar Group, has always believed in creating
            spaces that enhance the way people live, work, and interact.
          </p>
          <p
            className="text-[#513335] text-base text-sm"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            With a portfolio of award-winning developments such as for luxury
            real estate, theme-based residential, tower, modern healthcare
            infrastructure, Asia’s 1st International School and philanthropic
            developments for the Jain community as he continues to push
            boundaries in real estate innovation.
          </p>
          <p
            className="text-[#513335] text-base text-sm"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            With YUU by Nahar, his vision is to introduce a dynamic and
            immersive lifestyle hub—one that blends urban convenience with
            timeless elegance, setting a new benchmark for Mumbai’s modern
            living experience.
          </p>
        </div>
      </div>
    </section>

    {/* Our Vision section */}
    <section className="relative w-full bg-[#e0d1b6] flex flex-row max-[768px]:flex-col items-center justify-between px-10 max-[768px]:px-6 py-20 max-[768px]:pt-10 max-[768px]:pb-10 overflow-visible mt-0">
      {/* Text Content */}
      <div className="w-1/2 max-[768px]:w-full z-20 flex flex-col justify-center">
        <div className="max-w-xl">
          <h2
            className="text-[#222] text-2xl max-[768px]:text-xl font-semibold mb-2"
            style={{
              fontFamily: "Montserrat, sans-serif",
              letterSpacing: "1px",
            }}
          >
            OUR VISION
          </h2>
          <p
            className="text-[#222] text-base max-[768px]:text-sm mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi. lorem ipsum dolor sit amet, cons ectetuer adipiscing
            elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
            magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
            nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip
            ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed diam
          </p>
        </div>
      </div>
      {/* Image */}
      <div className="w-1/2 max-[768px]:w-full flex justify-end max-[768px]:justify-center relative max-[768px]:mt-10">
        <div className="w-[500px] max-w-[600px] max-[768px]:w-[90vw] max-[768px]:max-w-[350px] relative z-10">
          <img
            src="/images/about3.png"
            alt="Our Vision"
            className="w-full h-auto rounded-3xl shadow-lg border-4 border-[#e0d1b6] object-cover"
          />
        </div>
      </div>
    </section>

    {/* Our Mission section */}
    <section className="relative w-full bg-[#e0d1b6] flex flex-row max-[768px]:flex-col items-center justify-between px-10 max-[768px]:px-6 py-20 max-[768px]:pt-10 max-[768px]:pb-10 overflow-visible mt-0">
       {/* Image */}
       <div className="w-fullmax-[768px]:w-full flex justify-end max-[768px]:justify-center relative max-[768px]:mt-10">
        <div className="w-[500px] max-w-[600px] max-[768px]:w-[90vw] max-[768px]:max-w-[350px] relative z-10">
          <img
            src="/images/about4.png"
            alt="Our Vision"
            className="w-full h-auto rounded-3xl shadow-lg border-4 border-[#e0d1b6] object-cover"
          />
        </div>
      </div>
      {/* Text Content */}
      <div className="w-1/2 max-[768px]:w-full z-20 flex flex-col justify-center">
        <div className="max-w-xl">
          <h2
            className="text-[#222] text-2xl max-[768px]:text-xl font-semibold mb-2"
            style={{
              fontFamily: "Montserrat, sans-serif",
              letterSpacing: "1px",
            }}
          >
            OUR MISSION
          </h2>
          <p
            className="text-[#222] text-base max-[768px]:text-sm mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi. lorem ipsum dolor sit amet, cons ectetuer adipiscing
            elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
            magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
            nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip
            ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed diam
          </p>
        </div>
      </div>
    </section>
  </>
);

const AwardsSection = () => (
  <section className="w-full bg-[#bba24c] py-20 px-4 flex flex-col items-center justify-center">
    <h2 className="text-white text-3xl max-[768px]:text-2xl font-semibold text-center mb-4 tracking-wider" style={{fontFamily: 'Montserrat, sans-serif'}}>AWARDS & ACCOMPLISHMENTS</h2>
    <p className="text-white text-center max-w-3xl mx-auto mb-12 text-base max-[768px]:text-sm" style={{fontFamily: 'Montserrat, sans-serif'}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit
    </p>
    <div className="w-full max-w-6xl flex flex-row max-[1024px]:flex-col gap-8 items-stretch justify-center mx-auto">
      {[1,2,3].map((i) => (
        <div key={i} className="flex-1 bg-[#c7b46a] rounded-2xl flex flex-col items-center justify-center p-8 max-[1024px]:w-full max-[768px]:p-6 mb-0">
          {/* SVG Icon */}
          <div className="mb-6">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 6C20 6 22.5 13.5 30 13.5C37.5 13.5 35 21 35 21C35 21 37.5 28.5 30 28.5C22.5 28.5 20 36 20 36C20 36 17.5 28.5 10 28.5C2.5 28.5 5 21 5 21C5 21 2.5 13.5 10 13.5C17.5 13.5 20 6 20 6Z" stroke="#fff7c2" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          <p className="text-white text-center text-base max-[768px]:text-sm" style={{fontFamily: 'Montserrat, sans-serif'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
          </p>
        </div>
      ))}
    </div>
  </section>
);

const About = () => {
  return (
    <>
      <HeroCarousel />
      <AboutSection />
      <VisionarySection />
      <AwardsSection />
    </>
  );
};

export default About;
