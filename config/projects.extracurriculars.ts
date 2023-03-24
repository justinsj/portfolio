import { Maybe, Tuple } from '../types';
import { Stack } from './stack';
import { Project } from './projects';

export const projects: Project[] = [
  {
	  id: 2,
    title: 'REDbird Leadership Program',
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/extracurriculars%2Ftinetwork.jpg?alt=media&token=a069cce9-8998-403a-88d9-4481260fb26b',
    website: 'https://ti-network.weebly.com/',
    description: 'Gold Awardee & Top Achiever. Chaired team of 8 to host 5 unique workshops to empower individuals. I also coached our junior cohort and guided them through their own discovery and leadership journey.',
    repository: 'https://ti-network.weebly.com/',
    stack: [
    ],
    screenshots: [],
    deployment: {
      web: 'https://ti-network.weebly.com/',
    },
    subProjects: [],
  },
  {
    id: 1,
    title: 'Cambodia Service-Learning Trip',
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/extracurriculars%2Fcambodia.webp?alt=media&token=ac43f6da-803f-44d5-9f3a-d9c0c8dd1e6e',
    website: 'https://justinsj.wixsite.com/portfolio/volunteering-services',
    description: 'Organizing Committee Member. Orchestrated team of 18 to teach and support children in 3 different NGOs.',
    repository: 'https://justinsj.wixsite.com/portfolio/volunteering-services',
    stack: [
    ],
    screenshots: [],
    deployment: {
      web: 'https://justinsj.wixsite.com/portfolio/volunteering-services',
    },
    subProjects: [],
  },
  {
    id: 0,
    title: 'Teachings',
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/extracurriculars%2Fteachings.jpg?alt=media&token=d5a2a13e-a158-4dd1-b13e-2138cd98b09a',
    website: 'https://justinsj.com',
    description: 'I love teaching and take the initiative to take instructional assistant roles in courses.\n' +
      '\n' +
      'Winter\t2023 - [IA] CS116: Introduction to Computer Science 2\n' +
      'Fall\t2022 - [IA] CS116: Introduction to Computer Science 2\n' +
      'Spring\t2022 - [TA] CS251: Computer Organization and Design\n' +
      'Winter\t2022 - [IA] CS116: Introduction to Computer Science 2\n' +
      'Winter\t2022 - [TA] CS116: Introduction to Computer Science 2\n' +
      'Fall\t2021 - [TA] CS116: Introduction to Computer Science 2\n',
    repository: '',
    stack: [
    ],
    screenshots: [],
    deployment: {
      // web: 'https://justinsj.com',
    },
    subProjects: [],
  },

];
