import React from "react";
import Tablet from "./Tablet";
import DynamicHeading from "./DynamicHeading";
// import Footer from "../Components/Footer";
import Image from "next/image";

const Bedroom = "/images/Bedroom.png";
const Building = "/images/Asset-1.png";
const Building2 = "/images/Asset-2.png";
const Gallery = "/images/Gallery.png";

const Home = () => {
  const messages = [
    "Keeping you at the\ncenter of everything",
    "Delivering excellence\nevery day",
    "Innovating for a\nbrighter tomorrow",
  ];

  const messages2 = ["Luxurious Lifestyle", "Beautiful Scenary"];

  const heading = ["YUU LUNA", "YUU NAHAR"];

  const images = [Building, Building2];

  const para = [
    [
      "Discover a world where comfort meets elegance. Our real estate platform is designed to help you find your perfect home, whether you're looking for a cozy apartment, a spacious family home, or a luxurious villa.",
    ],
    [
      "We pride ourselves on offering personalized services that cater to your unique needs. With years of experience in the real estate market, we understand what it takes to find the perfect match.",
    ],
  ];

  return (
    <>
      <section id="hero" className="overflow-visible">
        <div className="pl-4 md:pl-[5%] z-10">
          <DynamicHeading messages={messages} color="#513335" />
        </div>
      </section>
      <div className="flex justify-center items-center relative z-30 -mb-12 md:mb-0">
        <Tablet />
      </div>
      <div className="bedroom-carousel flex justify-between items-center relative bottom-10 bg-[#d16f52] w-full -z-10 
                max-[768px]:flex-col max-[768px]:bottom-0">
  <img src={Bedroom} className="w-1/2 max-[768px]:w-full" />
  <div className="text-white w-1/2 px-[10%] max-[768px]:w-full max-[768px]:px-6 max-[768px]:text-center max-[768px]:mt-6">
    <h2 className="circula text-4xl max-[768px]:text-2xl">Lavish Bedroom</h2>
    <p className="text-sm mt-5 max-[768px]:mt-3">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
      nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
      volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
      ullamcorper
    </p>
  </div>
</div>

<div className="bg-[#e0d1b6] w-full bottom-10 relative flex items-center 
                max-[768px]:flex-col max-[768px]:bottom-0 max-[768px]:py-6 max-[768px]:px-6">
  <div className="w-1/2 flex pl-[5%] max-[768px]:w-full max-[768px]:pl-0 max-[768px]:px-6 max-[768px]:mb-6">
    <DynamicHeading
      messages={messages2}
      para={para}
      extraHeadings={heading}
      color="#513335"
    />
  </div>
  <div className="desktop:w-1/2 flex gap-x-10 overflow-x-hidden 
                  max-[768px]:w-full max-[768px]:gap-x-4 max-[768px]:overflow-x-auto">
    {images.map((image, index) => (
      <img
        key={index}
        className={`laptop:h-[75vh] desktop:h-[100vh] ${
          index === 0 ? "" : "opacity-50"
        } object-cover max-[768px]:h-[250px]`}
        src={image}
        alt={`Slide ${index}`}
      />
    ))}
  </div>
</div>

<div className="bg-[#e0d1b6] w-full bottom-10 relative pt-16 max-[768px]:pt-10 max-[768px]:bottom-0 z-20">
  <h2 className="text-4xl circula pl-[5%] max-[768px]:text-2xl max-[768px]:pl-6">amenties that amaze</h2>
  <p className="w-1/4 text-sm mt-5 pl-[5%] max-[768px]:w-[90%] max-[768px]:pl-6 max-[768px]:mx-auto">
    We pride ourselves on offering personalized services that cater to
    your unique needs. With years of experience in the real estate market,
    we understand what it takes to find the perfect match.
  </p>
  <div className="grid grid-cols-4 gap-x-4 mt-16 w-5/6 mx-auto laptop:h-[300px] desktop:h-[350px] max-[768px]:grid-cols-2 max-[768px]:gap-y-6 max-[768px]:mt-10 relative z-30 -mb-24 max-[768px]:-mb-12">
    <div className="laptop:w-56 laptop:h-[400px] desktop:w-72 desktop:h-[500px] bg-white shadow-md rounded-3xl max-[768px]:w-full max-[768px]:h-[200px]">
      <img src="/images/amen1.png" alt="ameneties" className="w-full rounded-3xl desktop:h-[500px] laptop:h-[400px] max-[768px]:h-[200px]"/>
    </div>
    <div className="laptop:w-56 laptop:h-[400px] desktop:w-72 desktop:h-[500px] bg-white shadow-md rounded-3xl max-[768px]:w-full max-[768px]:h-[200px]">
      <img src="/images/amen2.png" alt="ameneties" className="w-full rounded-3xl desktop:h-[500px] laptop:h-[400px] max-[768px]:h-[200px]"/>
    </div>
    <div className="laptop:w-56 laptop:h-[400px] desktop:w-72 desktop:h-[500px] bg-white shadow-md rounded-3xl max-[768px]:w-full max-[768px]:h-[200px]">
      <img src="/images/amen3.png" alt="ameneties" className="w-full rounded-3xl desktop:h-[500px] laptop:h-[400px] max-[768px]:h-[200px]"/>
    </div>
    <div className="laptop:w-56 laptop:h-[400px] desktop:w-72 desktop:h-[500px] bg-white shadow-md rounded-3xl max-[768px]:w-full max-[768px]:h-[200px]">
      <img src="/images/amen4.png" alt="ameneties" className="w-full rounded-3xl desktop:h-[500px] laptop:h-[400px] max-[768px]:h-[200px]"/>
    </div>
  </div> 
</div>

<div className="bg-[#b4a255] h-auto w-full z-10 relative pt-24 max-[768px]:pt-12">
  <div className="w-2/4 mx-auto text-white mt-[8%] max-[768px]:w-[90%] max-[768px]:mt-10">
    <h2 className="circula text-4xl text-center max-[768px]:text-2xl">
      see it, envision it, live it
    </h2>
    <p className="text-center text-sm mt-4">
      We pride ourselves on offering personalized services that cater to
      your unique needs. With years of experience in the real estate
      market, we understand what it takes to find the perfect match.
    </p>
    <button className="border-2 border-[#ffffff] flex mx-auto rounded-full text-xs px-6 py-2 mt-5">
      Know more
    </button>
  </div>
  <img className="w-[500px] mx-auto mt-7 max-[768px]:w-[90%]" src={Gallery} />
  <div className="text-white py-10 flex gap-x-10 w-full justify-between items-center 
                  max-[768px]:flex-col max-[768px]:gap-y-6">
    <div className="w-[30%] max-[768px]:w-[90%]">
      <h2 className="text-4xl circula pl-[5%] max-[768px]:text-2xl max-[768px]:pl-0">testimonials</h2>
      <p className="text-sm mt-5 pl-[5%] max-[768px]:pl-0">
        We pride ourselves on offering personalized services that cater to
        your unique needs. With years of experience in the real estate
        market, we understand what it takes to find the perfect match.
      </p>
    </div>
    <div className="flex gap-x-20 w-[70%] max-[768px]:flex-col max-[768px]:w-[90%] max-[768px]:gap-y-6">
      <div className="bg-[#e0d1b6] p-10 rounded-3xl text-black text-sm flex justify-center items-center italic">
        <p>
          "I never thought finding the perfect home could be this easy!
          The team guided me through every step of the process, ensuring
          all my questions were answered. The property listings were
          accurate, and I couldn’t be happier with my new home. Highly
          recommended!"
        </p>
      </div>
      <div className="bg-[#e0d1b6] p-10 rounded-3xl text-black text-sm flex justify-center items-center italic">
        <p>
          "I never thought finding the perfect home could be this easy!
          The team guided me through every step of the process, ensuring
          all my questions were answered. The property listings were
          accurate, and I couldn’t be happier with my new home. Highly
          recommended!"
        </p>
      </div>
    </div>
  </div>
  <div className=" bg-[url('/images/Hero-2.png')] bg-cover bg-center bg-no-repeat w-full min-h-screen flex flex-col items-center justify-center max-[768px]:bg-[length:auto_100%] max-[768px]:px-6">
  <h1 className="text-center circula text-[#513335] text-4xl max-[768px]:text-2xl">
    be a part of the future.
    <br /> dont miss out on yuu by nahar
  </h1>
  <p className="text-[#513335] text-sm w-1/3 text-center mt-4 max-[768px]:w-full">
    We pride ourselves on offering personalized services that cater to
    your unique needs. With years of experience in the real estate
    market, we understand what it takes to find the perfect match.
  </p>
  <div className="flex gap-x-7 max-[768px]:flex-col max-[768px]:items-center max-[768px]:gap-y-4">
    <button className="border-2 border-[#513335] rounded-full text-xs px-6 py-2 mt-5">
      Send Enquiry
    </button>
    <button className="border-2 border-[#513335] rounded-full text-xs px-6 py-2 mt-5">
      Book a Visit
    </button>
  </div>
</div>
</div>

    </>
  );
};

export default Home;
