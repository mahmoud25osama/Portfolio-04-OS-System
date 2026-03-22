import React, { useState, useEffect } from 'react';
import { Wifi, Volume2, Battery, Folder, Terminal, Mail, FileText, Grid, Activity, Monitor, Maximize2, Minimize2, X, Minus, Search, Globe, Code, User, Power, Clock, LayoutGrid, Command, Briefcase, Rocket, Cpu, HardDrive, Play, SkipBack, SkipForward } from 'lucide-react';
import { AboutApp, ProjectsApp, TerminalApp, MailApp, ResumeApp, SkillsApp } from './Apps';

type AppId = 'about' | 'projects' | 'skills' | 'contact' | 'resume' | 'terminal';

interface AppDef {
  id: AppId;
  title: string;
  icon: React.ElementType;
  color: string;
  component: React.FC;
  defaultSize?: { w: number, h: number };
}

const APPS: AppDef[] = [
  { id: 'about', title: 'About Me', icon: User, color: 'bg-gradient-to-br from-blue-400 to-blue-600 text-white', component: AboutApp, defaultSize: { w: 700, h: 500 } },
  { id: 'projects', title: 'Projects', icon: Briefcase, color: 'bg-gradient-to-br from-purple-400 to-purple-600 text-white', component: ProjectsApp, defaultSize: { w: 1000, h: 600 } },
  { id: 'skills', title: 'Skills', icon: Activity, color: 'bg-gradient-to-br from-emerald-400 to-emerald-600 text-white', component: SkillsApp, defaultSize: { w: 900, h: 600 } },
  { id: 'contact', title: 'Contact', icon: Mail, color: 'bg-gradient-to-br from-sky-400 to-blue-500 text-white', component: MailApp, defaultSize: { w: 900, h: 600 } },
  { id: 'resume', title: 'Resume.pdf', icon: FileText, color: 'bg-gradient-to-br from-amber-400 to-orange-500 text-white', component: ResumeApp, defaultSize: { w: 900, h: 700 } },
  { id: 'terminal', title: 'Terminal', icon: Terminal, color: 'bg-gradient-to-br from-gray-700 to-gray-900 text-white', component: TerminalApp, defaultSize: { w: 600, h: 400 } },
];

function Settings(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>;
}

interface WindowState {
  id: AppId;
  zIndex: number;
  isMinimized: boolean;
  isMaximized: boolean;
  x: number;
  y: number;
  w: number;
  h: number;
}

const BOOT_STEPS = [
  { status: '[OK]', text: 'Initializing kernel...' },
  { status: '[OK]', text: 'Loading Ethereal assets...' },
  { status: '[OK]', text: 'Initializing skills modules...' },
  { status: '[OK]', text: 'Loading projects database...' },
  { status: '[OK]', text: 'Connecting creativity drivers...' },
  { status: '[WAIT]', text: 'Mounting\nuser_profile/architect_01...' },
  { status: '>', text: 'System ready. awaiting final handshake.' }
];

const BootSequence = ({ onComplete }: { onComplete: () => void }) => {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    // Uptime counter
    const uptimeInterval = setInterval(() => {
      setUptime(prev => prev + 14);
    }, 16);

    // Progress and steps
    let currentProgress = 0;
    const progressInterval = setInterval(() => {
      currentProgress += Math.random() * 2.5;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(progressInterval);
        clearInterval(uptimeInterval);
        setTimeout(onComplete, 1000);
      }
      setProgress(currentProgress);
      
      // Map progress to steps (7 steps total)
      const expectedStep = Math.floor((currentProgress / 100) * BOOT_STEPS.length);
      setStep(Math.min(expectedStep, BOOT_STEPS.length));
      
    }, 50);

    return () => {
      clearInterval(uptimeInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="h-screen w-screen bg-[#11121a] text-[#8a9bba] font-mono flex items-center relative overflow-hidden z-[9999]">
      {/* Scanlines overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] z-10"></div>
      
      {/* Radial gradient background */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_100%)] z-0"></div>

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 px-8 z-20">
        {/* Left Logs */}
        <div className="md:col-span-5 flex flex-col justify-center space-y-4 text-sm">
          {BOOT_STEPS.slice(0, step).map((log, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <span className="text-[#a3b8f0] font-semibold shrink-0">{log.status}</span>
              <span className="whitespace-pre-line">{log.text}</span>
            </div>
          ))}
          {step < BOOT_STEPS.length && (
            <div className="flex items-start gap-3 animate-pulse">
              <span className="text-[#a3b8f0] font-semibold shrink-0">_</span>
            </div>
          )}
        </div>

        {/* Right Content */}
        <div className="md:col-span-7 flex flex-col justify-center items-center">
          <div className="w-full max-w-xl">
            <div className="text-center mb-10">
              <h1 className="text-white text-xl tracking-[0.2em] mb-4">ETHEREAL_OS</h1>
              <p className="text-sm tracking-[0.15em] text-[#8a9bba]">LOADING PORTFOLIO OS V2.0...</p>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-[#1e1e2f] rounded-full mb-4 overflow-hidden">
              <div className="h-full bg-[#a3b8f0] transition-all duration-75 ease-out" style={{ width: `${progress}%` }}></div>
            </div>

            {/* Status */}
            <div className="flex justify-between text-[10px] tracking-[0.15em] mb-12 uppercase">
              <span>STATUS: {progress < 100 ? 'SYNCHRONIZING' : 'COMPLETE'}</span>
              <span>{Math.floor(progress)}% COMPLETE</span>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[#1a1b26] border border-white/5 rounded-lg p-4 flex flex-col gap-2">
                <span className="text-[10px] tracking-wider text-[#6a7b9a]">KERNEL</span>
                <span className="text-xs text-white">v2.0.4-ARCH</span>
              </div>
              <div className="bg-[#1a1b26] border border-white/5 rounded-lg p-4 flex flex-col gap-2">
                <span className="text-[10px] tracking-wider text-[#6a7b9a]">NODE</span>
                <span className="text-xs text-white">CELESTIAL_01</span>
              </div>
              <div className="bg-[#1a1b26] border border-white/5 rounded-lg p-4 flex flex-col gap-2">
                <span className="text-[10px] tracking-wider text-[#6a7b9a]">UPTIME</span>
                <span className="text-xs text-white">{(uptime / 1000).toFixed(4)}ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="absolute bottom-12 left-0 w-full flex justify-center items-center gap-4 text-[9px] tracking-[0.4em] text-[#4a5578] z-20">
        <div className="w-16 h-px bg-[#4a5578]/40"></div>
        BUILT FOR MODERN ARCHITECTS
        <div className="w-16 h-px bg-[#4a5578]/40"></div>
      </div>
    </div>
  );
};

const WindowView: React.FC<{ 
  win: WindowState; 
  app: AppDef; 
  focusApp: (id: AppId) => void; 
  closeApp: (id: AppId) => void; 
  toggleMinimize: (id: AppId) => void; 
  updateWindow: (id: AppId, updates: Partial<WindowState>) => void; 
}> = ({ 
  win, 
  app, 
  focusApp, 
  closeApp, 
  toggleMinimize, 
  updateWindow 
}) => {
  const handleDragStart = (e: React.MouseEvent) => {
    if (win.isMaximized) return;
    focusApp(win.id);
    const startX = e.clientX;
    const startY = e.clientY;
    const startWinX = win.x;
    const startWinY = win.y;

    const onMouseMove = (moveEvent: MouseEvent) => {
      updateWindow(win.id, {
        x: startWinX + (moveEvent.clientX - startX),
        y: startWinY + (moveEvent.clientY - startY)
      });
    };
    const onMouseUp = () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  const handleResizeStart = (e: React.MouseEvent) => {
    e.stopPropagation();
    focusApp(win.id);
    const startX = e.clientX;
    const startY = e.clientY;
    const startW = win.w;
    const startH = win.h;

    const onMouseMove = (moveEvent: MouseEvent) => {
      updateWindow(win.id, {
        w: Math.max(300, startW + (moveEvent.clientX - startX)),
        h: Math.max(200, startH + (moveEvent.clientY - startY))
      });
    };
    const onMouseUp = () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  if (win.isMinimized) return null;

  const style: React.CSSProperties = win.isMaximized
    ? { top: 32, left: 0, width: '100%', height: 'calc(100% - 100px)', zIndex: win.zIndex }
    : { top: win.y, left: win.x, width: win.w, height: win.h, zIndex: win.zIndex };

  return (
    <div
      onMouseDown={() => focusApp(win.id)}
      className={`absolute glass-panel flex flex-col overflow-hidden shadow-2xl transition-all duration-75 ${win.isMaximized ? 'rounded-none border-0' : 'rounded-2xl'}`}
      style={style}
    >
      {/* Title Bar */}
      <div
        onMouseDown={handleDragStart}
        onDoubleClick={() => updateWindow(win.id, { isMaximized: !win.isMaximized })}
        className="h-12 flex items-center px-4 bg-[#1a1b26]/80 border-b border-white/5 select-none cursor-default relative"
      >
        <div className="flex gap-2 group/controls absolute left-4">
          <button onClick={(e) => { e.stopPropagation(); closeApp(win.id); }} className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 flex items-center justify-center transition-colors">
            <X size={8} className="opacity-0 group-hover/controls:opacity-100 text-black" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); toggleMinimize(win.id); }} className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffbd2e]/80 flex items-center justify-center transition-colors">
            <Minus size={8} className="opacity-0 group-hover/controls:opacity-100 text-black" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); updateWindow(win.id, { isMaximized: !win.isMaximized }); }} className="w-3 h-3 rounded-full bg-[#27c93f] hover:bg-[#27c93f]/80 flex items-center justify-center transition-colors">
            <Maximize2 size={8} className="opacity-0 group-hover/controls:opacity-100 text-black" />
          </button>
        </div>
        <div className="flex-1 flex justify-center items-center text-[#e2e8f0]">
          <span className="text-sm font-semibold">{app.title}</span>
        </div>
      </div>
      {/* Content */}
      <div className="flex-1 overflow-hidden relative bg-surface-dim/30">
        <app.component />
      </div>
      {/* Resize Handle */}
      {!win.isMaximized && (
        <div
          onMouseDown={handleResizeStart}
          className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize z-50"
        />
      )}
    </div>
  );
};

const DesktopWidgets = ({ time }: { time: Date }) => {
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
      <div className="hidden lg:block absolute top-64 right-16 w-72 bg-black/20 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 text-white/80 shadow-2xl">
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

export default function App() {
  const [isBooting, setIsBooting] = useState(true);
  const [openWindows, setOpenWindows] = useState<WindowState[]>([]);
  const [highestZ, setHighestZ] = useState(10);
  const [time, setTime] = useState(new Date());
  const [isStartOpen, setIsStartOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const updateWindow = (id: AppId, updates: Partial<WindowState>) => {
    setOpenWindows(prev => prev.map(w => w.id === id ? { ...w, ...updates } : w));
  };

  const openApp = (id: AppId) => {
    const existing = openWindows.find(w => w.id === id);
    if (existing) {
      focusApp(id);
      if (existing.isMinimized) {
        updateWindow(id, { isMinimized: false });
      }
      return;
    }
    
    const appDef = APPS.find(a => a.id === id)!;
    const isMobile = window.innerWidth < 768;
    const w = isMobile ? window.innerWidth : (appDef.defaultSize?.w || 800);
    const h = isMobile ? window.innerHeight - 100 : (appDef.defaultSize?.h || 500);
    const x = isMobile ? 0 : Math.max(0, (window.innerWidth - w) / 2) + (openWindows.length * 20);
    const y = isMobile ? 32 : Math.max(32, (window.innerHeight - h) / 2) + (openWindows.length * 20);

    setHighestZ(prev => prev + 1);
    setOpenWindows([...openWindows, { 
      id, 
      zIndex: highestZ + 1, 
      isMinimized: false, 
      isMaximized: isMobile,
      x, y, w, h
    }]);
  };

  const closeApp = (id: AppId) => {
    setOpenWindows(openWindows.filter(w => w.id !== id));
  };

  const toggleMinimize = (id: AppId) => {
    const win = openWindows.find(w => w.id === id);
    if (win) {
      updateWindow(id, { isMinimized: !win.isMinimized });
    }
  };

  const focusApp = (id: AppId) => {
    setHighestZ(prev => prev + 1);
    updateWindow(id, { zIndex: highestZ + 1 });
  };

  if (isBooting) {
    return <BootSequence onComplete={() => setIsBooting(false)} />;
  }

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#1a1a24] text-on-surface font-sans select-none relative" onClick={() => setIsStartOpen(false)}>
      {/* Top Bar */}
      <div className="h-8 bg-transparent w-full flex items-center justify-end px-4 gap-4 text-white/80 text-xs font-medium z-40 absolute top-0 right-0 pointer-events-none">
        <div className="flex items-center gap-4 pointer-events-auto">
          <Wifi size={14} />
          <Volume2 size={14} />
          <span>100% - Coffee</span>
        </div>
      </div>

      {/* Rainmeter Widgets */}
      <DesktopWidgets time={time} />

      {/* Desktop Icons */}
      <div className="absolute top-12 left-4 md:left-8 flex flex-col gap-4 md:gap-6 z-10 pointer-events-auto">
        {APPS.map(app => (
          <div 
            key={app.id} 
            className="flex flex-col items-center gap-1 w-16 md:w-20 cursor-pointer group"
            onDoubleClick={() => openApp(app.id)}
            onClick={(e) => { e.stopPropagation(); openApp(app.id); }}
          >
            <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center ${app.color} shadow-lg shadow-black/40 border border-white/10 transform transition-transform group-hover:scale-105`}>
              <app.icon size={24} className="md:w-7 md:h-7" />
            </div>
            <span className="text-[10px] md:text-xs text-center text-white font-medium drop-shadow-md">{app.title.split(' ')[0]}</span>
          </div>
        ))}
      </div>

      {/* Windows */}
      {openWindows.map(win => {
        const app = APPS.find(a => a.id === win.id)!;
        return (
          <WindowView 
            key={win.id}
            win={win}
            app={app}
            focusApp={focusApp}
            closeApp={closeApp}
            toggleMinimize={toggleMinimize}
            updateWindow={updateWindow}
          />
        );
      })}

      {/* Start Menu */}
      {isStartOpen && (
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
      )}

      {/* Dock */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 h-14 md:h-16 bg-[#1a1b26]/60 backdrop-blur-2xl border border-white/10 rounded-2xl md:rounded-3xl px-2 md:px-3 flex items-center gap-1 md:gap-2 z-40 shadow-2xl" onClick={e => e.stopPropagation()}>
        <button 
          className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center transition-all transform hover:scale-105 ${isStartOpen ? 'bg-white/20 text-white' : 'bg-gradient-to-br from-gray-100 to-gray-300 text-gray-900 shadow-lg'}`}
          onClick={() => setIsStartOpen(!isStartOpen)}
        >
          <LayoutGrid size={20} className="md:w-6 md:h-6" />
        </button>
        
        <div className="w-px h-6 md:h-8 bg-white/10 mx-1"></div>
        
        {APPS.map(app => (
          <button 
            key={app.id}
            className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center text-white transition-all transform hover:-translate-y-2 hover:scale-110 relative ${app.color} shadow-lg`}
            onClick={() => openApp(app.id)}
          >
            <app.icon size={20} className="md:w-6 md:h-6" />
            {openWindows.some(w => w.id === app.id) && <div className="absolute -bottom-1.5 md:-bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white/80 shadow-[0_0_4px_white]"></div>}
          </button>
        ))}
      </div>
    </div>
  );
}
