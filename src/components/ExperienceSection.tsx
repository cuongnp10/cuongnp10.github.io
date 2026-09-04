
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-indigo-600 rounded-full mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700 transform md:-translate-x-1/2"></div>
          
          <div className="space-y-12">
            {portfolioData.experience.map((item, index) => {
              const isEven = index % 2 === 0;
              const Icon = item.id.includes('university') ? GraduationCap : Briefcase;
              
              return (
                <div key={item.id} className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-10 h-10 rounded-full bg-white dark:bg-slate-800 border-4 border-indigo-500 shadow-md transform -translate-x-1/2 flex items-center justify-center z-10">
                    <Icon size={16} className="text-indigo-600 dark:text-indigo-400" />
                  </div>
                  
                  {/* Content Box */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0">
                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 ${isEven ? 'md:ml-12' : 'md:mr-12'}`}
                    >
                      <div className="flex flex-col mb-4">
                        <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400 mb-1">{item.period}</span>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.role}</h3>
                        <span className="text-slate-500 dark:text-slate-400 font-medium">{item.organization}</span>
                      </div>
                      
                      <ul className="space-y-2">
                        {item.achievements.map((ach, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-slate-600 dark:text-slate-300 text-sm">
                            <span className="text-indigo-500 mt-1.5">•</span>
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
