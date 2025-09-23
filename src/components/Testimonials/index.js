import { useState } from 'react';

const Testimonials = () => {
  const initial = [
    {
      id: 1,
      icon: '/images/Asset 30.png',
      text: `As an architect, I was impressed by the precision and finish of the YUU by Nahar sales office. If this attention to detail carries into the whole project, it’s going to be a landmark project.`,
      name: 'Arjun Mehta',
      role: 'Architect',
    },
    {
      id: 2,
      icon: '/images/Asset 32.png',
      text: `The professionalism at YUU by Nahar gave me real confidence. Even though construction is on, the sales office reflects the quality and care that makes it feel like a safe investment.`,
      name: 'Priya Rao',
      role: 'Bank Employee',
    },
    {
      id: 3,
      icon: '/images/Asset 32.png',
      text: `Buying my first home felt overwhelming, but the YUU by Nahar3 team made it simple. The sales office quality gave me the reassurance I needed to take the next step.`,
      name: 'Rajiv Kapoor',
      role: 'Photographer',
    },
  ];

  const [items, setItems] = useState(initial);

  const swapToFront = (index) => {
    const selected = items[index];
    const rest = items.filter((_, i) => i !== index);
    setItems([selected, ...rest]);
  };

  return (
    <div className="flex flex-col desktop:flex-row items-start justify-center gap-x-5 desktop:rounded-bl-full px-5 desktop:px-16 bg-[#fcf8f0] pt-0 pb-10 desktop:pt-12 desktop:pb-32 overflow-hidden">
      {/* Header */}
      <div>
        <img src="/images/Asset 30.png" alt="" />
        <h1 className="mt-2">TESTIMONIALS</h1>
      </div>

      {/* Main testimonial */}
      <div>
        <div className="relative mt-16 desktop:mt-0 p-4 desktop:p-6 w-full desktop:w-96 rounded-2xl border border-[#d06d52]">
          <img className="absolute -top-10 -left-6" src="/images/Asset 30.png" alt="" />
          <small>{items[0].text}</small>
        </div>
        <div className="flex items-center mt-4 w-52 gap-x-3 p-4 rounded-full border border-[#d06d52]">
          <img src="/images/Asset 31.png" alt="" />
          <div className="text-sm">
            <div className="font-medium">{items[0].name}</div>
            <div className="text-xs">{items[0].role}</div>
          </div>
        </div>
      </div>

      {/* Scrollable list */}
      <div
        className="flex mt-10 desktop:mt-3 items-start gap-x-10 overflow-x-auto desktop:overflow-x-visible flex-nowrap scroll-smooth snap-x snap-mandatory scrollbar-hide w-full max-w-full"
        style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-x' }}
      >
        {items.slice(1).map((t, i) => (
          <div
            key={t.id}
            onClick={() => swapToFront(i + 1)}
            className="cursor-pointer bg-[#d06d52] gap-x-3 w-72 rounded-full p-10 flex items-center justify-center flex-shrink-0 snap-start"
          >
            <img src="/images/Asset 32.png" alt="" />
            <small className="text-xs overflow-hidden whitespace-normal [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
              {t.text}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
