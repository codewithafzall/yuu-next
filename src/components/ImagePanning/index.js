import { useRef, useCallback } from "react";

function ZoomHoverImage({ src, alt = "", className = "" }) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

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

  return (
    <div
      ref={containerRef}
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={`relative overflow-hidden ${className}`}
      style={{ width: "100%", height: "100%" }}
    >
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className="w-full h-full object-cover cursor-pointer"
        style={{
          transform: "scale(1)",
          transformOrigin: "50% 50%",
          transition: "transform .2s",
          willChange: "transform",
        }}
        draggable={false}
      />
    </div>
  );
}
export default ZoomHoverImage;