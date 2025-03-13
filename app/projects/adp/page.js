"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';

const ADPPage = () => {
  const images = [
    "/images/hugging.png",
    "/images/bert.png",
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

      <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 px-5 pt-16 md:pt-20">ADP - Machine Learning Automation</h1>
        <div className="flex flex-col md:flex-row items-center justify-center p-10 space-x-0 md:space-x-8 w-full">
          <div className="w-full md:w-1/2 flex flex-col text-left px-4">
            <p className="text-lg md:text-xl font-medium max-w-auto">During my internship at ADP, I developed a Natural Language Processing (NLP) solution using a BERT model to automatically extract and organize information from bulk-imported documents. This project was one of ADP’s first machine learning-based solutions integrated into their product suite, showcasing my ability to innovate and deliver impactful solutions.</p>
          </div>

          <div className="w-full md:w-1/2 flex flex-col text-right px-4 mt-6 md:mt-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-right">Key Elements</h2>
            <p className="text-lg md:text-xl text-right font-medium hover:scale-105">Natural Language Processing</p>
            <p className="text-lg md:text-xl text-right font-medium hover:scale-105">Transformers</p>
            <p className="text-lg md:text-xl text-right font-medium hover:scale-105">Tokenization Preparation of the Dataset</p>
            <p className="text-lg md:text-xl text-right font-medium hover:scale-105">Training & Testing BERT Model</p>
            <p className="text-lg md:text-xl text-right font-medium hover:scale-105">Containerizing via Kubernetes to Scale Training</p>
            <p className="text-lg md:text-xl text-right font-medium hover:scale-105">Statistical Analysis of the Model's Performance</p>
          </div>
        </div>
      </div>
      
      <div className="text-center mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.5 }}
            >
              <img
                src={src}
                alt={`ADP Illustration ${index + 1}`}
                className="w-full h-full object-cover shadow-lg rounded-lg"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold mt-20 mb-10 text-center">What I Learned</h2>
      <p className="text-lg md:text-xl font-medium px-4 text-center">
        By leveraging an NLP model, BERT (Bidirectional Encoder Representations from Transformers), we can extract key information from bulk imported documents to
        categorize & sort any documents uploaded by ADP clients.
      </p>
      <p className="text-lg md:text-xl font-medium px-4 text-center">
        BERT can use its NER (Named Entity Recognition) ability to mark various types of entities in a text sequence to extract what we'd like. To do so we have to label our own dataset.
      </p>
      <p className="text-lg md:text-xl font-medium px-4 text-center">
        Tokenization is used to prepare the training and testing dataset.
      </p>
      <p className="text-lg md:text-xl font-medium px-4 text-center">
        We fine-tune the model by feeding it our custom dataset and apply MLM (Masked Language Modeling) technique to produce a NER capable model with high enough accuracy.                                                                   
      </p>
      <p className="text-2xl md:text-3xl font-medium animate-pulse px-4 text-center">
        In our case, ~93%
      </p>
    </div>
  );
};

export default ADPPage;
