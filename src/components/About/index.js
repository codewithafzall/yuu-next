import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageReveal from "../DayNight";

gsap.registerPlugin(ScrollTrigger);

const HeroCarousel = () => {
  return (
    // <section className="relative pb-20 w-full flex items-center justify-center pt-32 bg-[#fef9f3] max-[768px]:flex-col max-[768px]:pt-20">
    //   {/* Text Content */}
    //   <div className="w-2/6 flex items-center max-[768px]:w-full max-[768px]:justify-center max-[768px]:mb-6">
    //     <div className="mx-auto max-[768px]:text-center">
    //       <h1 className="mb-4 text-start max-[768px]:text-center">
    //         Discover the
    //         <br />
    //         World of YUU
    //       </h1>
    //       <p className="text-[#7c6565] mb-4">
    //         Welcome to YUU by Nahar, a place
    //         <br /> where calm, culture, and community
    //         <br />
    //         come together. A new way to live,
    //         <br /> right in the heart of Chandivali
    //       </p>
    //     </div>
    //   </div>
    //   <img
    //     src="/images/about-bg.png"
    //     alt="Lifestyle Illustration"
    //     className="w-4/6 max-[768px]:w-full"
    //   />
    // </section>
    <div>
      <img
        className="w-full h-screen hidden desktop:block"
        src="/images/about-banner.png"
      />
      <img
        className="w-full h-screen block desktop:hidden"
        src="/images/about-mobile-banner.png"
      />
    </div>
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
      <img className="about-title" src="/images/Asset 29.png" />
      {/* Main Content Row */}
      <div className="w-full flex flex-row max-[900px]:flex-col items-center justify-center gap-8 relative">
        {/* Left Text Block */}
        <div className="w-1/3 max-[900px]:w-full max-[900px]:mb-8 flex flex-col items-end max-[900px]:items-center">
          <div className="about-text-one max-w-xs text-right max-[900px]:text-center">
            <p
              className="text-[#513335] text-sm leading-relaxed"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              "YUU" by Nahar is not just a name; it’s a
              philosophy that places you at the heart
              of every experience. The name {" "}
              <span className="text-[#d16f52] font-semibold">"YUU"</span>  is a
              thoughtful blend of the word {" "}
              <span className="text-[#d16f52] font-semibold">"you"</span>, and
              the Japanese character for{" "}
              <span className="text-[#d16f52] font-semibold">"悠"</span>, which
              means{" "}
              <span className="text-[#d16f52] font-semibold">"individuality."</span>
            </p>
          </div>

          <div className="about-text-three max-w-xs text-right max-[900px]:text-center mt-20">
            <p
              className="text-[#513335] text-sm leading-relaxed"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Inspired by the{" "}
              <span className="text-[#d16f52] font-semibold">dynamic studio living</span>,
              culture of Japan & Europe, YUU
              introduces a
              {" "}<span className="text-[#d16f52] font-semibold">fresh perspective</span>,
              to Mumbai’s real estate landscape one that{" "}
              <span className="text-[#d16f52] font-semibold"> redefines space, structure, and
                seamless living.</span>
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
              YUU by Nahar is inspired by{" "}
              <span className="text-[#d16f52] font-semibold">
                Yugen (幽玄),
              </span>{" "}
              the Japanese philosophy
              of subtle elegance, depth, and beauty
              felt rather than seen. The name
              embodies {" "}
              <span className="text-[#d16f52] font-semibold">serenity</span> and{" "}
              <span className="text-[#d16f52] font-semibold">sophistication, </span>, offering thoughtfully designed spaces
              that inspire calm, elevate daily living,
              and reflect understated opulence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const FloorPlanIntro = () => {
  return (
    <section className="w-full relative bg-[#fdf7f0] pt-44 desktop:pt-48 px-6 max-[768px]:pb-16">
      <div className="absolute top-0 drop-shadow-xl shadow-lg shadow-white left-0 bg-[#fcf9f2] rounded-e-full py-3 w-60 desktop:w-72 flex justify-end">
        <h1 className="text-black mr-16">
          YUU
          <br /> NOVA
        </h1>
      </div>
      <div className="max-w-7xl mx-auto flex items-start gap-12 max-[768px]:flex-col max-[768px]:gap-8">
        <div className="w-1/2 max-[768px]:w-full">
          <h2 className="mb-5 font-normal max-[768px]:text-3xl">
            Every Square Foot,
            <br />A Thoughtful Expression
          </h2>
          <p className="mb-6 max-[768px]:text-sm">
            Discover studio living reimagined for the urban soul. Each
            residence at our upcoming development is a testament to
            minimalism, balance, and smart design. From seamless storage
            solutions to integrated design elements that maximise natural light
            and space, these themed studio apartments offer the perfect canvas
            for your lifestyle. Whether you're a young professional, a
            first-time homeowner, or someone seeking mindful living in the heart
            of the city this space adapts beautifully to your rhythm.
          </p>
        </div>
        <div className="w-1/2 flex justify-center max-[768px]:w-full">
          <div className="relative bottom-[150px] w-[420px] h-[560px] rounded-t-[220px] overflow-hidden  max-[768px]:w-[260px] max-[768px]:h-[360px] max-[768px]:rounded-t-[140px] max-[768px]:bottom-[0px]">
            <img
              src="images/about-nova.webp"
              alt="Studio living"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto relative bottom-[150px] max-[768px]:bottom-[0px] max-[768px]:mt-5">
        <p className="uppercase text-black font-bold mb-4">HIGHLIGHTS</p>
        <div className="flex text-[15px] gap-6 text-center max-[768px]:flex-col">
          <span className="px-10 py-1 rounded-full bg-[#fcf9f2] shadow-xl">
            Thoughtfully designed
            <br /> fully finished studios
          </span>
          <span className="px-10 py-1 rounded-full bg-[#fcf9f2] shadow-xl">
            Vaastu-compliant design
            <br />ensuring peaceful living
          </span>
          <span className="px-10 py-1 rounded-full bg-[#fcf9f2] shadow-xl">
            Modular Kitchen &
            <br /> Dining table for two
          </span>
          <span className="px-10 py-1 rounded-full bg-[#fcf9f2] shadow-xl">
            Built-in wardrobe for
            <br />organized storage
          </span>
          <span className="px-10 py-1 rounded-full bg-[#fcf9f2] shadow-xl">
            Fully-fitted bathroom with
            <br />premium sanitaryware
          </span>
        </div>
      </div>
    </section>
  );
};

const FloorPlanCulinary = () => {
  return (
    <section className="w-full relative bg-[#eee9d6] py-16">

      <div className="absolute hidden -top-20 drop-shadow-xl shadow-lg shadow-white right-0 bg-[#fcf9f2] rounded-s-full py-3 w-60 desktop:w-80 desktop:flex justify-end">
        <h1 className="text-black mr-12">
          YUU NOVA
          <br /> SQUARE
        </h1>
      </div>
      {/* Flavours part */}
      <div className="max-w-7xl mx-auto px-6 desktop:px-0 grid grid-cols-2 gap-12 items-center max-[768px]:grid-cols-1">
        {/* Left large image */}
        <div className="w-full relative bottom-[18%] max-[768px]:bottom-[0%]">
          <img
            src="images/nova-square.webp"
            alt="Culinary Cove"
            className="w-full h-auto rounded-[24px] shadow-md"
          />
        </div>
        {/* Right text */}
        <div className="w-full">
          <h2 className="mb-4 desktop:mb-8 max-[768px]:text-3xl">
            A LIFESTYLE MADE OF
            <br />
            ENDLESS POSSIBILITIES.
          </h2>
          <p className="mb-6 desktop:mb-20 max-[768px]:text-sm">
            Located on the lower levels of Nova  a vibrant retail square with seamless integration into YUU Nova studio homes & the larger Chandivali community, these retail spaces become more than destinations they become part of people’s everyday rhythm.
          </p>
          <p className="uppercase font-bold mb-4 text-black">HIGHLIGHTS</p>
          <div className="grid grid-cols-1 desktop:grid-cols-2 gap-6">
            <div className="px-10 flex items-center justify-center h-16 rounded-full bg-[#eee9d6] shadow-xl text-sm text-center">
              14’ Height Showrooms
            </div>
            <div className="px-10 flex items-center justify-center h-16 rounded-full bg-[#eee9d6] shadow-xl text-sm text-center">
              Glass Facade
            </div>
            <div className="px-10 flex items-center justify-center h-16 rounded-full bg-[#eee9d6] shadow-xl text-sm text-center">
              Futuristic marketing
              <br />panels
            </div>
            <div className="px-10 flex items-center justify-center h-16 rounded-full bg-[#eee9d6] shadow-xl text-sm text-center">
              Premium visibility in a
              <br />lifestyle-led environment
            </div>
          </div>
        </div>
      </div>

      {/* Retail part */}
      <div className="pt-32 relative desktop:pt-48 grid grid-cols-2 desktop:pl-10 overflow-hidden gap-12 items-center max-[768px]:grid-cols-1">
        <div className="absolute top-0 drop-shadow-xl shadow-lg shadow-white left-0 bg-[#fcf9f2] rounded-e-full py-3 w-60 desktop:w-72 flex justify-end">
          <h1 className="text-black mr-16">
            YUU
            <br /> LUNA
          </h1>
        </div>
        {/* left text */}
        <div className="w-full px-6">
          <h1 className="mb-10 max-[768px]:text-3xl">
            Retail That Reflects Your
            <br />
            Brand’s Light
          </h1>
          <p className="mb-6 max-[768px]:text-sm">
            Step into a retail space that does more than sell — it tells a
            story. YUU Luna is thoughtfully planned to house boutique
            storefronts and elegant showrooms that align with your brand’s
            sensibilities. Positioned within a vibrant mixed-use ecosystem, it’s
            designed to welcome a discerning customer base — from urban
            professionals to residents within the development and the larger
            Chandivali neighborhood. With high visibility, modern frontage, and
            optimal footfall, YUU Luna offers you a rare blend: visibility, foot
            traffic, and a brand-enhancing atmosphere.
          </p>
          <p className="uppercase font-bold mb-4 text-black">HIGHLIGHTS</p>
          <div className="flex flex-wrap gap-4">
            <span className="w-72 py-1 rounded-full bg-[#eee9d6] shadow-xl text-sm text-center">
              Street-facing retail frontage
              <br /> with glass facades
            </span>
            <span className="w-72 py-1 rounded-full bg-[#eee9d6] shadow-xl text-sm text-center">
              Double-height
              <br /> showrooms available
            </span>
            <span className="w-72 py-1 rounded-full bg-[#eee9d6] shadow-xl text-sm text-center">
              Footfall from in-house residents
              <br /> and Chandivali catchment
            </span>
            <span className="w-72 py-1 rounded-full bg-[#eee9d6] shadow-xl text-sm text-center">
              Ideal for lifestyle stores, salons,
              <br /> wellness & concept brands
            </span>
            <span className="w-72 py-1 rounded-full bg-[#eee9d6] shadow-xl mb-4 text-sm text-center">
              Smart-sized units for
              <br /> curated brand experiences
            </span>
          </div>
        </div>
        {/* right large image */}
        <div className="w-full relative px-6">
          <img
            src="images/about-luna.webp"
            alt="Culinary Cove"
            className="w-full h-[550px] rounded-s-[24px] shadow-md max-[768px]:h-[300px]"
          />
        </div>
      </div>
    </section>
  );
};

const VisionarySection = () => {
  const [selectedPerson, setSelectedPerson] = useState("ajay");

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      topTitle: " From the Architect of YUU",
      name: " ar. shitesh agarwal",
      title: " Sankalp Architects",
      description:
        "Great architecture is a collaboration of vision, expertise, and craftsmanship. YUU by Nahar is brought to life by some of the finest minds in the industry, ensuring excellence in design, execution, and innovation.<br/> <br/> TOGETHER, THEY SHAPE YUU INTO A SPACE THAT IS MODERN, EFFICIENT, AND BUILT TO INSPIRE.",
      image: "/images/sankalp.png",
    },
    legacy: {
      topTitle: "THE LEGACY OF NAHAR AMRIT SHAKTI",
      name: "",
      title: "A landmark township loped by Nahar Group",
      description:
        "This self-sufficient community has set new standards for integrated living with world-class education, healthcare, business, and green spaces.<br/><br/> <span style={{color:'#d16f52'}}>Nahar International School –</span> Aleading institution shaping young minds for a global future. Awarded as Asia's top international school 2025. Nahar Medical Centre – Offering state-of-the-art healthcare services to the community.<br/><br/> Nahar Business Centre – A premium commercial hub designed for modern professionals.<br/><br/> Miyawaki Forest by Nahar Group – A lush, dense green space developed using the Japanese afforestation technique, bringing sustainability and nature closer to urban life.<br/><br/> At YUU by Nahar, the legacy continues, elevating the concept of holistic living to the next level.",
      image: "/images/Asset21.png",
    },
  };

  const keys = Object.keys(visionaryData);
  const [isMobile, setIsMobile] = useState(false);

  const sliderRef = useRef(null);

  const initialIndex = Math.max(0, keys.indexOf(selectedPerson));

  const [currentSlide, setCurrentSlide] = useState(initialIndex);

  useEffect(() => {
    // keep slider and state synced if selectedPerson changes programmatically
    const idx = keys.indexOf(selectedPerson);
    if (idx >= 0) {
      setCurrentSlide(idx);
      sliderRef.current?.slickGoTo(idx);
    }
  }, [selectedPerson, keys]);

  const handlePersonSelect = (personKey) => {
    const idx = keys.indexOf(personKey);
    setSelectedPerson(personKey);
    setCurrentSlide(idx);
    sliderRef.current?.slickGoTo(idx);
  };

  const getPersonData = (key) => visionaryData[key];

  // Slider settings for mobile
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 350,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    centerMode: true,
    centerPadding: "18px", // shows a peek of adjacent slides
    initialSlide: initialIndex,
    afterChange: (index) => {
      setCurrentSlide(index);
      setSelectedPerson(keys[index]);
    },
  };

  // progress percent for the small scroll indicator dot (0..100)
  const progressPercent =
    keys.length > 1 ? (currentSlide / (keys.length - 1)) * 100 : 0;

  return (
    <section id="management" className="relative w-full bg-[#fdf7f0] py-16 px-4 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-row items-center lg:gap-10 md:flex-col relative max-[768px]:flex-col ">
          {/* Mobile: Slider */}
          {isMobile ? (
            <div className="w-full mb-6">
              <Slider ref={sliderRef} {...sliderSettings}>
                {keys.map((key, index) => {
                  const person = getPersonData(key);
                  const isSelected = key === selectedPerson; // <-- defined here
                  return (
                    <div
                      key={key}
                      onClick={() => handlePersonSelect(key)}
                      className="cursor-pointer flex flex-col items-center px-2"
                    >
                      <h3 className="text-xs mb-2 text-gray-500 text-center uppercase tracking-wide w-full leading-tight">
                        {person.name}
                      </h3>
                      <img
                        src={person.image}
                        alt={person.name}
                        className={`w-36 h-48 object-cover rounded-t-full mx-auto transition-all duration-300 ${isSelected ? "" : "grayscale"
                          }`}
                      />
                    </div>
                  );
                })}
              </Slider>

              {/* Scroll indicator (small moving dot) */}
              <div className="mt-3 flex justify-center">
                <div className="relative w-40 h-2 bg-[#e2d2b7] rounded-full">
                  <div
                    className="absolute top-1/2 bg-[#c46c4a] w-3 h-3 rounded-full"
                    style={{
                      left: `${progressPercent}%`,
                      transform: "translate(-50%, -50%)",
                      transition: "left 0.28s ease",
                    }}
                  />
                </div>
              </div>
            </div>
          ) : (
            // Desktop: original left-side images
            <div className="flex flex-row justify-start gap-12 mt-[18%] md:mt-0 md:gap-6">
              {Object.keys(visionaryData)
                .filter((key) => key !== selectedPerson)
                .map((key) => {
                  const person = getPersonData(key);
                  return (
                    <div
                      key={key}
                      onClick={() => handlePersonSelect(key)}
                      className="cursor-pointer flex flex-col items-center hover:opacity-80 transition-all"
                    >
                      <h3 className="text-xs mb-5 text-gray-500 mt-3 text-center uppercase tracking-wide w-full leading-tight">
                        {person.name}
                      </h3>
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-48 h-60 object-cover rounded-t-full grayscale"
                      />
                    </div>
                  );
                })}
            </div>
          )}

          {/* Main image */}
          {!isMobile && (
            <div className="relative flex flex-col items-center mx-12">
              <h2 className="text-4xl text-center mb-6 uppercase">
                {getPersonData(selectedPerson).topTitle}
              </h2>
              <div className="relative flex justify-center items-center">
                <img
                  src={getPersonData(selectedPerson).image}
                  alt={getPersonData(selectedPerson).name}
                  className="w-[300px] h-[400px] relative top-4"
                />
              </div>
            </div>
          )}

          {/* Text section */}
          <div className={`max-w-md space-y-4 ${isMobile ? "" : "mt-20"}`}>
            {isMobile && (
              <h2 className="text-2xl text-center uppercase">
                {getPersonData(selectedPerson).topTitle}
              </h2>
            )}
            <h3>{getPersonData(selectedPerson).name}</h3>
            <p className="text-[#fca286]">
              {getPersonData(selectedPerson).title}
            </p>
            <p
              className="text-[15px] leading-relaxed text-gray-700"
              dangerouslySetInnerHTML={{
                __html: getPersonData(selectedPerson).description,
              }}
            ></p>
          </div>
        </div>
      </div>
    </section>
  );
};

const AwardsSection = () => {

  return (
    <section className="w-full relative bg-[#fdf7f0] py-20 px-4 max-[768px]:px-6">
      <div className="absolute top-0 drop-shadow-xl shadow-lg shadow-white desktop:top-20 left-0 bg-[#fcf9f2] rounded-e-full py-3 w-full desktop:w-[500px] flex justify-end">
        <h1 className="text-black mr-28 desktop:mr-16 max-[768px]:text-4xl">
          AWARDS
          <br /> & RECOGNITION
        </h1>
      </div>
      <div className="max-w-7xl mx-auto mt-10 desktop:mt-36">
        {/* Main Content */}
        <div className="flex flex-row items-center justify-center max-[1024px]:flex-col">
          {/* Left Column */}
          <div className="w-1/2 flex justify-center  max-[1024px]:w-full">

            <p className="mt-10 desktop:w-96">
              Every award we receive is more than an <span className="text-[#d06d52]">accolade</span>, it is a testimony to the trust our customers place in us, the dedication of our team, and the vision of creating spaces that truly enrich lives. These milestones strengthen our belief in setting new benchmarks and inspire us to keep raising the bar.
            </p>
          </div>

          {/* Right Column */}
          <div className="w-1/2 flex justify-center max-[1024px]:w-full max-[1024px]:mt-8">
            <div className="max-[1024px]:text-left">
              <img src="/images/Award.png" alt="Awards" className="desktop:w-[300px]" />
            </div>
          </div>
        </div>

        {/* Profile Images */}
        {/* <div className="grid grid-cols-4 max-[1024px]:grid-cols-2 max-[768px]:grid-cols-2 max-[768px]:gap-2 gap-8">
          {expertsData.map((expert, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative mb-4">
                <div className="w-32 h-48"></div>

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

              <div className="relative w-40">
                <div className="bg-[#353434] w-full text-white py-4 rounded-full text-center absolute bottom-8 left-20 max-[768px]:w-32 max-[768px]:left-10">
                  <p className="text-[12px] text-white font-semibold max-[768px]:text-[10px]">
                    {expert.name}
                  </p>
                  <p className="text-[10px] text-white opacity-90 max-[768px]:text-[8px]">
                    ({expert.role})
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

const About = () => {
  return (
    <>
      <HeroCarousel />
      <AboutSection />
      <FloorPlanIntro />
      <FloorPlanCulinary />
      <ImageReveal />
      <VisionarySection />
      <AwardsSection />
    </>
  );
};

export default About;
