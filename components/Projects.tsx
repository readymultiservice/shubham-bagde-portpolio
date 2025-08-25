import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../constants/portfolioData';
import Section from './Section';

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="My Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="bg-card border border-border rounded-lg overflow-hidden group transition-transform duration-300 hover:-translate-y-2 flex flex-col"
          >
            <div className="overflow-hidden">
                <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors mb-2">
                {project.title}
              </h3>
              <p className="text-foreground/80 mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-accent/10 text-accent text-sm font-medium px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center space-x-4 mt-auto pt-4 border-t border-border">
                  {project.repoUrl && (
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground/80 hover:text-accent transition-colors">
                      <Github size={20} /> GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground/80 hover:text-accent transition-colors">
                      <ExternalLink size={20} /> Live Demo
                    </a>
                  )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
