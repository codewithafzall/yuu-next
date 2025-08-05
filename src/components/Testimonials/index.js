import { useState } from 'react';

const Testimonials = () => {
    const initial = [
        {
            id: 1,
            icon: '/images/Asset 30.png',
            text: `From first search to final signing, the team at YUU guided us every step of the way. Their market insights helped us snag a beautiful 3BHK in Bandra at an incredible price—something we never thought possible in today’s market!`,
            avatar: '/images/Asset 31.png',
            name: 'Afzal',
            role: 'Developer',
        },
        {
            id: 2,
            icon: '/images/Asset 32.png',
            text: `I was skeptical about how quickly my flat would go, but within a week of listing with [YourBrand], we had three solid offers and closed at 102% of the asking price. Their staging advice and targeted marketing really made the difference.`,
            avatar: '/images/Asset 32.png',
            name: 'Deep Ajmera',
            role: 'Project Manager',
        },
        {
            id: 3,
            icon: '/images/Asset 32.png',
            text: `As first-time homebuyers, the process seemed daunting—but [YourBrand]’s agents made it simple. They answered every question, arranged viewings on weekends, and helped negotiate a great deal on our new townhouse`,
            avatar: '/images/Asset 32.png',
            name: 'Parshva Doshi',
            role: 'Designer',
        },
    ];

    const [items, setItems] = useState(initial);

    const swapToFront = (index) => {
        // take out clicked item
        const selected = items[index];
        const rest = items.filter((_, i) => i !== index);
        // put it in front
        setItems([selected, ...rest]);
    };

    return (

        <div className="flex items-start justify-center gap-x-16 rounded-bl-full px-16 bg-[#fcf8f0] pt-12 pb-32">
            {/* Header */}
            <div className=''>
                <img src="/images/Asset 30.png" alt="" />
                <h1 className="mt-2">TESTIMONIALS</h1>
            </div>

            <div>
                <div className="relative p-6 w-96 rounded-2xl border border-[#d06d52]">
                    <img
                        className="absolute -top-10 -left-6"
                        src="/images/Asset 30.png"
                        alt=""
                    />
                    <small className="">
                        {items[0].text}
                    </small>
                </div>
                <div className="flex items-center mt-4 w-52 gap-x-3 p-4 rounded-full border border-[#d06d52]">
                    <img src="/images/Asset 31.png" alt="" />
                    <div className="text-sm">
                        <div className="font-medium">{items[0].name}</div>
                        <div className="text-xs">{items[0].role}</div>
                    </div>
                </div>
            </div>
            <div className="flex mt-3 items-start gap-x-10">
                {items.slice(1).map((t, i) => (
                    <div
                        key={t.id}
                        onClick={() => swapToFront(i + 1)}
                        className="cursor-pointer bg-[#d06d52] gap-x-3 w-72 rounded-full p-10 flex items-center justify-center"
                    >
                        <img src="/images/Asset 32.png" alt="" />
                        <small
                            className="
                                text-xs
                                overflow-hidden
                                whitespace-normal
                                [display:-webkit-box]
                                [-webkit-box-orient:vertical]
                                [-webkit-line-clamp:3]
                                "
                        >
                            {t.text}
                        </small>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
