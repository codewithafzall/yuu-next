import { useRef, useEffect, useState } from "react";
import BlogCard from "./BlogCard";

/**
 * Responsive BlogSlider (robust)
 * Props:
 *  - posts: []
 *  - perView: { mobile:1, tablet:2, desktop:2 }  // you can pass any numbers
 *
 * Usage:
 *  <BlogSlider posts={posts} perView={{ mobile:1, tablet:2, desktop:2 }} />
 */
export default function BlogSlider({ posts = [], perView = { mobile: 1, tablet: 2, desktop: 2 } }) {
  const sliderRef = useRef(null);
  const [currentPerView, setCurrentPerView] = useState(perView.mobile || 1);

  // arrow src + fallback
  const arrowSrc = "/images/up.png";
  const fallbackArrow = "/mnt/data/A_collection_of_four_high-resolution_digital_photo.png";

  // compute which perView to use based on breakpoints (using matchMedia)
  const computePerView = () => {
    if (typeof window === "undefined") return perView.mobile || 1;
    // desktop >= 1024, tablet >= 768
    if (window.matchMedia("(min-width:1024px)").matches && perView.desktop) return perView.desktop;
    if (window.matchMedia("(min-width:768px)").matches && perView.tablet) return perView.tablet;
    return perView.mobile || 1;
  };

  // set CSS variable --perView on the slider element (only once per change)
  const setCssPerView = (n) => {
    const el = sliderRef.current;
    if (!el) return;
    el.style.setProperty("--perView", String(n));
  };

  // update currentPerView and CSS var, called on resize / initial mount
  const updatePerView = () => {
    const n = computePerView();
    setCurrentPerView(n);
    setCssPerView(n);
  };

  useEffect(() => {
    updatePerView();

    // ResizeObserver to react to layout changes (container width changes)
    let ro;
    const el = sliderRef.current;
    if (el && typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(() => {
        // when container resizes, ensure perView css var is set (keeps slides consistent)
        setCssPerView(computePerView());
      });
      ro.observe(el);
    }

    // listen to breakpoint changes too (cover orientation and dynamic resizes)
    const mqDesktop = window.matchMedia("(min-width:1024px)");
    const mqTablet = window.matchMedia("(min-width:768px)");
    const handleMQ = () => updatePerView();
    mqDesktop.addEventListener?.("change", handleMQ);
    mqTablet.addEventListener?.("change", handleMQ);
    window.addEventListener("resize", handleMQ);

    return () => {
      ro?.disconnect();
      mqDesktop.removeEventListener?.("change", handleMQ);
      mqTablet.removeEventListener?.("change", handleMQ);
      window.removeEventListener("resize", handleMQ);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [perView, posts.length]);

  // Scroll by one page (container width / currentPerView)
  const scrollSlider = (dir = "next") => {
    const el = sliderRef.current;
    if (!el) return;
    const visible = el.clientWidth || el.getBoundingClientRect().width || 0;
    const amount = visible / Math.max(1, currentPerView);
    el.scrollBy({ left: dir === "next" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <section className="py-6">
      <div className="max-w-full mx-auto px-4">
        <div className="flex items-center gap-1 desktop:gap-4">
          {/* Left button */}
          <button onClick={() => scrollSlider("prev")} aria-label="Previous" className="pr-1">
            <img
              src={arrowSrc}
              alt="prev"
              className="w-8 h-8 -rotate-90"
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = fallbackArrow; }}
            />
          </button>

          {/* Slider container: set --perView via JS; slides read from that variable */}
          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory py-2 no-scrollbar flex-1"
            /* default CSS var fallback (in case script fires after render) */
            style={{ "--perView": String(perView.mobile || 1) }}
          >
            {posts.map((post) => (
              <div
                key={post.slug}
                className="snap-start shrink-0 "
                /* one tiny inline style per slide — uses the CSS variable for exact division */
                style={{ flex: "0 0 calc(100% / var(--perView))" }}
              >
                <BlogCard post={post} />
              </div>
            ))}
          </div>

          {/* Right button */}
          <button onClick={() => scrollSlider("next")} aria-label="Next" className="pl-1">
            <img
              src={arrowSrc}
              alt="next"
              className="w-8 h-8 rotate-90"
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = fallbackArrow; }}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
