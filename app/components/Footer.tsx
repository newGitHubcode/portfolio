"use client";
import Link from "next/link";
import { Github, Linkedin, Instagram, Discord } from "lucide-react";

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
            <div>
              <Link href="https://github.com" target="_blank">
                <Github size={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
