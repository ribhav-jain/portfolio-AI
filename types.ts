import React from "react";

export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: React.ReactNode;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  image: string;
  category: string; // Added for filtering
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  details: string;
  coursework?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface ChatMessage {
  role: "user" | "model" | "system";
  content: string;
  timestamp: number;
}
