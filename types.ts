
import { LucideIcon } from 'lucide-react';

export interface SocialLink {
  name: string;
  url: string;
  Icon: LucideIcon;
}

export interface Skill {
  name: string;
  Icon: LucideIcon;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  date: string;
  description: string[];
}
