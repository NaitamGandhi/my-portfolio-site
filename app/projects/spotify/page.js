"use client";

import Link from "next/link";
import { useState, useEffect } from 'react';

const SpotifyPage = () => {
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
        <h1 className="text-3xl md:text-5xl font-bold mb-4 px-5 pt-16 md:pt-20">Spotify Shuffle - Personal Music Dashboard</h1>
        <p className="text-lg md:text-xl font-medium mb-10 p-5 md:p-10">
          Being a music enthusiast, I wanted to share my taste. So, I developed an aesthetic interactive web-app dashboard using Python (backend), ReactJS & HTML/CSS (frontend) to display song snippets of my top artists from Spotify.
          I extracted JSON data from Spotify and Genius APIs & added search functionality to look up any artist or song that users would like displayed on the dashboard.
          I used Socket to connect the backend with frontend.
        </p>
      </div>

      {/* Image and GIF */}
      <div className="text-center max-w-4xl w-full">
        <img
          src="/images/react-spotify.jpg"
          alt="Spotify Illustration"
          className="w-full h-auto object-cover shadow-lg"
        />
        <div className="mt-10 p-10 flex justify-center">
          <iframe 
            src="https://giphy.com/embed/Z9WQLSrsQKH3uBbiXq"
            width="480" 
            height="270" 
            className="w-full max-w-[480px] max-h-[270px] mx-auto"
            frameBorder="0" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default SpotifyPage;
