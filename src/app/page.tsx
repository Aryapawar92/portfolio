"use client";

import Squares from "@/components/ui/squares";
import Nav from "@/components/ui/Nav";
import Hero from "@/components/ui/hero";
import TechStack from "@/components/ui/techStack";

export default function Home() {
  return (
    <div className="relative bg-black min-h-screen">
      {/* Squares Background */}

      {/* Scrollable Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="absolute top-0 w-full text-white text-2xl py-8 xl:py-12">
          <div className="container mx-auto flex justify-between items-center px-4">
            <h1 className="text-4xl font-semibold">
              Arya <span className="text-green-400">.</span>
            </h1>
            <div className="hidden xl:flex items-center gap-8 px-4">
              <Nav />
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <div className="container mx-auto px-2 pt-24 xl:pt-32">
          <Hero />
        </div>

        {/* TechStack Section */}

        <TechStack />

        {/*Project Section */}
      </div>
    </div>
  );
}
