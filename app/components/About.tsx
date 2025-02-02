"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20" id="about">
      <motion.div>
        <div>
          <h3 className="text-4xl font-bold mb-4">About Me</h3>
          <p className="text-gray-400 max-w-2xl">
            My Name is Fadil and I am from Indonesia. Currently studying in High
            school, interested on current Technologies as AI, ML and Web Dev.
            Here is a quick timeline of my journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5">
          <div className="bg-[#1a1b23] p-6 rounded-xl hover:bg-[#1e1f28] transition-colors">
            <h3 className="text-xl font-bold">2019-2020</h3>
            <p className="text-gray-400 ">Started Getting into programming</p>
          </div>

          <div className="bg-[#1a1b23] p-6 rounded-xl hover:bg-[#1e1f28] transition-colors">
            <h3 className="text-xl font-bold">2020-2022</h3>
            <p className="text-gray-400 ">
              Had a good understanding of Python and started getting into html &
              css
            </p>
          </div>

          <div className="bg-[#1a1b23] p-6 rounded-xl hover:bg-[#1e1f28] transition-colors">
            <h3 className="text-xl font-bold">2022-2023</h3>
            <p className="text-gray-400 ">
              Started Developing AI with Python Tensorflow
            </p>
          </div>

          <div className="bg-[#1a1b23] p-6 rounded-xl hover:bg-[#1e1f28] transition-colors">
            <h3 className="text-xl font-bold">2023-2024</h3>
            <p className="text-gray-400 ">
              Learned in depth about Web technologies, React, Nextjs, Databases
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
