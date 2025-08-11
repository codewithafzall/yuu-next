import React from "react";

const FloorPlanHero = () => {
  return (
    <section
      className="relative w-full bg-no-repeat bg-cover bg-center min-h-[100vh] px-6"
      style={{ backgroundImage: "url(images/floor-banner.png)" }}
    >
      {/* <div className="absolute inset-0 bg-black/30" /> */}
      <div className="relative z-10">
        <h2 className="relative top-[200px] ps-10 max-[768px]:text-5xl max-[768px]:left-[0px]">
          A space designed for YUU
          <br />
          to live, thrive, and belong.
        </h2>
      </div>
    </section>
  );
};

const FloorPlanIntro = () => {
  return (
    <section className="w-full bg-[#fdf7f0] pt-16 px-6 max-[768px]:pb-16">
      <div className="max-w-7xl mx-auto flex items-start gap-12 max-[768px]:flex-col max-[768px]:gap-8">
        <div className="w-1/2 max-[768px]:w-full">
          <h2 className="mb-4 max-[768px]:text-3xl">
            Every Square Foot,
            <br />A Thoughtful Expression
          </h2>
          <p className="mb-6 max-[768px]:text-sm">
            Discover studio living reimagined for the urban soul. Each 350 sq.
            ft. residence at our upcoming development is a testament to
            minimalism, balance, and smart design. From seamless storage
            solutions to integrated design elements that maximise natural light
            and space, these themed studio apartments offer the perfect canvas
            for your lifestyle. Whether you're a young professional, a
            first-time homeowner, or someone seeking mindful living in the heart
            of the city — this space adapts beautifully to your rhythm.
          </p>
        </div>
        <div className="w-1/2 flex justify-center max-[768px]:w-full">
          <div className="relative bottom-[170px] w-[420px] h-[560px] rounded-t-[220px] overflow-hidden  max-[768px]:w-[260px] max-[768px]:h-[360px] max-[768px]:rounded-t-[140px] max-[768px]:bottom-[0px]">
            <img
              src="images/Asset12.png"
              alt="Studio living"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto relative bottom-[150px] max-[768px]:bottom-[0px] max-[768px]:mt-5">
        <p className="uppercase font-bold mb-4">HIGHLIGHTS</p>
        <div className="flex text-[15px] gap-6 text-center max-[768px]:flex-col">
          <span className="px-10 py-1 rounded-full border border-[#e6b39e]">
            Thoughtfully designed
            <br /> 350 sq. ft. studios
          </span>
          <span className="px-10 py-1 rounded-full border border-[#e6b39e]">
            Zen-inspired interiors
            <br /> with modern finishes
          </span>
          <span className="px-10 py-1 rounded-full border border-[#e6b39e]">
            Multi-purpose living
            <br /> zones
          </span>
          <span className="px-10 py-1 rounded-full border border-[#e6b39e]">
            Intelligent space
            <br /> optimization
          </span>
          <span className="px-10 py-1 rounded-full border border-[#e6b39e]">
            Customisation-friendly
            <br /> layout options
          </span>
        </div>
      </div>
    </section>
  );
};

const FloorPlanCulinary = () => {
  return (
    <section className="w-full bg-[#eee9d6] py-16 px-6">

      {/* Flavours part */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-12 items-center max-[768px]:grid-cols-1">
        {/* Left large image */}
        <div className="w-full relative bottom-[18%] max-[768px]:bottom-[25%]">
          <img
            src="images/about4.png"
            alt="Culinary Cove"
            className="w-full h-auto rounded-[24px] shadow-md"
          />
        </div>
        {/* Right text */}
        <div className="w-full">
          <h1 className="mb-4 max-[768px]:text-3xl">
            Where Flavours
            <br />
            Meet Flow
          </h1>
          <p className="mb-6 max-[768px]:text-sm">
            Culinary Cove is a handpicked space for restaurateurs and café
            owners who seek more than just a location — they seek ambiance,
            footfall, and synergy. Designed with modern infrastructure and
            ventilation provisions, this zone is made for everything from
            gourmet dining to cozy cafes and contemporary global cuisine hubs.
            Positioned amidst a lifestyle-driven community, Culinary Cove is
            your canvas to craft a culinary destination. Whether it's
            grab-and-go or slow dining, the atmosphere is yours to shape.
          </p>
          <p className="uppercase font-bold mb-4">HIGHLIGHTS</p>
          <div className="flex flex-wrap gap-4">
            <span className="px-10 py-1 rounded-full border border-[#e6b39e] text-sm text-center">
              Designed for restaurants, cafés,
              <br /> co-working and dessert bars
            </span>
            <span className="px-10 py-1 rounded-full border border-[#e6b39e] text-sm text-center">
              Pre-provisioned for
              <br /> ventilation & kitchen setups
            </span>
            <span className="px-10 py-1 rounded-full border border-[#e6b39e] text-sm text-center">
              Al fresco-friendly
              <br /> layout options
            </span>
            <span className="px-10 py-1 rounded-full border border-[#e6b39e] text-sm text-center">
              Premium visibility in a<br /> lifestyle-led environment
            </span>
            <span className="px-10 py-1 rounded-full border border-[#e6b39e] text-sm text-center">
              Attracts residents, visitors,
              <br /> and working professionals
            </span>
          </div>
        </div>
      </div>

      {/* Retail part */}
      <div className="pt-10 max-w-7xl mx-auto grid grid-cols-2 gap-12 items-center max-[768px]:grid-cols-1">
        {/* left text */}
        <div className="w-full">
          <h1 className="mb-10 max-[768px]:text-3xl">
            Retail That Reflects Your
            <br />
            Brand’s Light
          </h1>
          <p className="mb-6 max-[768px]:text-sm">
            Step into a retail space that does more than sell — it tells a
            story. YUU Luna is thoughtfully planned to house boutique
            storefronts and elegant showrooms that align with your brand’s
            sensibilities. Positioned within a vibrant mixed-use ecosystem, it’s
            designed to welcome a discerning customer base — from urban
            professionals to residents within the development and the larger
            Chandivali neighborhood. With high visibility, modern frontage, and
            optimal footfall, YUU Luna offers you a rare blend: visibility, foot
            traffic, and a brand-enhancing atmosphere.
          </p>
          <p className="uppercase font-bold mb-4">HIGHLIGHTS</p>
          <div className="flex flex-wrap gap-4">
            <span className="px-10 py-1 rounded-full border border-[#e6b39e] text-sm text-center">
            Street-facing retail frontage
              <br /> with glass facades
            </span>
            <span className="px-10 py-1 rounded-full border border-[#e6b39e] text-sm text-center">
            Double-height
              <br /> showrooms available
            </span>
            <span className="px-10 py-1 rounded-full border border-[#e6b39e] text-sm text-center">
            Footfall from in-house residents
              <br /> and Chandivali catchment
            </span>
            <span className="px-10 py-1 rounded-full border border-[#e6b39e] text-sm text-center">
            Ideal for lifestyle stores, salons,<br /> wellness & concept brands
            </span>
            <span className="px-10 py-1 rounded-full border border-[#e6b39e] text-sm text-center">
            Smart-sized units for
              <br /> curated brand experiences
            </span>
          </div>
        </div>
        {/* right large image */}
        <div className="w-full relative left-[19%] max-[768px]:left-5">
          <img
            src="images/about4.png"
            alt="Culinary Cove"
            className="w-full h-[550px] rounded-s-[24px] shadow-md max-[768px]:h-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <>
      <FloorPlanHero />
      <FloorPlanIntro />
      <FloorPlanCulinary />
    </>
  );
};

export default Index;
