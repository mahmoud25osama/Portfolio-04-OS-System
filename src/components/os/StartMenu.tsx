import React from 'react';
import { Search, Globe, Mail, Code, Terminal, User, Power } from 'lucide-react';
import { useOS } from '../../context/OSContext';

const StartMenu = () => {
  const { isStartOpen, openApp, setIsStartOpen } = useOS();

  if (!isStartOpen) return null;

  return (
    <div className="absolute bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 w-[90vw] md:w-[400px] bg-[#1e1e2e]/70 backdrop-blur-3xl border border-white/20 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] z-50 p-4 md:p-6 flex flex-col gap-4 md:gap-6" onClick={e => e.stopPropagation()}>
      <div className="relative">
        <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94a3b8]" />
        <input type="text" placeholder="Search apps, files, or web..." className="w-full bg-black/20 rounded-2xl pl-10 pr-4 py-3 text-sm outline-none text-white placeholder:text-[#64748b] border border-white/10 focus:border-white/30 transition-colors shadow-inner" />
      </div>
      
      <div>
        <div className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-wider mb-4 px-1">Pinned Apps</div>
        <div className="grid grid-cols-4 gap-6">
          <div className="flex flex-col items-center gap-2 cursor-pointer group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center shadow-lg shadow-black/40 border border-white/10 transform transition-transform group-hover:scale-105">
              <Globe size={24} className="text-white" />
            </div>
            <span className="text-xs text-white font-medium drop-shadow-md">Browser</span>
          </div>
          <div className="flex flex-col items-center gap-2 cursor-pointer group" onClick={() => { openApp('contact'); setIsStartOpen(false); }}>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center shadow-lg shadow-black/40 border border-white/10 transform transition-transform group-hover:scale-105">
              <Mail size={24} className="text-white" />
            </div>
            <span className="text-xs text-white font-medium drop-shadow-md">Mail</span>
          </div>
          <div className="flex flex-col items-center gap-2 cursor-pointer group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center shadow-lg shadow-black/40 border border-white/10 transform transition-transform group-hover:scale-105">
              <Code size={24} className="text-white" />
            </div>
            <span className="text-xs text-white font-medium drop-shadow-md">Editor</span>
          </div>
          <div className="flex flex-col items-center gap-2 cursor-pointer group" onClick={() => { openApp('terminal'); setIsStartOpen(false); }}>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center shadow-lg shadow-black/40 border border-white/10 transform transition-transform group-hover:scale-105">
              <Terminal size={24} className="text-white" />
            </div>
            <span className="text-xs text-white font-medium drop-shadow-md">Terminal</span>
          </div>
        </div>
      </div>

      <div className="mt-2 pt-4 border-t border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-md">
            <User size={18} className="text-white" />
          </div>
          <div>
            <div className="text-sm font-bold text-white">Mahmoud O.</div>
            <div className="text-[10px] text-[#94a3b8]">Architect Account</div>
          </div>
        </div>
        <button className="w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center text-white transition-colors">
          <Power size={18} />
        </button>
      </div>
    </div>
  );
};

export default StartMenu;
