import React from 'react';
import { Activity, Cpu, HardDrive, Wifi, Play, SkipBack, SkipForward } from 'lucide-react';
import { useOS } from '../../context/OSContext';

const DesktopWidgets = () => {
  const { time } = useOS();

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Large Clock Widget */}
      <div className="absolute top-12 right-4 md:top-16 md:right-16 flex flex-col items-end">
        <div className="text-[60px] md:text-[120px] font-extralight text-white/90 tracking-tighter drop-shadow-2xl leading-none">
          {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}
        </div>
        <div className="text-sm md:text-2xl font-light text-white/60 tracking-[0.2em] md:tracking-[0.3em] uppercase mt-2 md:mt-4">
          {time.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' })}
        </div>
      </div>

      {/* System Monitor Widget */}
      <div className="hidden lg:block absolute top-64 right-16 w-56 bg-black/20 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 text-white/80 shadow-2xl">
        <div className="text-[10px] font-bold uppercase tracking-widest mb-6 text-white/40 flex items-center gap-2">
          <Activity size={12} /> System Monitor
        </div>
        <div className="space-y-5">
          <div>
            <div className="flex justify-between text-xs mb-2 font-medium">
              <span className="flex items-center gap-2"><Cpu size={14} className="text-emerald-400" /> CPU</span>
              <span>34%</span>
            </div>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-300 w-[34%] rounded-full shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs mb-2 font-medium">
              <span className="flex items-center gap-2"><HardDrive size={14} className="text-blue-400" /> RAM</span>
              <span>6.2 / 16 GB</span>
            </div>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-500 to-blue-300 w-[45%] rounded-full shadow-[0_0_10px_rgba(96,165,250,0.5)]"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs mb-2 font-medium">
              <span className="flex items-center gap-2"><Wifi size={14} className="text-purple-400" /> NET</span>
              <span>1.2 MB/s</span>
            </div>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-purple-500 to-purple-300 w-[15%] rounded-full shadow-[0_0_10px_rgba(192,132,252,0.5)]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Music Player Widget */}
      <div className="absolute bottom-24 right-4 md:bottom-32 md:right-16 w-[calc(100vw-32px)] md:w-80 bg-black/20 backdrop-blur-2xl border border-white/10 rounded-3xl p-4 md:p-5 flex items-center gap-4 md:gap-5 shadow-2xl">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-pink-500 to-orange-400 flex-shrink-0 shadow-lg relative overflow-hidden group pointer-events-auto cursor-pointer">
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Play size={24} className="text-white fill-white" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-bold text-white truncate drop-shadow-md">Midnight City</div>
          <div className="text-xs text-white/60 truncate mt-0.5">M83</div>
          <div className="mt-3 flex items-center gap-3 pointer-events-auto">
            <SkipBack size={14} className="text-white/40 hover:text-white cursor-pointer transition-colors" />
            <Play size={14} className="text-white/40 hover:text-white cursor-pointer transition-colors fill-current" />
            <SkipForward size={14} className="text-white/40 hover:text-white cursor-pointer transition-colors" />
          </div>
          <div className="mt-2 flex items-center gap-2">
            <div className="text-[9px] text-white/40 font-mono">1:24</div>
            <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-white/80 w-[30%] rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
            </div>
            <div className="text-[9px] text-white/40 font-mono">4:01</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopWidgets;
