import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AppId, WindowState } from '../types/os.types';

interface OSContextType {
  openWindows: WindowState[];
  highestZ: number;
  time: Date;
  isStartOpen: boolean;
  isBooting: boolean;
  setIsBooting: (booting: boolean) => void;
  setIsStartOpen: (open: boolean) => void;
  openApp: (id: AppId, defaultW?: number, defaultH?: number) => void;
  closeApp: (id: AppId) => void;
  toggleMinimize: (id: AppId) => void;
  focusApp: (id: AppId) => void;
  updateWindow: (id: AppId, updates: Partial<WindowState>) => void;
  toggleStartMenu: () => void;
}

const OSContext = createContext<OSContextType | undefined>(undefined);

export const OSProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
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

  const focusApp = (id: AppId) => {
    setHighestZ(prev => prev + 1);
    updateWindow(id, { zIndex: highestZ + 1 });
  };

  const openApp = (id: AppId, defaultW: number = 600, defaultH: number = 400) => {
    const existing = openWindows.find(w => w.id === id);
    if (existing) {
      focusApp(id);
      if (existing.isMinimized) {
        updateWindow(id, { isMinimized: false });
      }
      return;
    }
    
    const isMobile = window.innerWidth < 768;
    const isLarge = window.innerWidth >= 1280;
    
    // Dynamically scale up window size for large screens to look better,
    // while ensuring it never exceeds the screen boundaries.
    const scaledW = isLarge ? defaultW * 1.9 : defaultW;
    const scaledH = isLarge ? defaultH * 1.85 : defaultH;
    
    const w = isMobile ? window.innerWidth : Math.min(scaledW, window.innerWidth - 64);
    const h = isMobile ? window.innerHeight - 100 : Math.min(scaledH, window.innerHeight - 100);
    
    const x = isMobile ? 0 : Math.max(0, (window.innerWidth - w) / 2) + (openWindows.length * 20);
    const y = isMobile ? 32 : Math.max(32, (window.innerHeight - h) / 2) + (openWindows.length * 20);

    setHighestZ(prev => prev + 1);
    setOpenWindows(prev => [...prev, { 
      id, 
      zIndex: highestZ + 1, 
      isMinimized: false, 
      isMaximized: isMobile,
      x, y, w, h
    }]);
  };

  const closeApp = (id: AppId) => {
    setOpenWindows(prev => prev.filter(w => w.id !== id));
  };

  const toggleMinimize = (id: AppId) => {
    const win = openWindows.find(w => w.id === id);
    if (win) {
      updateWindow(id, { isMinimized: !win.isMinimized });
    }
  };

  const toggleStartMenu = () => {
    setIsStartOpen(prev => !prev);
  }

  return (
    <OSContext.Provider value={{
      openWindows,
      highestZ,
      time,
      isStartOpen,
      isBooting,
      setIsBooting,
      setIsStartOpen,
      openApp,
      closeApp,
      toggleMinimize,
      focusApp,
      updateWindow,
      toggleStartMenu
    }}>
      {children}
    </OSContext.Provider>
  );
};

export const useOS = () => {
  const context = useContext(OSContext);
  if (!context) {
    throw new Error('useOS must be used within an OSProvider');
  }
  return context;
};
