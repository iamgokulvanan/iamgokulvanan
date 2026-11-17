import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { GraduationCap, Award, Calendar, ExternalLink, X, CheckCircle2 } from 'lucide-react';

// Education timeline data
const educationData = [
  {
    degree: 'B.Tech — Information Technology',
    institution: 'Hindusthan College of Engineering and Technology (HICET)',
    location: 'Coimbatore, Tamil Nadu, India',
    duration: '2024 – 2028',
    status: 'Currently Pursuing',
    highlights: [
      'Focusing on Computer Science fundamentals, Software Engineering, and Cloud Technologies',
      'Elite certification in Cloud Computing from IIT Kharagpur (NPTEL)',
      '5 specialized certifications from MongoDB (AI Agents, RAG Apps, Vector Search)',
      'Web Development Internship at Learn Flu (AICTE & MSME Approved)',
      'Campus representative in National Financial Literacy Quiz 2026 (NISM & SEBI)',
    ],
  },
];

// Certificate data — replace previewUrl/pdfUrl with real paths or URLs
const certificatesData = [
  {
    id: 'nptel-cloud',
    title: 'Cloud Computing — Elite Certification',
    issuer: 'IIT Kharagpur (NPTEL)',
    date: 'Dec 2024',
    category: 'Cloud & AI',
    description: '12-week program covering cloud architectures, AWS, GCP, virtualization, and scalable systems.',
    skills: ['Cloud Computing', 'AWS', 'GCP', 'Virtualization'],
    verified: true,
    previewUrl: '/assets/certificates/nptel-cloud.jpg',
    pdfUrl: '/assets/certificates/nptel-cloud.pdf',
  },
  {
    id: 'mongodb-ai-agents',
    title: 'MongoDB AI Agents',
    issuer: 'MongoDB University',
    date: '2024',
    category: 'Cloud & AI',
    description: 'Building AI agent applications using MongoDB Atlas and vector capabilities.',
    skills: ['MongoDB', 'AI Agents', 'Vector Search', 'RAG'],
    verified: true,
    previewUrl: '/assets/certificates/mongodb-ai-agents.jpg',
    pdfUrl: '/assets/certificates/mongodb-ai-agents.pdf',
  },
  {
    id: 'mongodb-rag',
    title: 'MongoDB RAG Applications',
    issuer: 'MongoDB University',
    date: '2024',
    category: 'Cloud & AI',
    description: 'Retrieval-Augmented Generation apps with MongoDB Atlas Vector Search.',
    skills: ['RAG', 'Vector Search', 'MongoDB', 'Embeddings'],
    verified: true,
    previewUrl: '/assets/certificates/mongodb-rag.jpg',
    pdfUrl: '/assets/certificates/mongodb-rag.pdf',
  },
  {
    id: 'infosys-webdev',
    title: 'Web Development Fundamentals',
    issuer: 'Infosys Springboard',
    date: '2024',
    category: 'Web & Python',
    description: 'HTML, CSS, JavaScript fundamentals and responsive web design principles.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    verified: true,
    previewUrl: '/assets/certificates/infosys-webdev.jpg',
    pdfUrl: '/assets/certificates/infosys-webdev.pdf',
  },
  {
    id: 'learn-flu-internship',
    title: 'Web Development Internship',
    issuer: 'Learn Flu (AICTE & MSME Approved)',
    date: '2024',
    category: 'Professional',
    description: 'Completed full-stack web development internship at Learn Flu e-learning platform.',
    skills: ['React', 'Node.js', 'MongoDB', 'Full Stack'],
    verified: true,
    previewUrl: '/assets/certificates/learn-flu-internship.jpg',
    pdfUrl: '/assets/certificates/learn-flu-internship.pdf',
  },
  {
    id: 'mongodb-vector',
    title: 'MongoDB Vector Search',
    issuer: 'MongoDB University',
    date: '2024',
    category: 'Cloud & AI',
    description: 'Semantic search and AI-powered query systems using MongoDB Atlas Vector Search.',
    skills: ['Vector Search', 'Semantic Search', 'MongoDB Atlas'],
    verified: true,
    previewUrl: '/assets/certificates/mongodb-vector.jpg',
    pdfUrl: '/assets/certificates/mongodb-vector.pdf',
  },
];

const catFilters = ['ALL', 'CLOUD & AI', 'WEB & PYTHON', 'PROFESSIONAL'];
const catMap: Record<string, string | null> = {
  'ALL': null,
  'CLOUD & AI': 'Cloud & AI',
  'WEB & PYTHON': 'Web & Python',
  'PROFESSIONAL': 'Professional',
};

export const EducationCertificatesSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedCert, setSelectedCert] = useState<typeof certificatesData[0] | null>(null);

  const filteredCerts = catMap[activeFilter]
    ? certificatesData.filter((c) => c.category === catMap[activeFilter])
    : certificatesData;

  return (
    <section id="education" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-violet-500/4 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="mb-14">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="font-mono text-xs tracking-[0.4em] text-sky-400/70 uppercase block mb-4"
          >
            07 — EDUCATION & CERTIFICATES
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black text-4xl sm:text-6xl xl:text-7xl text-white leading-[0.9] tracking-tight"
          >
            KNOWLEDGE &amp;
            <br />
            <span className="text-transparent bg-clip-text" style={{
              backgroundImage: 'linear-gradient(135deg, #818CF8 0%, #38BDF8 100%)'
            }}>
              CREDENTIALS.
            </span>
          </motion.h2>
        </div>

        {/* Education timeline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-14"
        >
          {educationData.map((edu) => (
            <div key={edu.degree}
              className="relative pl-8 border-l-2 border-violet-500/30">
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-violet-500 bg-brand-bg" />

              <div className="pb-10">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {edu.status}
                  </span>
                  <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {edu.duration}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-1">
                  {edu.degree}
                </h3>
                <p className="text-sky-300/80 font-medium text-sm">{edu.institution}</p>
                <p className="text-xs text-slate-500 font-mono mt-0.5">{edu.location}</p>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {edu.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                      {h}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-2 mb-6"
        >
          <Award className="w-5 h-5 text-sky-400" />
          <span className="font-display font-bold text-xl text-white">Certifications</span>
          <span className="ml-2 text-xs font-mono px-2 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300">
            {certificatesData.length} Verified
          </span>
        </motion.div>

        {/* Cert filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {catFilters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider border transition-all duration-200 ${
                activeFilter === f
                  ? 'bg-sky-500 border-sky-500 text-brand-bg'
                  : 'border-white/8 text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Certificate grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert, i) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setSelectedCert(cert)}
                className="group relative rounded-2xl border border-white/5 bg-white/[0.02] hover:border-sky-500/20 overflow-hidden cursor-pointer transition-all duration-300"
              >
                {/* Certificate image placeholder */}
                <div className="h-36 relative overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, rgba(129,140,248,0.12), rgba(56,189,248,0.06), rgba(8,10,15,0.9))' }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Award className="w-10 h-10 text-violet-400/30" />
                  </div>
                  {cert.verified && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/25 text-emerald-300 text-[10px] font-mono">
                      <CheckCircle2 className="w-3 h-3" /> Verified
                    </div>
                  )}
                  <div className="absolute bottom-3 left-3 text-[10px] font-mono text-slate-500 bg-black/30 px-1.5 py-0.5 rounded">
                    {cert.category}
                  </div>
                </div>

                <div className="p-4">
                  <h4 className="font-semibold text-sm text-white group-hover:text-sky-200 transition-colors leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-sky-400/70 font-mono mt-0.5">{cert.issuer}</p>
                  <p className="text-[10px] text-slate-500 font-mono mt-1 flex items-center gap-1">
                    <Calendar className="w-2.5 h-2.5" /> {cert.date}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {cert.skills.slice(0, 3).map((s) => (
                      <span key={s} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-slate-500">{s}</span>
                    ))}
                  </div>
                  <button className="mt-3 text-xs font-mono text-sky-400/60 hover:text-sky-300 transition-colors flex items-center gap-1">
                    VIEW CERTIFICATE <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Certificate detail modal */}
      <AnimatePresence>
        {selectedCert && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-[200]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 32 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-x-4 top-1/2 -translate-y-1/2 max-w-lg mx-auto z-[201] rounded-2xl border border-white/10 bg-[#080A0F]/98 backdrop-blur-xl p-6"
            >
              <div className="flex items-start justify-between mb-5">
                <div>
                  <span className="text-[10px] font-mono text-sky-400/60 uppercase tracking-widest">{selectedCert.category}</span>
                  <h3 className="font-display font-bold text-xl text-white mt-1">{selectedCert.title}</h3>
                  <p className="text-sky-400/70 text-sm font-mono">{selectedCert.issuer}</p>
                </div>
                <button onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-xl border border-white/10 text-slate-400 hover:text-white transition-colors shrink-0 ml-4">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Certificate preview */}
              <div className="h-48 rounded-xl border border-white/8 overflow-hidden mb-5"
                style={{ background: 'linear-gradient(135deg, rgba(129,140,248,0.15), rgba(56,189,248,0.08))' }}>
                <div className="w-full h-full flex items-center justify-center flex-col gap-3">
                  <Award className="w-14 h-14 text-violet-400/50" />
                  <p className="text-xs font-mono text-slate-500">Certificate Image</p>
                  <p className="text-[10px] text-slate-600">Replace <code className="text-sky-400/60">{selectedCert.previewUrl}</code> with real file</p>
                </div>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed mb-4">{selectedCert.description}</p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {selectedCert.skills.map((s) => (
                  <span key={s} className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-300">{s}</span>
                ))}
              </div>

              <div className="flex gap-3">
                {selectedCert.verified && (
                  <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-300">
                    <CheckCircle2 className="w-4 h-4" /> Verified Certificate
                  </div>
                )}
                <a href={selectedCert.pdfUrl} target="_blank" rel="noopener noreferrer"
                  className="ml-auto flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono text-brand-bg font-semibold transition-all"
                  style={{ background: 'linear-gradient(135deg, #818CF8, #38BDF8)' }}>
                  VIEW PDF <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};
