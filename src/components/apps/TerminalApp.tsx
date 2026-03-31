import React, { useState } from 'react';

export const TerminalApp = () => {
  const [history, setHistory] = useState([
    "Welcome to Mahmoud Osama's Portfolio OS.",
    "Type 'help' to see available commands."
  ]);
  const [input, setInput] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && input.trim()) {
      const cmd = input.trim().toLowerCase();
      const newHistory = [...history, `mahmoud@portfolio:~$ ${input}`];
      
      if (cmd === 'help') {
        newHistory.push("Available commands:");
        newHistory.push("  about    - Display information about me");
        newHistory.push("  projects - List my projects");
        newHistory.push("  skills   - Show my technical skills");
        newHistory.push("  contact  - Get my contact info");
        newHistory.push("  clear    - Clear terminal output");
        newHistory.push("  date     - Show current date and time");
        newHistory.push("  whoami   - Display current user");
      } else if (cmd === 'clear') {
        setHistory([]);
        setInput('');
        return;
      } else if (cmd === 'about') {
        newHistory.push("Mahmoud Osama - Fullstack MERN Developer.");
        newHistory.push("Passionate about building scalable web applications.");
      } else if (cmd === 'projects') {
        newHistory.push("- Eco-Commerce App");
        newHistory.push("- AI Chat Interface");
        newHistory.push("- Stellar Designer Pro");
      } else if (cmd === 'skills') {
        newHistory.push("React, Node.js, MongoDB, TypeScript, Tailwind CSS");
      } else if (cmd === 'contact') {
        newHistory.push("Email: mahmoud.osama@portfolio.os");
        newHistory.push("GitHub: github.com/mahmoudosama");
      } else if (cmd === 'date') {
        newHistory.push(new Date().toString());
      } else if (cmd === 'whoami') {
        newHistory.push("mahmoud");
      } else {
        newHistory.push(`Command not found: ${input}`);
      }
      setHistory(newHistory);
      setInput('');
    }
  };

  return (
    <div className="p-2 md:p-4 font-mono text-xs md:text-sm text-[#e2e8f0] h-full bg-[#13141c] overflow-y-auto no-scrollbar flex flex-col">
      {history.map((line, i) => (
        <div key={i} className={`break-words ${line.startsWith('mahmoud@') ? 'text-[#e2e8f0]' : 'text-[#a3b8f0] mb-2'}`}>
          {line.startsWith('mahmoud@') ? (
            <><span className="text-[#d0bcff] font-bold">mahmoud@portfolio:~$</span> {line.replace('mahmoud@portfolio:~$ ', '')}</>
          ) : line}
        </div>
      ))}
      <div className="flex flex-col md:flex-row gap-1 md:gap-2 mt-2">
        <span className="text-[#d0bcff] font-bold shrink-0">mahmoud@portfolio:~$</span>
        <input 
          type="text" 
          value={input} 
          onChange={e => setInput(e.target.value)} 
          onKeyDown={handleKeyDown}
          className="bg-transparent outline-none flex-1 text-[#e2e8f0] min-w-0"
          autoFocus
        />
      </div>
    </div>
  );
};
