import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="footer overflow-hidden relative font-['Poppins',sans-serif]">
        <div className="w-full flex flex-col desktop:flex-row justify-evenly items-center px-6 py-0 pt-20 desktop:pt-0 desktop:py-8 desktop:px-16">
          <h2>STAY CONNECTED</h2>
          <div className="w-36 h-20 z-40 bottom-10 right-24 flex items-center justify-between">
            <a>
              <img width={30} height={30} src="/images/linkendin.png" />
            </a>
            <a>
              <img width={30} height={30} src="/images/youtube.png" />
            </a>
            <a>
              <img width={30} height={30} src="/images/insta.png" />
            </a>
          </div>
          <iframe
            src="https://open.spotify.com/embed/playlist/2Z8Saq6h771zWN7eJ3owVP"
            className="w-full h-100 desktop:w-[30%] desktop:h-80"
            loading="lazy">
          </iframe>
        </div>
        <div className="mx-auto flex max-[768px]:flex-col">
          {/* Left card */}
          <div className="w-1/2 max-[768px]:w-full border border-white rounded-tr-[3rem] grid grid-cols-3 max-[768px]:grid-cols-1 gap-x-6 gap-y-8 p-10 max-[768px]:p-6">
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
          {/* Right card */}
          <div className="w-1/2 max-[768px]:w-full border border-white rounded-tl-[3rem] grid grid-cols-3 max-[768px]:grid-cols-1 gap-x-6 gap-y-8 p-10 max-[768px]:p-6">
            <div className="">
              <p className="text-black font-semibold">
                Regulatory Info
              </p>
              <div className="flex flex-col mt-4 space-y-4">
                <div className="flex items-center gap-3">
                  <img src="/images/nova-qr.png" alt="QR code" className="w-14 h-auto object-contain" />
                  <div className="">
                    <h3 className="text-[23px] text-black">YUU NOVA</h3>
                    <p className="text-sm"> MahaRERA No.: PMI80002500398</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img src="/images/luna-qr.png" alt="QR code" className="w-14 h-auto object-contain" />
                  <div className="">
                    <h3 className="text-[23px] text-black">YUU LUNA</h3>
                    <p className="text-sm"> MahaRERA No.:PMI80002500398</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <p className="text-black font-semibold">
                Financed by
              </p>
              <div className="mt-6">
                <img src="/images/rbl-logo.png" alt="RBL Bank" className="w-14 h-auto object-contain" />
              </div>
            </div>
            <div className="">
              <p className="text-black font-semibold">
                Project by
              </p>
              <div className="flex items-center gap-4 mt-6">
                <img src="/images/nahar-footer.png" alt="Nahar Group" className="w-20 h-auto object-contain mix-blend-color-burn" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
