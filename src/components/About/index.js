import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroCarousel = () => {
  return (
    <section className="relative pb-20 w-full flex items-center justify-center pt-32 bg-[#fef9f3] max-[768px]:flex-col max-[768px]:pt-20">
      {/* Text Content */}
      <div className="w-2/6 flex items-center max-[768px]:w-full max-[768px]:justify-center max-[768px]:mb-6">
        <div className="mx-auto max-[768px]:text-center">
          <h1 className="mb-4 text-start max-[768px]:text-center">
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
        className="w-4/6 max-[768px]:w-full"
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
      topTitle: "FROM THE VISIONARIES OF YUU",
      name: "AJAY NAHAR",
      title: "The Mind Behind YUU by Nahar",
      description:
        "A visionary leader and a pioneer in redefining Mumbai's skyline, Ajay Nahar, MD of Nahar Group, has always believed in creating spaces that enhance the way people live, work, and interact. With a portfolio of award-winning developments such as luxury real estate, theme-based residential towers, modern healthcare infrastructure, Asia's 1st International School and philanthropic developments for the Jain community, he continues to push boundaries in real estate innovation. With YUU by Nahar, his vision is to introduce a dynamic and immersive lifestyle hub—one that blends urban convenience with timeless elegance, setting a new benchmark for Mumbai's modern living experience.",
      image: "/images/Asset7.png",
    },
    awards: {
      topTitle:"AWARDS & RECOGNITION",
      name: "AWARDS & RECOGNITION",
      title: "Team Excellence",
      description:
        "The Nahar Group's commitment to excellence has been recognized time and again with prestigious awards and media features that celebrate innovation, sustainability, and architectural brilliance.",
      image: "/images/Asset5.png",
    },
    legacy: {
      topTitle:"THE LEGACY OF NAHAR AMRIT SHAKTI",
      name: "THE LEGACY OF NAHAR AMRIT SHAKTI",
      title: "A landmark township loped by Nahar Group",
      description:
        "This self-sufficient community has set new standards for integrated living with world-class education, healthcare, business, and green spaces.<br/><br/> <span style={{color:'#d16f52'}}>Nahar International School –</span> Aleading institution shaping young minds for a global future. Awarded as Asia's top international school 2025. Nahar Medical Centre – Offering state-of-the-art healthcare services to the community.<br/><br/> Nahar Business Centre – A premium commercial hub designed for modern professionals.<br/><br/> Miyawaki Forest by Nahar Group – A lush, dense green space developed using the Japanese afforestation technique, bringing sustainability and nature closer to urban life.<br/><br/> At YUU by Nahar, the legacy continues, elevating the concept of holistic living to the next level.",
      image: "/images/Asset21.png",
    },
  };

  const handlePersonSelect = (personKey) => {
    setSelectedPerson(personKey);
  };

  const getPersonData = (key) => visionaryData[key];

  return (
    <section className="relative w-full bg-[#fdf7f0] py-16 px-4 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        {/* <div className="text-center mb-16">
          <h2 className="text-[#d16f52] text-2xl font-bold tracking-widest">
            FROM THE
          </h2>
          <h2 className="text-[#a97c6d] text-4xl font-bold mt-1">
            VISIONARIES OF YUU
          </h2>
        </div> */}

        <div className="flex flex-row items-start lg:gap-10 md:flex-col md:items-center relative max-[768px]:flex-col max-[768px]:items-center">
          {/* Left smaller images */}
          <div className="flex flex-row justify-start gap-12 mt-[18%] md:mt-0 md:gap-6 max-[768px]:mt-6 max-[768px]:gap-4 max-[768px]:overflow-x-auto max-[768px]:w-full max-[768px]:px-2">
            {Object.keys(visionaryData)
              .filter((key) => key !== selectedPerson)
              .map((key) => {
                const person = getPersonData(key);
                return (
                  <div
                    key={key}
                    onClick={() => handlePersonSelect(key)}
                    className="cursor-pointer flex flex-col items-center hover:opacity-80 transition-all max-[768px]:flex-none max-[768px]:w-36"
                  >
                    <h3 className="text-xs mb-5 text-gray-500 mt-3 text-center uppercase tracking-wide w-full leading-tight max-[768px]:mb-2">
                      {person.name}
                    </h3>
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-48 h-60 object-cover rounded-t-full grayscale max-[768px]:w-36 max-[768px]:h-48"
                    />
                    
                  </div>
                );
              })}
          </div>

          {/* Main person image with background */}
          <div className="relative flex flex-col items-center mx-12 max-[768px]:mx-0 max-[768px]:mt-6">
            <h2 className="text-4xl text-center mb-6 uppercase max-[768px]:text-2xl max-[768px]:px-4">
              {getPersonData(selectedPerson).topTitle}
            </h2>
            <div className="relative flex justify-center items-center">
              <div className="absolute w-[380px] h-[500px]"></div>
              <img
                src={getPersonData(selectedPerson).image}
                alt={getPersonData(selectedPerson).name}
                className="w-[300px] h-[400px]  relative top-4 max-[768px]:w-[240px] max-[768px]:h-[320px]"
              />
            </div>
          </div>

          {/* Right text */}
          <div className="max-w-md space-y-4 mt-20 md:mt-8 max-[768px]:max-w-full max-[768px]:mt-8 max-[768px]:text-center">
            <h3 className="">
              {getPersonData(selectedPerson).name}
            </h3>
            <p className="text-[#fca286] max-[768px]:text-sm">
              {getPersonData(selectedPerson).title}
            </p>
            <p
              className="text-[15px] leading-relaxed text-gray-700 max-[768px]:text-[14px]"
              dangerouslySetInnerHTML={{
                __html: getPersonData(selectedPerson).description,
              }}
            ></p>
            {/* <button className="mt-6 py-3 px-8 border border-[#d16f52] text-[#d16f52] rounded-full font-semibold hover:bg-[#d16f52] hover:text-white transition-colors">
              KNOW MORE
            </button> */}
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
      image: "/images/Asset27.png",
    },
    {
      name: "Ar. Ketan Vaidya",
      role: "KV Associates",
      image: "/images/Asset26.png",
    },
    {
      name: "Mr. Birju Patel",
      role: "MEP Consulting",
      image: "/images/Asset25.png",
    },
    {
      name: "Mr. Nikhil J Inamdar",
      role: "Stardum Consultants",
      image: "/images/Asset24.png",
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
            <div className="inline-block border border-[#cd8467] relative right-[20%] rounded-r-full w-96 px-10 py-3 mb-6">
              <h2
                className="text-black text-center"
              >
                THE EXPERTS<br/> BEHIND YUU
              </h2>
            </div>

            {/* Description */}
            <p
              className=""
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
                className="mt-20 max-[768px]:mt-0"
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
                <div className="w-32 h-48"></div>

                {/* Circular Portrait */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-48">
                    <img
                      src={expert.image}
                      alt={expert.name}
                      className="w-full h-full "
                    />
                  </div>
                </div>
              </div>

              {/* Name and Role Label */}
              <div className="relative w-40">
                <div className="bg-[#353434] w-full text-white py-4 rounded-full text-center absolute bottom-8 left-20">
                  <p
                    className="text-[12px] text-white font-semibold"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {expert.name}
                  </p>
                  <p
                    className="text-[10px] text-white opacity-90"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    ({expert.role})
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
