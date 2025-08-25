// ------------------------------------------------------------------- //
// ✏️ EDIT THIS FILE TO PERSONALIZE YOUR PORTFOLIO!
// ------------------------------------------------------------------- //

import {
  Mail,
  Code,
  Database,
  Palette,
  Component,
  Smartphone,
  Briefcase,
  Megaphone,
  Bot,
  PenTool,
  Building,
  Linkedin,
  Github,
  Award,
  BookOpen
} from 'lucide-react';
import type { SocialLink, Skill, Project, ExperienceItem } from '../types';

// --- HERO SECTION --- //
export const NAME = "Shubham Bagde";
export const ROLES = ["Lead UI/UX & Website Designer", "Digital Marketing Strategist", "WordPress Expert", "Founder @ Ready Multi Service"];
export const BIO = "Web Development + Digital Marketing for Startups & Realtors. I build high-converting websites and run ROI-driven campaigns that drive measurable growth.";
export const PROFILE_PICTURE = "/assets/profile.jpg";


// --- SOCIAL LINKS --- //
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Email",
    url: "mailto:shubhamgbagde@gmail.com",
    Icon: Mail,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/shubhamgbagde",
    Icon: Linkedin,
  },
  {
    name: "GitHub",
    url: "https://github.com/readymultiservice",
    Icon: Github,
  },
];

// --- ABOUT SECTION --- //
export const ABOUT_ME = `I'm Shubham Bagde, a web developer and digital marketing strategist helping startups, realtors, and local businesses build high-converting websites and run ROI-driven campaigns. My expertise lies in conversion-focused WordPress development, SEO, performance-led lead generation, and UI/UX with data-backed CRO principles. Passionate about AI and automation, I build digital presences that work while you sleep.`;
export const ABOUT_STATS = [
    { value: '100+', label: 'Websites Delivered' },
    { value: '50+', label: 'Campaigns Led' },
    { value: '10+', label: 'Years of Experience' },
];


// --- SKILLS SECTION --- //
export const SKILLS: { category: string; skills: Skill[] }[] = [
  {
    category: "UI/UX & Web Design",
    skills: [
      { name: "UI/UX", Icon: Palette },
      { name: "Figma", Icon: PenTool },
      { name: "WordPress", Icon: Component },
      { name: "Elementor", Icon: Component },
      { name: "WooCommerce", Icon: Smartphone },
      { name: "Bootstrap", Icon: Code },
      { name: "HTML5 & CSS3", Icon: Code },
    ],
  },
  {
    category: "Digital Marketing & SEO",
    skills: [
      { name: "SEO (Technical, Local)", Icon: Megaphone },
      { name: "Google Ads & Meta Ads", Icon: Megaphone },
      { name: "Lead Generation & CRO", Icon: Megaphone },
      { name: "GA4 & Tag Manager", Icon: Database },
    ],
  },
  {
    category: "Backend & Other",
    skills: [
      { name: "PHP & MySQL", Icon: Database },
      { name: "GeM Portal Integration", Icon: Building },
      { name: "Generative AI", Icon: Bot },
      { name: "Canva", Icon: Palette },
    ],
  },
];

// --- PROJECTS SECTION --- //
export const PROJECTS: Project[] = [
  {
    title: "Conversion-Focused WordPress Websites",
    description: "Built over 100 WordPress websites with Elementor/WooCommerce, optimized for speed, user experience (UX), and high conversion rates for startups and realtors.",
    tags: ["WordPress", "Elementor", "WooCommerce", "CRO", "UI/UX"],
    imageUrl: "assets/project-wordpress.jpg",
    liveUrl: "#",
  },
  {
    title: "ROI-Driven Marketing Campaigns",
    description: "Planned and executed over 50 SEO, Google Ads, and Meta Ads campaigns, successfully improving cost-per-lead (CPL) and overall lead quality for various businesses.",
    tags: ["SEO", "Google Ads", "Meta Ads", "PPC", "Lead Gen"],
    imageUrl: "assets/project-marketing.jpg",
    liveUrl: "#",
  },
  {
    title: "Automated Real Estate Funnels",
    description: "Delivered end-to-end real estate funnels, including high-converting landing pages, seamless CRM integrations, and automated WhatsApp follow-ups to nurture leads effectively.",
    tags: ["Landing Pages", "CRM", "Automation", "Real Estate"],
    imageUrl: "assets/project-funnels.jpg",
    liveUrl: "#",
  },
  {
    title: "GeM Portal & Government Website Support",
    description: "Implemented comprehensive support for the Government e-Marketplace (GeM) Portal and other government websites, ensuring compliance, secure content management, and robust security.",
    tags: ["GeM Portal", "Government", "Compliance", "Security"],
    imageUrl: "assets/project-gov.jpg",
  },
];

// --- EXPERIENCE SECTION --- //
export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    company: "Ready Multi Service Private Limited",
    role: "Managing Director",
    date: "Jan 2019 - Present",
    description: [
      "Manage and execute projects across web development, digital marketing, and real estate consulting.",
      "Developed 100+ websites using WordPress & Elementor with a focus on performance and ROI.",
      "Led 50+ digital marketing campaigns, driving measurable results and improving lead quality.",
      "Executed 15+ full-cycle GeM registrations and bid submissions for government contracts.",
    ],
  },
  {
    company: "SSIT SOLUTIONS LLC",
    role: "Web Developer – SSIT",
    date: "Oct 2017 - Dec 2018",
    description: [
      "Developed and maintained dynamic, responsive WordPress websites for college departments, events, and student clubs.",
      "Customized WordPress themes using HTML, CSS, and PHP to meet specific design and functional requirements.",
    ],
  },
];

export const EDUCATION: ExperienceItem[] = [
    {
    company: "G.H. Raisoni College of Engineering (GHRCE), Nagpur",
    role: "Bachelor of Engineering in Computer Engineering",
    date: "Jul 2014 - Jun 2017",
    description: [
        "Focused on coding, networking, and system development.",
    ],
  },
  {
    company: "J D College of Engineering & Management",
    role: "Diploma in Computer Engineering",
    date: "Jul 2011 - May 2014",
    description: [
      "Focused on programming, networking, operating systems, microprocessors, and web development.",
    ],
  },
];


// --- CONTACT SECTION --- //
export const CONTACT_EMAIL = "shubhamgbagde@gmail.com";
export const CONTACT_MESSAGE = "Let's build a digital presence that works while you sleep. Book a 15-min discovery call or get a free homepage UX/SEO audit. My inbox is always open!";
export const CONTACT_INFO = [
    {
        Icon: Mail,
        label: 'Email',
        value: 'shubhamgbagde@gmail.com',
        href: 'mailto:shubhamgbagde@gmail.com'
    },
    {
        Icon: Smartphone,
        label: 'Phone',
        value: '+91-7887788291',
        href: 'tel:+91-7887788291'
    },
    {
        Icon: Building,
        label: 'Address',
        value: 'Nagpur, Maharashtra, India',
        href: '#'
    }
];
