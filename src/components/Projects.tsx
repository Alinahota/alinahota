'use client';

import { motion } from 'framer-motion';
import TiltCard from '@/components/TiltCard';

const projects = [
  {
    id: 1,
    title: "Strong Cyber + Applied ML Project",
    description: "Advanced threat detection system using machine learning algorithms and real-time cyber defense mechanisms",
    tech: ["Python", "TensorFlow", "Cybersecurity", "Neural Networks"],
    featured: true
  },
  {
    id: 2,
    title: "Clean SQL + Business Analytics Project",
    description: "Comprehensive data analytics platform with optimized SQL queries and business intelligence dashboards",
    tech: ["SQL", "Tableau", "Analytics", "Data Warehousing"],
    featured: false
  },
  {
    id: 3,
    title: "Polished Academic ML Project",
    description: "Research-focused machine learning project with novel algorithms and academic publication potential",
    tech: ["Python", "Scikit-learn", "Research", "Statistics"],
    featured: false
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-8 bg-gradient-to-bl from-[rgba(6,45,31,0.096)] via-transparent to-[rgba(16,185,129,0.072)]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured <span className="text-[#10b981]">Projects</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Cutting-edge projects at the intersection of artificial intelligence, cybersecurity, and data science.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative group cursor-pointer ${
                project.featured && index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <TiltCard className="h-full">
                <div className="h-full bg-[#050505] border border-[#10b981]/20 rounded-lg p-6 hover:border-[#10b981]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#10b981]/10">
                  {project.featured && index === 0 && (
                    <div className="absolute -top-3 -right-3 bg-[#10b981] text-black text-xs px-3 py-1 rounded-full font-medium">
                      Featured
                    </div>
                  )}
                  
                  <div className="mb-4">
                    <div className="w-full h-32 bg-gradient-to-br from-[#10b981]/10 to-transparent rounded-lg border border-[#10b981]/20 flex items-center justify-center">
                      <span className="text-[#10b981]/60 text-sm">Project {project.id}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#10b981] transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/60 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-[#10b981]/10 border border-[#10b981]/30 rounded text-xs text-[#10b981]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <button className="text-[#10b981] hover:text-white transition-colors text-sm font-medium">
                      View Details →
                    </button>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
