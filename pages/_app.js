'use client';

import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import MasterLayout from '../src/components/layouts/master';
import "../src/styles/globals.css";

function MyApp({ Component, pageProps }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,  // ← your scroll container
      smooth: true,           // ← enable smooth
      multiplier: 1,      
    });

    return () => scroll.destroy();  // cleanup on unmount
  }, []);

  return (
    <MasterLayout>
      <div data-scroll-container ref={scrollRef}>
        <Component {...pageProps} />
      </div>
    </MasterLayout>
  );
}

export default MyApp;
