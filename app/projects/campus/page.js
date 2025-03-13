"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';

const CampusPage = () => {
  const images = [
    "/images/cluster.png",
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
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 px-5 pt-16 md:pt-20">LoveHacks - Campus Companion Finder</h1>
        <h1 className="text-2xl md:text-3xl animate-pulse mb-8 font-medium">Placed 2nd out of 30+ projects</h1>
        <p className="text-lg md:text-xl font-medium mb-5 p-5 md:p-10 text-center">In this Hackathon, we engineered a data-driven program that leverages agglomerative clustering to process and cluster/pair similar students to find campus friend(s).
        We collected real student data and visualized our results with dendrograms to prove our concept. With our algorithm showing promise, we enhanced interpersonal relationships among 5000+ students on campus</p>

        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Key Elements</h2>
        <p className="text-lg md:text-xl font-medium hover:scale-105 p-2">Collected Data via Google Forms</p>
        <p className="text-lg md:text-xl font-medium hover:scale-105 p-2">Agglomerative Clustering Algorithm</p>
        <p className="text-lg md:text-xl font-medium hover:scale-105 p-2 mb-10">Dendrograms Visualizing to View Matches</p>
      </div>

      <div className="text-center mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 w-full">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.5 }}
            >
              <img
                src={src}
                alt={`Campus Illustration ${index + 1}`}
                className="w-full h-full object-cover shadow-lg rounded-lg"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampusPage;
