import { useState, useEffect, useRef } from "react";
import { isMobile } from "react-device-detect";


const Header = () => {

  if (isMobile) {
    $(".nav-link").click(function (event) {
      if (!$(this).parent().hasClass("dropdown")) {
        // Close the navbar only if the clicked link is not part of a dropdown
        $("#navcolbtn").click();
      }
    });
  }

  const [navCollapsed, setNavCollapsed] = useState(true);  
 
  const handleNavLinkClick = (isDropdown) => {
    if (!isDropdown) {
      setNavCollapsed(true); // Close the navbar if the link is not in the dropdown
    }
  };


  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="">
       <div className="absolute top-0 left-0 w-full z-50 bg-transparent">
      {/* Navbar */}
      <nav className="flex items-center justify-between py-7 pl-[5%] bg-transparent">
        <div>
           <img src="/images/Logo.png" className="w-32 h-16" />
        </div>
        <button
          onClick={toggleMenu}
          className="laptop:hidden w-12 h-10 p-2"
        >
          <span
            className={`block w-full h-1 bg-[#C46C4A] rounded transition-transform duration-300 ${
              isMenuOpen
                ? "transform rotate-45 translate-y-2"
                : "transform rotate-0"
            }`}
          ></span>
          <span
            className={`block w-full h-1 bg-[#C46C4A] rounded my-1 transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-full h-1 bg-[#C46C4A] rounded transition-transform duration-300 ${
              isMenuOpen
                ? "transform -rotate-45 -translate-y-2"
                : "transform rotate-0"
            }`}
          ></span>
        </button>
        {/* Desktop Links */}
        <ul className="hidden laptop:flex bg-[#eddcc3] rounded-s-full py-4 px-6 space-x-6">
          <li><a href="/" className="uppercase">Home</a></li>
          <li><a href="/about" className="uppercase">About yuu</a></li>
          <li><a href="/location" className="uppercase">Location</a></li>
          <li><a href="#home" className="uppercase">latest</a></li>
          <li><a href="#home" className="uppercase">virtual tour</a></li>
          <li><a href="#home" className="uppercase">contact us</a></li>
          <li><a href="/floorplan" className="uppercase">floor plan</a></li>
        </ul>
      </nav>

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#EFEADC] text-[#432a2b] transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <ul className="space-y-6 mt-7 text-xl px-6">
        <li><a href="/" className="uppercase">Home</a></li>
          <li><a href="/about" className="uppercase">About yuu</a></li>
          <li><a href="/location" className="uppercase">Location</a></li>
          <li><a href="#home" className="uppercase">latest</a></li>
          <li><a href="#home" className="uppercase">virtual tour</a></li>
          <li><a href="#home" className="uppercase">contact us</a></li>
          <li><a href="/floorplan" className="uppercase">floor plan</a></li>
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
    </>
  );
};

export default Header;
