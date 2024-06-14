"use client"

import Header from "@/components/ui/header";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { motion, useInView } from 'framer-motion';
import Link from "next/link";
import { useRef } from "react";

const words = [
  {
    text: "Build",
  },
  {
    text: "awesome",
  },
  {
    text: "cards",
  },
  {
    text: "with",
  },
  {
    text: "1",
    // className: "text-blue-500 dark:text-blue-500",
  },
];

export default function Home() {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const fadeInVariant = {
    initial: { opacity: 0 }, // Start invisible
    animate: { opacity: 1 }, // Animate to full opacity on view
  };
  return (
    <main className="min-h-screen dark">
      <motion.div ref={ref} variants={fadeInVariant} animate={isInView ? "animate" : "initial"} initial="initial">
        <HeroHighlight className="flex flex-col items-center justify-center">
          <Header />
          <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base">
            Showcase Your Developer Profile Like Never Before
          </p>
          <TypewriterEffectSmooth words={words} />
          <button className="no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-sm font-semibold leading-6  text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
              <Link href="/welcome">
                Create your Card
              </Link>
              <svg
                fill="none"
                height="16"
                viewBox="0 0 24 24"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.75 8.75L14.25 12L10.75 15.25"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px max-h-max  w-[calc(100%-2.25rem)] bg-gradient-to-r from-purple-400/0 via-purple-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </button>
        </HeroHighlight>
      </motion.div>

    </main>
  );
}