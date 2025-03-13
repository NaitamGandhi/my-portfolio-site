"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';

const VRPage = () => {
  const images = [
    "/images/umbrella.png",
  ];
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simulate a delay before fading in
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'} min-h-screen bg-black text-white p-5 md:p-20 flex flex-col items-center`}>
      {/* Back Button */}
      <Link href="/#experience">
        <button className="absolute left-10 top-6 md:top-10 mb-6 text-lg font-light text-gray-300 hover:text-white hover:underline transition-colors duration-300 z-10">
          &lt; BACK
        </button>
      </Link>

      <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'} text-center`}>
        <h1 className="text-3xl md:text-5xl font-bold mb-4 px-5 pt-16 md:pt-20">MixRLab - VR Medical Ontology</h1>
        <p className="text-lg md:text-xl font-medium mb-5 max-w-6xl mx-auto px-5">
          Designed a VR (C# coded) umbrella-like tree structure in Unity for visualizing a medical ontology database. This
          solution was more intuitive and helped users with readability, reducing information lookup time by 50%.
        </p>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold p-10">Inspiration</h1>
      <div className="text-center mb-8 w-full">
        <div className="flex w-full items-center justify-center ">
        <img
                src="/images/umbrella.png"
                alt="VR Illustration 1"
                className="h-auto object-cover shadow-lg rounded-lg"
              />
        </div>
      </div>
    </div>
  );
};

export default VRPage;
