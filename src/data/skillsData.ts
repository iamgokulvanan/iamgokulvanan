export interface SkillGroup {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  color: string;
  skills: {
    name: string;
    description: string;
    highlight?: boolean;
  }[];
}

export const skillsData: SkillGroup[] = [
  {
    id: 'tech-dev',
    title: 'Technology & Development',
    subtitle: 'Languages, modern frontend engineering, backend systems, and databases',
    iconName: 'Code2',
    color: '#38BDF8',
    skills: [
      { name: 'C Language', description: 'Systems programming, memory management & algorithmic foundations', highlight: false },
      { name: 'Python', description: 'Object-oriented programming, data analytics, multiprocessing & AI scripts', highlight: true },
      { name: 'Java', description: 'Object-oriented software development & structured programming', highlight: false },
      { name: 'JavaScript (ES6+)', description: 'Asynchronous event loops, DOM manipulation & modern web scripting', highlight: true },
      { name: 'TypeScript', description: 'Type-safe scalable application development with strict typing', highlight: true },
      { name: 'React', description: 'Component lifecycle, hooks, state management & reactive SPA architectures', highlight: true },
      { name: 'HTML5 & CSS3', description: 'Semantic markup, modern flexbox/grid layouts & responsive design', highlight: true },
      { name: 'Node.js', description: 'Server-side runtime, event-driven I/O & microservice backends', highlight: true },
      { name: 'REST APIs', description: 'Endpoint design, request lifecycle, JSON data serialization & error handling', highlight: true },
      { name: 'MongoDB', description: 'NoSQL document modeling, aggregation pipelines, Atlas & vector search', highlight: true },
      { name: 'SQL', description: 'Relational data modeling, querying, joins & schema normalization', highlight: false },
      { name: 'Git & GitHub', description: 'Version control, branch management, collaborative workflows & CI', highlight: true },
      { name: 'Vite & VS Code', description: 'Modern frontend bundling, developer tooling & rapid prototyping', highlight: false },
      { name: 'Postman', description: 'API contract testing, environment variables & request automation', highlight: false }
    ]
  },
  {
    id: 'ui-ux',
    title: 'UI/UX & Product Design',
    subtitle: 'Human-centered user experiences, wireframes, prototypes, and design systems',
    iconName: 'Palette',
    color: '#A78BFA',
    skills: [
      { name: 'User Interface (UI) Design', description: 'Visual aesthetics, typography hierarchy & balanced composition', highlight: true },
      { name: 'User Experience (UX) Design', description: 'User empathy, journey mapping & intuitive navigation flows', highlight: true },
      { name: 'Wireframing & Prototyping', description: 'Low to high-fidelity mockups, click-through flows & interaction testing', highlight: true },
      { name: 'Design Systems', description: 'Atomic tokens, consistent color schemes, scalable component libraries', highlight: true },
      { name: 'Figma', description: 'Auto-layout, reusable components, interactive prototypes & design handoff', highlight: true },
      { name: 'Mobile App Design', description: 'Touch ergonomics, iOS/Android design standards & thumb zone navigation', highlight: true },
      { name: 'Dashboard Design', description: 'Data visualization, dense data tables & clean metric cards', highlight: false },
      { name: 'Visual Branding', description: 'Brand voice, iconography, color palettes & cohesive visual identities', highlight: true }
    ]
  },
  {
    id: 'ai-innovation',
    title: 'AI & Innovation Lab',
    subtitle: 'Prompt engineering, RAG concepts, AI agents, and intelligent workflows',
    iconName: 'Sparkles',
    color: '#34D399',
    skills: [
      { name: 'Artificial Intelligence', description: 'Foundations of LLMs, neural concepts & generative technologies', highlight: true },
      { name: 'Prompt Engineering', description: 'Few-shot prompting, structured outputs, chain-of-thought & persona calibration', highlight: true },
      { name: 'AI Agents Architecture', description: 'Autonomous agent loops, tool calling & stateful agent memory', highlight: true },
      { name: 'RAG Concepts', description: 'Retrieval-Augmented Generation, document chunking & contextual injection', highlight: true },
      { name: 'Vector Search', description: 'Semantic embeddings, high-dimensional indexing & cosine similarity in MongoDB Atlas', highlight: true },
      { name: 'AI-Assisted Development', description: 'Accelerated software engineering using generative AI coding workflows', highlight: true },
      { name: 'AI Media Generation', description: 'Creative visual prompting, concept art & storyboard ideation', highlight: false }
    ]
  },
  {
    id: 'video-editing',
    title: 'Cinematic Video Editing & Motion',
    subtitle: 'Dynamic pacing, Hollywood-grade color grading, sound design, and VFX',
    iconName: 'Film',
    color: '#F97316',
    skills: [
      { name: 'Cinematic Video Editing', description: 'Narrative storytelling, rhythmic cuts & emotional pacing', highlight: true },
      { name: 'DaVinci Resolve', description: 'Node-based color grading, color wheels, power windows & LUT crafting', highlight: true },
      { name: 'Adobe Premiere Pro', description: 'Timeline assembly, multi-cam editing, audio leveling & export mastery', highlight: true },
      { name: 'Adobe After Effects', description: 'Motion graphics, kinetic typography, keyframing & visual effects', highlight: true },
      { name: 'Colour Grading', description: 'Teal & orange grading, cinematic contrast, skin tone balance & film emulation', highlight: true },
      { name: 'Motion Graphics', description: 'Animated titles, lower thirds, logo reveals & UI animations', highlight: true },
      { name: 'Instagram Reels & Shorts', description: '3-second hook editing, viral retention pacing & sound-synced cuts', highlight: true },
      { name: 'Wedding Invitation Videos', description: 'Elegant visual storytelling, typography animations & cultural motifs', highlight: false }
    ]
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design & Visual Branding',
    subtitle: 'Brand identity, marketing creatives, high-CTR thumbnails, and digital art',
    iconName: 'Layers',
    color: '#EC4899',
    skills: [
      { name: 'Logo & Brand Identity', description: 'Minimalist logos, brand guidelines & typography systems', highlight: true },
      { name: 'Social Media Creatives', description: 'High-converting carousels, banner graphics & promotional cards', highlight: true },
      { name: 'YouTube Thumbnails', description: 'Visual hierarchy, facial expression emphasis & high-CTR composition', highlight: true },
      { name: 'Poster Design', description: 'Cinematic event posters, typography experimentation & visual balance', highlight: false },
      { name: 'Adobe Photoshop', description: 'Photo manipulation, digital retouching, color blending & multi-layer composition', highlight: true },
      { name: 'Typography & Layout', description: 'Pairing modern typefaces, letter spacing & visual rhythm', highlight: false }
    ]
  }
];
