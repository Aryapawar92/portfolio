"use client";

import Nav from "@/components/ui/Nav";
import Hero from "@/components/ui/hero";
import TechStack from "@/components/ui/techStack";
import Projects from "@/components/ui/projects";
import Contact from "@/components/ui/contact";
import { Red_Hat_Display } from "next/font/google";

const redHat = Red_Hat_Display({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="relative bg-black min-h-screen">
      {/* Scrollable Content */}
      <div className="relative z-10">
        {/* Header */}
        <Nav />

        {/* Hero Section */}
        <div className="container mx-auto px-2 pt-24 xl:pt-32">
          <Hero />
        </div>

        {/* TechStack Section */}
        <TechStack />

        {/* Project Section */}
        <div id="projects">
          <Projects />
        </div>

        {/* Contact Section */}
        <div id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
}
