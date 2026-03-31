import React, { useState, useEffect } from 'react';

const BOOT_STEPS = [
  { status: '[OK]', text: 'Initializing kernel...' },
  { status: '[OK]', text: 'Loading Ethereal assets...' },
  { status: '[OK]', text: 'Initializing skills modules...' },
  { status: '[OK]', text: 'Loading projects database...' },
  { status: '[OK]', text: 'Connecting creativity drivers...' },
  { status: '[WAIT]', text: 'Mounting\\nuser_profile/architect_01...' },
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
  }, [onComplete]);

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

export default BootSequence;
