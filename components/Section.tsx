
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-accent">
          {title}
        </h2>
        <div className="h-1 bg-accent w-20 mx-auto mb-12"></div>
        {children}
      </div>
    </section>
  );
};

export default Section;
