"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Red_Hat_Display, Space_Grotesk } from "next/font/google";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import Squares from "@/components/ui/squares";
import Index from "@/components/ui/index";
import Globe from "@/components/ui/globe";

const redHat = Red_Hat_Display({ subsets: ["latin"] });
const space = Space_Grotesk({ subsets: ["latin"] });

const lines = {
  first: "Hey , I'm",
};

const options = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing
};

const downloadcv = () => {};

function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center px-4">
      <div className="absolute inset-0 -z-10 w-full h-full">
        <Squares
          speed={0.2}
          squareSize={90}
          direction="down"
          borderColor="#262626"
          hoverFillColor="#222"
        />
      </div>
      <div className="absolute inset-0 top-[20px] max-w-7xl mx-auto flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-white" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-white to-transparent -mt-1" />
        </div>

        <div className="text-white text-3xl sm:text-6xl font-bold flex flex-col justify-end px-4 my-8">
          {/* First Line */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            {lines.first}
          </motion.h1>
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`${redHat.className} text-green-400`}
          >
            Arya Pawar
          </motion.span>

          {/* Typing Animation */}

          <TypeAnimation
            sequence={[
              "Frontend Developer.",
              1000,
              "Backend Developer.",
              1000,
              "Bug Hunter.",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className={`text-white text-5xl ${redHat.className}`}
          ></TypeAnimation>

          {/* Links */}
          <div className="flex flex-row gap-4 mt-5">
            <img
              src="/github.png"
              className="w-10 h-10   hover:scale-110 transition-transform cursor-pointer"
            />
            <img
              src="/linkedin.png"
              className="w-10 h-10 hover:scale-110 transition-transform cursor-pointer"
            />
          </div>
          {/* Download CV */}
          <div className="">
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={downloadcv}
              className={`${redHat.className} rounded-xl bg-green-400 px-4 py-2 text-white text-wrap text-sm hover:bg-green-600`}
            >
              Download CV.
            </motion.button>
          </div>
        </div>
        {/* Cards on the right */}
        {/* Right Side Grid - Fix Position */}
        <div className="absolute right-10  grid grid-cols-2 gap-4 ">
          <Tilt className="w-full h-full">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.25 }}
              className="rounded-2xl greenpinkborder w-[200px] h-[200px]" // Fixed size
            >
              <div className="bg-black w-full h-full py-5 px-6 flex flex-col justify-between items-center text-white">
                <Globe />
                <div className="flex-grow"></div> {/* Pushes text down */}
                <p>Frontend Developer</p>
              </div>
            </motion.div>
          </Tilt>
          <Tilt className="w-full h-full">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.25 }}
              className="rounded-2xl greenpinkborder w-[200px] h-[200px]" // Fixed size
            >
              <div className="bg-black w-full h-full py-5 px-6 flex flex-col justify-between items-center text-white">
                <Index />
                <div className="flex-grow"></div> {/* Pushes text down */}
                <p>Backend Developer</p>
              </div>
            </motion.div>
          </Tilt>
          <Tilt className="w-full h-full">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.25 }}
              className="rounded-2xl greenpinkborder w-[200px] h-[200px]" // Fixed size
            >
              <div className="bg-black w-full h-full py-5 px-6 flex flex-col justify-between items-center text-white">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src="/code-forces.png"
                  className="w-8 h-8 hover: cursor-pointer"
                  alt=""
                />
                <h3>CodeForces.</h3>
                <motion.img
                  src="/codechef.png"
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 hover: cursor-pointer"
                  alt=""
                />
                <h3>Codechef.</h3>
              </div>
            </motion.div>
          </Tilt>
          <Tilt className="w-full h-full">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.25 }}
              className="rounded-2xl greenpinkborder w-[200px] h-[200px]" // Fixed size
            >
              <div className="bg-black w-full h-full py-5 px-6 flex flex-col justify-between items-center text-white">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src="/leetcode.png"
                  className="w-8 h-8 hover: cursor-pointer"
                  alt=""
                />
                <h3>Leetcode.</h3>
                <motion.img
                  src="/gfg.png"
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 hover: cursor-pointer"
                  alt=""
                />
                <h3>GeeksforGeeks.</h3>
              </div>
            </motion.div>
          </Tilt>
        </div>
      </div>
    </section>
  );
}

export default Hero;
