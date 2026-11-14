import React, { useState } from 'react';
import { 
  Award, 
  Search, 
  ExternalLink, 
  X, 
  ShieldCheck, 
  CheckCircle2, 
  FileText, 
  Download,
  Eye,
  Filter
} from 'lucide-react';
import { certificatesData } from '../data/certificatesData';
import { Certificate, CertificateCategory } from '../types/portfolio';

export const CertificatesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CertificateCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const categories = [
    { id: 'all' as CertificateCategory, label: `All (${certificatesData.length})` },
    { id: 'cloud-ai' as CertificateCategory, label: 'Cloud & AI (7)' },
    { id: 'web-python' as CertificateCategory, label: 'Web & Python (5)' },
    { id: 'professional' as CertificateCategory, label: 'Professional & Civic (4)' },
  ];

  const filteredCerts = certificatesData.filter((cert) => {
    const matchesCategory = activeCategory === 'all' || cert.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="certificates" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-brand-border/60 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-semibold px-3 py-1 rounded-full bg-brand-surface border border-brand-border mb-3">
            Verified Credentials & Badges
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            LEARNING. GROWING. ACHIEVING.
          </h2>
          <p className="text-base text-brand-muted max-w-2xl mt-4">
            16 verified certifications from premier institutions including IIT Kharagpur (NPTEL), MongoDB, Infosys, and TCS.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all border ${
                  activeCategory === cat.id
                    ? 'bg-brand-card text-brand-accent border-brand-accent shadow-cyan-soft'
                    : 'bg-brand-surface text-brand-muted border-brand-border hover:border-brand-borderLight hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-brand-dim absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by skill, title, issuer..."
              className="w-full pl-9 pr-4 py-2 rounded-full bg-brand-surface border border-brand-border text-xs text-white placeholder-brand-dim focus:outline-none focus:border-brand-accent transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-dim hover:text-white text-xs"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="group cursor-pointer rounded-2xl bg-brand-surface/70 border border-brand-border hover:border-brand-accent/50 transition-all duration-300 hover:-translate-y-1.5 shadow-lg flex flex-col justify-between overflow-hidden"
            >
              {/* Certificate Image Preview */}
              <div className="relative h-44 w-full bg-brand-card overflow-hidden border-b border-brand-border">
                <img
                  src={cert.previewUrl}
                  alt={cert.title}
                  className="w-full h-full object-cover object-top filter contrast-[1.02] group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to stylized card if preview file is missing
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 via-transparent to-transparent opacity-40" />
                <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-brand-surface/90 backdrop-blur-md border border-brand-border text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Verified</span>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="p-5 flex flex-col justify-between flex-1 gap-4">
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-brand-dim mb-1.5">
                    <span>{cert.date}</span>
                    <span className="text-brand-accent">{cert.categoryLabel}</span>
                  </div>

                  <h3 className="font-display text-sm font-bold text-white group-hover:text-brand-accent transition-colors line-clamp-2">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-brand-muted mt-1 line-clamp-1 font-mono">
                    {cert.issuer}
                  </p>

                  <p className="text-xs text-brand-dim mt-2 line-clamp-2 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-brand-border/40 flex items-center justify-between text-xs font-mono text-brand-accent">
                  <span>Inspect Certificate</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCerts.length === 0 && (
          <div className="text-center py-16 bg-brand-surface/40 rounded-2xl border border-brand-border">
            <Award className="w-10 h-10 text-brand-dim mx-auto mb-3" />
            <p className="text-sm text-brand-muted">No certificates matching your search criteria.</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="mt-3 text-xs font-mono text-brand-accent underline"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Lightbox Modal for Certificate Inspection */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
          <div className="w-full max-w-2xl rounded-3xl bg-brand-surface border border-brand-border shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="px-6 py-4 bg-brand-card border-b border-brand-border flex items-center justify-between sticky top-0 z-20">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-brand-accent" />
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  Verified Credential Lightbox
                </span>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-1 rounded-lg text-brand-muted hover:text-white"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scroll Content */}
            <div className="p-6 overflow-y-auto space-y-6">
              
              {/* High-Resolution Preview Image with Direct Link */}
              <div className="rounded-2xl overflow-hidden border border-brand-border bg-brand-bg flex items-center justify-center max-h-96">
                <img
                  src={selectedCert.previewUrl}
                  alt={selectedCert.title}
                  className="w-full h-auto max-h-96 object-contain"
                />
              </div>

              {/* Title & Issuer Details */}
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                  {selectedCert.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-brand-accent mt-1">
                  Issued by: {selectedCert.issuer} · {selectedCert.date}
                </p>
                {selectedCert.credentialId && (
                  <p className="text-xs font-mono text-brand-dim mt-0.5">
                    Credential ID: {selectedCert.credentialId}
                  </p>
                )}
              </div>

              {/* Description */}
              <div className="p-4 rounded-xl bg-brand-card border border-brand-border/80 text-xs sm:text-sm text-slate-200 leading-relaxed">
                {selectedCert.description}
              </div>

              {/* Validated Skills Tags */}
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-brand-dim block mb-2">
                  Validated Competencies:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedCert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-brand-card border border-brand-border text-xs font-mono text-brand-accent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Actions Footer */}
            <div className="px-6 py-4 bg-brand-card border-t border-brand-border flex items-center justify-between gap-3">
              <a
                href={selectedCert.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-brand-accent hover:bg-sky-300 text-brand-bg text-xs font-semibold flex items-center gap-2 transition-all shadow-cyan-soft"
              >
                <FileText className="w-4 h-4" />
                <span>Open Original Certificate (PDF/Image)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => setSelectedCert(null)}
                className="text-xs font-mono text-brand-muted hover:text-white"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
