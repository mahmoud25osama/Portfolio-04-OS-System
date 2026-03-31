import { User, Briefcase, Activity, Mail, FileText, Terminal } from 'lucide-react';
import { AboutApp } from '../components/apps/AboutApp';
import { ProjectsApp } from '../components/apps/ProjectsApp';
import { SkillsApp } from '../components/apps/SkillsApp';
import { MailApp } from '../components/apps/MailApp';
import { ResumeApp } from '../components/apps/ResumeApp';
import { TerminalApp } from '../components/apps/TerminalApp';
import { AppDef } from '../types/os.types';

export const APPS: AppDef[] = [
  { id: 'about', title: 'About Me', icon: User, color: 'bg-gradient-to-br from-blue-400 to-blue-600 text-white', component: AboutApp, defaultSize: { w: 700, h: 500 } },
  { id: 'projects', title: 'Projects', icon: Briefcase, color: 'bg-gradient-to-br from-purple-400 to-purple-600 text-white', component: ProjectsApp, defaultSize: { w: 800, h: 600 } },
  { id: 'skills', title: 'Skills', icon: Activity, color: 'bg-gradient-to-br from-emerald-400 to-emerald-600 text-white', component: SkillsApp, defaultSize: { w: 800, h: 600 } },
  { id: 'contact', title: 'Contact', icon: Mail, color: 'bg-gradient-to-br from-sky-400 to-blue-500 text-white', component: MailApp, defaultSize: { w: 800, h: 600 } },
  { id: 'resume', title: 'Resume.pdf', icon: FileText, color: 'bg-gradient-to-br from-amber-400 to-orange-500 text-white', component: ResumeApp, defaultSize: { w: 800, h: 600 } },
  { id: 'terminal', title: 'Terminal', icon: Terminal, color: 'bg-gradient-to-br from-gray-700 to-gray-900 text-white', component: TerminalApp, defaultSize: { w: 600, h: 400 } },
];
