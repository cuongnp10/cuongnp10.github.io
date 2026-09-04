import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Typewriter = ({ texts }: { texts: string[] }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex];
      
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText.length === fullText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          return;
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts]);

  return (
    <span className="border-r-2 border-indigo-500 pr-1 animate-pulse">
      {currentText}
    </span>
  );
};

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden relative">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl -z-10 mix-blend-multiply dark:mix-blend-lighten animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -z-10 mix-blend-multiply dark:mix-blend-lighten animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-indigo-600 dark:text-indigo-400 font-mono text-lg md:text-xl mb-4">
              Hello World, I'm
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
              {portfolioData.profile.fullName}
            </h1>
            <div className="text-2xl md:text-4xl font-semibold text-slate-600 dark:text-slate-300 mb-8 h-12">
              <Typewriter texts={[
                "Full-stack Developer",
                "Java Spring Boot Engineer",
                "AI-Augmented Builder"
              ]} />
            </div>
            <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              {portfolioData.profile.bio}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a href="#projects" className="group px-8 py-4 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-all flex items-center gap-2">
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex gap-4">
              <a href={portfolioData.profile.socials.github} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <Github size={24} />
              </a>
              <a href={portfolioData.profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:cuongnguyenphu2005@gmail.com" className="p-4 rounded-full border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            <div className="p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-white/20 dark:border-slate-700/50">
              <h3 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">{portfolioData.stats.githubContributions}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">GitHub Contributions</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-white/20 dark:border-slate-700/50">
              <h3 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">{portfolioData.stats.flagshipPlatforms}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">Flagship Platforms</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-white/20 dark:border-slate-700/50">
              <h3 className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">100%</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">Commitment</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-white/20 dark:border-slate-700/50">
              <h3 className="text-3xl font-bold text-rose-600 dark:text-rose-400 mb-2">2005</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">Est.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
