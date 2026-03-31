import React, { useState } from 'react';
import { Folder, Search, MoreHorizontal, Fingerprint } from 'lucide-react';

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
