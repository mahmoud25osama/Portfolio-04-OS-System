import React from 'react';
import { X, Minus, Maximize2 } from 'lucide-react';
import { useOS } from '../../context/OSContext';
import { APPS } from '../../data/apps';
import { AppId } from '../../types/os.types';

const Window: React.FC<{ id: AppId }> = ({ id }) => {
  const { openWindows, focusApp, closeApp, toggleMinimize, updateWindow } = useOS();
  
  const win = openWindows.find(w => w.id === id);
  const app = APPS.find(a => a.id === id);

  if (!win || !app) return null;

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
          <button onClick={(e) => { e.stopPropagation(); updateWindow(win.id, { isMaximized: !win.isMaximized }); }} className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffbd2e]/80 flex items-center justify-center transition-colors">
            <Maximize2 size={8} className="opacity-0 group-hover/controls:opacity-100 text-black" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); toggleMinimize(win.id); }} className="w-3 h-3 rounded-full bg-[#27c93f] hover:bg-[#27c93f]/80 flex items-center justify-center transition-colors">
            <Minus size={8} className="opacity-0 group-hover/controls:opacity-100 text-black" />
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

export default Window;
