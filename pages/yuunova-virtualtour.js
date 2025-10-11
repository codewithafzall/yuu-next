import Head from "next/head";

const VirtualTourPage = () => {
  return (
    <>
      <Head>
        <title>YUU by Nahar</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="w-full h-screen">
        <iframe
          src="https://yuunova.futeservices.in"
          title="YUU Virtual Tour"
          className="w-full h-full"
          loading="lazy"
          allowFullScreen
        />
      </div>
    </>
  );
};

export default VirtualTourPage;


