"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';

const RWJPage = () => {
  const images = [
    "/images/radiomics.jpg",
    "/images/ultrasound.jpg",
    "/images/CNN.png",
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
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 px-5 pt-16 md:pt-20">Robert Wood Johnson Hospital - Echocardiogram Detection with AI</h1>
        <p className="text-lg md:text-xl font-medium mb-5 p-5 md:p-10 text-center">Under Dr. Naveena Yanamala, a former Carnegie Mellon University research professor, I served as a Data Science Intern.</p>
        <p className="text-lg md:text-xl font-medium mb-5 p-5 md:p-10 text-center">My project involved developing a standardized image-processing pipeline to normalize variable ultrasound datasets.</p>
        <p className="text-lg md:text-xl font-medium mb-10 p-5 md:p-10 text-center">The project identified the most effective standardization techniques, significantly improving dataset quality and enhancing the precision and recall of a CNN model for clinical detection.</p>
      </div>

      {/* Image Grid */}
      <div className="text-center max-w-4xl mb-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full max-w-4xl">
          {images.map((src, index) => (
            <motion.div
              key={index}
              className={`${index === 1 ? "md:col-span-6 md:row-span-2" : "md:col-span-6"}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.5 }}
            >
              <img
                src={src}
                alt={`RWJ Illustration ${index + 1}`}
                className="w-full h-auto object-cover shadow-lg"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* My Work Section */}
      <h2 className="text-3xl md:text-5xl font-bold p-5 md:p-20 mb-4 text-center">My Work</h2>
      <p className="text-lg md:text-xl font-medium text-center mb-5 p-5 md:p-10 max-w-6xl">
        My project focused on developing a standardized image-processing pipeline to normalize variable ultrasound datasets. 
        By leveraging Radiomics, a quantitative method of analyzing medical images via feature extraction, I was able to extract numerical information out of images and develop my own datasets. 
        Each dataset represented a unique image-processing technique, and for each I did statistical analysis, using Python and supporting libraries, to test for similarity in feature values across different hospitals. 
        This study helped pick the most effective image standardizing technique that significantly improved the quality of ultrasound datasets from various hospitals, in turn, enhancing the precision and recall of their CNN model for clinical detections. 
        The new model, trained on a standardized dataset, doubled its accuracy compared to the model that was trained on a non-standardized dataset, showing promise for future use in echocardiographic imaging and disease interpretation.
      </p>
    </div>
  );
};

export default RWJPage;
