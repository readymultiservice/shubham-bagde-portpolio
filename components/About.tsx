import React from 'react';
import { ABOUT_ME, PROFILE_PICTURE, NAME, ABOUT_STATS } from '../constants/portfolioData';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
        <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent to-purple-600 transform -rotate-6"></div>
          <img
            src={PROFILE_PICTURE}
            alt={NAME}
            className="relative w-full h-full rounded-3xl object-cover shadow-2xl"
          />
        </div>
        <div className="max-w-2xl text-center lg:text-left">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {ABOUT_STATS.map(({ value, label }) => (
                <div key={label} className="bg-card border border-border p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-accent">{value}</p>
                    <p className="text-sm text-foreground/70">{label}</p>
                </div>
            ))}
          </div>
          <p className="text-lg text-foreground/80 leading-relaxed">
            {ABOUT_ME}
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
