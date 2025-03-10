"use client";

import React, { useEffect, useState } from "react";

import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import {
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiMongodb,
  SiCss3,
  SiExpress,
  SiMysql,
  SiPython,
  SiCplusplus,
  SiTypescript,
} from "react-icons/si";
import { AiOutlineJava } from "react-icons/ai";
import { motion } from "framer-motion";

const stackItems = [
  { id: 1, name: "React", icon: FaReact, color: "#61DAFB" },
  { id: 2, name: "Node.js", icon: IoLogoNodejs, color: "#339933" },
  { id: 3, name: "Express", icon: SiExpress, color: "#A9A9A9" },
  { id: 4, name: "MongoDB", icon: SiMongodb, color: "#4DB33D" },
  { id: 5, name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { id: 6, name: "CSS", icon: SiCss3, color: "#1572B6" },
  { id: 7, name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { id: 8, name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { id: 9, name: "Python", icon: SiPython, color: "#3776AB" },
  { id: 10, name: "C++", icon: SiCplusplus, color: "#00599C" },
  { id: 11, name: "Java", icon: AiOutlineJava, color: "#ED8800" },
  { id: 12, name: "TypeScript", icon: SiTypescript, color: "#007ACC" },
  { id: 13, name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
];

function TechStack() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust for smaller screens
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const loopingItems = [...stackItems, ...stackItems];

  return (
    <div className="items-center flex flex-col bg-black overflow-hidden w-full">
      <h1 className="text-white text-3xl sm:text-4xl font-bold mb-8">
        Tech Stack
      </h1>

      {/* Wrapper to prevent horizontal overflow */}
      <div className="w-full overflow-hidden">
        {mounted && (
          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 100,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max py-2 my-2 justify-center items-center"
          >
            {loopingItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center mx-2 sm:mx-4 my-4 space-y-2"
              >
                <item.icon
                  size={isMobile ? 30 : 50}
                  style={{ color: item.color }}
                />
                <p
                  className={`text-white font-bold p-2 ${
                    isMobile ? "text-sm" : "text-lg"
                  }`}
                >
                  {item.name}
                </p>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default TechStack;
