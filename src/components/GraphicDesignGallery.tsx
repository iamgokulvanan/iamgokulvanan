import React, { useState } from 'react';
import { Layers, Sparkles, Eye, X, ZoomIn, ArrowRight } from 'lucide-react';

interface GraphicWork {
  id: string;
  title: string;
  category: string;
  software: string;
  description: string;
  gradient: string;
  aspect: 'square' | 'portrait' | 'landscape';
}

export const GraphicDesignGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedWork, setSelectedWork] = useState<GraphicWork | null>(null);

  const categories = [
    { id: 'all', label: 'All Works' },
    { id: 'brand', label: 'Brand & Logos' },
    { id: 'thumbnails', label: 'YouTube Thumbnails' },
    { id: 'posters', label: 'Posters & Art' },
    { id: 'social', label: 'Social Creatives' },
  ];

  const graphicWorks: GraphicWork[] = [
    {
      id: 'g-1',
      title: 'IAMGOKULVANAN Monogram Brand Identity',
      category: 'brand',
      software: 'Adobe Illustrator & Photoshop',
      description: 'Geometric monogram combining the letters G and V into an angular, futuristic emblem with sky-blue chromatic accents.',
      gradient: 'from-sky-950 via-slate-900 to-black',
      aspect: 'square'
    },
    {
      id: 'g-2',
      title: 'High-Retention Tech Video Thumbnail',
      category: 'thumbnails',
      software: 'Adobe Photoshop',
      description: 'High-CTR YouTube thumbnail composed with contrasting rim lighting, bold typography, and expressive facial framing.',
      gradient: 'from-amber-950 via-slate-900 to-black',
      aspect: 'landscape'
    },
    {
      id: 'g-3',
      title: 'Cyberpunk Soundscape Film Poster',
      category: 'posters',
      software: 'Adobe Photoshop & After Effects',
      description: 'Cinematic typography poster exploring neon noir aesthetics, distressed paper textures, and film grain layers.',
      gradient: 'from-purple-950 via-slate-900 to-black',
      aspect: 'portrait'
    },
    {
      id: 'g-4',
      title: 'Minion Visuals Studio Emblem',
      category: 'brand',
      software: 'Adobe Illustrator & Photoshop',
      description: 'Minimalist creative emblem for Minion Visuals, embodying cinematic cameras, aperture blades, and kinetic motion.',
      gradient: 'from-yellow-950 via-stone-900 to-black',
      aspect: 'square'
    },
    {
      id: 'g-5',
      title: 'Educational Carousel: RAG in 5 Minutes',
      category: 'social',
      software: 'Adobe Photoshop & Figma',
      description: 'High-density multi-slide social carousel deconstructing Retrieval-Augmented Generation for developers.',
      gradient: 'from-emerald-950 via-slate-900 to-black',
      aspect: 'landscape'
    },
    {
      id: 'g-6',
      title: 'Drug-Free Youth Awareness Campaign Poster',
      category: 'posters',
      software: 'Adobe Photoshop',
      description: 'Civic leadership poster concept promoting positive youth choices, typography contrast, and stark symbolic imagery.',
      gradient: 'from-rose-950 via-slate-900 to-black',
      aspect: 'portrait'
    }
  ];

  const filtered = selectedCategory === 'all'
    ? graphicWorks
    : graphicWorks.filter((w) => w.category === selectedCategory);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-brand-border/60 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-pink-400 font-semibold px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 mb-3">
            Graphic Design & Visual Branding
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            DESIGNING VISUAL IDENTITIES.
          </h2>
          <p className="text-base text-brand-muted max-w-2xl mt-4">
            Bold compositions, high-CTR YouTube thumbnails, poster art, and memorable brand collateral.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all border ${
                selectedCategory === c.id
                  ? 'bg-brand-card text-pink-400 border-pink-500/40 shadow-sm'
                  : 'bg-brand-surface text-brand-muted border-brand-border hover:text-white'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((work) => (
            <div
              key={work.id}
              onClick={() => setSelectedWork(work)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-brand-surface/70 border border-brand-border hover:border-pink-500/40 transition-all duration-300 flex flex-col shadow-lg"
            >
              {/* Artwork Container */}
              <div className={`relative w-full h-56 bg-gradient-to-br ${work.gradient} flex items-center justify-center p-6 overflow-hidden`}>
                <div className="absolute inset-0 bg-film-grain opacity-40 pointer-events-none" />
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 group-hover:scale-110 group-hover:text-pink-400 transition-all duration-300">
                  <Layers className="w-8 h-8" />
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-lg bg-black/60 text-white">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>

              {/* Artwork Info */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-brand-dim mb-1">
                    <span className="capitalize">{work.category}</span>
                    <span>{work.software}</span>
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-pink-400 transition-colors">
                    {work.title}
                  </h4>
                  <p className="text-xs text-brand-muted mt-2 leading-relaxed">
                    {work.description}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-brand-border/40 flex items-center justify-between text-xs font-mono text-pink-400">
                  <span>View Details</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedWork && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="w-full max-w-2xl rounded-2xl bg-brand-surface border border-brand-border overflow-hidden shadow-2xl flex flex-col">
            <div className="px-6 py-4 bg-brand-card border-b border-brand-border flex items-center justify-between">
              <span className="text-xs font-mono text-pink-400 font-bold uppercase tracking-wider">
                Artwork Showcase
              </span>
              <button
                onClick={() => setSelectedWork(null)}
                className="p-1 rounded-lg text-brand-muted hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className={`h-72 w-full bg-gradient-to-br ${selectedWork.gradient} flex items-center justify-center p-8 relative overflow-hidden`}>
              <div className="text-center z-10">
                <Layers className="w-16 h-16 text-white/50 mx-auto mb-3" />
                <h3 className="font-display text-2xl font-bold text-white">{selectedWork.title}</h3>
                <span className="text-xs font-mono text-brand-dim mt-1 block">Created in {selectedWork.software}</span>
              </div>
            </div>

            <div className="p-6 flex flex-col gap-3">
              <p className="text-sm text-slate-300 leading-relaxed">{selectedWork.description}</p>
              <div className="pt-3 border-t border-brand-border flex justify-end">
                <button
                  onClick={() => setSelectedWork(null)}
                  className="px-4 py-2 rounded-xl bg-brand-card border border-brand-border text-xs font-semibold text-white hover:bg-brand-surface"
                >
                  Close Artwork
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
