import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

export default function ImageHoverSection() {
    const defaultHeadings = ['SEE IT,', 'ENVISION IT,', 'LIVE IT.'];
    const defaultDescription = (
        <>
            Explore the stunning details <br /> and features of YUU by Nahar
        </>
    );

    const [headings, setHeadings] = useState(defaultHeadings);
    const [description, setDescription] = useState(defaultDescription);

    // hover text + dynamic descriptions
    const hoverMapping = {
        'Asset 11.png': {
            headings: ['Community', 'Centric', 'Living'],
            description: "A Community Woven With Connections",
        },
        'Asset 9.png': {
            headings: ['Japanese', 'Theme'],
            description: "Yuugen in Every Detail",
        },
        'Asset 8.png': {
            headings: ['Fitness', 'Centre'],
            description: "Elevating Body, Mind, and Soul",
        },
        'Asset 10.png': {
            headings: ['Restaurants', '(Culinary Cove)'],
            description: "Indulge in Tasteful Journeys",
        },
    };

    const handleMouseEnter = (fileName) => {
        const data = hoverMapping[fileName];
        if (data) {
            setHeadings(data.headings);
            setDescription(data.description);
        }
    };

    const handleMouseLeave = () => {
        setHeadings(defaultHeadings);
        setDescription(defaultDescription);
    };

    const headingsRefs = useRef([]);

    useEffect(() => {
        gsap.fromTo(
            headingsRefs.current,
            { autoAlpha: 0, y: 20 },
            { autoAlpha: 1, y: 0, stagger: 0.1, duration: 0.3, ease: 'power1.out' }
        );
    }, [headings]);

    return (
        <div className="flex flex-col py-10 desktop:py-0 desktop:flex-row bg-[#fef9f3] gap-x-10">
            <div className="w-full desktop:w-2/6 flex flex-col pr-3 desktop:pr-0 items-end justify-center">
                {headings.map((text, idx) => (
                    <h1 ref={(el) => (headingsRefs.current[idx] = el)} className='uppercase ml-auto' key={idx}>{text}</h1>
                ))}

                <p className="text-end my-6">{description}</p>
            </div>

            <div className="w-full desktop:w-4/6 relative flex flex-col desktop:flex-row justify-between items-center desktop:pr-10 desktop:pb-16 pt-4 desktop:pt-8">
                <img
                    src="/images/wabi-sabi.webp"
                    alt="Asset 11"
                    className="w-[80%] desktop:w-[35%] grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                    onMouseEnter={() => handleMouseEnter('Asset 11.png')}
                    onMouseLeave={handleMouseLeave}
                />

                <div className="flex desktop:flex-col gap-x-3 px-3">
                    <img
                        src="/images/fine-dine.png"
                        alt="Asset 10"
                        className="w-1/2 desktop:w-auto grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                        onMouseEnter={() => handleMouseEnter('Asset 10.png')}
                        onMouseLeave={handleMouseLeave}
                    />
                    <img
                        src="/images/Asset 8.png"
                        alt="Asset 8"
                        className="w-1/2 desktop:w-auto desktop:mt-12 desktop:mr-12 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                        onMouseEnter={() => handleMouseEnter('Asset 8.png')}
                        onMouseLeave={handleMouseLeave}
                    />
                </div>

                <img
                    src="/images/Asset 9.png"
                    alt="Asset 9"
                    className="desktop:mt-12 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                    onMouseEnter={() => handleMouseEnter('Asset 9.png')}
                    onMouseLeave={handleMouseLeave}
                />
            </div>
        </div>
    );
}
