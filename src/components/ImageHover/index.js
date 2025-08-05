import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

export default function ImageHoverSection() {
    const defaultHeadings = ['SEE IT,', 'ENVISION IT,', 'LIVE IT'];
    const [headings, setHeadings] = useState(defaultHeadings);

    // Define hover text for each image
    const hoverMapping = {
        'Asset 11.png': ['wabi-sabi,', 'themed', ""],
        'Asset 10.png': ['Fully', 'automated'],
        'Asset 8.png': ['Open', 'Modular', 'Kitchen'],
        'Asset 9.png': ['World', 'Class', 'Fittings'],
    };

    const handleMouseEnter = (fileName) => {
        setHeadings(hoverMapping[fileName] || defaultHeadings);
    };

    const handleMouseLeave = () => {
        setHeadings(defaultHeadings);
    };

    const headingsRefs = useRef([]);

    useEffect(() => {
        // animate headings into view whenever they update
        gsap.fromTo(
            headingsRefs.current,
            { autoAlpha: 0, y: 20 },
            { autoAlpha: 1, y: 0, stagger: 0.1, duration: 0.3, ease: 'power1.out' }
        );
    }, [headings]);

    return (
        <div className="flex bg-[#fef9f3] gap-x-10">
            <div className="w-2/6 flex flex-col items-end justify-center">
                {headings.map((text, idx) => (
                    <h1 ref={(el) => (headingsRefs.current[idx] = el)} className='uppercase' key={idx}>{text}</h1>
                ))}

                <p className="text-end my-6">
                    Explore the stunning details <br /> and features of YUU by Nahar
                </p>

                <button className="border-2 ml-auto flex border-[#513335] rounded-full px-4 py-2 uppercase text-sm">
                    Know More
                </button>
            </div>

            <div className="w-4/6 relative flex justify-between items-center pr-10 pb-16 pt-8">
                <img
                    src="/images/Asset 11.png"
                    alt="Asset 11"
                    className="grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                    onMouseEnter={() => handleMouseEnter('Asset 11.png')}
                    onMouseLeave={handleMouseLeave}
                />

                <div className="flex flex-col">
                    <img
                        src="/images/Asset 10.png"
                        alt="Asset 10"
                        className="grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                        onMouseEnter={() => handleMouseEnter('Asset 10.png')}
                        onMouseLeave={handleMouseLeave}
                    />
                    <img
                        src="/images/Asset 8.png"
                        alt="Asset 8"
                        className="mt-12 mr-12 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                        onMouseEnter={() => handleMouseEnter('Asset 8.png')}
                        onMouseLeave={handleMouseLeave}
                    />
                </div>

                <img
                    src="/images/Asset 9.png"
                    alt="Asset 9"
                    className="mt-12 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                    onMouseEnter={() => handleMouseEnter('Asset 9.png')}
                    onMouseLeave={handleMouseLeave}
                />
            </div>
        </div>
    );
}
