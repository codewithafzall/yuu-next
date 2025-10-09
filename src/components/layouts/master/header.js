import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter(); // ✅ Next.js router

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Hide / Show navbar on scroll
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // hide on scroll down
      } else {
        setShowNavbar(true); // show on scroll up
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  // Helper for active link
  const isActive = (path) => router.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="bg-transparent">
        <nav className="flex items-center justify-between py-7 pl-[5%] bg-transparent">
          {/* Logo */}
          <div>
            <a
              href="/"
            >
              <img src="/images/Logo.png" className="w-32 h-16" alt="Logo" />
            </a>
          </div>

          {/* Hamburger (mobile) */}
          <button
            onClick={toggleMenu}
            className="laptop:hidden w-12 h-10 p-2"
          >
            <span
              className={`block w-full h-1 bg-[#C46C4A] rounded transition-transform duration-300 ${isMenuOpen
                  ? "transform rotate-45 translate-y-2"
                  : "transform rotate-0"
                }`}
            ></span>
            <span
              className={`block w-full h-1 bg-[#C46C4A] rounded my-1 transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
            ></span>
            <span
              className={`block w-full h-1 bg-[#C46C4A] rounded transition-transform duration-300 ${isMenuOpen
                  ? "transform -rotate-45 -translate-y-2"
                  : "transform rotate-0"
                }`}
            ></span>
          </button>

          {/* Desktop Links */}
          <ul className="hidden laptop:flex bg-[#eddcc3] rounded-s-full py-4 px-10 space-x-8">
            <li>
              <a
                href="/"
                className={`uppercase relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:bg-[#C46C4A] after:rounded-sm after:transition-all after:duration-300 ${isActive("/") ? "after:w-full" : "after:w-0 hover:after:w-full"
                  }`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className={`uppercase relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:bg-[#C46C4A] after:rounded-sm after:transition-all after:duration-300 ${isActive("/about")
                    ? "after:w-full"
                    : "after:w-0 hover:after:w-full"
                  }`}
              >
                About yuu
              </a>
            </li>
            <li>
              <a
                href="/location"
                className={`uppercase relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:bg-[#C46C4A] after:rounded-sm after:transition-all after:duration-300 ${isActive("/location")
                    ? "after:w-full"
                    : "after:w-0 hover:after:w-full"
                  }`}
              >
                Location
              </a>
            </li>
            <li>
              <a
                href="#home"
                className={`uppercase relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:bg-[#C46C4A] after:rounded-sm after:transition-all after:duration-300 ${isActive("/latest")
                    ? "after:w-full"
                    : "after:w-0 hover:after:w-full"
                  }`}
              >
                Latest
              </a>
            </li>
            <li>
              <a
                href="/virtual-tour"
                className={`uppercase relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:bg-[#C46C4A] after:rounded-sm after:transition-all after:duration-300 ${isActive("/virtual-tour")
                    ? "after:w-full"
                    : "after:w-0 hover:after:w-full"
                  }`}
              >
                Virtual Tour
              </a>
            </li>
            <li>
              <a
                href="#faqs"
                className={`uppercase relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:bg-[#C46C4A] after:rounded-sm after:transition-all after:duration-300 ${isActive("/faqs")
                    ? "after:w-full"
                    : "after:w-0 hover:after:w-full"
                  }`}
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className={`uppercase relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:bg-[#C46C4A] after:rounded-sm after:transition-all after:duration-300 ${isActive("/contact")
                    ? "after:w-full"
                    : "after:w-0 hover:after:w-full"
                  }`}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Side Menu */}
        <div
          className={`fixed top-0 left-0 h-screen w-64 bg-[#EFEADC] text-[#432a2b] transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 z-50`}
        >
          <ul className="space-y-6 mt-7 text-xl px-6">
            <li><a href="/" className="uppercase">Home</a></li>
            <li><a href="/about" className="uppercase">About yuu</a></li>
            <li><a href="/location" className="uppercase">Location</a></li>
            <li><a href="#home" className="uppercase">Latest</a></li>
            <li><a href="/virtual-tour" className="uppercase">Virtual Tour</a></li>
            <li><a href="#faqs" className="uppercase">FAQs</a></li>
            <li><a href="/contact" className="uppercase">Contact Us</a></li>
          </ul>
        </div>

        {/* Backdrop */}
        {isMenuOpen && (
          <div
            onClick={toggleMenu}
            className="fixed inset-0 bg-black opacity-50 z-40"
          ></div>
        )}
      </div>
    </header>
  );
};

export default Header;
