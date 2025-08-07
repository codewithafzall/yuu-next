import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CardCarousel = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
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

    return () => ScrollTrigger.getAll().forEach(st => st.kill());
  }, []);

  return (
    <div ref={containerRef} className="w-full overflow-hidden py-20 bg-[#fef9f3]">
       <div
          className="border-2 border-[#d06d52] rounded-e-full py-3 w-72 flex justify-end"
        >
          <h1 className="mr-16">
            LATEST
          </h1>
        </div>
      <div ref={trackRef} className="flex gap-x-10 mt-10">
        <div className="flex-shrink-0 cursor-pointer w-[40vw] h-[70vh] bg-red-800 flex items-center justify-center rounded-2xl shadow-lg">
          <h1 className="text-8xl">UPDATES</h1>
        </div>
        <div className="flex-shrink-0 cursor-pointer w-[50vw] h-[70vh] bg-slate-300 flex items-center justify-center rounded-2xl shadow-lg">
          <h1 className="text-8xl">SOCIAL</h1>
        </div>
        <div className="flex-shrink-0 cursor-pointer w-[60vw] h-[70vh] bg-[#513335] flex items-center justify-center rounded-2xl shadow-lg">
          <h1 className="text-8xl">ANALYTICS</h1>
        </div>
        <div className="flex-shrink-0 cursor-pointer w-[30vw] h-[70vh] bg-red-800 flex items-center justify-center rounded-2xl shadow-lg">
          <h1 className="text-8xl">INSIGHTS</h1>
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
