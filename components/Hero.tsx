"use client";

import { useState } from "react";
import Typewriter from "./Typewriter";

export default function Hero() {
  const [showContent, setShowContent] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative z-10">
      <div className="max-w-4xl w-full">
        {/* Terminal window */}
        <div className="bg-black/80 border border-green-500/50 rounded-lg overflow-hidden shadow-2xl shadow-green-500/20">
          {/* Terminal header */}
          <div className="bg-green-900/30 px-4 py-2 flex items-center gap-2 border-b border-green-500/30">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-2 text-green-400 text-sm font-mono">
              portfolio.exe
            </span>
          </div>

          {/* Terminal body */}
          <div className="p-6 md:p-8 font-mono">
            <div className="text-green-400 text-sm mb-4">
              <span className="text-green-600">Last login: {new Date().toLocaleDateString()} — Welcome!</span>
            </div>

            <div className="space-y-2 text-base md:text-lg">
              <div>
                <span className="text-green-600">$ </span>
                <Typewriter
                  text="whoami"
                  speed={80}
                  delay={500}
                  onComplete={() => setShowContent(true)}
                />
              </div>

              {showContent && (
                <div className="mt-6 space-y-4 animate-fadeIn">
                  <p className="text-green-300 text-xl md:text-2xl font-bold">
                    Hello! I'm a Frontend Developer
                  </p>
                  <p className="text-green-400/80">
                    Building modern web applications with a focus on performance and UX
                  </p>

                  <div className="pt-4 flex flex-wrap gap-4">
                    <a
                      href="#contact"
                      className="px-4 py-2 border border-green-500 text-green-400 hover:bg-green-500/20 transition-colors rounded text-sm"
                    >
                      → Contact me
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 text-center text-green-500/50 text-sm animate-bounce">
          ↓ scroll ↓
        </div>
      </div>
    </section>
  );
}
