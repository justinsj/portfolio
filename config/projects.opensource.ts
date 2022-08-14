import { Maybe, Tuple } from '../types';
import { Stack } from './stack';
import { Project } from './projects';

export const projects: Project[] = [
  {
	  id: 2,
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
  },
  {
    id: 1,
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
  },
  {
    id: 0,
    title: 'Open Source Contributions',
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/OpenSource%2Fdeathstarbench.jpg?alt=media&token=e34c3a19-07c4-41ad-850d-b04e9b6f0642',
    website: 'https://github.com/delimitrou/DeathStarBench/pulls?q=is%3Apr+author%3Ajustinsj+is%3Aclosed+',
    description: 'Other open source contributions I have made.',
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
  },
];
