import { Maybe, Tuple } from '../types';
import { Stack } from './stack';
import { Project } from './projects';

export const projects: Project[] = [
  {
    id: 8,
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
  },
  {
    id: 7,
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
    dimensions: [528, 220],
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
  },
  {
    id: 6,
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
  },
  {
    id: 5,
    title: 'Readily Chrome Extension',
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/Readily%2Fbanner.PNG?alt=media&token=ac98f0a7-88cc-45cd-ae6d-ecaed9168ace',
    website: 'https://chrome.google.com/webstore/detail/readily/cmlialhageknokecbdeicpjeljbpdgbh?hl=en',
    description: 'Reading Made Easier. Made for enhancing focus and empowering readership among people.',
    repository: null,
    stack: [
      Stack.react,
      Stack.aws,
    ],
    dimensions: [343, 550],
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
  },
  {
    id: 4,
    title: 'Abode Home Maintenance',
    website: 'https://expo.dev/@abodeapp/abode-app',
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/abode%2Fcover.jpg?alt=media&token=15cb5241-e335-49c4-95d6-3b60cbc2247a',
    description:
      'A frictionless app to schedule home appliance maintenance. Users can set up their home appliances, pets, vehicles, and get timely notifications on when to maintain it.',
    repository: null,
    stack: [
      Stack.reactnative,
    ],
    dimensions: [476, 220],
    screenshots: [
      'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/abode%2FX%20-%2031.jpg?alt=media&token=59efa6fc-7a2b-4484-be38-43dcd711df84',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/abode%2FX%20-%2029.jpg?alt=media&token=cd7dadc6-4c6d-40a8-b879-37536a2b6509',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/abode%2FX%20-%202.jpg?alt=media&token=899d2f03-b61a-4156-bd49-6db90c75582d',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/abode%2FX%20-%203.jpg?alt=media&token=87161f35-1083-40a1-82a2-1c58f9a99268',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/abode%2FX%20-%204.jpg?alt=media&token=264da9d8-e8d6-4754-bc86-79f24bf2bb47',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/abode%2FX%20-%208.jpg?alt=media&token=21d78823-0dd4-413d-b708-cb7a2821f207',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/abode%2FX%20-%2030.jpg?alt=media&token=9a728145-b031-45b1-a387-9875fb03bfbe',
    ],
    deployment: {
      web: 'https://expo.dev/@abodeapp/abode-app',
      android: 'https://expo.dev/@abodeapp/abode-app',
      ios: 'https://expo.dev/@abodeapp/abode-app',
    },
    subProjects: [],
  },
  {
    id: 3,
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
    ],
    deployment: {
      web: 'https://justinsj.wixsite.com/portfolio#comp-jig5bc3k',
      android: 'https://justinsj.wixsite.com/portfolio#comp-jig5bc3k',
    },
    subProjects: [],
  },
  {
    id: 2,
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
  },
  {
    id: 1,
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
  },
  {
    id: 0,
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
  },
];
