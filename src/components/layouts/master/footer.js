import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="bg-[#e2d2b7] w-full flex flex-col desktop:flex-row justify-evenly items-center gap-6 px-6 py-0 pt-20 desktop:pt-14 desktop:py-8 desktop:px-16">
        <h2 className="text-center desktop:text-left">STAY CONNECTED</h2>

        <div className="w-36 h-20 z-40 flex items-center justify-between">
          <a href="https://www.linkedin.com/company/yuu-by-nahar/" target="_blank">
            <img width={30} height={30} src="/images/linkendin.png" />
          </a>
          <a href="https://youtube.com/@yuubynahar?si=1lc6x8FCjD9CaM6P" target="_blank">
            <img width={30} height={30} src="/images/youtube.png" />
          </a>
          <a href="https://www.instagram.com/yuu_by_nahar" target="_blank">
            <img width={30} height={30} src="/images/insta.png" />
          </a>
        </div>

        <div className="w-full desktop:w-[30%] flex items-center">
          <iframe
            src="https://open.spotify.com/embed/playlist/2Z8Saq6h771zWN7eJ3owVP"
            className="w-full h-[100px]"
            loading="lazy"
          />
        </div>
      </div>

      <footer className="footer overflow-hidden relative font-['Poppins',sans-serif]">

        <div className="mx-auto flex max-[768px]:flex-col">
          {/* Left card */}
          <div className="w-1/2 max-[768px]:w-full desktop:border desktop:border-white rounded-tr-[3rem] grid grid-cols-3 max-[768px]:grid-cols-1 gap-x-6 gap-y-8 p-10 max-[768px]:p-6">
            <div className="">
              <p className="text-black font-semibold">
                Nahar Group
              </p>
              <div className="mt-4">
                <p className="text-xs leading-snug w-[90%]">
                  From residential townships
                  and commercial spaces to
                  healthcare, education, and
                  philanthropy. Nahar Group
                  has shaped the skyline
                  and soul of Mumbai for
                  over five decades.
                </p>
              </div>
            </div>
            <div className="">
              <p className="text-black font-semibold">
                About YUU
              </p>
              <div className="flex flex-col mt-4 space-y-1">
                <a href="">YUU By Nahar</a>
                <a href="">YUU Nova</a>
                <a href="">YUU Luna</a>
                <a href="">Management Design</a>
              </div>
            </div>
            <div className="">
              <p className="text-black font-semibold">
                Quick Links
              </p>
              <div className="flex flex-col mt-4 space-y-1">
                <a href="">Whatsapp</a>
                <a href="">NRI Center</a>
                <a href="">Privay Policy</a>
                <a href="">FAQs</a>
                <a target="_blank" href="https://maps.app.goo.gl/DYwQyfiBF1KNEKZQA?g_st=ipc">Google Maps</a>
              </div>
            </div>
          </div>
          {/* Right card */}
          <div className="w-1/2 relative max-[768px]:w-full border border-white rounded-tl-[3rem] grid grid-cols-3 max-[768px]:grid-cols-1 gap-x-6 gap-y-8 p-10 max-[768px]:p-6">
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
                <img src="/images/rbl-logo.png" alt="RBL Bank" className="w-36 h-auto object-contain" />
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
            <small className="w-full desktop:col-span-3 text-xs">
              Disclaimer: Visuals shown are artist’s impressions for representational purposes only.
              The project is financed by RBL Bank. Loan approvals are at the sole discretion of the bank.
              Project is Funded by and mortgaged to RBL bank limited
            </small>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
