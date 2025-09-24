
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gray-100 rounded-2xl my-8 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between p-8 md:p-12 lg:p-20">
        {/* Text Content */}
        <div className="z-10 text-center lg:text-left mb-8 lg:mb-0">
          <p className="text-lg font-bold text-gray-800 animate-on-load" style={{ animationDelay: '200ms' }}>Aura Pulse</p>
          <h1 className="text-5xl md:text-7xl font-bold text-black my-2 animate-on-load" style={{ animationDelay: '300ms' }}>Nebula</h1>
          <div className="relative animate-on-load" style={{ animationDelay: '400ms' }}>
             <h2 className="text-7xl md:text-9xl font-extrabold text-gray-200/80 select-none">SONICWAVE</h2>
          </div>
          <button className="mt-6 bg-[#2F52E0] text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-[#2541B3] transition-all duration-300 animate-on-load" style={{ animationDelay: '500ms' }}>
            Shop By Category
          </button>
        </div>

        {/* Image */}
        <div className="relative z-10 w-3/4 lg:w-1/2 animate-on-load" style={{ animationDelay: '300ms' }}>
            <img 
                src="https://i.imgur.com/u2QeCgi.png" 
                alt="Wireless Sonicwave Headphones" 
                className="w-full h-auto transform lg:scale-150 lg:-rotate-12"
            />
        </div>

        {/* Description Box */}
        <div className="absolute bottom-8 right-8 z-20 hidden md:block animate-on-load" style={{ animationDelay: '600ms' }}>
            <h4 className="font-bold text-sm">Description</h4>
            <p className="text-xs text-gray-500 max-w-xs mt-1">
                There are many variations passages of Lorem Ipsum available, but the majority have suffered alteration.
            </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;