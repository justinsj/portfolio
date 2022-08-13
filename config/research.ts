import { Maybe, Tuple } from '../types';
import { Stack } from './stack';
import { Deployment, SubProject } from './projects';

export const defaultDimensions: Tuple<number> = [450, 220];

export interface Research {
  id: number;
  title: string;
  website?: string;
  banner: string;
  description: string;
  repository: Maybe<string>;
  stack: Stack[];
  dimensions?: Tuple<number>; // Tuple of [height, width]
  screenshots: string[];
  deployment: Deployment;
  subProjects: SubProject[];
}

export const research: Research[] = [
  // Enabling Heterogeneous ...
  // Reinforcement Learning in Serverless... (CS798)
  // Tailoring for mobile... CS848
  // Security in blockchains CS846
  // Asynchronous parallel... CS754
  // Distributed concurrent image processing...
  // Music Score...
  // WATI...
  // White Paper on California...

  // {
  //   id: 0,
  //   title: 'Enabling Heterogeneous Workload and Resource Scheduling with Accelerators in Serverless',
  //   banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/rec-sys-ui%2Fcover.jpg?alt=media&token=4b811cf9-2499-4668-8fcf-0056f92f1a29',
  //   description: '',
  //   repository: '',
  //   stack: [
  //     Stack.serverless,
  //     Stack.gpu,
  //     Stack.fpga,
  //   ],
  //   screenshots: [
  //         ],
  //   deployment: {
  //     github: 'https://github.com/justinsj/recommender-system-ui',
  //   },
  //   subProjects: [],
  // },
  {
    id: 1,
    title: 'Enabling Heterogeneous Workload and Resource Scheduling with Accelerators in Serverless',
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/rec-sys-ui%2Fcover.jpg?alt=media&token=4b811cf9-2499-4668-8fcf-0056f92f1a29',
    description: '',
    repository: '',
    stack: [
      Stack.serverless,
      Stack.gpu,
      Stack.fpga,
    ],
    screenshots: [
    ],
    deployment: {
      github: 'https://github.com/justinsj/recommender-system-ui',
    },
    subProjects: [],
  },
];
