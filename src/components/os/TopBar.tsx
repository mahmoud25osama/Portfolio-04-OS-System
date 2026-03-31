import React from 'react';
import { Wifi, Volume2 } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="h-8 bg-transparent w-full flex items-center justify-end px-4 gap-4 text-white/80 text-xs font-medium z-40 absolute top-0 right-0 pointer-events-none">
      <div className="flex items-center gap-4 pointer-events-auto">
        <Wifi size={14} />
        <Volume2 size={14} />
        <span>100% - Coffee</span>
      </div>
    </div>
  );
};

export default TopBar;
