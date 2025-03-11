"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import GradientText from "@/components/ui/gradientText";
import { Red_Hat_Display } from "next/font/google";
import { Menu, X } from "lucide-react"; // Import icons for open/close

const redHat = Red_Hat_Display({ subsets: ["latin"] });

const links = [
  { name: "Projects", path: "#projects" },
  { name: "Contact Me", path: "#contact" },
];

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close mobile menu if open

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`${redHat.className} fixed top-0 w-full bg-black bg-opacity-80 backdrop-blur-md z-30 py-2`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <motion.h1
          className="text-5xl font-semibold cursor-pointer text-white"
          whileHover={{ scale: 1.05 }}
        >
          Arya <span className="text-green-400">.</span>
        </motion.h1>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex space-x-8 text-xl">
          {links.map((link, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="hover:cursor-pointer"
              onClick={(e) => scrollToSection(e, link.path.substring(1))}
            >
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={false}
              >
                {link.name}
              </GradientText>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="xl:hidden focus:outline-none"
        >
          {isMenuOpen ? (
            <X size={30} className="text-white" />
          ) : (
            <Menu size={30} className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-black bg-opacity-90 border-t border-gray-800 backdrop-blur-md"
          >
            <div className="flex flex-col items-center py-4 space-y-4">
              {links.map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="text-white text-lg px-4 py-2 hover:text-green-400 cursor-pointer"
                  onClick={(e) => scrollToSection(e, link.path.substring(1))}
                >
                  <GradientText
                    colors={[
                      "#40ffaa",
                      "#4079ff",
                      "#40ffaa",
                      "#4079ff",
                      "#40ffaa",
                    ]}
                    animationSpeed={3}
                    showBorder={false}
                  >
                    {link.name}
                  </GradientText>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
