
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  return (
    <>
     <footer className="bg-[#E2D2B7] px-6 py-12 overflow-hidden relative bottom-1 md:px-12 lg:px-24 font-['Poppins',sans-serif]">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 tablet:grid-cols-4 desktop:grid-cols-4">
          {/* Nahar Group Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-[#333333]">Nahar group</h2>
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-[#513335] hover:text-[#333333]">About us</a>
              <a href="#" className="text-[#513335] hover:text-[#333333]">All Properties</a>
              <a href="#" className="text-[#513335] hover:text-[#333333]">Our values</a>
              <a href="#" className="text-[#513335] hover:text-[#333333]">Testimonials</a>
            </nav>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-[#333333]">Quick links</h2>
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-[#513335] hover:text-[#333333]">Enquiry</a>
              <a href="#" className="text-[#513335] hover:text-[#333333]">whatsapp</a>
              <a href="#" className="text-[#513335] hover:text-[#333333]">Twilo</a>
              <a href="#" className="text-[#513335] hover:text-[#333333]">Schedule visit</a>
            </nav>
          </div>

          {/* Downloads Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-[#333333]">Downloads</h2>
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-[#513335] hover:text-[#333333]">Master Plan</a>
              <a href="#" className="text-[#513335] hover:text-[#333333]">Floor Plan</a>
              <a href="#" className="text-[#513335] hover:text-[#333333]">Elevation Images</a>
              <a href="#" className="text-[#513335] hover:text-[#333333]">Brochure</a>
            </nav>
          </div>

          {/* Stay Connected Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-[#333333]">Stay Connected</h2>
            <div className="flex items-center">
              <input 
                type="email" 
                className="flex-1 py-2 px-6 rounded-l-full rounded-r-full border-0 focus:outline-none focus:ring-2 focus:ring-[#a97c6d] placeholder-gray-400"
                placeholder="Email"
                style={{ backgroundColor: '#ffffff' }}
              />
              <button 
                className="py-2 px-8 rounded-r-full rounded-l-full text-white font-semibold transition-colors duration-200 hover:bg-[#8b5a3d] border-l-0"
                style={{ backgroundColor: '#c46c4a',position:"relative",right:"10%" }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
      {/* <ScrollToTop
        smooth
        color="white"
        height="20"
        style={{ backgroundColor: "#283897",border:"1px solid #e34c24" }}
      /> */}
    </>
  );
};

export default Footer;
