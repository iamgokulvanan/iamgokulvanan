import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft, Sparkles } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { certificatesData } from '../data/certificatesData';
import { skillsData } from '../data/skillsData';
import { contactDetails } from '../data/generalData';

interface InteractiveTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      id: 'init-1',
      command: 'welcome',
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-brand-accent font-bold">IAMGOKULVANAN Terminal OS [Version 2.0.0]</p>
          <p className="text-brand-dim text-xs">Logged in as: visitor@gokulvanan-portfolio</p>
          <p className="text-xs pt-1">Type <span className="text-brand-accent font-bold">help</span> to list available commands, or click any command badge below.</p>
        </div>
      ),
    },
  ]);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    let outputNode: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        outputNode = (
          <div className="space-y-1.5 text-xs">
            <p className="text-brand-accent font-semibold">Available Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 pl-2 font-mono">
              <div><span className="text-white font-bold">about</span> - Brief bio & professional profile</div>
              <div><span className="text-white font-bold">skills</span> - Breakdown of tech & creative skills</div>
              <div><span className="text-white font-bold">projects</span> - List of selected works & prototypes</div>
              <div><span className="text-white font-bold">certs</span> - List of 16 verified certifications</div>
              <div><span className="text-white font-bold">studio</span> - Minion Visuals video editing info</div>
              <div><span className="text-white font-bold">contact</span> - Links, phone, WhatsApp & email</div>
              <div><span className="text-white font-bold">whoami</span> - Display current shell identity</div>
              <div><span className="text-white font-bold">clear</span> - Clear the terminal output</div>
              <div><span className="text-white font-bold">exit</span> - Close the terminal modal</div>
            </div>
          </div>
        );
        break;

      case 'about':
        outputNode = (
          <div className="space-y-1 text-xs">
            <p className="text-brand-accent font-bold">Gokul Vanan (IAMGOKULVANAN)</p>
            <p className="text-slate-300">"Where Technology Meets Creativity."</p>
            <p className="text-brand-muted">B.Tech Information Technology (2024–2028), Hindusthan College of Engineering and Technology, Coimbatore.</p>
            <p className="text-slate-300 pt-1">Multidisciplinary creator bridging Full-Stack Web Development, UI/UX Design, AI Agent & RAG Architectures, and Cinematic Video Production.</p>
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="space-y-2 text-xs">
            <p className="text-brand-accent font-bold">Core Skills Across 5 Disciplines:</p>
            {skillsData.map((group) => (
              <div key={group.id} className="pl-2">
                <span className="text-white font-semibold">{group.title}: </span>
                <span className="text-brand-muted">
                  {group.skills.map((s) => s.name).join(', ')}
                </span>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="space-y-1.5 text-xs">
            <p className="text-brand-accent font-bold">Selected Featured Projects:</p>
            {projectsData.map((p) => (
              <div key={p.id} className="pl-2 border-l border-brand-border">
                <p className="text-white font-semibold">{p.title} <span className="text-brand-dim text-[11px]">({p.categoryLabel})</span></p>
                <p className="text-brand-muted text-[11px]">{p.tagline}</p>
                <p className="text-brand-dim text-[10px]">Stack: {p.technologies.join(', ')}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'certs':
        outputNode = (
          <div className="space-y-1.5 text-xs">
            <p className="text-brand-accent font-bold">16 Verified Credentials & Certifications:</p>
            <div className="max-h-48 overflow-y-auto space-y-1 pr-2">
              {certificatesData.map((c) => (
                <div key={c.id} className="flex justify-between items-center text-[11px] border-b border-brand-border/40 pb-0.5">
                  <span className="text-slate-200">{c.title}</span>
                  <span className="text-brand-dim font-mono">{c.issuer.split('&')[0]} · {c.date}</span>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'studio':
        outputNode = (
          <div className="space-y-1 text-xs">
            <p className="text-amber-400 font-bold">Minion Visuals Creative Studio (@minion.visuals)</p>
            <p className="text-slate-300">High-retention cinematic video editing, wedding invitation films, travel edits, and motion graphics.</p>
            <p className="text-brand-dim">Software: DaVinci Resolve, Adobe Premiere Pro, After Effects, Photoshop.</p>
            <p className="text-brand-accent pt-1">Visit Instagram: https://instagram.com/minion.visuals</p>
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div className="space-y-1 text-xs">
            <p className="text-brand-accent font-bold">Get In Touch with Gokul Vanan:</p>
            <p className="text-slate-300">Email: <span className="text-brand-accent">{contactDetails.email}</span></p>
            <p className="text-slate-300">Phone / WhatsApp: <span className="text-emerald-400">{contactDetails.phone}</span></p>
            <p className="text-slate-300">GitHub: {contactDetails.githubUrl}</p>
            <p className="text-slate-300">LinkedIn: {contactDetails.linkedinUrl}</p>
            <p className="text-slate-300">Location: {contactDetails.location}</p>
          </div>
        );
        break;

      case 'whoami':
        outputNode = (
          <p className="text-xs text-brand-accent font-mono">
            visitor@iamgokulvanan-terminal (Authorized Guest - Full Read Permissions)
          </p>
        );
        break;

      case 'quote':
        outputNode = (
          <p className="text-xs italic text-brand-muted font-serif">
            "Where Technology Meets Creativity. Turning ideas into digital experiences." — Gokul Vanan
          </p>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'exit':
        onClose();
        setInput('');
        return;

      default:
        outputNode = (
          <p className="text-xs text-rose-400">
            command not found: '{cmd}'. Type <span className="text-white underline">help</span> for valid commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        id: `cmd-${Date.now()}`,
        command: rawCmd,
        output: outputNode,
      },
    ]);

    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  const quickCommands = ['help', 'about', 'skills', 'projects', 'certs', 'studio', 'contact', 'clear'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
      <div className="w-full max-w-3xl rounded-2xl bg-brand-surface border border-brand-border shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        
        {/* Terminal Header Bar */}
        <div className="px-4 py-3 bg-brand-card border-b border-brand-border flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80 cursor-pointer" onClick={onClose} />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-xs font-mono text-brand-muted flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-brand-accent" />
              <span>iamgokulvanan-cli ~ bash</span>
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-md text-brand-muted hover:text-white hover:bg-brand-surface transition-colors"
            aria-label="Close terminal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Command Suggestions */}
        <div className="px-4 py-2 bg-brand-card/50 border-b border-brand-border/60 flex items-center gap-1.5 overflow-x-auto text-[11px] font-mono">
          <span className="text-brand-dim mr-1 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-brand-accent" />
            Quick:
          </span>
          {quickCommands.map((q) => (
            <button
              key={q}
              onClick={() => handleCommand(q)}
              className="px-2 py-0.5 rounded bg-brand-surface border border-brand-border/80 text-brand-accent hover:border-brand-accent/50 hover:bg-brand-card transition-colors whitespace-nowrap"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Terminal Output Area */}
        <div className="flex-1 p-5 overflow-y-auto font-mono text-xs space-y-4">
          {history.map((item) => (
            <div key={item.id} className="space-y-1">
              <div className="flex items-center gap-2 text-brand-muted">
                <span className="text-emerald-400">visitor@iamgokulvanan:~$</span>
                <span className="text-white font-bold">{item.command}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}

          {/* Current Input Line */}
          <div className="flex items-center gap-2 text-brand-muted pt-1">
            <span className="text-emerald-400">visitor@iamgokulvanan:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs caret-brand-accent"
              autoFocus
              spellCheck={false}
              aria-label="Terminal input"
            />
            <button
              onClick={() => handleCommand(input)}
              className="text-brand-dim hover:text-brand-accent"
              title="Execute"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </div>

          <div ref={terminalEndRef} />
        </div>

      </div>
    </div>
  );
};
