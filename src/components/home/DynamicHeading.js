import React, { useEffect, useState } from "react";

const DynamicHeading = ({
  messages,
  images,
  extraHeadings,
  para,
  color = "#513335",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic updates every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [messages.length]);

  // Handle pill clicks
  const handlePillClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      {extraHeadings && extraHeadings[currentIndex] && (
        <h1 className="text-3xl mb-10 circula" style={{ color }}>
          {extraHeadings[currentIndex]}
        </h1>
      )}
      {/* Main Heading */}
      <h1 className="circula capitalize text-5xl" style={{ color }}>
        {messages[currentIndex].split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index < messages[currentIndex].split("\n").length - 1 && <br />}
          </React.Fragment>
        ))}
      </h1>

      <p className="w-2/3 mt-5">
        {para && para[currentIndex].map((item, index) => (
          <React.Fragment key={index}>
            {item}
            <br />
          </React.Fragment>
        ))}
      </p>

      <button className="border-2 border-[#513335] rounded-full text-xs px-6 py-2 my-4">
          Know more
        </button>


      {/* Pills */}
      <div className="flex space-x-2 mt-2">
        {messages.map((_, index) => (
          <button
            key={index}
            className={`w-8 h-2 rounded-full border border-[#513335] ${
              currentIndex === index ? "bg-[#513335]" : "bg-transparent"
            }`}
            onClick={() => handlePillClick(index)}
          ></button>
        ))}
      </div>

      {/* Dynamic Image */}
      {images && images[currentIndex] && (
        <img src={images[currentIndex]} alt={`Dynamic ${currentIndex}`} />
      )}
      
    </div>
  );
};

export default DynamicHeading;
