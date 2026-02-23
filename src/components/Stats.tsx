'use client';

import { motion } from 'framer-motion';
import AnimatedCounter from '@/components/AnimatedCounter';

const stats = [
  { number: "4", label: "Yrs Experience" },
  { number: "15+", label: "Projects Delivered" },
  { number: "12+", label: "Technologies" }
];

export default function Stats() {
  return (
    <section className="py-20 px-8 bg-gradient-to-r from-[rgba(16,185,129,0.096)] via-[rgba(6,45,31,0.06)] to-transparent">
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <AnimatedCounter
              key={index}
              value={stat.number}
              label={stat.label}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
