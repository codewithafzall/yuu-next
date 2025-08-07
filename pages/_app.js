// pages/_app.js (or in your root client layout)
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
      {/* 
        Locomotive looks for either data-scroll-container 
        or the raw DOM node you passed in `el`.
      */}
      <div data-scroll-container ref={scrollRef}>
        <Component {...pageProps} />
      </div>
    </MasterLayout>
  );
}

export default MyApp;
