// tailwind.config.js
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        black: "#0a0a0a",           // Dark black background
        darkGreen: "#0B2B26",       // Updated accent color
        vintageWhite: "#f5f3ed"     // Vintage white background color
      },
      fontFamily: {
        sans: ["Arial", "sans-serif"],  // Replace with your preferred Sans Serif font family
        mono: ["Courier New", "Courier", "monospace"], // Define monospace font
        aktiv: ["aktiv-grotesk"],
        oswald: ["Oswald", "sans-serif"], // New font
      },
      fontSize: {
        'big-header': '10vw',       // Large font size for main header
        'medium': '1.5rem',         // Medium size for quotes and secondary text
      },
      fontWeight: {
        thin: '50',                // Thin weight for a sleek, modern look
        light: '300',               // Light weight for clean text styling
        bold: '900',                // Bold for emphasis if needed
      },
    },
  },
  plugins: [],
};
