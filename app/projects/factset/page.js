"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';

const FactsetPage = () => {
  const images = [
    "/images/aws.png",
    "/images/backend.jpg",
    "/images/ssms.png",
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
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 px-5 pt-16 md:pt-20">FactSet - Backend & Infrastructure Engineering</h1>
        <p className="text-lg md:text-xl font-medium mb-5 p-5 md:p-10 text-center">I work here as a Software Engineer II for the Application User Data Service (AUDS) team.</p>
        <p className="text-lg md:text-xl font-medium mb-5 p-5 md:p-10 text-center">I primarily focus on storing, delivering, and protecting client-data across FactSet.</p>
        <p className="text-lg md:text-xl font-medium mb-5 p-5 md:p-10 text-center">This role has provided me a holistic software engineering experience demanding</p>

        <p className="text-lg md:text-xl font-medium hover:scale-105 p-2">Strong Coding Skills</p>
        <p className="text-lg md:text-xl font-medium hover:scale-105 p-2">End-to-End Solution Planning & Delivery</p>
        <p className="text-lg md:text-xl font-medium hover:scale-105 p-2">Python Automation</p>
        <p className="text-lg md:text-xl font-medium hover:scale-105 p-2">Service Analytics</p>
        <p className="text-lg md:text-xl font-medium hover:scale-105 p-2">Linux Development</p>
        <p className="text-lg md:text-xl font-medium hover:scale-105 p-2">SQL Expertise</p>
        <p className="text-lg md:text-xl font-medium hover:scale-105 p-2 mb-10">AWS Integration Competency</p>
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
                alt={`Factset Illustration ${index + 1}`}
                className="w-full h-auto object-cover shadow-lg"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Work Section */}
      <h2 className="text-3xl md:text-5xl font-bold p-5 md:p-20 mb-4 text-center">My Work</h2>
      <p className="text-lg md:text-xl font-medium mb-5 p-5 md:p-10 text-center">
        Developed a company-wide CLI application using Python to enable fast data transfers for client files exceeding 50GB, streamlining efficiency.
      </p>
      <p className="text-lg md:text-xl font-medium mb-5 p-5 md:p-10 text-center">
        Led a system analysis project, conducting in-depth investigations to identify root causes of recurring Out-of-Memory issues.
      </p>
      <p className="text-lg md:text-xl font-medium mb-5 p-5 md:p-10 text-center">
        Built a multi-functional C# application to cleanse hundreds of gigabytes of stale client data, saving thousands of dollars monthly on cloud storage.
      </p>
      <p className="text-lg md:text-xl font-medium mb-5 p-5 md:p-10 text-center">
        Contributed to several enhancement projects aimed at improving the adaptability and robustness of our core services to meet management-driven changes.
      </p>
      <p className="text-lg md:text-xl font-medium mb-5 p-5 md:p-10 text-center">
        Handled on-call responsibilities; addressed client-facing and internal technical issues under time constraints.
      </p>

      {/* Video Section */}
      <h2 className="text-3xl md:text-5xl font-bold p-5 md:p-20 mb-4 text-center">FactSet Workstation</h2>
      <div className="text-center mb-8 w-full">
        <video
          src="/images/workstation-video.mp4"
          autoPlay
          loop
          muted
          className="w-full md:w-[80%] h-auto mx-auto object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </div>
  );
};

export default FactsetPage;
