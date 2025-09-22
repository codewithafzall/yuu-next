"use client";

import { useState, useRef, useEffect } from "react";

export default function FAQAccordion() {
    const faqs = [
        {
            question: "What is Yuu by Nahar?",
            answer: (
                <p className="text-xs">
                    Yuu by Nahar is a premium mixed development real estate in Mumbai development located in Chandivali. It features modern studio apartments, retail shops, and commercial spaces with lifestyle amenities, offering a new standard of luxury apartments and urban living.
                </p>
            ),
        },
        {
            question: "Where is the project located?",
            answer: (
                <p className="text-xs">
                    The project is strategically located in Chandivali, Andheri East – a prime hub with excellent connectivity to Powai, SEEPZ, Andheri-Kurla Road, Western & Eastern Express Highways, and the Mumbai Metro. Being in the heart of Mumbai real estate, this location provides convenience for both residential and commercial investments.
                </p>
            ),
        },
        {
            question: "What types of properties are available?",
            answer: (
                <ul className="list-disc pl-6 space-y-1 ">
                    <li className="text-xs">Studio Apartments (affordable yet luxurious options)</li>
                    <li className="text-xs">Retail Shops</li>
                    <li className="text-xs">Restaurant Commercial Spaces</li>
                </ul>
            ),
        },
        {
            question: "What is the possession timeline?",
            answer: (
                <p className="text-xs">
                    Possession for Yuu Nova is targeted for December 2028 (as per RERA in real estate guidelines and registration).
                </p>
            ),
        },
        {
            question: "Has the project received RERA approval?",
            answer: (
                <p className="text-xs">
                    Yes, the project is RERA registered.<br />
                    For YUU Nova RERA No.: PM1180002500398<br />
                    For YUU Luna @aarav
                </p>
            ),
        },
        {
            question: "What are the sizes of units available?",
            answer: (
                <p className="text-xs">
                    Studios are designed with compact yet efficient layouts ranging from 299sqft to 400 sqft, while retail shops and restaurant commercial spaces are available in a variety of sizes to suit business needs. This makes it an attractive choice for both homeowners and investors looking for ready to move flats in Mumbai real estate.
                </p>
            ),
        },
        {
            question: "What is the booking amount?",
            answer: (
                <p className="text-xs">
                    Booking starts with just 10% of the agreement value + GST, with the remaining payments linked to construction milestones.
                </p>
            ),
        },
        {
            question: "What are the amenities offered?",
            answer: (
                <ul className="list-disc pl-6 space-y-1">
                    <li className="text-xs">Fitness spaces</li>
                    <li className="text-xs">Landscaped greens</li>
                    <li className="text-xs">Event and exhibition spaces</li>
                    <li className="text-xs">In-mall futuristic marketing opportunities</li>
                    <li className="text-xs">Security & CCTV surveillance</li>
                    <li className="text-xs">Retail & convenience facilities</li>
                </ul>
            ),
        },
        {
            question: "Is home loan financing available?",
            answer: (
                <p className="text-xs">
                    Yes. Leading banks and financial institutions have approved the project for easy home loan financing, making it simple to own property in prime Mumbai real estate.
                </p>
            ),
        },
        {
            question: "Who is the developer?",
            answer: (
                <p className="text-xs">
                    Yuu by Nahar is developed by Nahar Group, a reputed builder with 50+ years of legacy and over 20 million sq. ft. delivered across Mumbai. The group is well-known for its high-quality residential and commercial developments in the real estate in Mumbai market.
                </p>
            ),
        },
        {
            question: "What makes Yuu by Nahar unique?",
            answer: (
                <ul className="list-disc pl-6 space-y-1">
                    <li className="text-xs">Central Chandivali location</li>
                    <li className="text-xs">A mix of residences and retail spaces</li>
                    <li className="text-xs">Trusted developer with RERA-approved projects</li>
                    <li className="text-xs">Blend of modern lifestyle amenities and efficient layouts in luxury apartments</li>
                </ul>
            ),
        },
        {
            question: "Who can I contact for more details?",
            answer: (
                <p className="text-xs">
                    Sales Team – Nahar Group<br />
                    Call: +91 97694 46633<br />
                    Instagram: @yuu_by_nahar
                </p>
            ),
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);
    const [showAll, setShowAll] = useState(false); // for "Read More" toggle
    const contentRefs = useRef([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    useEffect(() => {
        contentRefs.current.forEach((ref, i) => {
            if (ref) {
                ref.style.maxHeight = openIndex === i ? ref.scrollHeight + "px" : "0px";
            }
        });
    }, [openIndex, showAll]);

    if (!mounted) return null;

    // Determine which FAQs to show
    const visibleFaqs = showAll ? faqs : faqs.slice(0, 3);

    return (
        <section className="relative py-20 px-4">
            <div className="absolute top-[30px] tablet:top-0 drop-shadow-xl shadow-lg shadow-white desktop:top-20 left-0 bg-[#fcf9f2] rounded-e-full py-3 w-60 desktop:w-72 flex justify-end">
                <h1 className="text-black mr-16">
                    FAQS
                </h1>
            </div>
            <div className="w-full mt-20 desktop:mt-32 max-w-3xl mx-auto rounded-md divide-y divide-gray-400">
                {visibleFaqs.map((faq, index) => (
                    <div key={index}>
                        <button
                            className={`w-full faq flex justify-between items-center p-2 desktop:p-4 text-left text-sm desktop:text-2xl focus:outline-none uppercase ${openIndex === index ? "text-[#d06d52]" : "text-gray-500"
                                }`}
                            onClick={() => toggle(index)}
                        >
                            <div>
                                <img src="/images/pointer.png" alt="FAQ" className="w-6 h-6 inline mr-4" />
                                <span>{faq.question}</span>
                            </div>
                            <span className="w-4 h-4">
                                {openIndex === index ? (
                                    <img src="/images/up.png" alt="Collapse" className="w-4 h-4" />
                                ) : (
                                    <img src="/images/down.png" alt="Expand" className="w-4 h-4" />
                                )}
                            </span>
                        </button>
                        <div
                            ref={(el) => (contentRefs.current[index] = el)}
                            className="overflow-hidden transition-max-height duration-500 ease-in-out"
                            style={{ maxHeight: 0 }}
                        >
                            <div className="p-4 text-gray-700">{faq.answer}</div>
                        </div>
                    </div>
                ))}
                    <div className="flex justify-center p-4">
                        <button
                            className="text-black text-xs font-semibold focus:outline-none"
                            onClick={() => setShowAll(!showAll)}
                        >
                            {showAll ? "Read Less" : "Read More"}
                        </button>
                    </div>
            </div>
        </section>
    );
}
