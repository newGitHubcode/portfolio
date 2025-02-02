"use client";
import { motion } from "framer-motion";
import { Project } from "../types/project";
import Image from "next/image";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-gray-900 rounded-lg overflow-hidden"
    >
      <div className="relative h-48 w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm"
            ></span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-600 font-medium iniline-flex items-center gap-2"
        >
          View Project
        </a>
      </div>
    </motion.div>
  );
}
