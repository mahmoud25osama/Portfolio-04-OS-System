import React from 'react';
import { FileText, Lock, Clock, Download, Settings, HelpCircle, Mail, MapPin, Globe } from 'lucide-react';

export const ResumeApp = () => (
  <div className="flex flex-col md:flex-row h-full text-[#e2e8f0] bg-[#13141c]">
    {/* Sidebar */}
    <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-white/5 bg-[#1a1b26]/50 p-4 flex flex-col gap-4 md:gap-6 shrink-0">
      <div className="bg-[#2a2b3d] rounded-xl p-3 flex items-center gap-3 border border-white/5">
        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#a3b8f0]">
          <FileText size={20} />
        </div>
        <div>
          <div className="text-sm font-bold text-white">Resume.pdf</div>
          <div className="text-xs text-[#94a3b8]">2.4 MB • PDF</div>
        </div>
      </div>

      <div className="hidden md:flex flex-col gap-1">
        <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm bg-[#2a2b3d] text-white transition-colors border border-white/5">
          <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center"><span className="text-[10px] font-bold">i</span></div>
          Overview
        </button>
        <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm hover:bg-white/5 text-[#94a3b8] transition-colors">
          <FileText size={16} />
          Metadata
        </button>
        <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm hover:bg-white/5 text-[#94a3b8] transition-colors">
          <Lock size={16} />
          Permissions
        </button>
        <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm hover:bg-white/5 text-[#94a3b8] transition-colors">
          <Clock size={16} />
          History
        </button>
      </div>

      <div className="mt-auto flex flex-col gap-4 md:gap-6">
        <div className="hidden md:block">
          <div className="text-[10px] font-bold text-[#a3b8f0] uppercase tracking-wider mb-1">Modified</div>
          <div className="text-xs text-[#94a3b8]">October 2023</div>
        </div>
        <div className="hidden md:block">
          <div className="text-[10px] font-bold text-[#a3b8f0] uppercase tracking-wider mb-1">Size</div>
          <div className="text-xs text-[#94a3b8]">1.2 MB</div>
        </div>

        <button className="w-full bg-gradient-to-r from-[#8b5cf6] to-[#c084fc] hover:opacity-90 text-white font-semibold rounded-xl py-2 md:py-3 flex items-center justify-center gap-2 transition-opacity shadow-lg shadow-purple-500/20 text-sm md:text-base">
          <Download size={18} className="w-4 h-4 md:w-[18px] md:h-[18px]" /> Download Resume
        </button>

        <div className="hidden md:flex flex-col gap-1 pt-4 border-t border-white/5">
          <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-white/5 text-[#94a3b8] transition-colors">
            <Settings size={16} />
            Settings
          </button>
          <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-white/5 text-[#94a3b8] transition-colors">
            <HelpCircle size={16} />
            Support
          </button>
        </div>
      </div>
    </div>

    {/* Main Content */}
    <div className="flex-1 overflow-y-auto p-4 md:p-12 flex justify-center bg-[#13141c]">
      <div className="w-full max-w-3xl bg-white text-[#1e293b] p-6 md:p-16 shadow-2xl min-h-[1000px]">
        <h1 className="text-3xl md:text-5xl font-bold mb-2 text-[#0f172a]">Mahmoud Osama</h1>
        <h2 className="text-sm md:text-lg tracking-[0.2em] text-[#475569] mb-6 md:mb-8 uppercase flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
          Fullstack Developer <span className="hidden md:inline text-[#3b82f6] text-2xl leading-none">•</span> UI Architect
        </h2>
        
        <div className="flex flex-col md:flex-row gap-3 md:gap-6 text-xs md:text-sm text-[#64748b] mb-8 md:mb-12 font-medium">
          <div className="flex items-center gap-2"><Mail size={14} /> mahmoud@dev.osama</div>
          <div className="flex items-center gap-2"><MapPin size={14} /> San Francisco, CA</div>
          <div className="flex items-center gap-2"><Globe size={14} /> osama.design</div>
        </div>

        <div className="w-full h-0.5 bg-[#0f172a] mb-8"></div>
        
        <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 text-[#3b82f6]">Experience</h3>
        
        <div className="mb-10">
          <div className="flex justify-between items-baseline mb-1">
            <h4 className="text-xl font-bold text-[#0f172a]">Senior Software Engineer</h4>
            <span className="text-sm font-bold text-[#94a3b8] tracking-widest uppercase">2021 — Present</span>
          </div>
          <div className="text-[#3b82f6] font-semibold mb-4">Stellar Systems UI</div>
          <p className="text-[#475569] leading-relaxed">
            Led the architectural design of a next-generation desktop OS interface. Scaled development teams from 5 to 25 engineers while maintaining 99.9% uptime on core rendering engines.
          </p>
        </div>

        <div className="mb-12">
          <div className="flex justify-between items-baseline mb-1">
            <h4 className="text-xl font-bold text-[#0f172a]">Frontend Architect</h4>
            <span className="text-sm font-bold text-[#94a3b8] tracking-widest uppercase">2018 — 2021</span>
          </div>
          <div className="text-[#3b82f6] font-semibold mb-4">Nexus Design Labs</div>
          <p className="text-[#475569] leading-relaxed">
            Developed a proprietary CSS-in-JS library that reduced bundle sizes by 40% across all enterprise applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-4 md:mb-6 text-[#3b82f6]">Core Tech</h3>
            <div className="w-full h-px bg-[#e2e8f0] mb-6"></div>
            <ul className="space-y-4 text-[#0f172a] font-semibold">
              <li className="flex justify-between"><span>TypeScript & React</span><span className="text-[#cbd5e1]">/</span></li>
              <li className="flex justify-between"><span>Rust & WASM</span><span className="text-[#cbd5e1]">/</span></li>
              <li className="flex justify-between"><span>Next.js Engine</span><span className="text-[#cbd5e1]">/</span></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-4 md:mb-6 text-[#3b82f6]">Design</h3>
            <div className="w-full h-px bg-[#e2e8f0] mb-6"></div>
            <ul className="space-y-4 text-[#0f172a] font-semibold">
              <li className="flex justify-between"><span>Figma Systems</span><span className="text-[#cbd5e1]">/</span></li>
              <li className="flex justify-between"><span>Interaction Design</span><span className="text-[#cbd5e1]">/</span></li>
              <li className="flex justify-between"><span>Motion Graphics</span><span className="text-[#cbd5e1]">/</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);
