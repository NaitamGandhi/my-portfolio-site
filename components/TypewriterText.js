"use client";

import React, { useEffect, useState } from "react";

const TypewriterText = ({ texts }) => {
  const [displayText, setDisplayText] = useState(""); // Text currently displayed
  const [lineIndex, setLineIndex] = useState(0); // Track the current line index

  useEffect(() => {
    const currentText = texts[lineIndex]; // Get current line text
    let index = 0; // Index for the current text line

    const startTyping = () => {
      setDisplayText(""); // Clear display text before typing new line

      const interval = setInterval(() => {
        if (index < currentText.length) {
          setDisplayText((prev) => prev + currentText.charAt(index)); // Append each character
          index++;
        } else {
          clearInterval(interval);

          // Move to the next line after a delay
          setTimeout(() => {
            setLineIndex((prev) => (prev + 1) % texts.length); // Move to the next line
          }, 1000); // Delay before starting the next line
        }
      }, 100); // Typing speed

      return () => clearInterval(interval); // Cleanup interval on unmount
    };

    // Start typing effect when the line index changes
    const typingEffect = startTyping();

    return () => {
      clearInterval(typingEffect); // Clear typing interval on component unmount
    };
  }, [texts, lineIndex]); // Run effect when texts or lineIndex changes

  return (
    <p className="text-lg text-center">{displayText}</p> // Center the text
  );
};

export default TypewriterText;
