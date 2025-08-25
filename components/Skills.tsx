import React from 'react';
import { SKILLS } from '../constants/portfolioData';
import Section from './Section';

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="My Skills">
      <div className="space-y-12">
        {SKILLS.map(({ category, skills }) => (
          <div key={category}>
            <h3 className="text-2xl font-semibold text-center mb-8 text-primary">{category}</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map(({ name, Icon }) => (
                <div
                  key={name}
                  className="w-40 flex flex-col items-center gap-3 bg-card border border-border p-4 rounded-lg hover:bg-border/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  <Icon className="text-accent" size={32} />
                  <span className="font-medium text-card-foreground text-center">{name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
