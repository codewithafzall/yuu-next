import Tablet from "./Tablet";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Testimonials from "../Testimonials";
import ImageHoverSection from "../ImageHover";
import CardCarousel from "../LatestCarousel";

const index = () => {
  const containerRef = useRef(null); // Container for the whole section
  const imageRef = useRef(null); // Reference for the image to apply tilt and scale
  const textRef = useRef(null); // Reference for the text to apply movement
  const otherElementsRef = useRef([]); // Array of other elements to follow cursor

  // Apply mouse movement for tilt effect and scale down on hover
  const handleMouseMove = (e) => {
    const { current: container } = containerRef;
    const { left, top, width, height } = container.getBoundingClientRect();

    // Get mouse position relative to the container
    const x = e.clientX - left;
    const y = e.clientY - top;

    // Calculate center of the container
    const centerX = width / 2;
    const centerY = height / 2;

    // Calculate tilt effect intensity
    const tiltX = ((y - centerY) / centerY) * 10; // Tilt on Y axis
    const tiltY = ((x - centerX) / centerX) * -10; // Tilt on X axis

    // Apply tilt to the image
    gsap.to(imageRef.current, {
      rotationX: tiltX,
      rotationY: tiltY,
      scale: 0.95, // Slightly scale down the image on hover
      transformPerspective: 1000,
      transformOrigin: "center",
      duration: 0.3,
    });

    // Apply the movement to the text and other elements
    otherElementsRef.current.forEach((el) => {
      gsap.to(el, {
        x: (x - centerX) / 10, // Move elements in sync with cursor on X axis
        y: (y - centerY) / 10, // Move elements in sync with cursor on Y axis
        ease: "power3.out",
        duration: 0.3,
      });
    });
  };

  // Reset on mouse leave
  const handleMouseLeave = () => {
    gsap.to(imageRef.current, {
      rotationX: 0,
      rotationY: 0,
      scale: 1, // Reset image scale to normal
      duration: 0.5,
      ease: "power3.out",
    });

    // Reset the position of all other elements
    otherElementsRef.current.forEach((el) => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    });
  };

  useEffect(() => {
    // Attach event listeners for mousemove and mouseleave
    const container = containerRef.current;
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup event listeners
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div>
      <img
        className="w-full h-screen object-cover"
        src="/images/banner-home.jpg"
      />

      {/* Second Section of Home Page */}

      <div className="relative w-full bg-[#fef9f3]">
        <Tablet />
        <div className="flex items-center w-full gap-x-16">
          <img className="w-[60%]" src="/images/Home-1.png" />
          <div className="w-1/4">
            <h3 className="mb-4 leading-10">
              Welcome to YUU by Nahar Where Urban Living Meets Inspired
              Lifestyle
            </h3>
            <small className="">
              A vibrant, integrated development in the heart of Chandivali,
              combining fully furnished studio apartments, organised retail,
              culinary delights, and dynamic community spaces.
            </small>
          </div>
        </div>
        <div className="flex items-center w-full gap-x-16">
          <div>
            <p className="text-end w-2/6 flex ml-auto mb-6">
              An integration of premium residences, high-street retail and world
              class amenities, it’s destined to be the centerpiece of
              conversation.
            </p>
            <button className="border-2 ml-auto flex border-[#513335] rounded-full px-4 py-1 uppercase text-sm">
              Know More
            </button>
          </div>
          <img className="w-[60%]" src="/images/Home-2.png" />
        </div>
      </div>

      {/* Third Section of Home Page */}
      <div
        className="flex relative px-28 justify-center items-center"
        ref={containerRef}
      >
        <div
          className="absolute top-0 left-0 border-2 border-[#d06d52] rounded-e-full py-3 w-72 flex justify-end"
        >
          <h1 className="text-black mr-16">
            YUU
            <br /> NOVA
          </h1>
        </div>
        <div
          className="w-1/4 mb-16 space-y-6 px-6"
          ref={(el) => otherElementsRef.current.push(el)}
        >
          <h2>
            Your Dream <br /> Space Awaits
          </h2>
          <p className="text-orange-950">
            A home is where your story begins, reflecting who you are and what
            you aspire to be. It’s a space that grows with you, inspires you,
            and makes every moment extraordinary.
          </p>
        </div>

        <img
          className="w-2/4 pt-6 pb-10 h-screen object-contain" // Image will fill the container
          src="/images/Yuu-Nova.png"
          ref={imageRef} // Reference to apply animations
        />

        <div
          className="w-1/4 space-y-12 mt-52 px-3"
          ref={(el) => otherElementsRef.current.push(el)}
        >
          <p>
            At YUU Nova, smart layouts, modern amenities, and thoughtful details
            are a prerequisite.
          </p>
          <p className="text-end">
            Designed with the contemporary lifestyle in mind, the apartments in
            YUU Nova are an excellent example of modern comfort.
          </p>
          <button className="border-2 ml-auto flex border-[#513335] rounded-full px-4 py-1 uppercase text-sm">
            Know More
          </button>
        </div>
      </div>

      {/* Fourth Section of Homepage */}

      <ImageHoverSection/>

      <img className="w-full h-screen object-fill" src="/images/Yuu-luna.png" />

      {/* Fifth Section of Homepage */}

      <CardCarousel/>
      {/* Testimonials */}

      <Testimonials />

      {/* Sixth Section of Homepage */}

      <div className="flex items-center pt-24">
        <img className="w-1/2" src="/images/Above-footer.png" />
        <div className="flex flex-col w-1/2 text-center">
          <h1 className="text-center">BE A PART OF THE FUTURE</h1>
          <small className="mt-6">
            Secure your place in this exceptional township today; experience the
            best
          </small>
          <small className="mb-6">
            of urban living, retail, and lifestyle.
          </small>
          <div className="flex mx-auto gap-x-4">
            <button className="border-2 flex border-[#513335] rounded-full px-4 py-2 uppercase text-sm">
              Send Enquiry
            </button>
            <button className="border-2 flex border-[#513335] rounded-full px-4 py-2 uppercase text-sm">
              Book a visit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
