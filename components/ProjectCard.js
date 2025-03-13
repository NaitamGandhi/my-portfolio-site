// components/ProjectCard.js
"use client";

import { motion } from "framer-motion";
import Link from 'next/link';

export default function ProjectCard({ title, description, image, link }) {
  return (
    <Link href={`${link}?hideNavbar=true`}>
      <motion.div
        className="relative group w-full h-[350px] overflow-hidden shadow-lg cursor-pointer"
        whileHover={{ scale: 1.03 }}
      >
        {/* Background Image */}
        <img 
          src={image || "/images/error.jpg"} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Overlay for Text */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-2xl font-semibold text-center text-white mb-2">{title}</h3>
          <p className="text-md text-white max-w-[80%] text-center">{description}</p>
        </div>
      </motion.div>
    </Link>
  );
}
