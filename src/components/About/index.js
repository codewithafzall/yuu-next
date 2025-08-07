import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroCarousel = () => {
  return (
    <section className="relative pb-20 w-full flex items-center justify-center pt-32 bg-[#fef9f3]">
      {/* Text Content */}
      <div className="w-2/6 flex items-center">
        <div className="mx-auto">
          <h1 className="mb-4 text-start">
            Discover the
            <br />
            World of YUU
          </h1>
          <p className="text-[#7c6565] mb-4">
            Welcome to YUU by Nahar, a place
            <br /> where calm, culture, and community
            <br />
            come together. A new way to live,
            <br /> right in the heart of Chandivali
          </p>
        </div>
      </div>
      <img
        src="/images/about-bg.png"
        alt="Lifestyle Illustration"
        className="w-4/6"
      />
    </section>
  );
};

const AboutSection = () => {
  useEffect(() => {
    // Create a timeline for sequential animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-section",
        start: "top top", // Start when section is 80% in viewport
        end: "+=1500", // Extended duration for additional animation
        scrub: 1, // Smoothly tie animations to scroll
        pin: true, // Pin the section
        pinSpacing: true,
      },
    });

    // Animate h1
    tl.fromTo(
      ".about-title",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );

    const treeAndRectTl = gsap.timeline();
    treeAndRectTl
      .fromTo(
        ".about-tree",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
      )
      .fromTo(
        ".about-rect",
        { borderTopLeftRadius: "0px", borderTopRightRadius: "0px", opacity: 0 },
        {
          borderTopLeftRadius: "200px",
          borderTopRightRadius: "200px",
          opacity: 1,
          duration: 2,
          ease: "power2.out",
        },
        0 // Start at the same time as tree animation
      );

    // Add tree and rectangle animations to main timeline
    tl.add(treeAndRectTl);

    // Animate right text block (moved to second)
    tl.fromTo(
      ".about-text-one",
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
    );
    tl.fromTo(
      ".about-text-two",
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
    );
    tl.fromTo(
      ".about-text-three",
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
    );

    tl.to(".about-text-one p", {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        document.querySelector(".about-text-one").innerHTML = `
          <h3>
            At YUU Every Detail is Intentional,
          </h3>`;
      },
    }).fromTo(
      ".about-text-one h2",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );
    tl.to(".about-text-two p", {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        document.querySelector(".about-text-two").innerHTML = `
          <h3>
            Every Space is Beautiful,
          </h3>`;
      },
    }).fromTo(
      ".about-text-two h2",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );
    tl.to(".about-text-three p", {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        document.querySelector(".about-text-three").innerHTML = `
          <h3>
            and every moment is built aroud YUU
          </h3>`;
      },
    }).fromTo(
      ".about-text-three h2",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="about-section relative w-full bg-[#fdf7f0] flex flex-col items-center justify-center py-24 max-[768px]:py-10 px-4 overflow-visible">
      <img className="about-title" src="/images/Asset 29.png"/>
      {/* Main Content Row */}
      <div className="w-full flex flex-row max-[900px]:flex-col items-center justify-center gap-8 relative">
        {/* Left Text Block */}
        <div className="w-1/3 max-[900px]:w-full max-[900px]:mb-8 flex flex-col items-end max-[900px]:items-center">
          <div className="about-text-one max-w-xs text-right max-[900px]:text-center">
            <p
              className="text-[#513335] text-sm leading-relaxed"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              "Yuu" by Nahar is not just a name; it's a philosophy that places
              you at the heart of every experience. The name "Yuu" is a
              thoughtful blend of the word{" "}
              <span className="text-[#d16f52] font-semibold">"you"</span> and
              the Japanese character for{" "}
              <span className="text-[#d16f52] font-semibold">"悠"</span>, which
              means{" "}
              <span className="text-[#d16f52] font-semibold">"leisurely"</span>{" "}
              or{" "}
              <span className="text-[#d16f52] font-semibold">"relaxed."</span>
            </p>
          </div>

          <div className="about-text-three max-w-xs text-right max-[900px]:text-center mt-20">
            <p
              className="text-[#513335] text-sm leading-relaxed"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Inspired by the{" "}
              <span className="text-[#d16f52] font-semibold">
                dynamic studio living
              </span>{" "}
              culture of{" "}
              <span className="text-[#d16f52] font-semibold">New York</span> and{" "}
              <span className="text-[#d16f52] font-semibold">Dubai</span>, YUU
              introduces a fresh perspective to Mumbai’s real estate
              landscape—one that redefines{" "}
              <span className="text-[#d16f52] font-semibold">
                space, structure, and seamless living
              </span>
              .
            </p>
          </div>
        </div>

        {/* Center Tree with Box */}
        <div className="relative flex flex-col items-center justify-center">
          {/* Half Box behind tree */}
          <div
            className="about-rect absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[200px] max-[768px]:w-[280px] max-[768px]:h-[140px] bg-[#f3e2d2] z-10 shadow-lg"
            style={{
              filter: "blur(0.5px)",
              transform: "translate(-50%, -50%) translateY(115px)",
            }}
          />
          {/* Tree image */}
          <img
            src="/images/about-tree.png"
            alt="Yuu Tree"
            className="about-tree relative z-20 w-[450px] h-[450px] max-[768px]:w-[260px] max-[768px]:h-[260px]"
            style={{ marginBottom: 0 }}
          />
        </div>
        {/* Right Text Block */}
        <div className="w-1/3 max-[900px]:w-full max-[900px]:mt-8 flex flex-col items-start max-[900px]:items-center">
          <div className="about-text-two max-w-xs text-left max-[900px]:text-center">
            <p
              className="text-[#513335] text-sm leading-relaxed"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              At YUU by Nahar, we believe that the essence of great living lies
              in balance. Drawing inspiration from the Japanese philosophy of{" "}
              <span className="text-[#d16f52] font-semibold">Wabi-Sabi</span>,
              we embrace the beauty of simplicity, functionality, and finding
              elegance in{" "}
              <span className="text-[#d16f52] font-semibold">imperfection</span>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const VisionarySection = () => {
  const [selectedPerson, setSelectedPerson] = useState("ajay");

  const visionaryData = {
    ajay: {
      name: "AJAY NAHAR",
      title: "The Mind Behind YUU by Nahar",
      description:
        "A visionary leader and a pioneer in redefining Mumbai's skyline, Ajay Nahar, MD of Nahar Group, has always believed in creating spaces that enhance the way people live, work, and interact. With a portfolio of award-winning developments such as luxury real estate, theme-based residential towers, modern healthcare infrastructure, Asia's 1st International School and philanthropic developments for the Jain community, he continues to push boundaries in real estate innovation. With YUU by Nahar, his vision is to introduce a dynamic and immersive lifestyle hub—one that blends urban convenience with timeless elegance, setting a new benchmark for Mumbai's modern living experience.",
      image: "/images/p1.png",
    },
    awards: {
      name: "AWARDS & RECOGNITION",
      title: "Team Excellence",
      description:
        "The Nahar Group's commitment to excellence has been recognized time and again with prestigious awards and media features that celebrate innovation, sustainability, and architectural brilliance.",
      image: "/images/award.png",
    },
    legacy: {
      name: "THE LEGACY OF NAHAR AMRIT SHAKTI",
      title: "A landmark township loped by Nahar Group",
      description:
        "This self-sufficient community has set new standards for integrated living with world-class education, healthcare, business, and green spaces.<br/><br/> <span style={{color:'#d16f52'}}>Nahar International School –</span> Aleading institution shaping young minds for a global future. Awarded as Asia's top international school 2025. Nahar Medical Centre – Offering state-of-the-art healthcare services to the community.<br/><br/> Nahar Business Centre – A premium commercial hub designed for modern professionals.<br/><br/> Miyawaki Forest by Nahar Group – A lush, dense green space developed using the Japanese afforestation technique, bringing sustainability and nature closer to urban life.<br/><br/> At YUU by Nahar, the legacy continues, elevating the concept of holistic living to the next level.",
      image: "/images/nahar-amrit-shakti.png",
    },
  };

  const handlePersonSelect = (personKey) => {
    setSelectedPerson(personKey);
  };

  const getPersonData = (key) => visionaryData[key];

  return (
    <section className="relative w-full bg-[#fdf7f0] py-20 px-4 max-[768px]:px-6 max-[768px]:py-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <div className="text-center mb-16 max-[768px]:mb-8">
          <h2
            className="text-[#d16f52] text-2xl font-bold mb-1 max-[768px]:text-xl"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            FROM THE
          </h2>
          <h2
            className="text-[#a97c6d] text-4xl font-bold max-[768px]:text-2xl"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            VISIONARIES OF YUU
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-row max-[1024px]:flex-col gap-[10%] max-[1024px]:gap-8">
          {/* Left Column - Images */}
          <div className="w-3/5 max-[1024px]:w-full">
            <div className="flex flex-col gap-6 max-[768px]:gap-4">
              {/* All Images in One Line */}
              <div className="flex flex-row gap-4 max-[768px]:flex-col max-[768px]:gap-6">
                {/* Two Smaller Images with Same Design (excluding selected one) */}
                {Object.keys(visionaryData)
                  .filter((key) => key !== selectedPerson)
                  .map((key) => {
                    const person = getPersonData(key);

                    return (
                      <div
                        key={key}
                        onClick={() => handlePersonSelect(key)}
                        className="cursor-pointer transition-all duration-300 flex-1 relative top-40 hover:opacity-80 max-[768px]:top-0 max-[768px]:flex-none max-[768px]:w-full"
                      >
                        <div className="relative flex justify-center items-center z-20">
                          {/* Smaller Portrait */}
                          <img
                            src={person.image}
                            alt={person.name}
                            className="z-10 w-[60%] h-40 relative top-4 rounded-t-full g grayscale max-[768px]:w-48 max-[768px]:h-48 max-[768px]:rounded-full"
                          />
                        </div>
                      </div>
                    );
                  })}

                {/* Main Colored Image */}
                <div className="flex-1 relative max-[768px]:flex-none max-[768px]:w-full">
                  <div className="relative flex justify-center items-center z-20">
                    {/* Circular Background */}
                    <div className="absolute w-80 h-96 bg-[#d16f52] rounded-t-full max-[768px]:w-64 max-[768px]:h-80"></div>

                    {/* Main Portrait */}
                    <img
                      src={getPersonData(selectedPerson).image}
                      alt={getPersonData(selectedPerson).name}
                      className="z-10 w-80 h-80 relative top-8 rounded-lg max-[768px]:w-64 max-[768px]:h-64 max-[768px]:top-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Text Details */}
          <div className="w-2/5 max-[1024px]:w-full max-[1024px]:mt-8">
            <div className="space-y-6 max-[768px]:space-y-4">
              <div>
                <h3
                  className="text-[#d16f52] text-2xl font-bold mb-2 max-[768px]:text-xl"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {getPersonData(selectedPerson).name}
                </h3>
                <p
                  className="text-[#a97c6d] text-lg mb-6 max-[768px]:text-base max-[768px]:mb-4"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {getPersonData(selectedPerson).title}
                </p>
              </div>

              <div className="space-y-4">
                <p
                  className="text-[#513335] text-sm leading-relaxed max-[768px]:text-xs"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                  dangerouslySetInnerHTML={{
                    __html: getPersonData(selectedPerson).description,
                  }}
                ></p>
              </div>

              <button className="py-3 px-8 border border-[#d16f52] text-[#d16f52] rounded-full font-semibold hover:bg-[#d16f52] hover:text-white transition-colors max-[768px]:py-2 max-[768px]:px-6 max-[768px]:text-sm">
                KNOW MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AwardsSection = () => {
  const expertsData = [
    {
      name: "Ar. Shitesh Agarwal",
      role: "Sankalp Architects",
      image: "/images/Sankalp.png",
    },
    {
      name: "Ar. Ketan Vaidya",
      role: "KV Associates",
      image: "/images/KV.png",
    },
    {
      name: "Mr. Birju Patel",
      role: "MEP Consulting",
      image: "/images/Birju.png",
    },
    {
      name: "Mr. Nikhil J Inamdar",
      role: "Stardum Consultants",
      image: "/images/Nikhil.png",
    },
  ];

  return (
    <section className="w-full bg-[#fdf7f0] py-20 px-4 max-[768px]:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="flex flex-row max-[1024px]:flex-col gap-12 mb-16">
          {/* Left Column */}
          <div className="w-1/2 max-[1024px]:w-full">
            {/* Title Block */}
            <div className="inline-block bg-[#d16f52] bg-opacity-10 border border-[#d16f52] rounded-full px-8 py-3 mb-6">
              <h2
                className="text-[#513335] text-2xl font-bold"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                THE EXPERTS BEHIND YUU
              </h2>
            </div>

            {/* Description */}
            <p
              className="text-[#513335] text-base leading-relaxed"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Great architecture is a collaboration of vision, expertise, and
              craftsmanship. YUU by Nahar is brought to life by some of the
              finest minds in the industry, ensuring excellence in design,
              execution, and innovation.
            </p>
          </div>

          {/* Right Column */}
          <div className="w-1/2 max-[1024px]:w-full max-[1024px]:mt-8">
            <div className="text-center max-[1024px]:text-left">
              <h3
                className="text-[#d16f52] text-2xl font-bold leading-tight"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                TOGETHER, THEY SHAPE YUU
                <br /> INTO A SPACE THAT IS MODERN,
                <br /> EFFICIENT, AND BUILT TO INSPIRE.
              </h3>
            </div>
          </div>
        </div>

        {/* Profile Images */}
        <div className="grid grid-cols-4 max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1 gap-8">
          {expertsData.map((expert, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Arched Background with Portrait */}
              <div className="relative mb-4">
                {/* Arched Background */}
                <div className="w-32 h-40 bg-[#d16f52] bg-opacity-20 rounded-t-full"></div>

                {/* Circular Portrait */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-40 rounded-t-full rounded-b-full overflow-hidden bg-[#d16f52] border-4 border-[#d16f52] shadow-lg">
                    <img
                      src={expert.image}
                      alt={expert.name}
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                </div>
              </div>

              {/* Name and Role Label */}
              <div className="relative w-32">
                <div className="bg-[#513335] w-full text-white px-4 py-2 rounded-full text-center absolute bottom-10 left-20">
                  <p
                    className="text-[10px] font-semibold"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {expert.name}
                  </p>
                  <p
                    className="text-[10px] opacity-90"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {expert.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

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
