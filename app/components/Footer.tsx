"use client";
import Link from "next/link";
import { Github, Linkedin, Instagram, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0b0f] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Fadil</h3>
            <p className="text-gray-400 max-w-xs">
              Passionate about creating interactive and responsive website.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </Link>

              <Link
                href="https://github.com"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </Link>

              <Link
                href="https://github.com"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>

            <ul className="space-y-2">
              <li>
                <Link
                  href="#projects"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Technologies
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact</h3>
            <div className="space-y-2">
              <a href="mailto:nf4d1l.4l1@gmail.com">
                <Mail size={20} />
                <span>nf4d1l.4l1@gmail.com</span>
              </a>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin size={20} />
                <span>Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {currentYear} Fadil. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
