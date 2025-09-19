import { useRef, useCallback, useState } from "react";

function ZoomHoverImage({ images = [], alt = "", className = "" }) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // ---- Zoom Effect ----
  const onMove = useCallback((e) => {
    const container = containerRef.current;
    const img = imageRef.current;
    if (!container || !img) return;

    const rect = container.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const originX = (mouseX / rect.width) * 100;
    const originY = (mouseY / rect.height) * 100;

    img.style.transformOrigin = `${originX}% ${originY}%`;
  }, []);

  const onEnter = useCallback(() => {
    const img = imageRef.current;
    if (!img) return;
    img.style.transition = "none";
    img.style.transform = "scale(1.4)";
  }, []);

  const onLeave = useCallback(() => {
    const img = imageRef.current;
    if (!img) return;
    img.style.transition = "transform .2s";
    img.style.transform = "scale(1)";
    img.style.transformOrigin = "50% 50%";
  }, []);

  // ---- Swipe Handling ----
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50 && current < images.length - 1) {
      setCurrent(current + 1);
    }
    if (distance < -50 && current > 0) {
      setCurrent(current - 1);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={`relative overflow-hidden ${className}`}
      style={{ width: "100%", height: "100%" }}
    >
      {/* Image Slider */}
      <div
        className="flex h-full w-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            ref={index === current ? imageRef : null} // zoom only on active image
            src={img}
            alt={alt}
            className="w-full h-full object-cover cursor-pointer flex-shrink-0"
            style={{
              transform: "scale(1)",
              transformOrigin: "50% 50%",
              transition: "transform .2s",
              willChange: "transform",
            }}
            draggable={false}
          />
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-[#d06d52]" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default ZoomHoverImage;
