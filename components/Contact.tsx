import React from 'react';
import { CONTACT_MESSAGE, CONTACT_INFO } from '../constants/portfolioData';
import Section from './Section';

const Contact: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // In a real application, you would handle form submission here.
    // For this static example, we'll just log it.
    console.log("Form submitted!");
    alert("Thank you for your message!");
    event.currentTarget.reset();
  };

  return (
    <Section id="contact" title="Get In Touch">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-lg text-foreground/80">
          {CONTACT_MESSAGE}
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
        <div className="flex-1 space-y-6">
            {CONTACT_INFO.map(({ Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                    <div className="bg-card border border-border p-3 rounded-full">
                        <Icon className="text-accent" size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-primary">{label}</h3>
                        <a href={href} className="text-foreground/80 hover:text-accent transition-colors">{value}</a>
                    </div>
                </div>
            ))}
        </div>
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="bg-card border border-border p-8 rounded-lg space-y-6">
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              required
              className="w-full bg-background border border-border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              required
              className="w-full bg-background border border-border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <textarea 
              name="message" 
              placeholder="Your Message" 
              rows={5}
              required
              className="w-full bg-background border border-border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            ></textarea>
            <button 
              type="submit"
              className="w-full bg-accent text-accent-foreground font-semibold p-3 rounded-md hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
