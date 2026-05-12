
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  // Fixed: Added React import to resolve React namespace
  icon: React.ReactNode;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  // Fixed: Added React import to resolve React namespace
  icon: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
