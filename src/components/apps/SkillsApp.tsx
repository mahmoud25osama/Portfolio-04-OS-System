import React, { useState } from 'react';
import { Heart, Code, PenTool, Server, Database, Terminal } from 'lucide-react';

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
