import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-950 py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 font-mono mb-2 inline-block">
            {portfolioData.profile.fullName.split(' ').map(n => n[0]).join('')}.<span className="text-slate-900 dark:text-white">DEV</span>
          </a>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            © {new Date().getFullYear()} {portfolioData.profile.fullName}. All rights reserved.
          </p>
        </div>

        <div className="flex gap-4">
          <a href={portfolioData.profile.socials.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors shadow-sm border border-slate-200 dark:border-slate-800">
            <Github size={20} />
          </a>
          <a href={portfolioData.profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors shadow-sm border border-slate-200 dark:border-slate-800">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${portfolioData.profile.email}`} className="p-3 rounded-full bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors shadow-sm border border-slate-200 dark:border-slate-800">
            <Mail size={20} />
          </a>
        </div>

        <div className="text-center md:text-right text-sm text-slate-500 dark:text-slate-400">
          <p>Built with <span className="text-indigo-600 dark:text-indigo-400 font-medium">React</span> & <span className="text-cyan-500 font-medium">Tailwind</span></p>
          <p>Hosted on <span className="text-slate-900 dark:text-white font-medium">GitHub Pages</span></p>
        </div>
      </div>
    </footer>
  );
};
