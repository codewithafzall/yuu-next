
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  return (
    <>
      <footer className="footer pt-12 overflow-hidden relative font-['Poppins',sans-serif]">
        <div className="mx-auto flex">
          <div className="desktop:w-1/2 border border-white rounded-tr-[3rem] grid grid-cols-3 gap-x-6 p-16">
            <div className="">
              <p className="text-black font-semibold">
                Nahar Group
              </p>
              <div className="flex flex-col mt-4 space-y-1">
                <a href="">About us</a>
                <a href="">All Properties</a>
                <a href="">Our values</a>
                <a href="">Testimonials</a>
              </div>
            </div>
            <div className="">
              <p className="text-black font-semibold">
                Quick links
              </p>
              <div className="flex flex-col mt-4 space-y-1">
                <a href="">Enquiry</a>
                <a href="">Whatsapp</a>
                <a href="">Twilo</a>
                <a href="">Schedule visit</a>
              </div>
            </div>
            <div className="">
              <p className="text-black font-semibold">
                Downloads
              </p>
              <div className="flex flex-col mt-4 space-y-1">
                <a href="">Master Plan</a>
                <a href="">Floor Plan</a>
                <a href="">Elevation Images</a>
                <a href="">Brochure</a>
              </div>
            </div>
          </div>
          <div className="desktop:w-1/2 border border-white rounded-tl-[3rem] grid grid-cols-3 gap-x-6 p-16">
            <div className="">
              <p className="text-black font-semibold">
                Regulatory Info
              </p>
              <div className="flex flex-col mt-4 space-y-1">
                <a href="">About us</a>
                <a href="">All Properties</a>
                <a href="">Our values</a>
                <a href="">Testimonials</a>
              </div>
            </div>
            <div className="">
              <p className="text-black font-semibold">
                Financed by
              </p>
              <div className="flex flex-col mt-4 space-y-1">
                <a href="">Enquiry</a>
                <a href="">Whatsapp</a>
                <a href="">Twilo</a>
                <a href="">Schedule visit</a>
              </div>
            </div>
            <div className="">
              <p className="text-black font-semibold">
                Project by
              </p>
              <div className="flex flex-col mt-4 space-y-1">
                <a href="">Master Plan</a>
                <a href="">Floor Plan</a>
                <a href="">Elevation Images</a>
                <a href="">Brochure</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
