'use client';

import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  value: string;
  label: string;
  delay?: number;
}

export default function AnimatedCounter({ value, label, delay = 0 }: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  // Extract numeric value, handle special cases like "15+"
  const numericValue = parseInt(value.replace(/[^\d]/g, ''));
  const hasPlus = value.includes('+');
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 300, damping: 30 });
  const displayValue = useTransform(springValue, (latest) => {
    // For small numbers, show exact value
    if (numericValue <= 20) {
      return Math.floor(latest);
    }
    // For larger numbers, you might want to format differently
    return Math.floor(latest);
  });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        motionValue.set(numericValue);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, motionValue, numericValue, delay]);

  return (
    <div ref={ref} className="text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay }}
        className="text-3xl md:text-4xl font-bold text-[#10b981] mb-2"
      >
        <motion.span>{displayValue}</motion.span>
        {hasPlus && <span>+</span>}
      </motion.div>
      <div className="text-white/60 text-sm uppercase tracking-wide">
        {label}
      </div>
    </div>
  );
}
