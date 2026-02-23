'use client';

import { motion } from 'framer-motion';

const logos = [
  "Deloitte",
  "SS&C Technologies", 
  "Omnipresent Robot Tech"
];

export default function Logos() {
  return (
    <section className="py-12 border-y border-[#10b981]/20 bg-gradient-to-r from-[rgba(6,45,31,0.072)] via-transparent to-[rgba(16,185,129,0.048)]">
      <div className="overflow-hidden">
        <motion.div 
          className="flex space-x-12"
          animate={{ x: [0, -1000] }}
          transition={{ 
            x: { 
              repeat: Infinity, 
              repeatType: "loop", 
              duration: 20, 
              ease: "linear" 
            } 
          }}
        >
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 text-white/40 text-lg font-medium hover:text-[#10b981] transition-colors cursor-default"
            >
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
