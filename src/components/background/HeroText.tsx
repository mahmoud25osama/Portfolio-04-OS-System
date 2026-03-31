import React from 'react';

const HeroText: React.FC = () => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 px-6">
      <div className="flex flex-col items-center text-center w-full max-w-5xl drop-shadow-2xl mt-12 md:mt-0">
        <div className="flex items-center gap-4 mb-6 md:mb-8">
          <span className="w-12 md:w-24 h-px bg-blue-400/40"></span>
          <p className="text-blue-200/80 font-mono text-[10px] md:text-sm uppercase tracking-[0.5em] md:tracking-[0.8em] font-medium drop-shadow-[0_0_15px_rgba(59,130,246,0.6)] pl-2">System Architect</p>
          <span className="w-12 md:w-24 h-px bg-blue-400/40"></span>
        </div>
        
        <h1 className="text-white text-4xl md:text-[60px] lg:text-[80px] font-sans font-light tracking-tighter mb-4 leading-none mix-blend-plus-lighter">
          Mahmoud <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/20">Osama</span>
        </h1>
        
        <h2 className="text-[#a3b8f0] font-mono text-sm md:text-2xl lg:text-3xl font-light tracking-[0.3em] uppercase mb-14 drop-shadow-md">
          <span className="text-blue-500 font-bold mr-2">{'>'}</span> MERN Stack Developer
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-4">
          {['MongoDB', 'Express', 'React', 'Node.js'].map((tech) => (
            <span key={tech} className="text-white/40 text-[10px] md:text-xs font-mono tracking-[0.3em] uppercase">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroText;
