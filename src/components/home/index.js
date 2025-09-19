import Tablet from "./Tablet";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import Testimonials from "../Testimonials";
import ImageHoverSection from "../ImageHover";
import CardCarousel from "../LatestCarousel";
import ZoomHoverImage from "../ImagePanning";
import { useRouter } from "next/router";

const index = () => {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const router = useRouter();

  const onMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width; // 0 → 1
    const relY = (e.clientY - rect.top) / rect.height;

    const maxX = imageRef.current.offsetWidth - rect.width;
    const maxY = imageRef.current.offsetHeight - rect.height;

    const moveX = -relX * maxX;
    const moveY = -relY * maxY;

    gsap.to(imageRef.current, {
      x: moveX,
      y: moveY,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  const onLeave = () => {
    gsap.to(imageRef.current, {
      x: 0,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    });
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="overflow-x-hidden">
      <div className="relative w-full h-screen">
        <video
          ref={videoRef}
          className="w-full h-full object-cover hidden desktop:block"
          src="/images/desktop-banner.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <video
          ref={videoRef}
          className="w-full h-full block desktop:hidden object-cover"
          src="/images/mob-banner.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Mute / Unmute Button */}
        <button
          onClick={toggleMute}
          className="absolute bottom-6 right-6 bg-black/20 text-white p-3 rounded-full shadow-lg"
        >
          {muted ? (
            <img className="w-8 h-8" src="/images/mute.png" />
          ) : (
            <img className="w-8 h-8" src="/images/music.png" />
          )}
        </button>
      </div>

      {/* Second Section of Home Page */}

      <div className="relative pb-10 desktop:pb-0 w-full bg-[#f7f4ed]">
        <Tablet />
        <div className="flex flex-col desktop:flex-row items-center w-full gap-x-16">
          <img
            className="w-full desktop:w-[50%] pr-3 desktop:pr-0"
            src="/images/Home-1.png"
          />
          <div className="w-full px-4 pt-4 desktop:pt-8 desktop:px-20 desktop:w-1/2">
            <h3 className="mb-4 desktop:mb-8 uppercase leading-10">
              Welcome to YUU by Nahar Where Urban Living Meets Inspired
              Lifestyle
            </h3>
            <small className="">
              YUU by Nahar project is spanning 2 lacs sqft. of
              built up area of organised retail, restaurants,
              studio apartments and many more.
            </small>
          </div>
        </div>

        <div className="flex flex-col desktop:flex-row items-center w-full gap-x-16">
          <div className="hidden desktop:block">
            <p className="text-end flex w-[55%] ml-auto mb-10">
              An integration of premium residences, high-street retail and world
              class amenities, it’s destined to be the centerpiece of
              conversation.
            </p>
            <button onClick={() => router.push("/about")} className="drop-shadow-xl shadow-lg shadow-white bg-[#fcf9f2] ml-auto flex rounded-full px-4 py-1 uppercase text-sm">
              Know More
            </button>
          </div>
          <img
            className="w-full desktop:w-[50%] pl-3 mt-4 desktop:mt-0 desktop:pl-0"
            src="/images/Home-2.png"
          />
          <div className="block desktop:hidden">
            <small className="text-end w-full flex ml-auto my-4">
              An integration of premium residences, high-street retail and world
              class amenities, it’s destined to be the centerpiece of
              conversation.
            </small>
            <button onClick={() => router.push("/about")} className="drop-shadow-xl shadow-lg shadow-white bg-[#fcf9f2] ml-auto flex rounded-full px-4 py-1 uppercase text-sm">
              Know More
            </button>
          </div>
        </div>

        <div className="flex flex-col desktop:flex-row items-center w-full gap-x-16">
          <img
            className="w-full desktop:w-[50%] pr-3 desktop:pr-0"
            src="/images/Home-1.png"
          />
          <div className="w-full px-4 pt-4 desktop:pt-8 desktop:px-20 desktop:w-1/2">
            <h3 className="mb-4 desktop:mb-8 uppercase leading-10">
              THE LEGACY OF
              NAHAR’S GROUP
            </h3>
            <small className="">
              From residential townships and
              commercial spaces to healthcare,
              education, and philanthropy. Nahar
              Group has shaped the skyline and
              soul of Mumbai for over five decades.
            </small>
            <button className="drop-shadow-xl shadow-lg shadow-white bg-[#fcf9f2] mt-10 mr-auto flex rounded-full px-4 py-1 uppercase text-sm">
              Know More
            </button>
          </div>
        </div>

      </div>

      {/* Third Section of Home Page */}
      <div className="flex flex-col bg-[#f7f4ed] desktop:flex-row pb-10 desktop:pt-20 relative px-4 desktop:px-16 justify-center items-center">
        <div className="absolute top-0 drop-shadow-xl shadow-lg shadow-white desktop:top-20 left-0 bg-[#fcf9f2] rounded-e-full py-3 w-60 desktop:w-72 flex justify-end">
          <h1 className="text-black mr-16">
            YUU
            <br /> NOVA
          </h1>
        </div>
        <div className="w-full mt-40 mb-7 desktop:mt-48 desktop:w-1/4 desktop:mb-16 space-y-6 desktop:px-6">
          <h2>
            Your Dream <br /> Space Awaits
          </h2>
          <p className="text-orange-950">
            A home is where your story begins, reflecting who you are and what
            you aspire to be. It’s a space that grows with you, inspires you,
            and makes every moment extraordinary.
          </p>
        </div>

        <div className="w-full rounded-t-full h-[400px] desktop:w-[45%] desktop:h-[600px] relative">
          <ZoomHoverImage
            src="/images/Yuu-Nova.webp"
            alt="Yuu Nova"
            className="w-full h-full rounded-t-full"
          />
        </div>

        <div className="w-full desktop:w-1/4 space-y-6 desktop:space-y-12 mt-5 desktop:mt-52 px-3 desktop:px-0 desktop:pl-8">
          <p>
            At YUU Nova, smart layouts, modern amenities, and thoughtful details
            are a prerequisite.
          </p>
          <p className="text-end">
            Designed with the contemporary lifestyle in mind, the apartments in
            YUU Nova are an excellent example of modern comfort.
          </p>
          <button className="drop-shadow-xl shadow-lg shadow-white bg-[#fcf9f2] ml-auto flex rounded-full px-4 py-1 uppercase text-sm">
            Know More
          </button>
        </div>
      </div>

      {/* Fourth Section of Homepage */}

      <ImageHoverSection />

      {/* Fifth Section of Home Page */}
      <div className="flex flex-col bg-[#fcf8f0] desktop:flex-row pb-10 desktop:pb-16 desktop:pt-20 relative px-4 desktop:px-16 justify-center items-center">
        <div className="absolute top-0 drop-shadow-xl shadow-lg shadow-white desktop:top-20 left-0 bg-[#fcf9f2] rounded-e-full py-3 w-60 desktop:w-72 flex justify-end">
          <h1 className="text-black mr-16">
            YUU
            <br /> LUNA
          </h1>
        </div>
        <div className="w-full mt-40 mb-7 desktop:mt-48 desktop:w-1/4 desktop:mb-16 space-y-6 desktop:px-6">
          <h2>
            A GATEWAY TO <br />
            THE FUTURE
          </h2>
          <p className="text-orange-950">
            A shopping destination
            curated for YUU where luxury,
            style, and convenience meet.
            Let’s bring brands that align
            with your desires.
          </p>
        </div>

        <div className="w-full rounded-t-full h-[400px] desktop:w-[45%] desktop:h-[600px] relative">
          <ZoomHoverImage
            src="/images/Yuu-Nova.webp"
            alt="Yuu Nova"
            className="w-full h-full rounded-t-full"
          />
        </div>

        <div className="w-full desktop:w-1/4 space-y-6 desktop:space-y-12 mt-5 desktop:mt-52 px-3 desktop:px-0 desktop:pl-8">
          <p>
            Located in a high-footfall,
            high-visibility pocket of
            Chandivali, these spaces are
            ideal for premium retail.
          </p>
          <p className="text-end">
            From designer apparel and gold
            jewellery to lifestyle and curated
            concept stores. A prime
            destination where your brand
            can truly stand out.
          </p>
          <button className="drop-shadow-xl shadow-lg shadow-white bg-[#fcf9f2] ml-auto flex rounded-full px-4 py-1 uppercase text-sm">
            Know More
          </button>
        </div>
      </div>

      {/* Testimonials */}

      <Testimonials />

      {/* Sixth Section of Homepage */}

      <div className="relative bg-[#f7f4ec] overflow-hidden flex flex-col-reverse px-2 gap-y-4 desktop:px-0 desktop:flex-row items-center pt-6">
        <img src="/images/Design-1.png" className="hidden desktop:block absolute left-[20%] top-[10%] w-1/2" />
        <img className="w-full desktop:w-1/2" src="/images/Above-footer.png" />
        <div className="flex flex-col w-full desktop:w-1/2 text-center">
          <h1 className="text-center text-[40px] desktop:text-[60px]">
            BE A PART OF THE FUTURE
          </h1>
          <small className="mt-6">
            Secure your place in this exceptional township today; experience the
            best
          </small>
          <small className="mb-6">
            of urban living, retail, and lifestyle.
          </small>
          <div className="flex mx-auto gap-x-4">
            <a href="#form" className="drop-shadow-xl cursor-pointer shadow-sm shadow-white bg-[#f7f4ec] flex rounded-full px-4 py-2 uppercase text-sm">
              Send Enquiry
            </a>
            <a href="#form" className="drop-shadow-xl cursor-pointer shadow-sm shadow-white bg-[#f7f4ed] flex rounded-full px-4 py-2 uppercase text-sm">
              Book a visit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
