"use client";
import { motion } from "framer-motion";
import { Code, Server, Palette } from "lucide-react";

const technologies = [
  {
    title: "Front-End",
    description: "Experience with ReactJs, Nextjs, VueJs",
    icon: Code,
    accent: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "Back-End",
    description: "Experience with NodeJs, ExpressJs, MongoDB, Firebase",
    icon: Server,
    accent: "bg-green-500/10 text-green-500",
  },
  {
    title: "UI/UX",
    description: "Experiences with TailwindCss and tools like Figma",
    icon: Palette,
    accent: "bg-purple-500/10 text-purple-500",
  },
];

export default function Technologies() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20" id="technologies">
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 1.5 }}
        className="space-y-8 "
      >
        <div className="space-y-4">
          <h3 className="text-4xl font-bold mb-4">Technologies</h3>

          <p className="text-gray-400 max-w-2xl ">
            I&aposve worked with a range of technologies in the web development
            world . From Back-End to Design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: index * 0.2 }}
              className="bg-[#1a1b23] p-6 rounded-xl hover:bg-[#1e1f28] transition-colors"
            >
              <div className="space-y-4">
                <div
                  className={`w-12 h-12 rounded-lg ${tech.accent} flex items-center justify-center`}
                >
                  <tech.icon size={24} />
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
                  <p className="text-gray-400">{tech.description}</p>
                </div>

                <div className="pt-4">
                  <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-tranparent rounded-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
