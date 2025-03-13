"use client";

import { useEffect, useState } from 'react';
import { TbHexagonLetterNFilled } from "react-icons/tb";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [translateY, setTranslateY] = useState(-100);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos && currentScrollPos > 10) {
      setTranslateY(-100);
    } else {
      setTranslateY(0);
    }

    setIsScrolled(currentScrollPos > window.innerHeight - 100);
    setPrevScrollPos(currentScrollPos);
  };

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const closeMenuAndScroll = (id) => {
    scrollToSection(id);
    setIsMenuOpen(false); // Close the menu when an item is clicked
  };

  useEffect(() => {
    setTimeout(() => setTranslateY(0), 3000);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-black' : 'bg-transparent'} p-5`}
      style={{
        transform: `translateY(${translateY}px)`,
      }}
    >
      <div className="flex w-full max-w-screen-2xl justify-between items-center">
        {/* Logo with White Color */}
        <div
          onClick={() => scrollToSection("#home")}
          className="cursor-pointer"
        >
          <TbHexagonLetterNFilled className="text-white h-10 w-10" />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="sm:hidden cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <FiMenu className="text-white h-8 w-8" />
          ) : (
            <FiMenu className="text-white h-8 w-8" />
          )}
        </div>

        {/* Navbar Items */}
        <div 
        className={`flex flex-col sm:flex-row sm:space-x-6 text-lg sm:text-md font-oswald text-white ${isMenuOpen ? 'flex' : 'hidden'} sm:flex`}>
          <span
            onClick={() => closeMenuAndScroll("#about")}
            className="relative px-8 hover:border-b-2 hover:border-white cursor-pointer"
          >
            About Me
          </span>
          <span
            onClick={() => closeMenuAndScroll("#experience")}
            className="relative px-8 hover:border-b-2 hover:border-white cursor-pointer"
          >
            Experience
          </span>
          <span
            onClick={() => closeMenuAndScroll("#blog")}
            className="relative px-8 hover:border-b-2 hover:border-white cursor-pointer"
          >
            Blog
          </span>
          <span
            onClick={() => closeMenuAndScroll("#contact")}
            className="relative px-8 hover:border-b-2 hover:border-white cursor-pointer"
          >
            Contact
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
