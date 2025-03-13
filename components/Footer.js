// components/Footer.js
"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-vintageWhite text-black py-4 sm:py-6 px-4 sm:px-8 w-full">
      <div className="flex flex-col md:flex-row justify-between items-center mx-auto max-w-auto">
        {/* Footer Text */}
        <p className="text-xs sm:text-sm text-center md:text-left">
          © {year} Naitam Gandhi. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <motion.a
            href="https://github.com/NaitamGandhi"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-lg sm:text-xl"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/naitam-gandhi"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-lg sm:text-xl"
          >
            <FaLinkedin />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
