import React from 'react';

export type AppId = 'about' | 'projects' | 'skills' | 'contact' | 'resume' | 'terminal';

export interface AppDef {
  id: AppId;
  title: string;
  icon: React.ElementType;
  color: string;
  component: React.FC;
  defaultSize?: { w: number, h: number };
}

export interface WindowState {
  id: AppId;
  zIndex: number;
  isMinimized: boolean;
  isMaximized: boolean;
  x: number;
  y: number;
  w: number;
  h: number;
}
