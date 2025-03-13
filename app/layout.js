// app/layout.js
"use client";

import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Hide Navbar on project pages
  const hideNavbar = pathname?.startsWith("/projects");

  return (
    <html lang="en">
      <body className="bg-black text-white">
        {!hideNavbar && <Navbar />} {/* Render Navbar conditionally */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
