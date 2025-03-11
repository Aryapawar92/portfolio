"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Red_Hat_Display } from "next/font/google";
import { motion } from "framer-motion";
import ParallaxTilt from "react-parallax-tilt";

import Index from "@/components/ui/index";
import Globe from "@/components/ui/globe";

const redHat = Red_Hat_Display({ subsets: ["latin"] });

const lines = {
  first: "Hey , I'm",
};

const options = {
  reverse: false,
  max: 35,
  perspective: 1000,
  scale: 1.1,
  speed: 1000,
  tiltMaxAngleX: 35,
  tiltMaxAngleY: 35,
  transitionSpeed: 1000,
  tiltEasing: "cubic-bezier(.03,.98,.52,.99)",
  glareEnable: false,
  reset: true,
};

const downloadcv = () => {
  // Direct link to the file in the public directory
  const fileUrl = "/AryaResume.pdf";

  // Create anchor element
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = "AryaCV.pdf";

  // Append to body, trigger click, and remove
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

function Hero() {
  return (
    <section
      className={`${redHat.className} relative w-full min-h-screen flex flex-col justify-start items-center px-4 py-4`}
    >
      {/* Square Background - Hidden on Mobile */}

      {/* Main Content Container */}
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row md:items-start gap-5 pt-2 mt-6">
        {/* Left Side with Timeline and Intro */}
        <div className="flex flex-row items-start w-full md:w-1/2">
          {/* Timeline */}
          <div className="hidden md:flex flex-col justify-center items-center mt-4">
            <div className="w-5 h-5 rounded-full bg-white" />
            <div className="w-1 h-40 bg-gradient-to-b from-white to-transparent -mt-1" />
          </div>

          {/* Introduction Text */}
          <div className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold flex flex-col justify-end px-4 my-4 w-full">
            {/* First Line */}
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {lines.first}
            </motion.h1>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
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
              className={`text-white text-xl sm:text-2xl md:text-3xl ${redHat.className}`}
            />

            {/* Links */}
            <div className="flex flex-row gap-4 mt-3">
              <img
                src="/github.png"
                alt="GitHub"
                className="w-8 h-8 md:w-9 md:h-9 hover:scale-110 transition-transform cursor-pointer"
                onClick={() =>
                  window.open("https://github.com/Aryapawar92/", "_blank")
                }
              />
              <img
                src="/linkedin.png"
                alt="LinkedIn"
                className="w-8 h-8 md:w-9 md:h-9 hover:scale-110 transition-transform cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/arya-pawar-39822b25a",
                    "_blank"
                  )
                }
              />
            </div>

            {/* Download CV */}
            <div className="mt-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={downloadcv}
                className={`${redHat.className} rounded-xl bg-green-400 px-4 py-2 text-white text-wrap text-sm hover:bg-green-600`}
              >
                Download CV.
              </motion.button>
            </div>
          </div>
        </div>

        {/* Right Side Grid of Cards */}
        <div className="w-full md:w-1/2 mt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-y-3 md:gap-x-1">
            <ParallaxTilt className="w-full" {...options}>
              <motion.div
                initial={{ opacity: 0, y: -75 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="rounded-2xl greenpinkborder w-full mr-3 max-w-[215px] md:max-w-[215px] aspect-square mx-auto"
              >
                <div className="bg-black w-full h-full py-4 px-5 flex flex-col justify-between items-center text-white overflow-hidden rounded-2xl">
                  <Globe />
                  <div className="flex-grow"></div>
                  <p>Frontend Developer</p>
                </div>
              </motion.div>
            </ParallaxTilt>

            <ParallaxTilt className="w-full" {...options}>
              <motion.div
                initial={{ opacity: 0, y: -75 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="rounded-2xl greenpinkborder w-full ml-3 max-w-[215px] md:max-w-[215px] aspect-square mx-auto"
              >
                <div className="bg-black w-full h-full py-4 px-5 flex flex-col justify-between items-center text-white overflow-hidden rounded-2xl">
                  <Index />
                  <div className="flex-grow"></div>
                  <p>Backend Developer</p>
                </div>
              </motion.div>
            </ParallaxTilt>

            <ParallaxTilt className="w-full" {...options}>
              <motion.div
                initial={{ opacity: 0, y: -75 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="rounded-2xl greenpinkborder w-full mr-3 max-w-[215px] md:max-w-[215px] aspect-square mx-auto"
              >
                <div className="bg-black w-full h-full py-4 px-5 flex flex-col justify-between items-center text-white overflow-hidden rounded-2xl">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    src="/code-forces.png"
                    className="w-7 h-7 hover: cursor-pointer"
                    alt="CodeForces"
                    onClick={() =>
                      window.open(
                        "https://codeforces.com/profile/arya92",
                        "_blank"
                      )
                    }
                  />
                  <h3 className="text-sm">CodeForces.</h3>
                  <motion.img
                    src="/codechef.png"
                    whileHover={{ scale: 1.1 }}
                    className="w-8 h-8 hover: cursor-pointer"
                    alt="CodeChef"
                    onClick={() =>
                      window.open(
                        "https://www.codechef.com/users/aryapawar92",
                        "_blank"
                      )
                    }
                  />
                  <h3 className="text-sm">Codechef.</h3>
                </div>
              </motion.div>
            </ParallaxTilt>

            <ParallaxTilt className="w-full" {...options}>
              <motion.div
                initial={{ opacity: 0, y: -75 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="rounded-2xl greenpinkborder w-full ml-3   max-w-[215px] md:max-w-[215px] aspect-square mx-auto"
              >
                <div className="bg-black w-full h-full py-4 px-5 flex flex-col justify-between items-center text-white overflow-hidden rounded-2xl">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    src="/leetcode.png"
                    className="w-7 h-7 hover: cursor-pointer"
                    alt="LeetCode"
                    onClick={() =>
                      window.open(
                        "https://leetcode.com/u/aryapawar92/",
                        "_blank"
                      )
                    }
                  />
                  <h3 className="text-sm">Leetcode.</h3>
                  <motion.img
                    src="/gfg.png"
                    whileHover={{ scale: 1.1 }}
                    className="w-8 h-8 hover: cursor-pointer"
                    alt="GeeksforGeeks"
                    onClick={() =>
                      window.open(
                        "https://www.geeksforgeeks.org/user/aryapa2rsg/",
                        "_blank"
                      )
                    }
                  />
                  <h3 className="text-sm">GeeksforGeeks.</h3>
                </div>
              </motion.div>
            </ParallaxTilt>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
