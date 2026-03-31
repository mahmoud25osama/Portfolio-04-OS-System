import React from 'react';
import { OSProvider, useOS } from './context/OSContext';
import { APPS } from './data/apps';
import BootSequence from './components/os/BootSequence';
import DesktopWidgets from './components/os/DesktopWidgets';
import TopBar from './components/os/TopBar';
import DesktopIcon from './components/os/DesktopIcon';
import Window from './components/os/Window';
import StartMenu from './components/os/StartMenu';
import Taskbar from './components/os/Taskbar';
import Orb from './components/background/Orb';
import HeroText from './components/background/HeroText';

const OSContent = () => {
  const { isBooting, setIsBooting, openWindows, setIsStartOpen } = useOS();

  const handleComplete = React.useCallback(() => {
    setIsBooting(false);
  }, [setIsBooting]);

  if (isBooting) {
    return <BootSequence onComplete={handleComplete} />;
  }

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#1a1a24] text-on-surface font-sans select-none relative" onClick={() => setIsStartOpen(false)}>
      <div className="absolute inset-0 z-0">
        <Orb
          hoverIntensity={2}
          rotateOnHover
          hue={0}
          forceHoverState={false}
          backgroundColor="#000000"
        />
        <HeroText />
      </div>

      <TopBar />
      <DesktopWidgets />

      {/* Desktop Icons */}
      <div className="absolute top-12 left-4 md:left-8 flex flex-col gap-4 md:gap-6 z-10 pointer-events-auto">
        {APPS.map(app => (
          <DesktopIcon key={app.id} app={app} />
        ))}
      </div>

      {/* Windows */}
      {openWindows.map(win => (
        <Window key={win.id} id={win.id} />
      ))}

      <StartMenu />
      <Taskbar />
    </div>
  );
};

export default function App() {
  return (
    <OSProvider>
      <OSContent />
    </OSProvider>
  );
}
