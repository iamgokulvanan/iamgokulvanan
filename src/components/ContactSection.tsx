import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Mail, Github, Linkedin, Instagram, Film, ExternalLink, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { contactDetails } from '../data/generalData';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export const ContactSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [formState, setFormState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  const validate = (): boolean => {
    const newErrors: Partial<typeof form> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Valid email is required';
    if (!form.subject.trim()) newErrors.subject = 'Subject is required';
    if (!form.message.trim() || form.message.trim().length < 20)
      newErrors.message = 'Message must be at least 20 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setFormState('loading');
    try {
      // Using Formspree — replace YOUR_FORM_ID with real Formspree endpoint
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setFormState('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch {
      setFormState('error');
    }
  };

  const socials = [
    { label: 'GitHub', href: contactDetails.githubUrl, icon: <Github className="w-5 h-5" />, color: '#E0F2FE' },
    { label: 'LinkedIn', href: contactDetails.linkedinUrl, icon: <Linkedin className="w-5 h-5" />, color: '#38BDF8' },
    { label: 'Instagram', href: contactDetails.instagramPersonal, icon: <Instagram className="w-5 h-5" />, color: '#E879F9' },
    { label: 'Minion Visuals', href: contactDetails.instagramStudio, icon: <Film className="w-5 h-5" />, color: '#FB923C' },
    { label: 'Freelancer', href: contactDetails.freelancerUrl, icon: <ExternalLink className="w-5 h-5" />, color: '#34D399' },
  ];

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,_rgba(56,189,248,0.06)_0%,_transparent_60%)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="font-mono text-xs tracking-[0.4em] text-sky-400/70 uppercase block mb-4"
          >
            08 — CONTACT
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black text-4xl sm:text-6xl xl:text-7xl text-white leading-[0.9] tracking-tight"
          >
            LET'S BUILD
            <br />
            SOMETHING
            <br />
            <span className="text-transparent bg-clip-text" style={{
              backgroundImage: 'linear-gradient(135deg, #38BDF8 0%, #818CF8 100%)'
            }}>
              EXTRAORDINARY.
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            <div>
              <p className="text-slate-400 text-base leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to say hello —
                I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${contactDetails.email}`}
                className="flex items-center gap-3 text-sm text-slate-300 hover:text-sky-300 transition-colors group"
              >
                <div className="p-2.5 rounded-xl border border-white/8 bg-white/[0.03] group-hover:border-sky-500/30 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                {contactDetails.email}
              </a>
            </div>

            <div>
              <p className="text-xs font-mono text-slate-500 tracking-widest uppercase mb-4">Find me on</p>
              <div className="grid grid-cols-5 gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="p-3 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-center hover:border-opacity-100 transition-all duration-200"
                    style={{
                      ['--hover-color' as string]: s.color,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = `${s.color}30`;
                      (e.currentTarget as HTMLElement).style.color = s.color;
                      (e.currentTarget as HTMLElement).style.background = `${s.color}10`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.05)';
                      (e.currentTarget as HTMLElement).style.color = '';
                      (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.02)';
                    }}
                    title={s.label}
                  >
                    <span className="text-slate-400 transition-colors">{s.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl border border-sky-500/15 bg-sky-500/[0.03]">
              <p className="text-xs font-mono text-sky-400/70 mb-1">Response time</p>
              <p className="text-sm text-slate-300">Usually within 24–48 hours</p>
              <div className="flex items-center gap-1.5 mt-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-emerald-400/70">Open to opportunities</span>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="text-xs font-mono text-slate-500 tracking-widest uppercase block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    placeholder="Your name"
                    className={`w-full bg-white/[0.03] border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none focus:border-sky-500/50 transition-colors ${
                      errors.name ? 'border-red-500/50' : 'border-white/8'
                    }`}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="text-xs font-mono text-slate-500 tracking-widest uppercase block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    placeholder="your@email.com"
                    className={`w-full bg-white/[0.03] border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none focus:border-sky-500/50 transition-colors ${
                      errors.email ? 'border-red-500/50' : 'border-white/8'
                    }`}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="text-xs font-mono text-slate-500 tracking-widest uppercase block mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm((p) => ({ ...p, subject: e.target.value }))}
                  placeholder="What's this about?"
                  className={`w-full bg-white/[0.03] border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none focus:border-sky-500/50 transition-colors ${
                    errors.subject ? 'border-red-500/50' : 'border-white/8'
                  }`}
                />
                {errors.subject && <p className="mt-1 text-xs text-red-400">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="text-xs font-mono text-slate-500 tracking-widest uppercase block mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                  placeholder="Tell me about your project or idea..."
                  className={`w-full bg-white/[0.03] border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none focus:border-sky-500/50 transition-colors resize-none ${
                    errors.message ? 'border-red-500/50' : 'border-white/8'
                  }`}
                />
                {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={formState === 'loading' || formState === 'success'}
                className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl font-display font-bold text-sm text-brand-bg transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ background: 'linear-gradient(135deg, #38BDF8, #818CF8)' }}
              >
                {formState === 'loading' && <Loader2 className="w-5 h-5 animate-spin" />}
                {formState === 'success' && <CheckCircle2 className="w-5 h-5" />}
                {formState === 'idle' && <Send className="w-5 h-5" />}
                {formState === 'idle' && 'SEND MESSAGE'}
                {formState === 'loading' && 'SENDING...'}
                {formState === 'success' && 'MESSAGE SENT!'}
                {formState === 'error' && 'TRY AGAIN'}
              </button>

              {/* Status messages */}
              {formState === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm text-emerald-300 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  Thank you! I'll get back to you as soon as possible.
                </motion.div>
              )}
              {formState === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm text-red-300 p-3 rounded-xl bg-red-500/10 border border-red-500/20"
                >
                  <AlertCircle className="w-4 h-4" />
                  Submission failed. Please email me at{' '}
                  <a href={`mailto:${contactDetails.email}`} className="underline">{contactDetails.email}</a>
                </motion.div>
              )}

              <p className="text-xs text-slate-600 font-mono text-center">
                To activate the contact form, replace <code className="text-sky-400/60">YOUR_FORM_ID</code> with your Formspree endpoint.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
