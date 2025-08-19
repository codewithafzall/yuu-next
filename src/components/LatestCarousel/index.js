import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CardCarousel = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 768);
    checkWidth();
    window.addEventListener('resize', checkWidth);

    const container = containerRef.current;
    const track = trackRef.current;

    const updateAnimation = () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
      gsap.set(track, { x: 0 });

      if (window.innerWidth >= 768) {
        const scrollWidth = track.scrollWidth - container.clientWidth;
        gsap.to(track, {
          x: -scrollWidth,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: '50% 50%',
            end: () => `+=${track.scrollWidth}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });
      }
    };

    updateAnimation();
    window.addEventListener('resize', updateAnimation);

    return () => {
      window.removeEventListener('resize', checkWidth);
      window.removeEventListener('resize', updateAnimation);
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div className="w-full py-20 bg-[#fef9f3]">
      {/* Heading stays outside carousel */}
      <div className="drop-shadow-2xl shadow-xl shadow-white desktop:top-20 left-0 bg-[#fcf9f2] rounded-e-full py-3 w-60 desktop:w-72 flex justify-end">
        <h1 className="mr-10 desktop:mr-16">LATEST</h1>
      </div>

      {/* Scroll area */}
      <div
        ref={containerRef}
        className="w-full overflow-x-auto desktop:overflow-hidden mt-10"
      >
        <div ref={trackRef} className="flex gap-x-10">
          <div className="flex-shrink-0 cursor-pointer w-[80vw] desktop:w-[40vw] h-[50vh] desktop:h-[70vh] bg-red-800 flex items-center justify-center rounded-2xl shadow-lg">
            <h1 className="text-4xl desktop:text-8xl">UPDATES</h1>
          </div>
          <div className="flex-shrink-0 cursor-pointer w-[100vw] desktop:w-[50vw] h-[50vh] desktop:h-[70vh] bg-slate-300 flex items-center justify-center rounded-2xl shadow-lg">
            <h1 className="text-4xl desktop:text-8xl">SOCIAL</h1>
          </div>
          <div className="flex-shrink-0 cursor-pointer w-[100vw] desktop:w-[60vw] h-[50vh] desktop:h-[70vh] bg-[#513335] flex items-center justify-center rounded-2xl shadow-lg">
            <h1 className="text-4xl desktop:text-8xl">ANALYTICS</h1>
          </div>
          <div className="flex-shrink-0 cursor-pointer w-[96vw] desktop:w-[30vw] h-[50vh] desktop:h-[70vh] bg-red-800 flex items-center justify-center rounded-2xl shadow-lg">
            <h1 className="text-4xl desktop:text-8xl">INSIGHTS</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
