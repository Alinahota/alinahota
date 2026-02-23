'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Logos from '@/components/Logos';
import Experience from '@/components/Experience';
import Stats from '@/components/Stats';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <Logos />
        <Experience />
        <Stats />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
