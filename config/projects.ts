import { Maybe, Tuple } from '../types';
import { Stack } from './stack';

export type Deployment = {
  web?: string;
  android?: string;
  ios?: string;
  github?: string;
};

export interface SubProject {
  title: string;
  description: string;
  repository: Maybe<string>;
  deployment: Deployment;
}

export const defaultDimensions: Tuple<number> = [450, 220];

export interface Project {
  id: number;
  title: string;
  website: string;
  date?: string;
  banner: string;
  description: string;
  repository: Maybe<string>;
  stack: Stack[];
  dimensions?: Tuple<number>; // Tuple of [height, width]
  screenshots: string[];
  deployment: Deployment;
  subProjects: SubProject[];
}

// export const projects: Project[] = [

  // LTM VR
  // Nike HK
  // Barons AI consulting


  // Image-based structural Analysis
  // Talents & Interests Network
  // Photo Filter
  // T-Music
  // eHome
  // Apple Detector
  // Stylist Appode
  // Puricase
  // My Garden Online
  // Alchemy
  // Arcane Lands





// ];
