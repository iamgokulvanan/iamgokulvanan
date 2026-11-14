export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  duration: string;
  status: string;
  highlights: string[];
}

export const educationData: EducationItem[] = [
  {
    degree: 'B.Tech — Bachelor of Technology',
    field: 'Information Technology',
    institution: 'Hindusthan College of Engineering and Technology (HICET)',
    location: 'Coimbatore, Tamil Nadu, India',
    duration: '2024 – 2028',
    status: 'Currently Pursuing',
    highlights: [
      'Focusing on Computer Science fundamentals, Software Engineering, and Cloud Technologies',
      'Completed 12-week Elite certification in Cloud Computing from IIT Kharagpur (NPTEL)',
      'Earned 5 specialized certifications from MongoDB in AI Agents, RAG Apps, and Vector Search',
      'Completed Web Development Internship at Learn Flu (AICTE & MSME Approved)',
      'Campus round participant & representative in National Financial Literacy Quiz 2026 (NISM & SEBI)'
    ]
  }
];

export interface WorkflowStage {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export const workflowStages: WorkflowStage[] = [
  {
    step: '01',
    title: 'DISCOVER',
    subtitle: 'Understand the Core Vision',
    description: 'Listen carefully to project objectives, user personas, brand goals, and target audience needs to establish a solid foundation.',
    iconName: 'Search'
  },
  {
    step: '02',
    title: 'PLAN',
    subtitle: 'Strategic Blueprinting',
    description: 'Structure information architecture, tech stack selection, visual moodboards, timeline pacing, and key milestones.',
    iconName: 'Compass'
  },
  {
    step: '03',
    title: 'DESIGN',
    subtitle: 'Wireframing & Aesthetics',
    description: 'Craft intuitive Figma wireframes, interactive prototypes, balanced typography, and responsive component libraries.',
    iconName: 'PenTool'
  },
  {
    step: '04',
    title: 'DEVELOP',
    subtitle: 'Clean & Robust Engineering',
    description: 'Write performant, maintainable TypeScript and React code with modern responsive styling and accessible interactions.',
    iconName: 'Code'
  },
  {
    step: '05',
    title: 'CREATE',
    subtitle: 'Cinematic Post-Production',
    description: 'Edit dynamic footage, apply custom color grading in DaVinci Resolve, craft motion graphics, and engineer sound design.',
    iconName: 'Film'
  },
  {
    step: '06',
    title: 'DELIVER',
    subtitle: 'Testing & Launch',
    description: 'Rigorous cross-device testing, performance audits, client feedback revisions, and flawless final asset delivery.',
    iconName: 'Rocket'
  }
];

export interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  iconName: string;
}

export const servicesData: Service[] = [
  {
    id: 'web-dev',
    title: 'Full-Stack & Frontend Development',
    category: 'Engineering',
    description: 'Building responsive, fast, and modern web applications using React, TypeScript, Node.js, and Tailwind CSS.',
    features: ['Responsive single-page applications', 'Clean component architecture', 'RESTful API integration', 'High-speed performance optimization'],
    iconName: 'Globe'
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX & Product Design',
    category: 'Design',
    description: 'Designing intuitive, elegant digital interfaces, design systems, and clickable prototypes in Figma.',
    features: ['User journey mapping & wireframes', 'Figma interactive prototypes', 'Design systems & style guides', 'Mobile app & dashboard layouts'],
    iconName: 'Layout'
  },
  {
    id: 'video-editing-cinematic',
    title: 'Cinematic Video Editing',
    category: 'Studio',
    description: 'Crafting visually arresting short films, travel videos, wedding cinematic invitations, and YouTube content.',
    features: ['Rhythmic narrative pacing', 'Beat-synced transitions', 'Teal & orange color grading in DaVinci', 'Foley & immersive sound design'],
    iconName: 'Video'
  },
  {
    id: 'reels-motion',
    title: 'High-Retention Reels & Motion FX',
    category: 'Social Media',
    description: 'Designing engaging short-form video content engineered to capture attention within the first 3 seconds.',
    features: ['Kinetic typography in After Effects', '3-second hook optimization', 'Smooth speed ramping & zoom cuts', 'Custom lower thirds and branding'],
    iconName: 'Zap'
  },
  {
    id: 'ai-workflows',
    title: 'AI Workflows & Prompt Engineering',
    category: 'Innovation',
    description: 'Leveraging modern AI paradigms including RAG, Vector Search, and prompt engineering for practical applications.',
    features: ['Context-grounded prompt templates', 'RAG pipeline design concepts', 'AI agent loop prototyping', 'AI-assisted developer tooling'],
    iconName: 'Cpu'
  },
  {
    id: 'visual-branding',
    title: 'Graphic Design & Brand Creatives',
    category: 'Branding',
    description: 'Creating high-impact YouTube thumbnails, posters, social media banners, and cohesive brand collateral.',
    features: ['High-CTR YouTube thumbnails', 'Minimalist logo concepts', 'Promotional event posters', 'Photoshop digital photo manipulation'],
    iconName: 'Sparkles'
  }
];

export const personalInterests = [
  {
    title: 'Cinematography & Film',
    description: 'Obsessed with lighting, camera angles, color palettes in cinema, and the art of visual storytelling.',
    icon: 'Camera',
    tag: 'Visual Art'
  },
  {
    title: 'Music & Audio Design',
    description: 'Exploring ambient soundtracks, cinematic scores, and rhythm that drive pacing in video edits.',
    icon: 'Headphones',
    tag: 'Sound'
  },
  {
    title: 'Tech Exploration & Gadgets',
    description: 'Tracking new developments in AI, developer tools, hardware innovations, and modern web frameworks.',
    icon: 'Laptop',
    tag: 'Innovation'
  },
  {
    title: 'Gaming & Interactive Worlds',
    description: 'Admiring world-building, UI HUD design in games, and interactive real-time storytelling.',
    icon: 'Gamepad2',
    tag: 'Entertainment'
  }
];

export const contactDetails = {
  name: 'Gokul Vanan',
  brand: 'IAMGOKULVANAN',
  handle: '@iamgokulvanan',
  tagline: 'TECH MEETS CREATIVITY',
  subtagline: 'Where Technology Meets Creativity',
  description: 'I explore technology, design digital experiences and transform creative ideas into meaningful visual stories.',
  location: 'Coimbatore, Tamil Nadu, India',
  email: 'iamgokulvanan@gmail.com',
  phone: '+91 7397696240',
  whatsappUrl: 'https://wa.me/917397696240',
  githubUrl: 'https://github.com/iamgokulvanan',
  linkedinUrl: 'https://linkedin.com/in/iamgokulvanan',
  instagramPersonal: 'https://instagram.com/iamgokulvanan',
  instagramStudio: 'https://instagram.com/minion.visuals',
  freelancerUrl: 'https://freelancer.in/u/iamgokulvanan',
  fiverrUrl: 'https://fiverr.com/iamgokulvanan',
  twitterUrl: 'https://x.com/iamgokulvanan'
};
