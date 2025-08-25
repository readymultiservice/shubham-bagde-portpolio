import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { ChevronsDown } from 'lucide-react';
import { NAME, ROLES, BIO } from '../constants/portfolioData';

const Hero: React.FC = () => {
  const [text] = useTypewriter({
    words: ROLES,
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section id="hero" className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center text-center py-20 relative">
      <div className="max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
          Hello, I'm <span className="text-accent">{NAME}</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground/80 mb-6">
          I am a <span className="text-accent">{text}</span>
          <Cursor cursorColor='hsl(262, 83%, 58%)' />
        </h2>
        <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
          {BIO}
        </p>
        <div className="flex justify-center items-center space-x-4">
            <a 
              href="https://drive.google.com/uc?export=download&id=14Q9jxoS2HIktlZ8feFBTopnE7kW6QO-x
" // Placeholder link
              download
              className="inline-block bg-accent text-accent-foreground font-semibold px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
            >
              Download CV
            </a>
            <a 
              href="#contact"
              className="inline-block bg-transparent border-2 border-accent text-accent font-semibold px-6 py-3 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Let's Talk
            </a>
        </div>
      </div>
      <a href="#about" className="absolute bottom-10 animate-bounce">
        <ChevronsDown size={32} className="text-accent"/>
      </a>
    </section>
  );
};

export default Hero;
