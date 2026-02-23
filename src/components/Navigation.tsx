'use client';

import { motion } from 'framer-motion';
import { scrollToTop } from '@/utils/scrollUtils';

export default function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md border-b border-[#10b981]/20">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={scrollToTop}
            className="text-xl font-bold text-white hover:text-[#10b981] transition-colors"
          >
            Alina Hota
          </button>
          
          <div className="hidden md:flex items-center bg-gradient-to-r from-[rgba(6,45,31,0.3) via-[rgba(16,185,129,0.1)] to-[rgba(6,45,31,0.2)] border border-[#10b981]/30 rounded-full px-8 py-3 flex-1 max-w-[50%]">
            <ul className="flex items-center justify-between w-full text-base font-medium">
              <li><a href="#hero" className="text-white/80 hover:text-[#10b981] transition-colors px-2">Home</a></li>
              <li><a href="#experience" className="text-white/80 hover:text-[#10b981] transition-colors px-2">Work Experience</a></li>
              <li><a href="#projects" className="text-white/80 hover:text-[#10b981] transition-colors px-2">Projects</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-[#10b981] transition-colors px-2">Contact</a></li>
            </ul>
          </div>
          
          <motion.a 
            href="/resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#10b981] text-black px-8 py-3 rounded-full font-semibold transition-all shadow-lg shadow-[#10b981]/25 hover:shadow-[#10b981]/40 hover:shadow-2xl hover:bg-[#10b981]/90 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Resume</span>
            <div className="absolute inset-0 bg-[#10b981] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-[#10b981] to-[#10b981]/50 rounded-full blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
          </motion.a>
          
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
