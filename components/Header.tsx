import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAME, SOCIAL_LINKS } from '../constants/portfolioData';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-sm border-b border-border' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-2xl font-bold text-primary hover:text-accent transition-colors">
            {NAME}
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {SOCIAL_LINKS.map(({ name, url, Icon }) => (
              <a key={name} href={url} target="_blank" rel="noopener noreferrer" aria-label={name} className="text-foreground/80 hover:text-accent transition-colors">
                <Icon size={20} />
              </a>
            ))}
            <a href="#contact" className="bg-accent text-accent-foreground font-semibold px-4 py-2 rounded-md hover:opacity-90 transition-opacity text-sm">
                Hire Me
            </a>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Open menu">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-20 left-0 w-full bg-background/95 backdrop-blur-sm transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform translate-y-0' : 'transform -translate-y-[150%]'}`}>
        <nav className="flex flex-col items-center space-y-6 py-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-foreground/80 hover:text-accent transition-colors text-xl"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center space-x-6 pt-4">
            {SOCIAL_LINKS.map(({ name, url, Icon }) => (
              <a key={name} href={url} target="_blank" rel="noopener noreferrer" aria-label={name} className="text-foreground/80 hover:text-accent transition-colors">
                <Icon size={24} />
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
