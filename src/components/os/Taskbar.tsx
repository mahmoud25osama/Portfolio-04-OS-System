import React from 'react';
import { LayoutGrid } from 'lucide-react';
import { useOS } from '../../context/OSContext';
import { APPS } from '../../data/apps';

const Taskbar = () => {
  const { isStartOpen, setIsStartOpen, openWindows, openApp } = useOS();

  return (
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
          onClick={() => openApp(app.id, app.defaultSize?.w, app.defaultSize?.h)}
        >
          <app.icon size={20} className="md:w-6 md:h-6" />
          {openWindows.some(w => w.id === app.id) && <div className="absolute -bottom-1.5 md:-bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white/80 shadow-[0_0_4px_white]"></div>}
        </button>
      ))}
    </div>
  );
};

export default Taskbar;
