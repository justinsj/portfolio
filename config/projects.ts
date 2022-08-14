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

/**
 * Web & App Development
 * Backend & Automation
 * Open Source Contributions
 * Game Development*
 */
export enum ProjectFilter {
  frontend,
  backend,
  opensource,
}

export const ProjectFilterInfo: Record<ProjectFilter, ProjectFilterMap> = {
  [ProjectFilter.frontend]: {
    label: 'Web & App Development',
  },
  [ProjectFilter.backend]: {
    label: 'Backend & Automation',
  },
  [ProjectFilter.opensource]: {
    label: 'Open Source Contributions',
  },
}
type ProjectFilterMap = {
  label: string;
}
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
  filters: ProjectFilter[];
}

export const projects: Project[] = [
  {
    id: 11,
    title: 'Financial Planner',
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/financial%20planner%2Ffinancial%20planner.jpg?alt=media&token=2aad6ca9-fc64-43d9-89f5-ee511c1301e5',
    website: 'https://finance.justinsj.com/',
    description: 'Empowers financial freedom by projecting big-ticket decisions, incomes, and expenses with taxes automatically included.',
    repository: 'https://github.com/justinsj/financial-planner',
    stack: [
      Stack.react,
    ],
    screenshots: [
    ],
    deployment: {
      web: 'https://finance.justinsj.com/',
    },
    subProjects: [],
    filters: [
      ProjectFilter.frontend,
    ],
  },
  {
    id: 10,
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
    filters: [
      ProjectFilter.backend,
    ],
  },
  {
    id: 0,
    title: 'Recommender System UI',
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/rec-sys-ui%2Fcover.jpg?alt=media&token=4b811cf9-2499-4668-8fcf-0056f92f1a29',
    website: 'https://justinsj.com/',
    description: 'Tailoring Product Recommendations for Mobile Devices. A research project in user interface design. Includes a React Native prototype app, web scraping code, logging & analysis AWS infrastructure, and report.',
    repository: 'https://github.com/justinsj/recommender-system-ui',
    stack: [
      Stack.reactnative,
      Stack.node,
      Stack.aws,
    ],
    screenshots: [
      'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/rec-sys-ui%2Fhome.jpg?alt=media&token=44f292b9-7c19-4412-9a35-95571f8e374a',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/rec-sys-ui%2Frecs-control.jpg?alt=media&token=e439c559-2f2d-49f1-81ed-83ebd5be76b0',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/rec-sys-ui%2Fproduct.jpg?alt=media&token=e903c544-9fee-48fb-8a44-a13eea4acdc5',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/rec-sys-ui%2Fcomplete.jpg?alt=media&token=1e12e9b9-f5f7-44eb-a48d-82f3004bdd47',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/rec-sys-ui%2Fsetup.jpg?alt=media&token=a8d9697f-2642-4d15-a1de-e68c694b72c3',
    ],
    deployment: {
      github: 'https://github.com/justinsj/recommender-system-ui',
    },
    subProjects: [],
    filters: [
      ProjectFilter.frontend,
      ProjectFilter.opensource,
    ],
  },
  {
    id: 1,
    title: 'Graph Algorithms Visualization',
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/Graphs%2Fdemo.gif?alt=media&token=814893d2-8659-45ba-9274-fd3f269cfe80',
    website: 'https://graphs.justinsj.com/',
    description: 'Graph algorithms implemented and visualized in D3.',
    repository: null,
    stack: [
      Stack.algorithms,
      Stack.d3,
    ],
    screenshots: [],
    deployment: {
      web: 'https://graphs.justinsj.com/',
    },
    subProjects: [],
    filters: [
      ProjectFilter.frontend,
    ],
  },
  {
    id: 2,
    title: 'WhatsApp Team Inbox',
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/WATI%2FWATI.PNG?alt=media&token=27e28d1b-c0bc-4eaf-8be8-018dbff87564',
    website: 'https://www.wati.io/',
    description: 'Commercial WhatsApp Business API Solution.',
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
    filters: [
      ProjectFilter.backend,
    ],
  },
  {
    id: 3,
    title: 'Distributed Concurrent Image Processing',
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/DCIP%2Farchitecture.png?alt=media&token=68bb6137-d710-4d23-89ee-f2de137cd21e',
    website: 'https://justinsj.com',
    description: 'Scalable Kubernetes & Docker distributed system for mass-processing of image payloads.',
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
    filters: [
      ProjectFilter.backend,
    ],
  },
  // Readily
  {
    id: 4,
    title: 'Readily Chrome Extension',
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/Readily%2Fbanner.PNG?alt=media&token=ac98f0a7-88cc-45cd-ae6d-ecaed9168ace',
    website: 'https://chrome.google.com/webstore/detail/readily/cmlialhageknokecbdeicpjeljbpdgbh?hl=en',
    description: 'Reading Made Easier. Made for enhancing focus and empowering readership among people.',
    repository: null,
    stack: [
      Stack.react,
      Stack.aws,
    ],
    screenshots: [
      'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/Readily%2F1.%20Focus%20Guide.jpg?alt=media&token=4ba6cf30-ea1a-42a8-ba97-5cc578ad4cbc',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/Readily%2F2.%20Make%20The%20Visual%20Suit%20You.jpg?alt=media&token=8ae49eee-9acf-4aaf-8b40-fe36feee8c2a',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/Readily%2F3.%20Recent%20Reading.jpg?alt=media&token=dc1976ad-2968-473b-81c4-deffa9254052',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/Readily%2F4.%20Personalised.jpg?alt=media&token=104d9a95-4598-4ff3-b87b-289f3478a8b6',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/Readily%2F5.%20Getting%20Started.jpg?alt=media&token=1629a959-986d-4d8e-9149-362ea04930e6',
    ],
    deployment: {
      web: 'https://chrome.google.com/webstore/detail/readily/cmlialhageknokecbdeicpjeljbpdgbh?hl=en',
    },
    subProjects: [],
    filters: [
      ProjectFilter.frontend,
    ],
  },
  {
	id: 5,
    title: 'React Awesome Popups',
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/react-awesome-popups%2Fdemo.gif?alt=media&token=d9e43158-8d63-40af-adcd-f861d096f76c',
    website: 'https://github.com/justinsj/react-awesome-popups',
    description: 'A lightweight, extendable, fast performing, highly customizeable, production ready React Component that renders an animated set of popups.',
    repository: 'https://github.com/justinsj/react-awesome-popups',
    stack: [
      Stack.react,
    ],
    screenshots: [],
    deployment: {
      web: 'https://github.com/justinsj/react-awesome-popups',
    },
    subProjects: [],
    filters: [
      ProjectFilter.opensource,
    ],
	
  },
  {
    id: 12,
    title: 'React Native Animated Tab Bar',
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/react%20native%20animated%20tab%20bar%2Fdemo.gif?alt=media&token=fc536805-62c7-43c1-afb2-91a1fd7a6bae',
    website: 'https://github.com/justinsj/react-native-animated-tab-bar',
    description: 'Animated Sliding Tab Bar for React Native.\n' +
      '\n' +
      'This project supports 2+ tabs with an animated bar to switch between the tabs.\n' +
      '\n' +
      'This project uses Expo.\n' +
      '\n' +
      'Inspired by Aditya Signh\'s original version.',
    repository: 'https://github.com/justinsj/react-native-animated-tab-bar',
    stack: [
      Stack.reactnative,
    ],
    screenshots: [],
    deployment: {
      web: 'https://github.com/justinsj/react-native-animated-tab-bar',
    },
    subProjects: [],
    filters: [
      ProjectFilter.opensource,
      ProjectFilter.frontend,
    ],

  },
  // Unify
  {
    id: 6,
    title: 'Unify',
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/Unify%2FX%20-%201.png?alt=media&token=1027d3ac-41a2-4d51-9c36-624a6bcd3a00',
    website: 'https://justinsj.wixsite.com/portfolio#comp-jig5bc3k',
    description: 'An app for university students to find professional activities that match their interest.',
    repository: null,
    stack: [
      Stack.reactnative,
      Stack.aws,
    ],
    screenshots: [
      'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/Unify%2FX%20-%201.png?alt=media&token=1027d3ac-41a2-4d51-9c36-624a6bcd3a00',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/Unify%2FScreenshot_20181017-192826.jpg?alt=media&token=f3822c45-b2c5-4a1f-aef5-5a49cbc428be',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/Unify%2FScreenshot_20181017-192832.jpg?alt=media&token=b33a025b-7a68-4178-8253-5a40ce50b99b',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/Unify%2FUnify%20Team%20Photo.jpg?alt=media&token=08b775b8-38de-4214-ad95-87265bfc3fd3',
    ],
    deployment: {
      web: 'https://justinsj.wixsite.com/portfolio#comp-jig5bc3k',
      android: 'https://justinsj.wixsite.com/portfolio#comp-jig5bc3k',
    },
    subProjects: [],
    filters: [
      ProjectFilter.frontend,
      ProjectFilter.backend,
    ],
  },
  // Song Association
  {
    id: 7,
    title: 'Song Association',
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/Song%20Association%2Fbanner.webp?alt=media&token=289d4e75-a308-469e-a080-7afee7356123',
    website: 'https://play.google.com/store/apps/details?id=com.justinsj.songassociation',
    description: 'A mobile social party game. A fun activity to test your lyrics knowledge!',
    repository: null,
    stack: [
      Stack.reactnative,
    ],
    screenshots: [
      'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/Song%20Association%2Funnamed.webp?alt=media&token=6ee09eb4-9fe7-4150-bcb8-0fdd1c639205',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/Song%20Association%2FWhatsApp%20Image%202021-08-21%20at%2017.46.32.jpeg?alt=media&token=ecb17858-8246-4ff4-aebe-48ec171695f5',
    ],
    deployment: {
      android: 'https://play.google.com/store/apps/details?id=com.justinsj.songassociation',
    },
    subProjects: [],
    filters: [
      ProjectFilter.frontend,
    ],
  },
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

  {
    id: 8,
    title: 'Abigail Farm Supply Website',
    website: 'https://abigailfarmsupply.com/',
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/AFSI%2FAFSI-banner.PNG?alt=media&token=e9236189-f302-4f68-90b5-d93719a56144',
    description:
      'An interactive responsive company website with custom display components on WordPress.',
    repository: null,
    stack: [
      Stack.wordpress,
      Stack.react,
    ],
    screenshots: [

    ],
    deployment: {
      web: 'https://abigailfarmsupply.com/',
    },
    subProjects: [],
    filters: [
      ProjectFilter.frontend,
    ],
  },
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

  {
    id: 9,
    title: 'My Garden Online',
    website: 'https://my-garden-online.com/',
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/my-garden-online%2Fbanner.png?alt=media&token=56d3fd9a-3f3d-48e7-8f04-1cf56a0f0ba3',
    description:
      'Live-stream every plant you buy. Take care of your garden with water and fertilizer from the comfort of your home online.',
    repository: null,
    stack: [
      Stack.wordpress,
      Stack.react,
    ],
    screenshots: [],
    deployment: {},
    subProjects: [],
    filters: [
      ProjectFilter.frontend,
    ],
  },
  {
    id: 7,
    title: 'Open Source Contributions',
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/OpenSource%2Fdeathstarbench.jpg?alt=media&token=e34c3a19-07c4-41ad-850d-b04e9b6f0642',
    website: 'https://github.com/delimitrou/DeathStarBench/pulls?q=is%3Apr+author%3Ajustinsj+is%3Aclosed+',
    description: 'Some open source contributions I have made.',
    repository: null,
    stack: [
      Stack.serverless,
    ],
    screenshots: [
    ],
    deployment: {
      github: 'https://github.com/delimitrou/DeathStarBench/pulls?q=is%3Apr+author%3Ajustinsj+is%3Aclosed+',
    },
    subProjects: [],
    filters: [
      ProjectFilter.opensource,
    ],
  },
];
