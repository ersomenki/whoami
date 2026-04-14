"use client";

import { useState } from "react";
import Typewriter from "./Typewriter";

const aboutLines = [
  "> Name: Sergey",
  "> Location: Russia, GMT/UTC+3 || GMT/UTC +6",
  "> Experience: 4+ years in frontend development",
  "> Specialization: React, Next.js, TypeScript",
  "> Education: Master's degree in Computer Analysis and Data Interpretation",
  "> Languages: Russian, English",
];

export default function About() {
  const [visibleLines, setVisibleLines] = useState(0);

  const handleComplete = (index: number) => {
    if (index === visibleLines) {
      setVisibleLines((prev) => prev + 1);
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20 relative z-10">
      <div className="max-w-4xl w-full">
        <div className="bg-black/80 border border-green-500/50 rounded-lg overflow-hidden shadow-2xl shadow-green-500/20">
          <div className="bg-green-900/30 px-4 py-2 flex items-center gap-2 border-b border-green-500/30">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-2 text-green-400 text-sm font-mono">
              about.txt
            </span>
          </div>

          <div className="p-6 md:p-8 font-mono">
            <h2 className="text-green-300 text-xl mb-6">
              <span className="text-green-600">$ </span>
              cat about.txt
            </h2>

            <div className="space-y-3 text-green-400">
              {aboutLines.map((line, index) => (
                <div key={index}>
                  {visibleLines > index ? (
                    <span>{line}</span>
                  ) : index === visibleLines ? (
                    <Typewriter
                      key={index}
                      text={line}
                      speed={40}
                      delay={200}
                      onComplete={() => handleComplete(index)}
                    />
                  ) : null}
                </div>
              ))}
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}
