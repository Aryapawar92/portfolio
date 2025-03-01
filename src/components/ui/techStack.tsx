"use client";

import React from "react";
import { useEffect, useState } from "react";
import { Red_Hat_Display } from "next/font/google";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { AiOutlineJava } from "react-icons/ai";
import { SiTypescript } from "react-icons/si";
import { color, motion } from "framer-motion";

const redHat = Red_Hat_Display({ subsets: ["latin"] });

const stackItems = [
  {
    id: 1,
    name: "React",
    icon: FaReact,
    color: "#61DAFB",
  },
  {
    id: 2,
    name: "Node.js",
    icon: IoLogoNodejs,
    color: "#339933",
  },
  {
    id: 3,
    name: "Express",
    icon: SiExpress,
    color: "#A9A9A9",
  },
  {
    id: 4,
    name: "MongoDB",
    icon: SiMongodb,
    color: "#4DB33D",
  },
  {
    id: 5,
    name: "HTML",
    icon: SiHtml5,
    color: "#E34F26",
  },
  {
    id: 6,
    name: "CSS",
    icon: SiCss3,
    color: "#1572B6",
  },

  {
    id: 7,
    name: "Tailwind",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },

  {
    id: 8,
    name: "MySQL",
    icon: SiMysql,
    color: "#4479A1",
  },
  {
    id: 9,
    name: "Python",
    icon: SiPython,
    color: "#3776AB",
  },
  {
    id: 10,
    name: "C++",
    icon: SiCplusplus,
    color: "#00599C",
  },
  {
    id: 11,
    name: "Java",
    icon: AiOutlineJava,
    color: "#ED8800",
  },
  {
    id: 12,
    name: "TypeScript",
    icon: SiTypescript,
    color: "#007ACC",
  },
  {
    id: 13,
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
  },
];

function TechStack() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const loopingItems = [...stackItems, ...stackItems];

  return (
    <div className="items-center flex flex-col bg-black">
      <h1 className="text-white text-4xl font-bold mb-8">Tech Stack</h1>
      {mounted && ( // Prevents animation from running during SSR
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
              className="flex flex-col items-center justify-center mx-4 my-4 space-x-2"
            >
              <item.icon size={50} style={{ color: item.color }} />
              <p className="text-white font-bold p-4">{item.name}</p>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
}

export default TechStack;
