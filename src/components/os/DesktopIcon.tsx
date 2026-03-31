import React from 'react';
import { useOS } from '../../context/OSContext';
import { AppDef } from '../../types/os.types';

const DesktopIcon: React.FC<{ app: AppDef }> = ({ app }) => {
  const { openApp } = useOS();

  return (
    <div 
      className="flex flex-col items-center gap-1 w-16 md:w-20 cursor-pointer group"
      onDoubleClick={() => openApp(app.id, app.defaultSize?.w, app.defaultSize?.h)}
      onClick={(e) => { e.stopPropagation(); openApp(app.id, app.defaultSize?.w, app.defaultSize?.h); }}
    >
      <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center ${app.color} shadow-lg shadow-black/40 border border-white/10 transform transition-transform group-hover:scale-105`}>
        <app.icon size={24} className="md:w-7 md:h-7" />
      </div>
      <span className="text-[10px] md:text-xs text-center text-white font-medium drop-shadow-md">{app.title.split(' ')[0]}</span>
    </div>
  );
};

export default DesktopIcon;
