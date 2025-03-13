// app/pages.js
"use client";

import ProjectCard from "../components/ProjectCard";
import ContactPanel from "../components/ContactPanel";
import Polaroid from "../components/Polaroid";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useState, useEffect } from "react";

const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const [bgColor, setBgColor] = useState("black"); // Initial dark background
  const [showTypewriter, setShowTypewriter] = useState(false); // Controls when to show Typewriter
  const [isLoading, setIsLoading] = useState(true); // Controls home page reveal

  const textArray = [
    "Hi, I'm your friendly neighborhood    ...         engineer.",
    "My mission is to positively impact as many lives as I can.",
    "And I'd like to do so with the technology I build   ...",
    "The knowledge I accumulate   ...",
    "And   ... the journey I take.",
    "So welcome!      Here, you'll find some highlights of my engineering journey.",
  ];

  const projects = [
    {
      title: "FactSet Research – Software Engineer",
      description:
        "I work as a backend/infrastructure engineer. I help build support tools and applications for cost cutting, performace optimizations, and building bulletproof products of a tier 0 service to better serve our clients.",
      image: "/images/factset.jpeg",
      link: "/projects/factset",
    },
    {
      title: "RWJ Hospital AI Research – Data Science Intern",
      description:
        "Researched echocardiogram AI Detection and coded an image-data standardizing pipeline to feed a Convolutional Neural Network, enhancing feature detection precision to ~97%.",
      image: "/images/rwj.png",
      link: "/projects/rwj",
    },
    {
      title: "ADP, LLC – Software Engineer Intern",
      description:
        "Engineered a BERT (Transformer) NLP model that automated form-filling, categorization, and sorting of 5,000+ bulk-imported documents monthly, improving processing speed by 80%.",
      image: "/images/adp.png",
      link: "/projects/adp",
    },  
    {
      title: "Crawlr App - Project Manager",
      description: "Administered a bar-crawling application offering group deals in NYC, using Google Places & Location APIs.",
      image: "/images/barCrawl.jpg",
      link: "/projects/crawlr"
    },
    {
      title: "Spotify Shuffle",
      description: "Developed a web-app to display top songs from artists on Spotify, using Spotify and Genius API.",
      image: "/images/spotifyLogo.jpg",
      link: "/projects/spotify",
    },
    {
      title: "VR Medical Ontology - Research Assistant",
      description:
        "Large-scale medical ontology visualization experince in VR to enhance lookup efficiency and utilization.",
      image: "/images/vr.jpg",
      link: "/projects/vr",
    },
    {
      title: "Companion Finder - 2nd Place Hackathon winner",
      description:
        "Engineered a data-driven program with agglomerative clustering that analyzes personality traits through Google Forms, visualizing results with dendrograms to enhance interpersonal relationships among students.",
      image: "/images/friends.png",
      link: "/projects/campus",
    },
  ];

  const lastText = textArray[textArray.length - 1];

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const scrollMax = 500; // Max scroll value to transition completely to white
    const scrollPercentage = Math.min(scrollPosition / scrollMax, 1);
    const r = Math.floor(255 * scrollPercentage);
    const g = Math.floor(255 * scrollPercentage);
    const b = Math.floor(255 * scrollPercentage);

    setBgColor(`rgb(${r}, ${g}, ${b})`);
  };

  useEffect(() => {
    const delay = setTimeout(() => setShowTypewriter(true), 3500);
    const landing = setTimeout(() => setIsLoading(false), 1000);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(delay);
      clearTimeout(landing);
    };
  }, []);

  return (
    <div
      className="text-white"
      style={{ backgroundColor: bgColor, minHeight: "100vh" }}
    >
      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen bg-vintageWhite flex flex-col items-center pt-24 px-4 md:px-10 lg:px-20"
      >
        <div className={`app ${isLoading ? "loading" : ""}`}>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/background-img.png')" }}
          >
            <div className="absolute inset-0 bg-black opacity-65"></div>
          </div>
        </div>
        <div className="relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 2 }}
            className="w-full flex justify-center pt-10"
          >
            <h1 className="text-big-header sm:text-7xl lg:text-big-header font-bold leading-none tracking-tighter text-center">
              NAITAM . PROD
            </h1>
          </motion.div>

          {/* Two-Column Layout */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 2 }}
            className="w-full flex justify-center pt-10"
          >
            <div className="text-center p-6 sm:p-8 h-auto">
              <p className="text-xl sm:text-2xl lg:text-3xl font-light">
                "Life is like riding a bicycle. <br /> To keep your balance, you
                must keep moving." - Albert E.
              </p>
              <div className="text-base sm:text-lg lg:text-xl font-mono mt-6">
                {showTypewriter ? (
                  <Typewriter
                    words={textArray}
                    loop={false}
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={0}
                    delaySpeed={1000}
                    onDone={() => setDisplayText(lastText)}
                  />
                ) : (
                  <p>{displayText}</p>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen bg-vintageWhite text-black flex items-center justify-center px-6 sm:px-10 lg:px-20 py-10"
      >
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center w-full space-y-10 md:space-y-0 md:space-x-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="w-full md:w-2/5">
            <Polaroid imageSrc="/images/portrait.jpg" alt="my image" />
          </div>

          <div className="w-full md:w-3/5 flex flex-col items-center md:items-start">
            <h2 className="text-4xl sm:text-5xl font-bold mt-20 mb-10">
              Who am I?
            </h2>
            <p className="text-lg sm:text-xl max-w-2xl mb-5 leading-relaxed">
              After earning my degree in Computer Science and minoring in Applied Statistics, I became obsessed with building software and learning new advanced technology.
              I am an engineer passionate about leveraging data for growth in business, health, and society.
              I've had the priviledge to work along-side talented software engineers, researchers, and students across many fields over the course of my journey.
            </p>

            <p className="text-lg sm:text-xl max-w-2xl mb-5 leading-relaxed">
              Though, I still yearn for more. 
            </p>
            <p className="text-lg sm:text-xl max-w-2xl mb-5 leading-relaxed">
              I've employeed advance tools like machine learning and NLP models to build company-wide solutions. 
            </p>
            <p className="text-lg sm:text-xl max-w-2xl mb-5 leading-relaxed">
              I invented a standardization for echocardiogram-image datasets to enhance an AI model that can perfrom disease detection and interpretation across hospitals.
            </p>
            <p className="text-lg sm:text-xl max-w-2xl mb-5 leading-relaxed">
              I built robust apps to enhance and maintain a tier-0 service for a fintech company which is in direct competition with Bloomberg's terminal.
            </p>
            <p className="text-lg sm:text-xl max-w-2xl mb-5 leading-relaxed">
              Despite having a vast skillset, I'd like to keep exploring opportinites to help build more intricate solutions, especially products that aim to positively impact people's lives.
            </p>
            <p className="text-lg sm:text-xl max-w-2xl leading-relaxed">
              I want to grow. I want to take ownership. I NEED to make an impact.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="min-h-screen bg-black text-black flex items-center justify-center px-4 sm:px-8 lg:px-16 py-20"
      >
        <div className="experience-grid w-full">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section
        id="blog"
        className="min-h-screen bg-vintageWhite text-black flex items-center justify-center px-4 sm:px-8 lg:px-16 py-10"
      >
        <motion.div
          className="text-center max-w-4xl space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-10">Glimpse of my Story</h2>
          <p className="text-lg sm:text-xl leading-relaxed">
            I've had quite the roller coaster ride going into college. 
            Since 1st grade, I moved over 10+ cites/towns in 3 different countries. Almost every year, I was put in a complete different culture; a gift and a curse.
            With temporary homes, several schools, and other personal hurdles, I always found a way to keep balance in life.
            Like the great philosopher, Dory from Finding Nemo said... "Just keep swimming". So I did! I kept growing and learning. 
            I always challenged myself. I sought solutions to problems that may not be so clear at first sight.
            I got into a school as an undecided engineer. With trial and error, I ended up respecting the art of computer science for the love of inovation and problem solving.
            I flourished as a student, but I needed more than that. I joined several campus initiatives, one being a professional business organization, to practice being a leader along with my academic responsibilites.
            Equiped with both, technical and leadership skills, I led a team of engineers for my final capstone as a project manager and was in the top 5% of the class of PMs.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed">
            Post-graduation, I now work as a software engineer II at Facset for over 2 years, and continue to keeping learning with parallel research internship where I practice the art of Data Science and AI utilization in healthcare.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed">
            With that said, I am excited to see where my journey takes me next.
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen bg-black text-white flex items-center justify-center px-4 sm:px-8 lg:px-16 py-10"
      >
        <ContactPanel />
      </section>
    </div>
  );
};

export default Home;
