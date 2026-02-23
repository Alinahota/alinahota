'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    company: "SS&C Technologies",
    period: "2026 | Austin, TX",
    description: "Leading AI architecture and data science initiatives"
  },
  {
    company: "Deloitte USI", 
    period: "2022 - 2025 | India",
    description: "Strategic risk consulting and cyber defense solutions"
  },
  {
    company: "Omnipresent Robot Tech",
    period: "2021",
    description: "Foundational machine learning and robotics development"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-8 relative bg-gradient-to-br from-[rgba(5,5,5,0.94)] via-[rgba(6,45,31,0.12)] to-[rgba(5,5,5,0.976)]">
      {/* Section Transition Gradient */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-[rgba(6,45,31,0.1)] to-transparent -translate-y-full"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="text-[#10b981]">Experience</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Driving digital transformation through robust data engineering and strategic risk management. 
            Specialized in building scalable architectures and AI-driven insights for global enterprises.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-[#050505] border border-[#10b981]/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#10b981] mb-4">Stack & Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "SQL", "Spark", "AWS", "Terraform", "Airflow", "React", "Node.js"].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-[#10b981]/10 border border-[#10b981]/30 rounded-full text-sm text-[#10b981]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#10b981]/30"></div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start space-x-6"
                >
                  <div className="relative z-10 w-8 h-8 bg-[#050505] border-2 border-[#10b981] rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-[#10b981] rounded-full"></div>
                  </div>
                  
                  <div className="flex-1 bg-[#050505] border border-[#10b981]/20 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-1">{exp.company}</h3>
                    <p className="text-[#10b981] text-sm mb-2">{exp.period}</p>
                    <p className="text-white/60 text-sm">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
