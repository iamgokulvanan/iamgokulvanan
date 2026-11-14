import { Project } from '../types/portfolio';

export const projectsData: Project[] = [
  {
    id: 'learn-flu',
    title: 'Learn Flu',
    tagline: 'Modern E-Learning Platform for Technical Skills',
    category: 'development',
    categoryLabel: 'Full-Stack Development',
    role: 'Full-Stack Developer & UI Designer',
    status: 'Concept Prototype',
    accentColor: '#38BDF8',
    description: 'An all-in-one e-learning platform concept designed to provide an engaging, structured digital learning experience with hands-on lesson modules, real-time code sandboxes, and student progress metrics.',
    problem: 'Traditional learning platforms often separate theoretical reading from practical execution, resulting in high dropout rates and fragmented learning pathways for engineering students.',
    solution: 'Designed and developed a cohesive student-first learning platform concept combining modular video lessons, structured chapter checkpoints, progress dashboards, and interactive exercise sandboxes.',
    keyFeatures: [
      'Modular curriculum structure with chapter progress tracking',
      'Interactive coding sandbox and practical challenge modules',
      'Clean student dashboard with completion certificates',
      'Responsive, high-contrast dark UI designed for long study sessions'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'REST APIs'],
    outcome: 'Formulated a comprehensive full-stack e-learning architecture ready for production scaling, refined through practical internship experience at Learn Flu.',
    githubUrl: 'https://github.com/iamgokulvanan',
    demoBadge: 'Featured Prototype'
  },
  {
    id: 'video-collab-platform',
    title: 'Video Editor Collaboration Platform',
    tagline: 'Streamlined Workspace for Creators & Post-Production Teams',
    category: 'development',
    categoryLabel: 'Web Development',
    role: 'Product Architect & Frontend Lead',
    status: 'In Development',
    accentColor: '#818CF8',
    description: 'A dedicated web platform concept tailored for freelance video editors, motion designers, and content creators to share work-in-progress drafts, receive frame-accurate feedback, and collaborate smoothly.',
    problem: 'Video editors and clients typically communicate across chaotic chat apps and unstructured cloud drives, leading to missed revision notes, confusion over render versions, and delayed turnarounds.',
    solution: 'Developed a collaborative workspace concept featuring frame-accurate timestamped commentary, asset staging zones, version-controlled video previews, and creative brief templates.',
    keyFeatures: [
      'Time-coded feedback player for precise revision marking',
      'Version comparison between render iterations',
      'Cloud asset staging checklist for raw footage and LUT handoffs',
      'Direct client review approval gateway'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Lucide React', 'Video API Concepts', 'MongoDB'],
    outcome: 'Eliminated revision friction by transforming how creators and video editors share timelines and feedback.',
    githubUrl: 'https://github.com/iamgokulvanan',
    demoBadge: 'Interactive Demo'
  },
  {
    id: 'reels-suggestion-app',
    title: 'Reels Suggestion App',
    tagline: 'Creative Short-Form Video Brainstorming & Hook Engine',
    category: 'development',
    categoryLabel: 'Application Development',
    role: 'Full-Stack Developer & Content Strategist',
    status: 'Concept Prototype',
    accentColor: '#F472B6',
    description: 'A dynamic brainstorming and ideation platform concept designed to generate high-retention short-video concepts, viral storytelling hooks, audio cues, and transition ideas for creators.',
    problem: 'Content creators face creative burnout and spend countless hours brainstorming viral concepts, hooks, and visual transitions for Instagram Reels and YouTube Shorts.',
    solution: 'Built an algorithmic prompt and template engine that suggests tailored reel concepts based on niche, trending formats, 3-second hook strategies, and recommended pacing transitions.',
    keyFeatures: [
      'Categorized hook library (educational, cinematic, curiosity, challenge)',
      'Shot-list & transition cue generator for video editors',
      'Audio tempo & pacing recommendations',
      'Exportable script outlines and shot-sequence cards'
    ],
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'LocalStorage', 'Lucide Icons'],
    outcome: 'Provided creators with instant, actionable video ideas that boost viewer retention in the critical first 3 seconds.',
    githubUrl: 'https://github.com/iamgokulvanan',
    demoBadge: 'Creative Tool'
  },
  {
    id: 'medio-assist-ai',
    title: 'Medio Assist AI',
    tagline: 'Intelligent Clinical Symptom Triage & First-Aid Assistant Concept',
    category: 'ai',
    categoryLabel: 'AI & Innovation',
    role: 'AI Engineer & Prompt Architect',
    status: 'Concept Prototype',
    accentColor: '#34D399',
    description: 'A safety-first medical AI assistant concept exploring conversational triage, structured health education, first-aid protocols, and emergency escalation pathways powered by RAG architecture.',
    problem: 'Searching medical symptoms on traditional search engines often yields catastrophic misdiagnoses or overwhelming medical jargon, increasing patient anxiety rather than providing clear next steps.',
    solution: 'Engineered an AI assistant prototype combining verified medical guidelines, Retrieval-Augmented Generation (RAG) vector search for clinical context, and strict safety guardrails that detect red-flag symptoms.',
    keyFeatures: [
      'Structured triage workflow guiding users step-by-step',
      'Red-flag symptom detection with immediate emergency hotlines',
      'Retrieval-Augmented Generation (RAG) referencing verified health repositories',
      'Plain-language medical terminology explanations with clear disclaimers'
    ],
    technologies: ['Python', 'Prompt Engineering', 'RAG Concepts', 'MongoDB Vector Search', 'React UI'],
    outcome: 'Demonstrated responsible AI application in digital healthcare with strict guardrails and prompt safety architecture.',
    githubUrl: 'https://github.com/iamgokulvanan',
    demoBadge: 'AI Concept'
  },
  {
    id: 'minion-visuals-studio',
    title: 'Minion Visuals — Cinematic Production',
    tagline: 'High-Retention Video Editing, Motion Graphics & Visual FX',
    category: 'video',
    categoryLabel: 'Cinematic Studio',
    role: 'Video Editor & Colorist',
    status: 'Completed',
    accentColor: '#FB923C',
    description: 'The creative video production studio identity under IAMGOKULVANAN (@minion.visuals), producing wedding cinematic invitations, travel films, promotional reels, and dynamic motion graphics.',
    problem: 'Generic video templates lack emotional resonance and dynamic pacing, failing to captivate modern audiences across digital platforms.',
    solution: 'Engineered custom visual storytelling workflows utilizing DaVinci Resolve color grading, custom After Effects speed-ramping, kinetic typography, and immersive Foley sound design.',
    keyFeatures: [
      'Hollywood-style teal & orange and film-stock color grading',
      'Kinetic motion graphics and custom title reveals',
      'Beat-matched transitions and sound-designed impact effects',
      'Multi-format delivery optimized for Instagram Reels, YouTube, and screens'
    ],
    technologies: ['Adobe Premiere Pro', 'DaVinci Resolve', 'Adobe After Effects', 'Photoshop'],
    outcome: 'Successfully crafted dozens of cinematic reels, visual invitations, and promo clips with high engagement on Instagram.',
    liveUrl: 'https://instagram.com/minion.visuals',
    demoBadge: 'Studio Portfolio'
  },
  {
    id: 'iamgokulvanan-brand-system',
    title: 'IAMGOKULVANAN Personal Brand System',
    tagline: 'Dark Cinematic Digital Platform & Multi-Disciplinary Portfolio',
    category: 'uiux',
    categoryLabel: 'UI/UX & Product Design',
    role: 'Lead Designer & Frontend Architect',
    status: 'Completed',
    accentColor: '#38BDF8',
    description: 'The complete global brand identity and personal portfolio experience for Gokul Vanan, merging five creative and technical disciplines into a single immersive digital environment.',
    problem: 'Multidisciplinary professionals often struggle with portfolios that look either too dry and developer-focused or too chaotic and unorganized for corporate recruiters.',
    solution: 'Designed a unified dark cinematic visual language (#08090C deep black, sky-blue accents, glassmorphic surfaces) with dedicated showcase sections for Code, UI/UX, AI, Video Studio, and Design.',
    keyFeatures: [
      'Interactive developer terminal for command-line portfolio exploration',
      'Draggable before-and-after video color grading slider',
      'Verified certificates showcase with modal lightbox preview',
      'Filterable projects engine and responsive glassmorphism navigation'
    ],
    technologies: ['React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    outcome: 'Created a memorable, world-class personal brand platform establishing authority in technology, UI/UX, AI, and creative video production.',
    githubUrl: 'https://github.com/iamgokulvanan/Portfolio',
    liveUrl: '#',
    demoBadge: 'Active Website'
  }
];
