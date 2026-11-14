import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Instagram, 
  ExternalLink,
  Sparkles,
  Film,
  Star
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { contactDetails } from '../data/generalData';

interface ContactSectionProps {
  prefilledCategory?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledCategory }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [category, setCategory] = useState('Full-Stack Web Development');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Feedback modal state
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [fbName, setFbName] = useState('');
  const [fbRating, setFbRating] = useState(5);
  const [fbNote, setFbNote] = useState('');
  const [fbSubmitted, setFbSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledCategory) {
      setCategory(prefilledCategory);
      setSubject(`Inquiry regarding: ${prefilledCategory}`);
    }
  }, [prefilledCategory]);

  const categories = [
    'Full-Stack Web Development',
    'Frontend & React Engineering',
    'UI/UX & Product Design',
    'AI Workflows & RAG Prototype',
    'Cinematic Video Editing (Minion Visuals)',
    'Motion Graphics & Reels',
    'Graphic Design & Branding',
    'Other / General Inquiry'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Validation
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setLoading(true);

    // Simulate reliable submission and trigger mailto handoff
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      confetti({
        particleCount: 75,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#38BDF8', '#818CF8', '#34D399', '#F472B6']
      });

      // Format mailto link
      const mailtoUrl = `mailto:${contactDetails.email}?subject=${encodeURIComponent(`[${category}] ${subject}`)}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nCategory: ${category}\n\nMessage:\n${message}`
      )}`;
      
      window.location.href = mailtoUrl;
    }, 800);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(contactDetails.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fbName.trim() || !fbNote.trim()) return;

    setFbSubmitted(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });

    setTimeout(() => {
      setFeedbackOpen(false);
      setFbSubmitted(false);
      setFbName('');
      setFbNote('');
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-brand-border/60 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-semibold px-3 py-1 rounded-full bg-brand-surface border border-brand-border mb-3">
            Direct Communication & Inquiries
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            HAVE AN IDEA? LET'S CONNECT.
          </h2>
          <p className="text-base text-brand-muted max-w-2xl mt-4">
            Whether it's a technology project, creative collaboration or an interesting opportunity, I'm always open to meaningful connections.
          </p>
        </div>

        {/* Main Grid: Form (Left) & Contact Channels (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Interactive Contact Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-brand-surface/90 border border-brand-border shadow-2xl">
            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">Message Dispatched!</h3>
                <p className="text-sm text-brand-muted max-w-md">
                  Thank you, <span className="text-white font-semibold">{name}</span>. Your email client has been prepared with your inquiry. I will respond to <span className="text-brand-accent">{email}</span> promptly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setEmail('');
                    setSubject('');
                    setMessage('');
                  }}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-brand-card border border-brand-border text-xs font-mono text-brand-accent hover:border-brand-accent/40"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Name Field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-brand-muted">
                      Full Name <span className="text-brand-accent">*</span>
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. John Doe"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-brand-card border border-brand-border text-xs text-white placeholder-brand-dim focus:outline-none focus:border-brand-accent transition-colors"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-brand-muted">
                      Email Address <span className="text-brand-accent">*</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. john@company.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-brand-card border border-brand-border text-xs text-white placeholder-brand-dim focus:outline-none focus:border-brand-accent transition-colors"
                    />
                  </div>

                </div>

                {/* Category Selector */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-medium text-brand-muted">
                    Project Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-brand-card border border-brand-border text-xs text-white focus:outline-none focus:border-brand-accent transition-colors"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c} className="bg-brand-surface text-white">
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Subject Field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-medium text-brand-muted">
                    Subject <span className="text-brand-accent">*</span>
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Brief summary of your project or inquiry"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-brand-card border border-brand-border text-xs text-white placeholder-brand-dim focus:outline-none focus:border-brand-accent transition-colors"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-medium text-brand-muted">
                    Message Details <span className="text-brand-accent">*</span>
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    placeholder="Tell me about your goals, timelines, and technical or creative requirements..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-brand-card border border-brand-border text-xs text-white placeholder-brand-dim focus:outline-none focus:border-brand-accent transition-colors resize-none leading-relaxed"
                  />
                </div>

                {errorMsg && (
                  <p className="text-xs font-mono text-rose-400">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-xl bg-brand-accent hover:bg-sky-300 text-brand-bg font-semibold text-xs sm:text-sm transition-all shadow-cyan-soft hover:shadow-cyan-glow flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'Preparing Dispatch...' : 'Send Message to Gokul'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Verified Profiles, Direct WhatsApp & Feedback Button */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Quick Contact Cards */}
            <div className="space-y-4">
              
              {/* Copy Email Card */}
              <div className="p-6 rounded-2xl bg-brand-surface border border-brand-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-brand-card text-brand-accent">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-brand-dim block">Official Email</span>
                    <span className="text-xs sm:text-sm font-bold text-white font-mono">{contactDetails.email}</span>
                  </div>
                </div>
                <button
                  onClick={copyEmailToClipboard}
                  className="p-2 rounded-lg bg-brand-card border border-brand-border text-brand-muted hover:text-brand-accent hover:border-brand-accent/40 transition-colors"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Direct WhatsApp Action */}
              <a
                href={contactDetails.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-brand-surface border border-brand-border hover:border-emerald-500/40 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-brand-card text-emerald-400 group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-brand-dim block">Instant Chat</span>
                    <span className="text-xs sm:text-sm font-bold text-white font-mono">{contactDetails.phone}</span>
                  </div>
                </div>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                  <span>Chat</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </a>

              {/* Location Card */}
              <div className="p-6 rounded-2xl bg-brand-surface border border-brand-border flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-brand-card text-brand-accent">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-brand-dim block">Base Location</span>
                  <span className="text-xs sm:text-sm font-bold text-white">Coimbatore, Tamil Nadu, India</span>
                </div>
              </div>
            </div>

            {/* Social Network Links Grid */}
            <div className="p-6 rounded-2xl bg-brand-card border border-brand-border">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-dim block mb-3">
                Verified Global Profiles:
              </span>
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={contactDetails.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-brand-surface border border-brand-border text-xs text-slate-200 hover:text-brand-accent hover:border-brand-accent/40 flex items-center gap-2 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={contactDetails.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-brand-surface border border-brand-border text-xs text-slate-200 hover:text-brand-accent hover:border-brand-accent/40 flex items-center gap-2 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={contactDetails.instagramPersonal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-brand-surface border border-brand-border text-xs text-slate-200 hover:text-brand-accent hover:border-brand-accent/40 flex items-center gap-2 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
                <a
                  href={contactDetails.instagramStudio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-brand-surface border border-brand-border text-xs text-amber-400 hover:border-amber-400/40 flex items-center gap-2 transition-colors"
                >
                  <Film className="w-4 h-4" />
                  <span>Minion Visuals</span>
                </a>
              </div>
            </div>

            {/* Leave Feedback Trigger Button */}
            <div className="p-5 rounded-2xl bg-brand-surface/70 border border-brand-border flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-white">Visited my portfolio?</h4>
                <p className="text-[11px] text-brand-dim">I appreciate honest feedback and suggestions.</p>
              </div>
              <button
                onClick={() => setFeedbackOpen(true)}
                className="px-3.5 py-1.5 rounded-xl bg-brand-card border border-brand-border hover:border-brand-accent/40 text-xs font-mono text-brand-accent transition-colors"
              >
                Leave Feedback
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Visitor Feedback Modal */}
      {feedbackOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-md rounded-2xl bg-brand-surface border border-brand-border p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-brand-border pb-3">
              <h3 className="font-display text-base font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-accent" />
                <span>Leave Visitor Feedback</span>
              </h3>
              <button
                onClick={() => setFeedbackOpen(false)}
                className="text-brand-dim hover:text-white text-xs font-mono"
              >
                ✕
              </button>
            </div>

            {fbSubmitted ? (
              <div className="py-8 text-center text-emerald-400 space-y-2">
                <Check className="w-8 h-8 mx-auto" />
                <p className="text-sm font-semibold">Thank you for your valuable feedback!</p>
              </div>
            ) : (
              <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-brand-dim">Your Name / Organization</label>
                  <input
                    type="text"
                    value={fbName}
                    onChange={(e) => setFbName(e.target.value)}
                    required
                    placeholder="Name"
                    className="w-full px-3 py-2 rounded-lg bg-brand-card border border-brand-border text-xs text-white focus:outline-none focus:border-brand-accent"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-brand-dim">Rating</label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFbRating(star)}
                        className="text-amber-400 hover:scale-110 transition-transform"
                      >
                        <Star className={`w-5 h-5 ${star <= fbRating ? 'fill-amber-400' : 'text-slate-600'}`} />
                      </button>
                    ))}
                    <span className="text-xs font-mono text-brand-dim ml-2">{fbRating} of 5</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-brand-dim">Feedback / Impressions</label>
                  <textarea
                    value={fbNote}
                    onChange={(e) => setFbNote(e.target.value)}
                    rows={3}
                    required
                    placeholder="What did you think of the design, project case studies, or tech stack?"
                    className="w-full px-3 py-2 rounded-lg bg-brand-card border border-brand-border text-xs text-white focus:outline-none focus:border-brand-accent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-brand-accent text-brand-bg font-semibold text-xs shadow-cyan-soft hover:bg-sky-300 transition-colors"
                >
                  Submit Feedback
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
