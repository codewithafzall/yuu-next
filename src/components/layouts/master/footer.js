import BlogSlider from "../../Blogs/BlogSlider.js";
import posts from "../../Blogs/posts.js";

const Footer = () => {
  return (
    <section>
      <div className="flex desktop:flex-row flex-col bg-[#e2d2b7] py-6">
        <div className="w-full desktop:w-1/2">
          <BlogSlider posts={posts} perView={{ mobile: 1, tablet: 1, desktop: 1 }} />
        </div>
        <div className="w-full desktop:w-1/2 desktop:border-l-2 border-white flex flex-col justify-center items-center pr-6">
          <div className="flex flex-col gap-8 pl-4 desktop:pl-0 desktop:items-end justify-between py-auto w-full">
            <h2 className="">STAY CONNECTED</h2>

            <div className="z-40 w-60 flex gap-x-6 justify-between">
              <a className="flex items-center" href="https://www.linkedin.com/company/yuu-by-nahar/" target="_blank">
                <img className="" src="/images/linkedin.png" />
              </a>
              <a className="flex items-center" href="https://youtube.com/@yuubynahar?si=1lc6x8FCjD9CaM6P" target="_blank">
                <img className="" src="/images/yt.png" />
              </a>
              <a className="flex items-center" href="https://www.instagram.com/yuu_by_nahar" target="_blank">
                <img className="" src="/images/insta.png" />
              </a>
            </div>
            <iframe
              src="https://open.spotify.com/embed/playlist/2Z8Saq6h771zWN7eJ3owVP"
              className="w-full desktop:w-2/3 h-[100px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <footer className="footer overflow-hidden relative font-['Poppins',sans-serif]">

        <div className="mx-auto flex max-[768px]:flex-col">
          {/* Left card */}
          <div className="w-1/2 max-[768px]:w-full desktop:border desktop:border-white rounded-tr-[3rem] grid grid-cols-3 max-[768px]:grid-cols-1 gap-x-6 gap-y-8 p-10 max-[768px]:p-6">
            <div className="">
              <img src="/images/footer-nahar.png" className="w-20 h-auto object-contain ml-4" />
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
                <a href="/about">YUU By Nahar</a>
                <a href="">YUU Nova</a>
                <a href="">YUU Luna</a>
                <a href="/about#management">Management</a>
                {/* <a href="">Design</a> */}
              </div>
            </div>
            <div className="">
              <p className="text-black font-semibold">
                Quick Links
              </p>
              <div className="flex flex-col mt-4 space-y-1">
                <a href="https://wa.link/5fi3ox">WhatsApp</a>
                {/* <a href="">NRI Center</a> */}
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="#faqs">FAQs</a>
                <a target="_blank" href="https://maps.app.goo.gl/DYwQyfiBF1KNEKZQA?g_st=ipc">Google Maps</a>
                <a target="_blank" href="/nri">NRI Corner</a>
              </div>
            </div>
          </div>
          {/* Right card */}
          <div className="w-1/2 relative max-[768px]:w-full border border-white rounded-tl-[3rem] grid grid-cols-3 max-[768px]:grid-cols-1 gap-x-6 gap-y-8 p-10 max-[768px]:p-6">
            <div className="">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center gap-3">
                  <img src="/images/nova-qr.png" alt="QR code" className="w-14 h-auto object-contain" />
                  <div className="">
                    <h3 className="text-[23px] text-black">YUU NOVA</h3>
                    <p className="text-sm"> MahaRERA No: PMI80002500398</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img src="/images/luna-qr.webp" alt="QR code" className="w-14 h-auto object-contain" />
                  <div className="">
                    <h3 className="text-[23px] text-black">YUU LUNA</h3>
                    <p className="text-sm"> MahaRERA No: PC1180002500839</p>
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
                A project by
              </p>
              <div className="flex items-center gap-4 mt-6">
                <a target="_blank" href="http://www.naharprojects.com" >
                  <img src="/images/nahar-projects.png" alt="Nahar Group" className="w-28 h-auto object-contain" />
                </a>
              </div>
            </div>
            <small className="w-full desktop:col-span-3 text-xs">
              Disclaimer: All images, illustrations, and renders in this brochure are indicative and subject to change. The specifications of the exterior and interior for both projects under RERA No. PM1180002500398 and RERA No. PC1180002500839 are subject to modifications as per architectural and design requirements. Buyers are advised to independently verify all project details before making any purchase decision.
            </small>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
