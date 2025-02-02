"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20" id="hero">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold mb-4">
          Welcome To
          <br />
          <span>My </span>
          <span className="text-gray-400">Portfolio</span>
        </h1>

        <p className="text-gray-400 max-w-xl mb-8">
          Hello There!! My name is Fadil, I am a developer based from Indonesia.
          Currently studying in High school. Interested on current Technologies
          as AI, ML and Web Dev.
        </p>

        <Link href="#about">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Learn More
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}
