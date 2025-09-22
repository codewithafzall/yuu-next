"use client";

import { useRef, useState } from "react";

const ImageReveal = ({ image1, image2 }) => {
    const containerRef = useRef(null);
    const [sliderPos, setSliderPos] = useState(50); // initial position in %

    const startDrag = (e) => {
        e.preventDefault();
        const container = containerRef.current;

        const moveHandler = (event) => {
            const rect = container.getBoundingClientRect();
            const x = event.clientX || event.touches[0].clientX;
            let newPos = ((x - rect.left) / rect.width) * 100;
            if (newPos < 0) newPos = 0;
            if (newPos > 100) newPos = 100;
            setSliderPos(newPos);
        };

        const stopHandler = () => {
            window.removeEventListener("mousemove", moveHandler);
            window.removeEventListener("mouseup", stopHandler);
            window.removeEventListener("touchmove", moveHandler);
            window.removeEventListener("touchend", stopHandler);
        };

        window.addEventListener("mousemove", moveHandler);
        window.addEventListener("mouseup", stopHandler);
        window.addEventListener("touchmove", moveHandler);
        window.addEventListener("touchend", stopHandler);
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full desktop:max-w-5xl mx-auto overflow-hidden select-none my-16 rounded-3xl"
        >
            {/* Bottom image */}
            <img src="/images/Night.webp" alt="Background" className="w-full h-auto block" />

            {/* Top image */}
            <div
                className="absolute top-0 left-0 h-full overflow-hidden"
                style={{ width: `${sliderPos}%` }}
            >
                <img src="/images/Day.webp" alt="Overlay" className="w-full h-full object-cover" />
            </div>

            {/* Slider */}
            <div
                onMouseDown={startDrag}
                onTouchStart={startDrag}
                className="absolute top-0 h-full left-1/2 -translate-x-1/2 flex items-center justify-center"
                style={{ left: `${sliderPos}%` }}
            >
                {/* The visible slider button */}
                <div className="w-6 h-6 bg-white rounded-full border-2 border-gray-400 shadow-lg cursor-ew-resize"></div>
            </div>
        </div>
    );
};

export default ImageReveal;
