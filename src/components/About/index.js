import React, { useRef, useEffect, useState } from "react";
import CircleType from "circletype";

const HeroCarousel = () => {
  return (
    <section className="relative pb-20 w-full bg-[#fdf7f0] flex flex-row max-[768px]:flex-col items-center justify-between px-4 max-[768px]:px-6 pt-32 max-[768px]:pt-32 overflow-visible">
      {/* Text Content */}
      <div className="w-1/4 max-[768px]:w-full">
        <div className="pl-8 max-[768px]:pl-4">
          <h2 className="text-[#d16f52] text-3xl max-[768px]:text-2xl font-semibold mb-4">
            Discover the
            <br />
            World of YUU
          </h2>
          <p
            className="text-[#7c6565] text-lg max-[768px]:text-sm mb-4"
          >
            Welcome to YUU by Nahar, a place<br/> where calm, culture, and community<br/>
            come together. A new way to live,<br/> right in the heart of Chandivali
          </p>
        </div>
      </div>
      {/* Illustration */}
      <div className="w-3/4 max-[768px]:w-full flex  max-[768px]:justify-center max-[768px]:mt-10">
        <div className="w-full max-[768px]:w-[80vw] max-[768px]:max-w-[400px] ">
          <img
            src="/images/about-bg.png"
            alt="Lifestyle Illustration"
            className="w-full"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const applyCurve = async () => {
      const { default: CircleType } = await import("circletype");

      if (textRef.current) {
        const width = window.innerWidth;

        let radius = 500; // default for desktop
        let fontSize = "40px";

        if (width < 768) {       // tablet
          radius = 300;
          fontSize = "28px";
        }
        if (width < 480) {       // mobile
          radius = 200;
          fontSize = "20px";
        }

        textRef.current.style.fontSize = fontSize;

        new CircleType(textRef.current)
          .radius(radius)
          .dir(1)
          .forceWidth(true);
      }
    };

    applyCurve();

    // Re-apply on window resize
    window.addEventListener("resize", applyCurve);
    return () => window.removeEventListener("resize", applyCurve);
  }, []);
return(
  <section className="relative w-full bg-[#fdf7f0] flex flex-col items-center justify-center py-24 max-[768px]:py-10 px-4 overflow-visible">
    {/* Arched Heading (SVG Curve) */}
    <div
      ref={textRef}
      style={{
        fontSize: "40px",
        color: "#d16f52",
        textAlign: "center",
        // marginTop: "200px",
        display: "inline-block",
          whiteSpace: "nowrap",
      }}
    >
      A Lifestyle Crafted Around Youu
    </div>
    {/* Main Content Row */}
    <div className="w-full flex flex-row max-[900px]:flex-col items-center justify-center gap-8 relative">
      {/* Left Text Block */}
      <div className="w-1/3 max-[900px]:w-full max-[900px]:mb-8 flex flex-col items-end max-[900px]:items-center">
        <div className="max-w-xs text-right max-[900px]:text-center">
          <p className="text-[#513335] text-sm leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            "Yuu" by Nahar is not just a name; it's a philosophy that places you at the heart of every experience. The name "Yuu" is a thoughtful blend of the word <span className="text-[#d16f52] font-semibold">"you"</span> and the Japanese character for <span className="text-[#d16f52] font-semibold">"悠"</span>, which means <span className="text-[#d16f52] font-semibold">"leisurely"</span> or <span className="text-[#d16f52] font-semibold">"relaxed."</span>
          </p>
        </div>

        <div className="max-w-xs text-right max-[900px]:text-center mt-20">
        <p className="text-[#513335] text-sm leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Inspired by the <span className="text-[#d16f52] font-semibold">dynamic studio living</span> culture of <span className="text-[#d16f52] font-semibold">New York</span> and <span className="text-[#d16f52] font-semibold">Dubai</span>, YUU introduces a fresh perspective to Mumbai’s real estate landscape—one that redefines <span className="text-[#d16f52] font-semibold">space, structure, and seamless living</span>.
        </p>
      </div>
      </div>
      
      {/* Center Tree with Box */}
      <div className="relative flex flex-col items-center justify-center w-[420px] max-w-full max-[900px]:w-full">
        {/* Half Box behind tree */}
        <div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[200px] max-[768px]:w-[280px] max-[768px]:h-[140px] bg-[#f3e2d2] z-10 shadow-lg" 
          style={{ 
            filter: 'blur(0.5px)',
            transform: 'translate(-50%, -50%) translateY(115px)'
          }} 
        />
        {/* Tree image */}
        <img
          src="/images/about-tree.png"
          alt="Yuu Tree"
          className="relative z-20 w-[450px] h-[450px] max-[768px]:w-[260px] max-[768px]:h-[260px]"
          style={{ marginBottom: 0 }}
        />
      </div>
      {/* Right Text Block */}
      <div className="w-1/3 max-[900px]:w-full max-[900px]:mt-8 flex flex-col items-start max-[900px]:items-center">
        <div className="max-w-xs text-left max-[900px]:text-center">
          <p className="text-[#513335] text-sm leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            At YUU by Nahar, we believe that the essence of great living lies in balance. Drawing inspiration from the Japanese philosophy of <span className="text-[#d16f52] font-semibold">Wabi-Sabi</span>, we embrace the beauty of simplicity, functionality, and finding elegance in <span className="text-[#d16f52] font-semibold">imperfection</span>.
          </p>
        </div>
      </div>
    </div>

    {/* after scroll section */}
    <div className="w-full flex flex-row max-[900px]:flex-col items-center justify-center gap-8 relative">
      {/* Left Text Block */}
      <div className="w-1/3 max-[900px]:w-full max-[900px]:mb-8 flex flex-col items-end max-[900px]:items-center">
        <div className="max-w-xs text-right max-[900px]:text-center max-[768px]:mt-10">
          <h2 className="text-[#d16f52] text-2xl font-bold uppercase leading-relaxed max-[786px]:text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          At YUU, every detail<br/> is intentional,
          </h2>
        </div>

        <div className="max-w-xs text-right max-[900px]:text-center z-20 absolute top-[80%] left-[24%] max-[768px]:left-[0%]">
        <h2 className="text-[#d16f52] text-2xl  font-bold uppercase leading-relaxed max-[786px]:text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        and every moment is<br/>
        built around YUU        
        </h2>
      </div>
      </div>
      
      {/* Center Tree with Box */}
      <div className="relative flex flex-col items-center justify-center w-[420px] max-w-full max-[900px]:w-full">
        {/* Half Box behind tree */}
        <div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[200px] max-[768px]:w-[280px] max-[768px]:h-[140px] bg-[#f3e2d2] z-10 shadow-lg" 
          style={{ 
            borderRadius: '200px 200px 0 0',
            filter: 'blur(0.5px)',
            transform: 'translate(-50%, -50%) translateY(115px)'
          }} 
        />
        {/* Tree image */}
        <img
          src="/images/about-tree.png"
          alt="Yuu Tree"
          className="relative z-20 w-[450px] h-[450px] max-[768px]:w-[260px] max-[768px]:h-[260px]"
          style={{ marginBottom: 0 }}
        />
      </div>
      {/* Right Text Block */}
      <div className="w-1/3 max-[900px]:w-full max-[900px]:mt-8 flex flex-col items-start max-[900px]:items-center">
        <div className="max-w-xs text-left max-[900px]:text-center max-[768px]:mt-10">
          <h2 className="text-[#d16f52] text-2xl font-bold uppercase leading-relaxed max-[786px]:text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          every space
          is meaningful,          
          </h2>
        </div>
      </div>
    </div>
  </section>
);
};

const VisionarySection = () => {
  const [selectedPerson, setSelectedPerson] = useState('ajay');

  const visionaryData = {
    ajay: {
      name: 'AJAY NAHAR',
      title: 'The Mind Behind YUU by Nahar',
      description: 'A visionary leader and a pioneer in redefining Mumbai\'s skyline, Ajay Nahar, MD of Nahar Group, has always believed in creating spaces that enhance the way people live, work, and interact. With a portfolio of award-winning developments such as luxury real estate, theme-based residential towers, modern healthcare infrastructure, Asia\'s 1st International School and philanthropic developments for the Jain community, he continues to push boundaries in real estate innovation. With YUU by Nahar, his vision is to introduce a dynamic and immersive lifestyle hub—one that blends urban convenience with timeless elegance, setting a new benchmark for Mumbai\'s modern living experience.',
      image: '/images/p1.png'
    },
    awards: {
      name: 'AWARDS & RECOGNITION',
      title: 'Team Excellence',
      description: 'Our commitment to excellence has been recognized through numerous industry awards and accolades. The team at YUU by Nahar has consistently delivered innovative solutions that redefine urban living, earning recognition for architectural innovation, sustainable development practices, and community-centric design. These awards reflect our dedication to creating spaces that not only meet but exceed the expectations of modern urban dwellers.',
      image: '/images/about3.png'
    },
    legacy: {
      name: 'THE LEGACY OF NAHAR AMRIT SHAKTI',
      title: 'Building Communities',
      description: 'The Nahar Amrit Shakti project stands as a testament to our commitment to creating sustainable, vibrant communities. This landmark development showcases our expertise in large-scale residential projects, featuring world-class amenities, green spaces, and modern infrastructure. It represents our philosophy of blending luxury with functionality, creating spaces where families thrive and communities flourish.',
      image: '/images/about4.png'
    }
  };

  const handlePersonSelect = (personKey) => {
    setSelectedPerson(personKey);
  };

  const getPersonData = (key) => visionaryData[key];

  return (
    <section className="relative w-full bg-[#fdf7f0] py-20 px-4 max-[768px]:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-row max-[1024px]:flex-col gap-8">
          
          {/* Left Side - Smaller Images */}
          <div className="w-1/4 max-[1024px]:w-full max-[1024px]:order-2 space-y-4">
            {Object.keys(visionaryData).map((key) => {
              const person = getPersonData(key);
              const isSelected = selectedPerson === key;
              
              return (
                <div 
                  key={key}
                  onClick={() => handlePersonSelect(key)}
                  className={`cursor-pointer transition-all duration-300 ${
                    isSelected ? 'opacity-50' : 'hover:opacity-80'
                  }`}
                >
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="w-full h-32 bg-gray-200 rounded-lg mb-3 flex items-center justify-center">
                      <div className="text-center text-gray-600 text-xs">
                        <div className="w-16 h-12 bg-gray-300 rounded-lg mx-auto mb-2"></div>
                        <div className="text-gray-500">{person.name}</div>
                      </div>
                    </div>
                    <h4 className={`text-xs font-semibold ${
                      isSelected ? 'text-gray-400' : 'text-gray-700'
                    }`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {person.name}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center - Main Image Area */}
          <div className="w-1/2 max-[1024px]:w-full max-[1024px]:order-1">
  <div className="relative">
    {/* Main Title */}
    <div className="text-center mb-8">
      <h2 className="text-[#d16f52] text-2xl font-bold mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        FROM THE
      </h2>
      <h2 className="text-[#d16f52] text-4xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        VISIONARIES OF YUU
      </h2>
    </div>

    {/* Main Image with Semi-Circle Background */}
    <div className="relative flex justify-center items-center z-20">
      {/* Circular Background */}
      <div 
        className="absolute w-80 h-96 bg-[#d16f52] rounded-t-full"
      ></div>

      {/* Main Portrait */}
      <img 
        src={getPersonData(selectedPerson).image}
        alt={getPersonData(selectedPerson).name}
        className="z-10 relative w-80 h-80 relative top-8 rounded-lg"
      />
    </div>
  </div>
</div>

          {/* Right Side - Details */}
          <div className="w-1/4 max-[1024px]:w-full max-[1024px]:order-3">
            <div className="space-y-6">
              <div>
                <h3 className="text-[#d16f52] text-2xl font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {getPersonData(selectedPerson).name}
                </h3>
                <p className="text-[#a97c6d] text-lg mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {getPersonData(selectedPerson).title}
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-[#513335] text-sm leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {getPersonData(selectedPerson).description}
                </p>
              </div>

              <button className="py-3 px-8 border border-[#d16f52] text-[#d16f52] rounded-lg font-semibold hover:bg-[#d16f52] hover:text-white transition-colors">
                KNOW MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AwardsSection = () => (
  <section className="w-full bg-[#bba24c] py-20 px-4 flex flex-col items-center justify-center">
    <h2
      className="text-white text-3xl max-[768px]:text-2xl font-semibold text-center mb-4 tracking-wider"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      AWARDS & ACCOMPLISHMENTS
    </h2>
    <p
      className="text-white text-center max-w-3xl mx-auto mb-12 text-base max-[768px]:text-sm"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy
      nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
      wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
      lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
      iriure dolor in hendrerit in vulputate velit
    </p>
    <div className="w-full max-w-6xl flex flex-row max-[1024px]:flex-col gap-8 items-stretch justify-center mx-auto">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="flex-1 bg-[#c7b46a] rounded-2xl flex flex-col items-center justify-center p-8 max-[1024px]:w-full max-[768px]:p-6 mb-0"
        >
          {/* SVG Icon */}
          <div className="mb-6">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 6C20 6 22.5 13.5 30 13.5C37.5 13.5 35 21 35 21C35 21 37.5 28.5 30 28.5C22.5 28.5 20 36 20 36C20 36 17.5 28.5 10 28.5C2.5 28.5 5 21 5 21C5 21 2.5 13.5 10 13.5C17.5 13.5 20 6 20 6Z"
                stroke="#fff7c2"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
          <p
            className="text-white text-center text-base max-[768px]:text-sm"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
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
