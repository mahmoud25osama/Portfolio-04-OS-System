import React, { useState } from 'react';
import { User, GraduationCap, Briefcase, Heart, Folder, Terminal, Settings, Mail, FileText, Music, Trash2, Search, MoreHorizontal, X, Minus, Square, Grid, Activity, Monitor, LayoutGrid, Code, Award, Send, Paperclip, Download, ChevronRight, Edit2, Inbox, Send as SendIcon, File, Archive, Users, Calendar, Smile, Image as ImageIcon, Fingerprint, MapPin, Globe, Lock, Clock, HelpCircle, Server, Database, PenTool } from 'lucide-react';

export const AboutApp = () => {
  const [activeTab, setActiveTab] = useState('Personal');

  return (
  <div className="flex flex-col md:flex-row h-full text-[#e2e8f0] bg-[#13141c]">
    {/* Sidebar */}
    <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-white/5 bg-[#1a1b26]/50 p-4 flex flex-row md:flex-col gap-4 md:gap-6 overflow-x-auto no-scrollbar shrink-0">
      <div className="flex md:flex-col gap-2 md:gap-1">
        <div className="hidden md:block text-[10px] font-bold text-[#64748b] uppercase tracking-wider mb-3 px-3">Favorites</div>
        <div className="flex flex-row md:flex-col gap-1">
          <button 
            onClick={() => setActiveTab('Personal')}
            className={`flex items-center gap-2 md:gap-3 px-3 py-2 rounded-lg text-sm transition-colors whitespace-nowrap ${activeTab === 'Personal' ? 'bg-[#2a2b3d] text-white' : 'hover:bg-white/5 text-[#94a3b8]'}`}
          >
            <Folder size={16} className={activeTab === 'Personal' ? 'text-[#a3b8f0]' : 'text-[#94a3b8]'} />
            Personal
          </button>
          <button 
            onClick={() => setActiveTab('Education')}
            className={`flex items-center gap-2 md:gap-3 px-3 py-2 rounded-lg text-sm transition-colors whitespace-nowrap ${activeTab === 'Education' ? 'bg-[#2a2b3d] text-white' : 'hover:bg-white/5 text-[#94a3b8]'}`}
          >
            <Folder size={16} className={activeTab === 'Education' ? 'text-[#a3b8f0]' : 'text-[#94a3b8]'} />
            Education
          </button>
          <button 
            onClick={() => setActiveTab('Experience')}
            className={`flex items-center gap-2 md:gap-3 px-3 py-2 rounded-lg text-sm transition-colors whitespace-nowrap ${activeTab === 'Experience' ? 'bg-[#2a2b3d] text-white' : 'hover:bg-white/5 text-[#94a3b8]'}`}
          >
            <Folder size={16} className={activeTab === 'Experience' ? 'text-[#a3b8f0]' : 'text-[#94a3b8]'} />
            Experience
          </button>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="text-[10px] font-bold text-[#64748b] uppercase tracking-wider mb-3 px-3">Tags</div>
        <div className="flex flex-col gap-1">
          <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-white/5 text-[#94a3b8] transition-colors">
            <div className="w-2.5 h-2.5 rounded-full bg-[#a3b8f0]"></div>
            Critical
          </button>
          <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-white/5 text-[#94a3b8] transition-colors">
            <div className="w-2.5 h-2.5 rounded-full bg-[#d0bcff]"></div>
            Work
          </button>
        </div>
      </div>
    </div>

    {/* Main Content */}
    <div className="flex-1 flex flex-col min-w-0">
      {/* Top Bar */}
      <div className="h-14 border-b border-white/5 flex items-center justify-end px-6 gap-4">
        <button className="text-[#94a3b8] hover:text-white transition-colors"><Search size={18} /></button>
        <button className="text-[#94a3b8] hover:text-white transition-colors"><MoreHorizontal size={18} /></button>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-10 no-scrollbar">
        <div className="max-w-3xl mx-auto">
          {/* Header Profile */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 mb-8 md:mb-12 text-center md:text-left">
            <div className="relative">
              <div className="absolute inset-0 bg-[#a3b8f0] rounded-full blur-xl opacity-20"></div>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVQoZvlbdgVLSuahHJJwQra3dM7V572_aPMBbDdyu3H73L_UEHI0FyCW-zAykbLH4h_Mq_kUOLqbO91UmKsMD__JAFiDcYfZ-3ddtSfO9wfaiUAS8_npt21h_RtMwohr9kDJ3BglMRBI9d8EuROCzSsUXWiEdfSsrlnmWXdwfn-UwAY6E_TEq3cF0800h0tFJGrIKx-UZYc6MkE5kj3F1XQ4g4uBDRmy2IFnotHrb3HbApHvR4wwnQKxse5kJipblAomcSsL6cEZmv" 
                alt="Profile" 
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-[#2a2b3d] relative z-10" 
              />
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Mahmoud Osama</h1>
              <h2 className="text-lg md:text-xl text-[#a3b8f0] mb-4">Fullstack MERN Developer</h2>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3">
                <span className="px-3 py-1 rounded-full bg-[#2a2b3d] text-[#e2e8f0] text-[10px] font-bold tracking-wider uppercase">Available for hire</span>
                <span className="px-3 py-1 rounded-full bg-[#2a2b3d] text-[#e2e8f0] text-[10px] font-bold tracking-wider uppercase">MERN Specialist</span>
              </div>
            </div>
          </div>

          {/* Dynamic Section */}
          <div className="bg-[#1a1b26]/80 border border-white/5 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
              <Fingerprint size={24} className="text-[#a3b8f0]" /> 
              {activeTab}
            </h3>
            
            {activeTab === 'Personal' && (
              <div className="space-y-6 text-[#94a3b8] leading-relaxed text-lg">
                <p>
                  I am a passionate Fullstack Developer specializing in the MERN stack, dedicated to building high-performance web applications that bridge the gap between complex AI capabilities and human-centered design.
                </p>
                <p>
                  With a focus on digital weightlessness and ethereal aesthetics, I strive to create interfaces that feel intuitive and responsive. My philosophy revolves around the idea that technology should be invisible yet empowering, allowing users to focus on what truly matters.
                </p>
              </div>
            )}

            {activeTab === 'Education' && (
              <div className="space-y-6 text-[#94a3b8] leading-relaxed text-lg">
                <div className="border-l-2 border-[#a3b8f0] pl-4">
                  <h4 className="text-white font-bold">B.S. Computer Science</h4>
                  <p className="text-sm text-[#64748b] mb-2">University of Technology • 2014 - 2018</p>
                  <p className="text-base">Specialized in Human-Computer Interaction and Distributed Systems. Graduated with Honors.</p>
                </div>
                <div className="border-l-2 border-white/10 pl-4">
                  <h4 className="text-white font-bold">Advanced Web Architecture</h4>
                  <p className="text-sm text-[#64748b] mb-2">Tech Institute • 2019</p>
                  <p className="text-base">Certification in scalable microservices and modern frontend frameworks.</p>
                </div>
              </div>
            )}

            {activeTab === 'Experience' && (
              <div className="space-y-6 text-[#94a3b8] leading-relaxed text-lg">
                <div className="border-l-2 border-[#a3b8f0] pl-4">
                  <h4 className="text-white font-bold">Senior Software Engineer</h4>
                  <p className="text-sm text-[#64748b] mb-2">Stellar Systems UI • 2021 - Present</p>
                  <p className="text-base">Led the architectural design of a next-generation desktop OS interface. Scaled development teams from 5 to 25 engineers.</p>
                </div>
                <div className="border-l-2 border-white/10 pl-4">
                  <h4 className="text-white font-bold">Frontend Architect</h4>
                  <p className="text-sm text-[#64748b] mb-2">Nexus Design Labs • 2018 - 2021</p>
                  <p className="text-base">Developed a proprietary CSS-in-JS library that reduced bundle sizes by 40% across all enterprise applications.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

const PROJECT_IMAGES = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBCmmegBJFnggLYXxnitcYFX4Ahgc0aSIh23Sm3RQesGIboLuL7n2iJrX1Bd9_MWylMTWmvkjvDGPWdOcxhbDAtBBu2IZsd1Q1xipl6bAI4dVJDG9zHr5EKAr7DdIEuCwkrYGgl0Ai5KE00TWNeTVkpKbYQM8NKRHIXHm2bd8ACKibPHQxRgDaI4RLjUY2lBNrrYjgAI31mO2ZbcVbVROgvlbFEn3BRwXAAg0yNT5Z0Kbs2hBI7rF4xO3cs3a-2htggvbwpq-vo7qps",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB1BSpX2sRftFkAPb45IFrc_61lGTTtbWFKaz8qcKRN9W6qSoIEsVoO0biDqPq6dfCQPqvb36Zvw3gv2BrKtiiYIiZQI-gNsgrjxmpKdd6JgIjscxYqQKo-KwpY9MkpRErrKPV4H8qVvpd9g3W_vHqfzagDg1wA3FkCTk9Qng_zgBHTMGGgeJbqpKmgdS6A4Zc7eKGWulnGhCwR6Q-xiKIjEYond_qvueaGzzQWg1g-j8QLMRVKAYpiz-FZw3ljlnJuaEJySFqfPxWd",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAOd5z2UD8ApJNYXOggwF-ShL9zqXv4Yxd06j7hcg1TldAtomO0vVpTCk1vglqx2YQUa8FE47D1sIRs6MQJ2lJhFbivCN6l5vQNhJ1-agkh7oYe__fafKzndEa7raLYvzDVMtg9EcqepONjRcv-TWw_dj8fcX7zp5NsC-Mn6iUm6iCAr059si5bAj8wu_uieIRMXUQBws_OW8TBlBTB18p4oIknGN1A7EIm2Lq0YgW9WW_Aj5G8yx_kh23elU_r_cFiaJXhGHQ9p8yE",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDxcsoGWrTkgkHK_JrKtmG9BElGHeGCAMn6-L8am3MzEXCUg8DGmS8ll22OsZJi410gbgSNGgoxtdNLtcgqtPq4JkJHeUYZVs7FDbaMjB_p3BZDmp3CIOYenQKdi8ut5nBlDbmPhqNj8Qrzy305btxVjlAVc7eliiICyKwIxkykYyNKCbpwFcNjiDUiPlinXdpd1PyGkyupl72sTFsotYmexWk4Cpz6ZTCUIVld_dvb0msLstZoIo-mc1dfIQ3-qs5bp7t9G8fqFsoL",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAqa0yga9xcIxjzMEu0r8SHxjPwneDGV4JJTFMJ28suoH65HczQp5xbzBk8Nn0lBj7GgzQu-M8NnyWooe_jz7_5mlOeSREkLgR5-5ejAsnB9sksL_HELZmSlNktmw_8-7sKvN0liKJqYyxWQL8qzqPWZN7jf9-NuCD5daA8RQmWG0N4mV5eIjxQbob4PEYA_1fWGnAlXWUcgF4B-Z_ndQ0gCmaf9DymJODWVeHJjT-bdFtgiBdlsYmJ2I-5DOowwEvNM2jcLDDrcKEk",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCoMLS_trk2P_JTJ06whrYf_rXbFuAhA8oIuRaZbeZdHB5mGpV6Z55UvhqrIJjtL7hhM0HjepDdUf9knFaZhLgR4zY1qCW8j1EEvukSjD0PN0ERMnwTOwj4ZNTuqKsfA1HlP0R0Ln9YM1rkXutk4ay9JORsUQqdJtNIhXnrVFO-60jFbKsSOA3FB3rgYtUtvv0CvbM8WSRKyaOk_e58p3Vb-2C_PfWH93uM_N2YvxtDC3BQcrJ17aDD_qIZCLYgGlMFhK9JfYWqLNV"
];

export const ProjectsApp = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const allProjects = [
    { title: 'Eco-Commerce App', desc: 'A sustainable marketplace platform focusing on carbon-neutral logistics and ethical...', tags: ['React', 'Node.js', 'MongoDB'], category: 'Fullstack', img: PROJECT_IMAGES[0] },
    { title: 'AI Chat App', desc: 'Generative AI assistant with real-time context mapping and visual graph memory.', tags: ['Next.js', 'OpenAI', 'Tailwind'], category: 'Frontend', img: PROJECT_IMAGES[1] },
    { title: 'Stellar Designer App', desc: 'Cloud-based vector editing tool for motion graphics and UI prototyping.', tags: ['Wasm', 'Rust', 'WebGL'], category: 'Frontend', img: PROJECT_IMAGES[2] },
    { title: 'Quantum Ledger App', desc: 'Decentralized finance dashboard for tracking multi-chain assets with zero-...', tags: ['Web3', 'Solidity', 'React'], category: 'Backend', img: PROJECT_IMAGES[3] },
    { title: 'Atmosphere App', desc: 'Hyper-local weather station monitoring using IoT sensors and machine learning.', tags: ['Python', 'IoT', 'React'], category: 'Fullstack', img: PROJECT_IMAGES[4] },
    { title: 'Sentinel Firewall App', desc: 'Enterprise-grade network security suite with automated threat neutralizing.', tags: ['C++', 'Vue', 'Go'], category: 'Backend', img: PROJECT_IMAGES[5] },
  ];

  const filteredProjects = activeFilter === 'All' ? allProjects : allProjects.filter(p => p.category === activeFilter);

  return (
  <div className="flex flex-col h-full text-[#e2e8f0] bg-[#13141c] p-4 md:p-6">
    {/* Header / Filters */}
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
      <div className="flex flex-wrap gap-2">
        {['All', 'Fullstack', 'Frontend', 'Backend'].map((filter) => (
          <button 
            key={filter} 
            onClick={() => setActiveFilter(filter)}
            className={`px-3 md:px-4 py-1.5 rounded-full text-xs md:text-sm font-medium transition-colors ${activeFilter === filter ? 'bg-[#a3b8f0] text-[#13141c]' : 'bg-[#2a2b3d] text-[#94a3b8] hover:bg-[#3a3b4d]'}`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="text-xs md:text-sm text-[#94a3b8]">
        Showing {filteredProjects.length} apps
      </div>
    </div>

    {/* Grid */}
    <div className="flex-1 overflow-y-auto no-scrollbar">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, i) => (
          <div key={i} className="bg-[#1a1b26] rounded-2xl overflow-hidden border border-white/5 flex flex-col">
            <div className="h-48 overflow-hidden relative bg-[#2a2b3d]">
              <img src={project.img} alt={project.title} className="w-full h-full object-cover opacity-80" />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-bold text-lg text-white mb-2">{project.title}</h3>
              <p className="text-sm text-[#94a3b8] mb-4 flex-1">{project.desc}</p>
              <div className="flex gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 rounded bg-[#2a2b3d] text-[#a3b8f0] text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <button className="flex-1 bg-[#2a2b3d] hover:bg-[#3a3b4d] text-[#a3b8f0] font-medium py-2 rounded-lg transition-colors text-sm">
                  Open App
                </button>
                <button className="w-10 flex items-center justify-center bg-[#2a2b3d] hover:bg-[#3a3b4d] text-[#a3b8f0] rounded-lg transition-colors">
                  <Code size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export const TerminalApp = () => {
  const [history, setHistory] = useState([
    "Welcome to Mahmoud Osama's Portfolio OS.",
    "Type 'help' to see available commands."
  ]);
  const [input, setInput] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && input.trim()) {
      const cmd = input.trim().toLowerCase();
      const newHistory = [...history, `mahmoud@portfolio:~$ ${input}`];
      
      if (cmd === 'help') {
        newHistory.push("Available commands:");
        newHistory.push("  about    - Display information about me");
        newHistory.push("  projects - List my projects");
        newHistory.push("  skills   - Show my technical skills");
        newHistory.push("  contact  - Get my contact info");
        newHistory.push("  clear    - Clear terminal output");
        newHistory.push("  date     - Show current date and time");
        newHistory.push("  whoami   - Display current user");
      } else if (cmd === 'clear') {
        setHistory([]);
        setInput('');
        return;
      } else if (cmd === 'about') {
        newHistory.push("Mahmoud Osama - Fullstack MERN Developer.");
        newHistory.push("Passionate about building scalable web applications.");
      } else if (cmd === 'projects') {
        newHistory.push("- Eco-Commerce App");
        newHistory.push("- AI Chat Interface");
        newHistory.push("- Stellar Designer Pro");
      } else if (cmd === 'skills') {
        newHistory.push("React, Node.js, MongoDB, TypeScript, Tailwind CSS");
      } else if (cmd === 'contact') {
        newHistory.push("Email: mahmoud.osama@portfolio.os");
        newHistory.push("GitHub: github.com/mahmoudosama");
      } else if (cmd === 'date') {
        newHistory.push(new Date().toString());
      } else if (cmd === 'whoami') {
        newHistory.push("mahmoud");
      } else {
        newHistory.push(`Command not found: ${input}`);
      }
      setHistory(newHistory);
      setInput('');
    }
  };

  return (
    <div className="p-2 md:p-4 font-mono text-xs md:text-sm text-[#e2e8f0] h-full bg-[#13141c] overflow-y-auto no-scrollbar flex flex-col">
      {history.map((line, i) => (
        <div key={i} className={`break-words ${line.startsWith('mahmoud@') ? 'text-[#e2e8f0]' : 'text-[#a3b8f0] mb-2'}`}>
          {line.startsWith('mahmoud@') ? (
            <><span className="text-[#d0bcff] font-bold">mahmoud@portfolio:~$</span> {line.replace('mahmoud@portfolio:~$ ', '')}</>
          ) : line}
        </div>
      ))}
      <div className="flex flex-col md:flex-row gap-1 md:gap-2 mt-2">
        <span className="text-[#d0bcff] font-bold shrink-0">mahmoud@portfolio:~$</span>
        <input 
          type="text" 
          value={input} 
          onChange={e => setInput(e.target.value)} 
          onKeyDown={handleKeyDown}
          className="bg-transparent outline-none flex-1 text-[#e2e8f0] min-w-0"
          autoFocus
        />
      </div>
    </div>
  );
};

export const MailApp = () => (
  <div className="flex flex-col md:flex-row h-full text-[#e2e8f0] bg-[#13141c]">
    {/* Sidebar */}
    <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-white/5 bg-[#1a1b26]/50 p-4 flex flex-col shrink-0">
      {/* Profile */}
      <div className="hidden md:flex items-center gap-3 mb-6 px-2">
        <div className="w-10 h-10 rounded-full bg-[#2a2b3d] flex items-center justify-center text-[#a3b8f0]">
          <User size={20} />
        </div>
        <div>
          <div className="font-semibold text-white text-sm">Postmaster</div>
          <div className="text-[10px] text-[#64748b] tracking-wider uppercase">Active Session</div>
        </div>
      </div>

      {/* Compose Button */}
      <button className="w-full bg-gradient-to-r from-[#d0bcff] to-[#a3b8f0] text-[#13141c] font-semibold rounded-xl py-2 md:py-3 mb-4 md:mb-6 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity text-sm md:text-base">
        <Edit2 size={16} /> Compose
      </button>

      {/* Navigation */}
      <div className="flex flex-row md:flex-col gap-1 flex-1 overflow-x-auto no-scrollbar">
        <button className="flex items-center justify-between px-3 md:px-4 py-2 md:py-2.5 rounded-xl text-xs md:text-sm bg-[#2a2b3d] text-white transition-colors whitespace-nowrap">
          <div className="flex items-center gap-2 md:gap-3">
            <Inbox size={16} className="text-[#a3b8f0] md:w-[18px] md:h-[18px]" />
            Inbox (0)
          </div>
        </button>
        <button className="flex items-center justify-between px-3 md:px-4 py-2 md:py-2.5 rounded-xl text-xs md:text-sm hover:bg-white/5 text-[#94a3b8] transition-colors whitespace-nowrap">
          <div className="flex items-center gap-2 md:gap-3">
            <SendIcon size={16} className="md:w-[18px] md:h-[18px]" />
            Sent
          </div>
        </button>
        <button className="flex items-center justify-between px-3 md:px-4 py-2 md:py-2.5 rounded-xl text-xs md:text-sm hover:bg-white/5 text-[#94a3b8] transition-colors whitespace-nowrap">
          <div className="flex items-center gap-2 md:gap-3">
            <File size={16} className="md:w-[18px] md:h-[18px]" />
            Drafts
          </div>
        </button>
        <button className="flex items-center justify-between px-3 md:px-4 py-2 md:py-2.5 rounded-xl text-xs md:text-sm hover:bg-white/5 text-[#94a3b8] transition-colors whitespace-nowrap">
          <div className="flex items-center gap-2 md:gap-3">
            <Trash2 size={16} className="md:w-[18px] md:h-[18px]" />
            Trash
          </div>
        </button>
        <button className="flex items-center justify-between px-3 md:px-4 py-2 md:py-2.5 rounded-xl text-xs md:text-sm hover:bg-white/5 text-[#94a3b8] transition-colors whitespace-nowrap">
          <div className="flex items-center gap-2 md:gap-3">
            <Archive size={16} className="md:w-[18px] md:h-[18px]" />
            Archive
          </div>
        </button>
      </div>

      {/* Bottom Nav */}
      <div className="hidden md:flex flex-col gap-1 pt-4 border-t border-white/5">
        <button className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm hover:bg-white/5 text-[#94a3b8] transition-colors">
          <Users size={18} />
          Contacts
        </button>
        <button className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm hover:bg-white/5 text-[#94a3b8] transition-colors">
          <Calendar size={18} />
          Calendar
        </button>
      </div>
    </div>

    {/* Main Content */}
    <div className="flex-1 flex flex-col p-4 md:p-8 min-w-0">
      <div className="max-w-3xl w-full mx-auto flex flex-col h-full">
        <div className="mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">New Message</h2>
          <p className="text-xs md:text-sm text-[#94a3b8]">Compose a direct message to the administrator.</p>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 flex-1">
          <div className="flex flex-col md:flex-row md:items-center bg-[#1a1b26] border border-white/5 rounded-xl px-3 md:px-4 py-2 md:py-3">
            <span className="text-[#64748b] text-[10px] md:text-xs font-bold tracking-wider uppercase w-full md:w-24 mb-1 md:mb-0">To</span>
            <input type="text" readOnly value="mahmoud.osama@portfolio.os" className="bg-transparent outline-none flex-1 text-xs md:text-sm text-[#94a3b8]" />
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center bg-[#1a1b26] border border-white/5 rounded-xl px-3 md:px-4 py-2 md:py-3 focus-within:border-[#a3b8f0]/50 transition-colors">
            <span className="text-[#64748b] text-[10px] md:text-xs font-bold tracking-wider uppercase w-full md:w-24 mb-1 md:mb-0">From</span>
            <input type="text" placeholder="Your Email" className="bg-transparent outline-none flex-1 text-xs md:text-sm text-white placeholder:text-[#475569]" />
          </div>

          <div className="flex flex-col md:flex-row md:items-center bg-[#1a1b26] border border-white/5 rounded-xl px-3 md:px-4 py-2 md:py-3 focus-within:border-[#a3b8f0]/50 transition-colors">
            <span className="text-[#64748b] text-[10px] md:text-xs font-bold tracking-wider uppercase w-full md:w-24 mb-1 md:mb-0">Subject</span>
            <input type="text" placeholder="Subject" className="bg-transparent outline-none flex-1 text-xs md:text-sm text-white placeholder:text-[#475569]" />
          </div>

          <div className="flex-1 bg-[#1a1b26] border border-white/5 rounded-xl p-3 md:p-4 flex flex-col focus-within:border-[#a3b8f0]/50 transition-colors min-h-[200px]">
            <textarea 
              className="bg-transparent outline-none flex-1 resize-none text-xs md:text-sm text-white placeholder:text-[#475569] leading-relaxed" 
              placeholder="Write your message here..."
            ></textarea>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-3 md:pt-4 mt-3 md:mt-4 border-t border-white/5">
              <div className="flex gap-4 text-[#64748b] w-full md:w-auto justify-center md:justify-start">
                <button className="hover:text-white transition-colors"><Paperclip size={18} className="md:w-5 md:h-5" /></button>
                <button className="hover:text-white transition-colors"><Smile size={18} className="md:w-5 md:h-5" /></button>
                <button className="hover:text-white transition-colors"><ImageIcon size={18} className="md:w-5 md:h-5" /></button>
              </div>
              <button className="w-full md:w-auto bg-[#a3b8f0] hover:bg-[#b5c7f5] text-[#13141c] font-semibold rounded-full px-6 py-2 md:py-2.5 flex items-center justify-center gap-2 text-xs md:text-sm transition-colors">
                Send Message <Send size={14} className="md:w-4 md:h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

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

export const SkillsApp = () => {
  const [activeTab, setActiveTab] = useState('Frontend');

  return (
  <div className="flex flex-col h-full bg-[#1a1b26] text-[#e2e8f0]">
    {/* Header Stats */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 p-4 md:p-8 border-b border-white/5">
      <div>
        <div className="flex justify-between items-end mb-3">
          <div className="text-[10px] font-bold text-[#a3b8f0] tracking-widest uppercase">Creative CPU Load</div>
          <div className="text-sm font-mono text-white">98.2%</div>
        </div>
        <div className="flex gap-1 h-3">
          <div className="flex-1 bg-[#2a2b3d] rounded-sm"></div>
          <div className="flex-1 bg-[#2a2b3d] rounded-sm"></div>
          <div className="flex-1 bg-[#3b82f6]/40 rounded-sm"></div>
          <div className="flex-1 bg-[#3b82f6]/60 rounded-sm"></div>
          <div className="flex-1 bg-[#3b82f6]/80 rounded-sm"></div>
          <div className="flex-1 bg-[#a3b8f0] rounded-sm shadow-[0_0_10px_rgba(163,184,240,0.5)]"></div>
        </div>
      </div>
      
      <div>
        <div className="flex justify-between items-end mb-1">
          <div className="text-[10px] font-bold text-[#d0bcff] tracking-widest uppercase">Passion Memory (Index)</div>
          <div className="text-[10px] font-bold text-[#64748b] tracking-widest uppercase">Max</div>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-4xl font-bold text-white">100<span className="text-xl text-[#94a3b8]">%</span></div>
          <div className="flex gap-1 text-[#d0bcff]">
            <Heart size={16} fill="currentColor" />
            <Heart size={16} fill="currentColor" />
            <Heart size={16} fill="currentColor" />
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-end mb-1">
          <div className="text-[10px] font-bold text-[#94a3b8] tracking-widest uppercase">System Uptime</div>
          <div className="text-[10px] font-bold text-[#64748b] tracking-widest uppercase">Stable</div>
        </div>
        <div className="text-2xl font-bold text-white mb-1">365 <span className="text-sm font-normal text-[#94a3b8]">Days</span></div>
        <div className="text-xs font-mono text-[#64748b]">04h : 22m : 11s</div>
      </div>
    </div>

    {/* Tabs */}
    <div className="flex overflow-x-auto no-scrollbar gap-4 md:gap-8 px-4 md:px-8 border-b border-white/5 shrink-0">
      {['Frontend', 'Backend', 'Database', 'Tools'].map(tab => (
        <button 
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-2 py-3 md:py-4 text-[10px] md:text-xs font-bold tracking-widest uppercase transition-colors whitespace-nowrap ${activeTab === tab ? 'text-white border-b-2 border-[#a3b8f0]' : 'text-[#64748b] hover:text-[#94a3b8] border-b-2 border-transparent'}`}
        >
          {tab}
        </button>
      ))}
    </div>

    {/* Process List */}
    <div className="flex-1 overflow-y-auto p-4 md:p-8">
      <div className="grid grid-cols-[1fr_1fr] md:grid-cols-[2fr_1.5fr_1fr_1fr] gap-4 mb-4 md:mb-6 px-2 md:px-4">
        <div className="text-[10px] font-bold text-[#64748b] tracking-widest uppercase">Process Name</div>
        <div className="text-[10px] font-bold text-[#64748b] tracking-widest uppercase text-right md:text-left">Proficiency</div>
        <div className="hidden md:block text-[10px] font-bold text-[#64748b] tracking-widest uppercase">Memory Impact</div>
        <div className="hidden md:block text-[10px] font-bold text-[#64748b] tracking-widest uppercase text-right">Status</div>
      </div>

      <div className="space-y-2">
        {activeTab === 'Frontend' && (
          <>
            {/* React */}
            <div className="grid grid-cols-[1fr_1fr] md:grid-cols-[2fr_1.5fr_1fr_1fr] gap-4 items-center px-2 md:px-4 py-3 hover:bg-white/5 rounded-xl transition-colors group">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#2a2b3d] border border-white/5 flex items-center justify-center text-[#a3b8f0] shrink-0">
                  <Code size={16} className="md:w-[18px] md:h-[18px]" />
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-white text-xs md:text-sm mb-0.5 truncate">React.js</div>
                  <div className="text-[10px] md:text-xs font-mono text-[#64748b] truncate">PID: 8042</div>
                </div>
              </div>
              <div className="flex items-center justify-end md:justify-start gap-2 md:gap-3">
                <div className="hidden md:block flex-1 h-1.5 bg-[#2a2b3d] rounded-full overflow-hidden">
                  <div className="h-full bg-[#a3b8f0] w-[95%]"></div>
                </div>
                <div className="text-xs font-mono text-white">95%</div>
              </div>
              <div className="hidden md:block text-xs font-mono text-[#94a3b8]">424.8 MB</div>
              <div className="hidden md:flex justify-end">
                <div className="px-3 py-1 rounded-full border border-[#10b981]/20 bg-[#10b981]/10 text-[#10b981] text-[10px] font-bold tracking-wider flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></div>
                  RUNNING
                </div>
              </div>
            </div>
            {/* Tailwind */}
            <div className="grid grid-cols-[1fr_1fr] md:grid-cols-[2fr_1.5fr_1fr_1fr] gap-4 items-center px-2 md:px-4 py-3 hover:bg-white/5 rounded-xl transition-colors group">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#2a2b3d] border border-white/5 flex items-center justify-center text-[#fcd34d] shrink-0">
                  <PenTool size={16} className="md:w-[18px] md:h-[18px]" />
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-white text-xs md:text-sm mb-0.5 truncate">Tailwind CSS</div>
                  <div className="text-[10px] md:text-xs font-mono text-[#64748b] truncate">PID: 4402</div>
                </div>
              </div>
              <div className="flex items-center justify-end md:justify-start gap-2 md:gap-3">
                <div className="hidden md:block flex-1 h-1.5 bg-[#2a2b3d] rounded-full overflow-hidden">
                  <div className="h-full bg-[#fcd34d] w-[98%]"></div>
                </div>
                <div className="text-xs font-mono text-white">98%</div>
              </div>
              <div className="hidden md:block text-xs font-mono text-[#94a3b8]">12.2 MB</div>
              <div className="hidden md:flex justify-end">
                <div className="px-3 py-1 rounded-full border border-[#10b981]/20 bg-[#10b981]/10 text-[#10b981] text-[10px] font-bold tracking-wider flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></div>
                  RUNNING
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'Backend' && (
          <>
            {/* Node */}
            <div className="grid grid-cols-[1fr_1fr] md:grid-cols-[2fr_1.5fr_1fr_1fr] gap-4 items-center px-2 md:px-4 py-3 hover:bg-white/5 rounded-xl transition-colors group">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#2a2b3d] border border-white/5 flex items-center justify-center text-[#d0bcff] shrink-0">
                  <Server size={16} className="md:w-[18px] md:h-[18px]" />
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-white text-xs md:text-sm mb-0.5 truncate">Node.js</div>
                  <div className="text-[10px] md:text-xs font-mono text-[#64748b] truncate">PID: 2219</div>
                </div>
              </div>
              <div className="flex items-center justify-end md:justify-start gap-2 md:gap-3">
                <div className="hidden md:block flex-1 h-1.5 bg-[#2a2b3d] rounded-full overflow-hidden">
                  <div className="h-full bg-[#d0bcff] w-[90%]"></div>
                </div>
                <div className="text-xs font-mono text-white">90%</div>
              </div>
              <div className="hidden md:block text-xs font-mono text-[#94a3b8]">1.2 GB</div>
              <div className="hidden md:flex justify-end">
                <div className="px-3 py-1 rounded-full border border-[#10b981]/20 bg-[#10b981]/10 text-[#10b981] text-[10px] font-bold tracking-wider flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></div>
                  RUNNING
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'Database' && (
          <>
            {/* MongoDB */}
            <div className="grid grid-cols-[1fr_1fr] md:grid-cols-[2fr_1.5fr_1fr_1fr] gap-4 items-center px-2 md:px-4 py-3 hover:bg-white/5 rounded-xl transition-colors group">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#2a2b3d] border border-white/5 flex items-center justify-center text-[#94a3b8] shrink-0">
                  <Database size={16} className="md:w-[18px] md:h-[18px]" />
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-white text-xs md:text-sm mb-0.5 truncate">MongoDB</div>
                  <div className="text-[10px] md:text-xs font-mono text-[#64748b] truncate">PID: 1045</div>
                </div>
              </div>
              <div className="flex items-center justify-end md:justify-start gap-2 md:gap-3">
                <div className="hidden md:block flex-1 h-1.5 bg-[#2a2b3d] rounded-full overflow-hidden">
                  <div className="h-full bg-[#94a3b8] w-[92%]"></div>
                </div>
                <div className="text-xs font-mono text-white">92%</div>
              </div>
              <div className="hidden md:block text-xs font-mono text-[#94a3b8]">612.4 MB</div>
              <div className="hidden md:flex justify-end">
                <div className="px-3 py-1 rounded-full border border-[#10b981]/20 bg-[#10b981]/10 text-[#10b981] text-[10px] font-bold tracking-wider flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></div>
                  RUNNING
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'Tools' && (
          <>
            {/* Git */}
            <div className="grid grid-cols-[1fr_1fr] md:grid-cols-[2fr_1.5fr_1fr_1fr] gap-4 items-center px-2 md:px-4 py-3 hover:bg-white/5 rounded-xl transition-colors group">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#2a2b3d] border border-white/5 flex items-center justify-center text-[#f43f5e] shrink-0">
                  <Terminal size={16} className="md:w-[18px] md:h-[18px]" />
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-white text-xs md:text-sm mb-0.5 truncate">Git & GitHub</div>
                  <div className="text-[10px] md:text-xs font-mono text-[#64748b] truncate">PID: 9012</div>
                </div>
              </div>
              <div className="flex items-center justify-end md:justify-start gap-2 md:gap-3">
                <div className="hidden md:block flex-1 h-1.5 bg-[#2a2b3d] rounded-full overflow-hidden">
                  <div className="h-full bg-[#f43f5e] w-[88%]"></div>
                </div>
                <div className="text-xs font-mono text-white">88%</div>
              </div>
              <div className="hidden md:block text-xs font-mono text-[#94a3b8]">45.1 MB</div>
              <div className="hidden md:flex justify-end">
                <div className="px-3 py-1 rounded-full border border-[#10b981]/20 bg-[#10b981]/10 text-[#10b981] text-[10px] font-bold tracking-wider flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></div>
                  RUNNING
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>

    {/* Footer */}
    <div className="flex flex-col md:flex-row justify-between items-center p-4 border-t border-white/5 text-[10px] font-mono text-[#64748b] tracking-widest uppercase gap-2">
      <div className="flex gap-6">
        <div>Processes: <span className="text-white">42</span></div>
        <div>Threads: <span className="text-white">184</span></div>
      </div>
      <div>Kernel Ver: Celestial_V2.4_Stable</div>
    </div>
  </div>
  );
};
