import { useRef, useCallback, useState } from "react";

function ZoomHoverImage({ src, images = [], alt = "", className = "" }) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const isCarousel = images.length > 0;
  const activeImages = isCarousel ? images : [src]; // normalize

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

  // ---- Swipe for carousel ----
  const handleTouchStart = (e) => {
    if (!isCarousel) return;
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e) => {
    if (!isCarousel) return;
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (!isCarousel) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50 && current < activeImages.length - 1) {
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
      {/* Image(s) */}
      <div
        className={`flex h-full w-full transition-transform duration-500 ease-in-out ${
          isCarousel ? "" : "justify-center"
        }`}
        style={{
          transform: isCarousel ? `translateX(-${current * 100}%)` : "none",
        }}
      >
        {activeImages.map((img, index) => (
          <img
            key={index}
            ref={index === current ? imageRef : null}
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

      {/* Dots only if multiple images */}
      {isCarousel && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {activeImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                current === index ? "bg-[#d06d52]" : "bg-white"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ZoomHoverImage;
