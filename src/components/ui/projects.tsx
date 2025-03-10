"use client";

import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { Red_Hat_Display } from "next/font/google";

const Redhat = Red_Hat_Display({ subsets: ["latin"] });

const projectsDetails = [
  {
    name: "Corner",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      { name: "MERN", color: "blue" },
      { name: "Langchain", color: " green" },
      { name: "Python", color: "red" },
    ],
    image: "/corner.jpg", // Ensure this is in /public
    source_code_link: "https://github.com/Aryapawar92/corner-final",
    live_link: "",
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

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}: any) => {
  return (
    <motion.div>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img src={image} className="w-full h-full object-cover rounded-2xl" />
        </div>

        <div className="mt-4">
          <h3 className="text-white font-bold text-[24px] flex items-center gap-2">
            {name}
            <button
              onClick={() => window.open(live_link, "_blank")}
              className="text-sm"
            >
              (Demo...)
            </button>
            <button onClick={() => window.open(source_code_link, "_blank")}>
              <img src="/github.png" alt="GitHub" className="w-6 h-6" />
            </button>
          </h3>

          <p className="mt-2 text-white text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag: any) => (
            <p
              key={`${name}-${tag.name}`}
              className="text-[14px] font-semibold"
              style={{ color: tag.color }}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default Projects;
