import React, { useState } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { WORK_EXPERIENCE, EDUCATION } from '../constants/portfolioData';
import Section from './Section';

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const TABS = [
    { id: 'experience', label: 'Experience', Icon: Briefcase, data: WORK_EXPERIENCE },
    { id: 'education', label: 'Education', Icon: GraduationCap, data: EDUCATION },
  ];

  return (
    <Section id="experience" title="My Journey">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center border-b border-border mb-8">
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 font-semibold transition-colors ${
                activeTab === tab.id
                  ? 'text-accent border-b-2 border-accent'
                  : 'text-foreground/70 hover:text-accent'
              }`}
            >
              <tab.Icon size={20} />
              {tab.label}
            </button>
          ))}
        </div>

        <div>
          {TABS.map(tab => (
            <div key={tab.id} className={`${activeTab === tab.id ? 'block' : 'hidden'}`}>
              <div className="space-y-8">
                {tab.data.map((item, index) => (
                  <div key={index} className="p-6 bg-card border border-border rounded-lg">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-primary">{item.role}</h3>
                      <p className="text-accent font-medium mt-1 sm:mt-0">{item.date}</p>
                    </div>
                    <p className="text-lg text-foreground/80 mb-4">{item.company}</p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/80">
                      {item.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
