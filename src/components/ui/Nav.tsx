"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import ShinyText from "@/components/ui/shinyText";
import GradientText from "@/components/ui/gradientText";
import { Red_Hat_Display } from "next/font/google";

const links = [
  {
    name: "About",
    path: "/",
  },
  {
    name: "Projects",
    path: "/",
  },
  {
    name: "Contact Me",
    path: "/",
  },
];

const redHat = Red_Hat_Display({ subsets: ["latin"] });

const Nav = () => {
  return (
    <div
      className={` ${redHat.className} flex w-full max-w-md justify-between text-xl`}
    >
      {links.map((link, index) => {
        return (
          <motion.div
            whileHover={{ scale: 1.1 }}
            key={index}
            className="hover:text-green-400 px-4 hover:cursor-pointer"
          >
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class"
            >
              {link.name}
            </GradientText>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Nav;
