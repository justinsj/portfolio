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
  // Stylist App
  // Puricase
  // My Garden Online
  // Alchemy
  // Arcane Lands

  // {
  //   id: 0,
  //   title: 'Miro.io Autoscaling Pose Analysis',
  //   banner: null,
  //   website: 'https://miro.io//',
  //   description: 'Commercial WhatsApp Business API Solution',
  //   repository: null,
  //   stack: [
  //     Stack.csharp,
  //     Stack.node,
  //     Stack.docker,
  //     Stack.react,
  //     Stack.python,
  //   ],
  //   screenshots: [],
  //   deployment: {},
  //   subProjects: [],
  // },


  // {
  //   id: 2,
  //   title: 'Business Financial Planner',
  //   website: 'https://finance.justinsj.com',
  //   banner: null,
  //   description:
  //     'A frictionless app to schedule home appliance maintenance.',
  //   repository: null,
  //   stack: [
  //     Stack.reactnative,
  //   ],
  //   screenshots: [
  //
  //   ],
  //   deployment: {
  //     web: 'https://finance.justinsj.com',
  //   },
  //   subProjects: [],
  // },
  // {
  //   id: 3,
  //   title: 'Abode Home Maintenance',
  //   website: 'https://expo.dev/@abodeapp/abode-app',
  //   banner: null,
  //   description:
  //     'A frictionless app to schedule home appliance maintenance.',
  //   repository: null,
  //   stack: [
  //     Stack.reactnative,
  //   ],
  //   screenshots: [
  //
  //   ],
  //   deployment: {
  //     web: 'https://expo.dev/@abodeapp/abode-app',
  //     android: 'https://expo.dev/@abodeapp/abode-app',
  //     ios: 'https://expo.dev/@abodeapp/abode-app',
  //   },
  //   subProjects: [],
  // },


// ];
