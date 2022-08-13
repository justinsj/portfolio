import { Maybe, Tuple } from '../types';
import { Stack } from './stack';
import { Deployment, Project, SubProject } from './projects';

export const defaultDimensions: Tuple<number> = [450, 220];

export const research: Project[] = [
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
    title: 'A Deep Reinforcement Learning approach for Optimizing Function Allocation in Serverless with a Distributed Image Registry',
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/Research%2FA%20Deep%20Reinforcement%20Learning%20approach%20for%20Optimizing%20Function%20Allocation%20in%20Serverless%20with%20a%20Distributed%20Image%20Registry.png?alt=media&token=b6f0bf4c-4e96-42b7-bbd4-ea38290882fb',
    date: '2022',
    description: '',
    stack: [
      Stack.serverless,
      Stack.reinforcementlearning,
      Stack.distributedsystems,
    ],
    dimensions:  [517, 400],
    screenshots: [
    ],
    deployment: {
      web: 'https://uwaterloo.ca/scholar/sites/ca.scholar/files/jd2sanju/files/a_deep_reinforcement_learning_approach_for_optimizing_function_allocation_in_serverless_with_a_distributed_image_registry.pdf',
    },
    subProjects: [],
  },
  {
    id: 2,
    title: 'Tailoring Product Recommendations for Mobile Devices',
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/Research%2FTailoring%20Product%20Recommendations%20for%20Mobile%20Devices.png?alt=media&token=7011e127-fb77-4d6c-838e-8951cf805dc3',
    date: '2022',
    description: '',
    stack: [
      Stack.reactnative,
      Stack.hci,
      Stack.machinelearning,
    ],
    dimensions:  [517, 400],
    screenshots: [
    ],
    deployment: {
      web: 'https://uwaterloo.ca/scholar/sites/ca.scholar/files/jd2sanju/files/tailoring_product_recommendations_for_mobile_devices.pdf',
    },
    subProjects: [],
  },
  {
    id: 3,
    title: 'Enabling Parallel Smart Contract Execution Using SGX',
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/Research%2FEnabling%20Parallel%20Smart%20Contract%20Execution%20Using%20SGX.png?alt=media&token=08e5956c-a8f9-4694-aef5-fea12e73e1de',
    date: '2021',
    description: '',
    stack: [
      Stack.blockchain,
      Stack.distributedsystems,
      Stack.smartcontracts,
    ],
    dimensions:  [517, 400],
    screenshots: [
    ],
    deployment: {
      web: 'https://uwaterloo.ca/scholar/sites/ca.scholar/files/jd2sanju/files/enabling_parallel_smart_contract_execution_using_sgx.pdf',
    },
    subProjects: [],
  },
  {
    id: 4,
    title: 'Data Privacy in Blockchain using Intel SGX: A Systematic Literature Review',
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/Research%2FData%20Privacy%20in%20Blockchain%20using%20Intel%20SGX%20-%20A%20Systematic%20Literature%20Review.png?alt=media&token=4c4c8931-f875-4585-9c16-e51300eb342e',
    date: '2021',
    description: '',
    stack: [
      Stack.blockchain,
      Stack.security,
      Stack.privacy,
    ],
    dimensions:  [517, 400],
    screenshots: [
    ],
    deployment: {
      web: 'https://uwaterloo.ca/scholar/sites/ca.scholar/files/jd2sanju/files/data_privacy_in_blockchain_using_intel_sgx_-_a_systematic_literature_review.pdf',
    },
    subProjects: [],
  },
  {
    id: 5,
    title: 'Image Processing using Serverless Functions',
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/Research%2FImage%20Processing%20using%20Serverless%20Functions%20Final%20Report.png?alt=media&token=6daa28db-b0d4-410f-9466-244aa723219a',
    date: '2020',
    description: '',
    stack: [
      Stack.serverless,
      Stack.machinelearning,
    ],
    dimensions:  [517, 400],
    screenshots: [
    ],
    deployment: {
      web: 'https://uwaterloo.ca/scholar/sites/ca.scholar/files/jd2sanju/files/image_processing_using_serverless_functions_final_report.pdf',
    },
    subProjects: [],
  },
  {
    id: 6,
    title: 'T-Music Web System',
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/Research%2FT-Music%20Web%20System%20Final%20Report.png?alt=media&token=e521ae76-f939-4eb8-bfc2-96a19f3e3f27',
    date: '2020',
    description: '',
    stack: [
      Stack.react,
      Stack.hci,
      Stack.java,
    ],
    dimensions:  [517, 400],
    screenshots: [
    ],
    deployment: {
      web: 'https://uwaterloo.ca/scholar/sites/ca.scholar/files/jd2sanju/files/t-music_web_system_final_report.pdf',
    },
    subProjects: [],
  },
  {
    id: 7,
    title: 'Comprehensive Analysis of Water Supply Shortage and Solutions in California',
    banner: 'https://firebasestorage.googleapis.com/v0/b/portfolio-90f8d.appspot.com/o/Research%2FComprehensive%20Analysis%20of%20Water%20Supply%20Shortage%20and%20Solutions%20in%20California.png?alt=media&token=78e33c8c-519d-44ce-b79b-a922e4ed1198',
    date: '2017',
    description: '',
    stack: [
      Stack.python,
      Stack.dataanalysis,
    ],
    dimensions:  [517, 400],
    screenshots: [
    ],
    deployment: {
      web: 'https://uwaterloo.ca/scholar/sites/ca.scholar/files/jd2sanju/files/comprehensive_analysis_of_water_supply_shortage_and_solutions_in_california.pdf',
    },
    subProjects: [],
  },
];
