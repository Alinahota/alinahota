'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from '@/components/MagneticButton';
import Image from 'next/image';

const taglines = [
  "Strategic Risk Consultant",
  "Cognitive Cyber Strategist", 
  "Agentic AI Architect",
  "Data Science Storyteller",
  "Business Intelligence Partner"
];

export default function Hero() {
  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-8 pt-20 bg-gradient-to-t from-[rgba(16,185,129,0.25)] from-0% via-[rgba(6,45,31,0.15)] via-20% to-[rgba(5,5,5,0.9)] to-50%">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 relative z-20">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold text-white leading-tight"
            >
              Hi 👋, I'm <span className="text-[#10b981]">ALINA HOTA</span>
            </motion.h1>
            
            <div className="h-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTagline}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-3xl text-[#10b981] font-medium"
                >
                  {taglines[currentTagline]}
                </motion.div>
              </AnimatePresence>
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/80 max-w-2xl leading-relaxed"
            >
              Transforming complex data landscapes into intelligent, resilient systems for global enterprises.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <MagneticButton 
                href="#projects"
                className="bg-[#10b981] text-black px-10 py-4 rounded-full font-semibold transition-all shadow-lg shadow-[#10b981]/25 hover:shadow-[#10b981]/40 hover:shadow-2xl hover:bg-[#10b981]/90 inline-block text-lg"
              >
                View My Work
              </MagneticButton>
              <MagneticButton 
                href="#contact"
                className="border border-[#10b981] text-[#10b981] px-10 py-4 rounded-full font-semibold hover:bg-[#10b981] hover:text-black transition-all inline-block text-lg"
              >
                Get in Touch
              </MagneticButton>
            </motion.div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full h-full min-h-96 flex items-center justify-center"
            >
            <svg className="absolute inset-0 w-full h-full animate-spin overflow-visible" style={{ animationDuration: '30s' }}>
              {/* Static Dark Background Ring */}
              <circle cx="50%" cy="50%" r="42%" fill="none" stroke="#1f2937" strokeWidth="4" opacity="0.4" />
              
              {/* Spinning Green HUD Ring */}
              <circle
                cx="50%"
                cy="50%"
                r="44%"
                fill="none"
                stroke="#10b981"
                strokeWidth="4"
                strokeDasharray="140 20 60 15 80 20 10 10 5 15"
                strokeLinecap="round"
              />
            </svg>
            <div className="w-[360px] h-[360px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden relative z-10 shadow-[0_0_50px_rgba(16,185,129,0.2)]">
              <Image 
                src="/profile_alina.jpg" 
                alt="Alina Hota" 
                fill
                priority
                quality={100}
                sizes="(max-width: 768px) 450px, 550px"
                className="object-cover"
              />
            </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
