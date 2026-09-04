import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Compass, Cpu, Layers } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6">Product-Centric Engineering</h3>
            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400">
              <p>
                As a Software Engineering student at FPT University, my approach goes beyond just writing code. I focus on building robust, scalable systems that solve real business problems.
              </p>
              <p>
                My experience spans from engineering microservices architectures in Java Spring Boot to crafting responsive, interactive frontend experiences using modern React frameworks.
              </p>
              <p>
                I am deeply passionate about integrating AI workflows into the development lifecycle, utilizing tools like Cursor and Google Gemini API to accelerate delivery and enhance code quality.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
                  <Layers size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">System Design</h4>
                  <p className="text-sm text-slate-500">Architecting scalability</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
                  <Cpu size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">AI Integration</h4>
                  <p className="text-sm text-slate-500">Automated workflows</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-200 dark:border-slate-700 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Code2 size={120} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 relative z-10">GitHub Activity</h3>
              <div className="space-y-4 relative z-10">
                <img 
                  src="https://github-readme-stats.vercel.app/api?username=cuongnguyenphu2005&show_icons=true&theme=transparent&hide_border=true&title_color=6366f1&text_color=94a3b8&icon_color=8b5cf6" 
                  alt="GitHub Stats" 
                  className="w-full"
                />
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-200 dark:border-slate-700">
               <img 
                  src="https://github-readme-streak-stats.herokuapp.com/?user=cuongnguyenphu2005&theme=transparent&hide_border=true&title_color=6366f1&text_color=94a3b8&icon_color=8b5cf6&date_format=j%20M%5B%20Y%5D" 
                  alt="GitHub Streak" 
                  className="w-full"
                />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
