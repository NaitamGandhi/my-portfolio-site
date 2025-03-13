// components/ContactPanel.js
import { useState } from 'react';
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import icons

export default function ContactPanel() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        setStatus('Email sent! Thanks for reaching out!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(result.error || 'Something went wrong... Try again?');
      }
    } catch (error) {
      console.error(error);
      setStatus('Failed to send this email');
    }
  };

  return (
    <div className="w-full bg-black text-white flex flex-col items-center justify-center py-10 sm:py-16 px-4 md:px-10 lg:px-20">
      <h2 className="text-4xl sm:text-5xl text-center font-bold mb-8 sm:mb-10">
        Connect with me!
      </h2>

      {/* Social Media Icons */}
      <div className="flex space-x-4 sm:space-x-6 mb-6 sm:mb-8">
        <motion.a
          href="https://github.com/NaitamGandhi"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          className="text-4xl sm:text-5xl text-white"
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://linkedin.com/in/naitam-gandhi"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          className="text-4xl sm:text-5xl text-white"
        >
          <FaLinkedin />
        </motion.a>
      </div>

      {/* Form */}
      <form 
        onSubmit={handleSubmit} 
        className="w-full max-w-lg sm:max-w-xl space-y-4 sm:space-y-6 px-4 sm:px-6 md:px-8 lg:px-10"
      >
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          placeholder="Your Name" 
          className="w-full p-3 sm:p-4 bg-black border border-white rounded-md text-base sm:text-lg"
          required
        />
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          placeholder="Your Email" 
          className="w-full p-3 sm:p-4 bg-black border border-white rounded-md text-base sm:text-lg"
          required
        />
        <textarea 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          placeholder="Your Message" 
          className="w-full p-3 sm:p-4 bg-black border border-white rounded-md text-base sm:text-lg h-32 sm:h-40 resize-none"
          required
        />
        <button 
          type="submit" 
          className="w-full p-3 sm:p-4 bg-white text-black font-light rounded-md hover:bg-gray-300 transition-colors text-base sm:text-lg"
        >
          Send
        </button>
        {status && (
          <p className="text-center mt-4 text-sm sm:text-base">
            {status}
          </p>
        )}
      </form>
    </div>
  );
}
