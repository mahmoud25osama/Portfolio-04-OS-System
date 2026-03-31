import React, { useState } from 'react';
import { Code } from 'lucide-react';
import { allProjects } from '../../data/mockData';

export const ProjectsApp = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filteredProjects = activeFilter === 'All' ? allProjects : allProjects.filter(p => p.category === activeFilter);

  return (
  <div className="flex flex-col h-full text-[#e2e8f0] bg-[#13141c] p-4 md:p-6">
    {/* Header / Filters */}
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
      <div className="flex flex-wrap gap-2">
        {['All', 'Fullstack', 'Frontend', 'Backend'].map((filter) => (
          <button 
            key={filter} 
            onClick={() => setActiveFilter(filter)}
            className={`px-3 md:px-4 py-1.5 rounded-full text-xs md:text-sm font-medium transition-colors ${activeFilter === filter ? 'bg-[#a3b8f0] text-[#13141c]' : 'bg-[#2a2b3d] text-[#94a3b8] hover:bg-[#3a3b4d]'}`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="text-xs md:text-sm text-[#94a3b8]">
        Showing {filteredProjects.length} apps
      </div>
    </div>

    {/* Grid */}
    <div className="flex-1 overflow-y-auto no-scrollbar">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, i) => (
          <div key={i} className="bg-[#1a1b26] rounded-2xl overflow-hidden border border-white/5 flex flex-col">
            <div className="h-48 overflow-hidden relative bg-[#2a2b3d]">
              <img src={project.img} alt={project.title} className="w-full h-full object-cover opacity-80" />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-bold text-lg text-white mb-2">{project.title}</h3>
              <p className="text-sm text-[#94a3b8] mb-4 flex-1">{project.desc}</p>
              <div className="flex gap-2 mb-6">
                {project.tags.map((tag: string) => (
                  <span key={tag} className="px-2 py-1 rounded bg-[#2a2b3d] text-[#a3b8f0] text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <button className="flex-1 bg-[#2a2b3d] hover:bg-[#3a3b4d] text-[#a3b8f0] font-medium py-2 rounded-lg transition-colors text-sm">
                  Open App
                </button>
                <button className="w-10 flex items-center justify-center bg-[#2a2b3d] hover:bg-[#3a3b4d] text-[#a3b8f0] rounded-lg transition-colors">
                  <Code size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};
