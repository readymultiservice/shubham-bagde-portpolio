import React from 'react';
import { NAME, SOCIAL_LINKS } from '../constants/portfolioData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20 text-center text-foreground/60">
        <a href="#" className="text-2xl font-bold text-primary hover:text-accent transition-colors mb-2 inline-block">
          {NAME}
        </a>
        <p className="max-w-md mx-auto mb-4">Building high-converting websites and ROI-driven marketing campaigns.</p>
        <div className="flex justify-center items-center space-x-6 mb-6">
            {SOCIAL_LINKS.map(({ name, url, Icon }) => (
              <a key={name} href={url} target="_blank" rel="noopener noreferrer" aria-label={name} className="text-foreground/80 hover:text-accent transition-colors">
                <Icon size={24} />
              </a>
            ))}
        </div>
        <p>&copy; {currentYear} {NAME}. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
