"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';

const CrwalrPage = () => {
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
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 px-5 pt-16 md:pt-20">Crawlr - Capstone Project</h1>
        <p className="text-lg md:text-xl font-medium mb-5 p-5 md:p-10 text-center">Administered a team to create a bar-crawling application that offers group deals dynamically in NYC.</p>
        <p className="text-lg md:text-xl font-medium mb-5 p-5 md:p-10 text-center">Coded crawl routing feature from user-filtered locations by leveraging Google Places & Location APIs.</p>
        <p className="text-lg md:text-xl font-medium mb-5 p-5 md:p-10 text-center">Consolidated a project plan w/ Gantt chart, Agile, and SCRUM techniques to deliver an MVP product in 5 weeks.</p>

        <div className="flex flex-col md:flex-row items-start p-5 md:p-10 space-x-0 md:space-x-10 w-full">
          <div className="w-full md:w-1/2 p-5 md:p-10 text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Technical Impact</h1>
            <p className="text-lg md:text-xl font-medium hover:scale-105 p-2">Google Maps API Integration</p>
            <p className="text-lg md:text-xl font-medium hover:scale-105 p-2">Routes API Integration</p>
            <p className="text-lg md:text-xl font-medium hover:scale-105 p-2">Yelp API Integration</p>
            <p className="text-lg md:text-xl font-medium hover:scale-105 p-2">Mobile-App Development</p>
          </div>

          <div className="w-full md:w-1/2 p-5 md:p-10 text-right">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Leadership Impact</h1>
            <p className="text-lg md:text-xl font-medium hover:scale-105 p-2">Host Agile Meetings</p>
            <p className="text-lg md:text-xl font-medium hover:scale-105 p-2">Practice User-Story Sprint Planning</p>
            <p className="text-lg md:text-xl font-medium hover:scale-105 p-2">Track with Kanban Boards and Gantt Chart</p>
          </div>
        </div>
      </div>

      <div className="text-center mb-8 w-full">
        <img
          src="/images/crawl.png"
          alt="Crawlr Illustration 1"
          className="w-full h-auto object-cover shadow-lg"
        />
      </div>
    </div>
  );
};

export default CrwalrPage;
