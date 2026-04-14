"use client";

import { useEffect, useRef, useState } from "react";

const skills = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "HTML5", "CSS3", "SCSS"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Next.js", "Redux", "Redux Toolkit", "RTK Query", "MobX", "RxJS"],
  },
  {
    category: "Styling",
    items: ["Styled Components", "MUI"],
  },
  {
    category: "Testing",
    items: ["Jest", "React Testing Library", "Storybook"],
  },
  {
    category: "Tools & Build",
    items: ["Git", "Vite", "Webpack", "ESLint", "Docker Compose"],
  },
  {
    category: "API & Auth",
    items: ["REST API", "WebSockets", "Socket.IO", "JWT"],
  },
  {
    category: "Forms",
    items: ["React Hook Form"],
  },
  {
    category: "Process & Management",
    items: ["SCRUM", "Jira", "GitLab"],
  },
];

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="min-h-screen flex items-center justify-center px-4 py-20 relative z-10"
    >
      <div className="max-w-4xl w-full">
        <div className="bg-black/80 border border-green-500/50 rounded-lg overflow-hidden shadow-2xl shadow-green-500/20">
          <div className="bg-green-900/30 px-4 py-2 flex items-center gap-2 border-b border-green-500/30">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-2 text-green-400 text-sm font-mono">
              skills.json
            </span>
          </div>

          <div className="p-6 md:p-8 font-mono">
            <h2 className="text-green-300 text-xl mb-6">
              <span className="text-green-600">$ </span>
              cat skills.json
            </h2>

            {visible && (
              <div className="space-y-6">
                {skills.map((skillGroup, groupIndex) => (
                  <div
                    key={skillGroup.category}
                    style={{ animationDelay: `${groupIndex * 0.2}s` }}
                    className="animate-fadeIn"
                  >
                    <p className="text-green-300 mb-2">
                      "{skillGroup.category}": [
                    </p>
                    <div className="pl-6 flex flex-wrap gap-2 mb-2">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-green-500/10 border border-green-500/30 rounded text-green-400 text-sm hover:bg-green-500/20 transition-colors cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <p className="text-green-300">],</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
