// components/Polaroid.js
import Image from 'next/image';

const Polaroid = ({ imageSrc, alt }) => {
  return (
    <div className="relative bg-white border border-gray-300 shadow-lg p-4 w-full max-w-[500px] h-[750px] transform transition-transform duration-300 hover:scale-105 hover:rotate-3">
      {/* Image Container */}
      <div className="relative w-full h-[500px] md:h-[600px] lg:h-[600px] overflow-hidden">
        <Image 
          src={imageSrc} 
          alt={alt} 
          layout="fill" 
          objectFit="cover" 
          className="object-cover"
        />
      </div>
      {/* Caption Area */}
      <div className="flex justify-between w-full text-s text-gray-600 font-mono tracking-wide">
        <span>078002</span>
        <span>IM103315EE CK</span>
      </div>
    </div>
  );
};

export default Polaroid;
