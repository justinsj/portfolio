import { Maybe, Tuple } from '../types';
import { Stack } from './stack';
import { Project } from './projects';

export const projects: Project[] = [
  {
    id: 3,
    title: 'Distributed Concurrent Image Processing',
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/DCIP%2Farchitecture.png?alt=media&token=68bb6137-d710-4d23-89ee-f2de137cd21e',
    website: 'https://justinsj.com',
    description: 'Scalable Kubernetes & Docker distributed system for mass-processing of image payloads. Developed to process 10,000+ images for testing scheduling algorithms.',
    repository: null,
    stack: [
      Stack.kubernetes,
      Stack.docker,
      Stack.python,
      Stack.django,
    ],
    screenshots: [],
    deployment: {
      web: 'https://justinsj.com',
    },
    subProjects: [],
  },
  {
    id: 4,
    title: 'Pose & Object Recognition AI Deployment System',
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/Miro%2Fmiro.jpg?alt=media&token=af9034c1-5435-4c2d-a345-2398f844b8c2',
    website: 'https://justinsj.com',
    description: 'Autoscaling machine learning inference deployment system serving over 100,000 customers.',
    repository: null,
    stack: [
      Stack.aws,
      Stack.docker,
      Stack.tensorflow,
    ],
    screenshots: [],
    deployment: {
      web: 'https://justinsj.com',
    },
    subProjects: [],
  },
  {
    id: 5,
    title: 'Object Recognition for Civil Engineering Sketches',
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/ISA%2Fisa.jpg?alt=media&token=d83e7e2a-9690-4cb7-b6e4-e1324b6ecc77',
    website: 'https://justinsj.com',
    description: 'Novel Tensorflow architecture developed to recognize components and numbers in hand-drawn Civil Engineering sketches.',
    repository: null,
    stack: [
      Stack.python,
      Stack.machinelearning,
    ],
    screenshots: [],
    deployment: {
      // web: 'https://justinsj.com',
    },
    subProjects: [],
  },

  {
    id: 2,
    title: 'WhatsApp Team Inbox',
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/WATI%2FWATI.PNG?alt=media&token=27e28d1b-c0bc-4eaf-8be8-018dbff87564',
    website: 'https://www.wati.io/',
    description: 'Commercial WhatsApp Business API Solution with over 10,000 messages sent a day per client.',
    repository: null,
    stack: [
      Stack.csharp,
      Stack.node,
      Stack.kubernetes,
      Stack.docker,
      Stack.react,
      Stack.python,
    ],
    screenshots: [
      'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/WATI%2Fs1_send_noti-480x450.png?alt=media&token=5ccf7dc9-5733-4d39-bb96-33dad566ed64',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/WATI%2Fs2_support_customer-480x450.png?alt=media&token=47a856e8-9a69-4e5f-b20c-bc54ef48099a',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/WATI%2Fs3_no_code-480x450.png?alt=media&token=0f7f6744-c3df-43e2-ab59-a24c3e08c3e3',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/WATI%2FScreenshot-2021-06-04-at-9.46.57-AM.png?alt=media&token=aad78136-5b51-4af0-b8c6-0ebe832b3d3a',
    ],
    deployment: {
      web: 'https://www.wati.io/',
    },
    subProjects: [],
  },
  {
    id: 1,
    title: 'QuantConnect Trading Algorithm',
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/trading%20algorithm%2Ftrading%20algorithm.jpg?alt=media&token=2907d330-3ef0-4dc5-880d-dd899c4a1d2d',
    website: 'https://justinsj.com/',
    description: 'Production-environment trading algorithm with pipelined optimization for Probabilistic Sharpe Ratio build on QuantConnect.',
    repository: 'https://github.com/justinsj/trading-algorithm',
    stack: [
      Stack.python,
      Stack.dataanalysis,
    ],
    screenshots: [
      ],
    deployment: {
      //github: 'https://github.com/justinsj/trading-algorithm',
    },
    subProjects: [],
  },
  {
    id: 0,
    title: 'ZoomInfo, Salesforce, and Salesloft Sales Outreach Automation',
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/blueridge-automation%2Fblueridge-automation.jpg?alt=media&token=cb8ba85e-e753-415d-967a-db594879eddf',
    website: 'https://justinsj.com/',
    description: 'Client-based automation for parsing, filtering, and establishing high-value leads for Blue Ridge Global.',
    repository: '',
    stack: [
      Stack.python,
      Stack.dataanalysis,
    ],
    screenshots: [
    ],
    deployment: {
      //github: 'https://github.com/justinsj/trading-algorithm',
    },
    subProjects: [],
  },
];
