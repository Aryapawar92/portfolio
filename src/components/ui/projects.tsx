"use client";

import React from "react";
import ParallaxTilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";

const Redhat = Poppins({ subsets: ["latin"], weight: "500" });

// Define interfaces for your data
interface Tag {
  name: string;
  color: string;
}

interface Project {
  name: string;
  description: string;
  tags: Tag[];
  image: string;
  source_code_link: string;
  live_link?: string; // Optional since some projects don't have live demos
  transition?: number;
}

const projectsDetails: Project[] = [
  {
    name: "Corner",
    description:
      "AI-powered mental health platform designed to support college students dealing with depression and anxiety by offering personalized self-help tools, coping strategies, and professional guidance through deep learning and explainable AI.",
    tags: [
      { name: "MERN", color: "blue" },
      { name: "Langchain", color: " green" },
      { name: "Python", color: "red" },
    ],
    image: "/corner.jpg", // Ensure this is in /public
    source_code_link: "https://github.com/Aryapawar92/corner-final",
    live_link: "",
    transition: -80,
  },
  {
    name: "Earth 3D",
    description:
      "A 3D interactive Earth model built using React Three Fiber and TypeScript. It provides smooth real-time rendering, allowing users to rotate, zoom, and explore the globe with realistic textures and lighting.",
    tags: [
      { name: "TypeScript", color: "blue" },
      { name: "Three fiber", color: "   green" },
      { name: "tailwind", color: "red" },
    ],
    image: "/earth-project.png", // Ensure this is in /public
    source_code_link: "https://github.com/Aryapawar92/Earth-3js",
    live_link: "https://earth-3js.vercel.app/",
    transition: -60,
  },
  {
    name: "Bookepeer API",
    description:
      "A robust RESTful API built with Node.js, Express, and MongoDB, designed for managing book records efficiently. It supports full CRUD operations, allowing users to create, read, update, and delete book entries seamlessly.",
    tags: [
      { name: "Nodejs", color: "blue" },
      { name: "mongodb", color: "   green" },
      { name: "Express", color: "red" },
    ],
    image: "/Postman-AT&RT.png", // Ensure this is in /public
    source_code_link: "https://github.com/Aryapawar92/BookKeeper-API",
    live_link: "",
    transition: -40,
  },
];

function Projects() {
  return (
    <div className={`${Redhat.className}`}>
      <h1 className="text-white text-4xl font-bold text-center">Projects</h1>

      <div className="mt-20 flex flex-wrap gap-3 justify-center">
        {projectsDetails.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </div>
  );
}

// Using the Project interface for props
const ProjectCard: React.FC<Project> = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
  transition,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: transition }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <ParallaxTilt
        tiltMaxAngleX={45}
        tiltMaxAngleY={45}
        scale={1}
        transitionSpeed={450}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="mt-4">
          <h3 className="text-white font-bold text-[24px] flex items-center gap-2">
            {name}
            {live_link && live_link.length > 0 && (
              <button
                onClick={() => window.open(live_link, "_blank")}
                className="text-sm"
              >
                (Demo...)
              </button>
            )}
            <button onClick={() => window.open(source_code_link, "_blank")}>
              <img src="/github.png" alt="GitHub" className="w-6 h-6" />
            </button>
          </h3>

          <p className="mt-2 text-white text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className="text-[14px] font-semibold"
              style={{ color: tag.color }}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </ParallaxTilt>
    </motion.div>
  );
};

export default Projects;
