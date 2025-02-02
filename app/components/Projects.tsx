'use client'
import { motion } from "framer-motion"
import { projects } from "../data/projects"
import ProjectCard from "./ProjectCard"

export default function Projects() {
    return (
        <section id="projects"
        className="max-w-7xl mx-auto px-6 py-20"
        >
            <motion.div
                initial={{ opacity: 0 , y: 20 }}
                animate={{ opacity: 1 , y:0}}
                transition={{ duration: 1.5 }}
            >
                <h1 className="text-4xl font-bold mb-4">
                    Projects
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((project) => (
                    <ProjectCard
                     key={project.id}
                     project={project}
                    />
                  ))}  
                </div>
            </motion.div>
        </section>
    )
}