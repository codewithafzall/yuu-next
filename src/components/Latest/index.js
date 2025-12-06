import React from 'react'
import BlogSlider from '../Blogs/BlogSlider'
import posts from '../Blogs/posts'

const index = () => {
    return (
        <section className='pt-28 relative bg-[#ebe8d4]'>

            <div className="absolute desktop:top-40 drop-shadow-xl shadow-lg shadow-white left-0 bg-[#fcf9f2] rounded-e-full py-3 w-60 desktop:w-72 flex justify-end">
                <h1 className="text-black mr-16 py-3 desktop:py-6">
                    LATEST
                </h1>
            </div>

            <div className="flex flex-col desktop:flex-row items-center w-full gap-x-16">
                <div className="">
                    <p className="text-start w-[90%] desktop:w-[65%] ml-5 desktop:ml-[20%] mt-36 desktop:mt-24">
                        Stay updated with the world of YUU.
                        From fresh construction progress and
                        exclusive site visuals to feature stories, blogs,
                        and media mentions.<br /><br />
                        Explore how YUU is shaping a new rhythm of
                        urban living; one story, one milestone at a time.
                    </p>
                </div>
                <img
                    className="w-full desktop:w-[50%] mix-blend-multiply pl-3 mt-4 desktop:mt-0 desktop:pl-0"
                    src="/images/latest-first.webp"
                />
            </div>

            <div className='relative'>
                <div className="ml-auto my-10 drop-shadow-xl shadow-lg shadow-white bg-[#fcf9f2] rounded-s-full py-3 w-60 desktop:w-72 flex justify-end">
                    <h2 className="text-black text-center mr-5 desktop:mr-10">
                        SITE
                        <br /> UPDATES
                    </h2>
                </div>

                <img className='pr-4 desktop:pr-0' src='/images/Plinth.webp' />
            </div>

            {/* <div className="flex relative pt-40 desktop:pt-20 flex-row items-center justify-center max-[1024px]:flex-col desktop:px-12 desktop:gap-x-10">

                <div className="absolute top-10 desktop:top-20 drop-shadow-xl shadow-lg shadow-white left-0 bg-[#fcf9f2] rounded-e-full py-3 w-80 flex justify-end">
                    <h1 className="text-black mr-6 py-3 desktop:py-6">
                        IN THE NEWS
                    </h1>
                </div>

                <div className="w-4/12 pl-3 desktop:pl-0 flex flex-col justify-center max-[1024px]:w-full">
                    <h2 className="mt-10">MEDIA MENTIONS</h2>
                    <small className="mt-10">
                        YUU is part of a larger story, the one
                        that the Nahar Group has been
                        shaping for years in Chandivali. Here,
                        you’re surrounded by everything that
                        makes daily life smoother, warmer,
                        and more balanced.
                    </small>
                </div>

                <div className="w-8/12 flex flex-col desktop:flex-row gap-x-7 mx-auto justify-center items-baseline max-[1024px]:w-full max-[1024px]:mt-8">
                    <div className="">
                        <img src="/images/ajay-nahar.webp" alt="Awards" className="desktop:w-[500px] desktop:h-[500px] mx-auto mt-3 object-cover rounded-t-full" />
                    </div>
                    <div className="">
                        <img src="/images/Asset5.png" alt="Awards" className="desktop:w-[300px] desktop:h-[300px] hidden desktop:block mx-auto mt-3 object-cover rounded-t-full" />
                    </div>
                    <div className="">
                        <img src="/images/Asset5.png" alt="Awards" className="desktop:w-[300px] desktop:h-[300px] hidden desktop:block mx-auto mt-3 object-cover rounded-t-full" />
                    </div>
                </div>
            </div> */}

            <div className="ml-auto mt-10 drop-shadow-xl shadow-lg shadow-white bg-[#fcf9f2] rounded-s-full py-3 w-60 desktop:w-72 flex justify-end">
                <h2 className="text-black text-center mr-5 desktop:mr-10">
                    BLOGS
                </h2>
            </div>

            <BlogSlider posts={posts} perView={{ mobile: 1, tablet: 2, desktop: 2 }} />

        </section>
    )
}

export default index
