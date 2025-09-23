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
      el: scrollRef.current,
      smooth: true,
      multiplier: 1,
    });

    return () => scroll.destroy();
  }, []);

  // Restrict right-click, inspect mode, print screen, drag images
  useEffect(() => {
    // Disable right click
    const handleContextMenu = (e) => e.preventDefault();

    // Disable key shortcuts
    const handleKeyDown = (e) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key.toUpperCase())) ||
        (e.ctrlKey && e.key.toUpperCase() === "U")
      ) {
        e.preventDefault();
        e.stopPropagation();
      }

      // Block PrintScreen
      if (e.key === "PrintScreen") {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    // Disable image dragging
    const handleDragStart = (e) => {
      if (e.target.tagName === "IMG") {
        e.preventDefault();
      }
    };

    // Attach
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("dragstart", handleDragStart);

    // Cleanup
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("dragstart", handleDragStart);
    };
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
