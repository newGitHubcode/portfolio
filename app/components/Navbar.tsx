"use client";
import Link from "next/link";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="p-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex-1">
          <Link href="/" className="text-xl font-bold">
            Portfolio
          </Link>
        </div>

        <div className="flex-1 flex justify-center space-x-6">
          <Link href="#projects" className="hover:text-gray-300 transition-colors">Projects</Link>
          <Link href="#technologies" className="hover:text-gray-300 transition-colors">Technologies</Link>
          <Link href="#about" className="hover:text-gray-300 transition-colors">About</Link>
        </div>

        <div className="flex-1 flex justify-end space-x-4">
            <Link
                href='https://github.com'
                target="_blank"
                className="hover:text-purple-600 transition-colors"
            >
                <Github size={24} />
            </Link>

            <Link
                href='https://linkedin.com'
                target="_blank"
                className="hover:text-purple-600 transition-colors"
            >
                <Linkedin size={24} />
            </Link>

            <Link
                href='https://instagram.com'
                target="_blank"
                className="hover:text-purple-600 transition-colors"
            >
                <Instagram size={24} />
            </Link>
        </div>
      </div>
    </nav>
  );
}
