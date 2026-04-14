"use client";

import Typewriter from "./Typewriter";
import { useState } from "react";

const contacts = [
  { label: "Email", value: "ersomenki@gmail.com", link: "mailto:ersomenki@gmail.com" },
  { label: "Telegram", value: "@ersomenki", link: "https://t.me/ersomenki" },
];

export default function Contact() {
  const [showContacts, setShowContacts] = useState(false);

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-4 py-20 relative z-10"
    >
      <div className="max-w-4xl w-full">
        <div className="bg-black/80 border border-green-500/50 rounded-lg overflow-hidden shadow-2xl shadow-green-500/20">
          <div className="bg-green-900/30 px-4 py-2 flex items-center gap-2 border-b border-green-500/30">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-2 text-green-400 text-sm font-mono">
              contact.sh
            </span>
          </div>

          <div className="p-6 md:p-8 font-mono">
            <h2 className="text-green-300 text-xl mb-6">
              <span className="text-green-600">$ </span>
              <Typewriter
                text="./contact.sh"
                speed={60}
                delay={300}
                onComplete={() => setShowContacts(true)}
              />
            </h2>

            {showContacts && (
              <div className="space-y-4 animate-fadeIn">
                <p className="text-green-400/80 mb-6">
                  Ready for collaboration and new challenges! Contact me:
                </p>

                <div className="space-y-3">
                  {contacts.map((contact) => (
                    <div key={contact.label} className="flex items-center gap-3">
                      <span className="text-green-600 w-24 text-sm">
                        {contact.label}:
                      </span>
                      <a
                        href={contact.link}
                        className="text-green-400 hover:text-green-300 hover:underline transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {contact.value}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-6 border-t border-green-500/20 text-center">
                  <p className="text-green-500/50 text-sm">
                    echo "Thank you for stopping by!"
                  </p>
                  <p className="text-green-400 mt-2">
                    Thank you for stopping by!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
