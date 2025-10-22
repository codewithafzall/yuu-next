import { NextSeo } from 'next-seo';
import MasterLayout from '../src/components/layouts/master';
import HomeContainer from "../src/components/home";

const Home = () => {

  
  return (
    <>
     <NextSeo
        title="Yuu by Nahar – Premium Living Apartments in Mumbai"
        description="Discover Yuu by Nahar: luxury apartments in Mumbai with world-class amenities and investment potential. Explore our projects and book your home now."
        canonical="https://yuubynahar.com/"
        openGraph={{
          url: 'https://yuubynahar.com/',
          title: 'Yuu by Nahar – Premium Living Apartments in Mumbai',
          description:
            'Discover Yuu by Nahar: luxury apartments in Mumbai with world-class amenities and investment potential. Explore our projects and book your home now.',
          siteName: 'Yuu by Nahar',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'Yuu by Nahar Mumbai, luxury apartments Mumbai, Yuu by Nahar price, Nahar Group residential project',
          },
        ]}
      />
      <HomeContainer />
    </>
  )
}
export default Home;
