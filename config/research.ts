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
    website: 'https://uwaterloo.ca/scholar/sites/ca.scholar/files/jd2sanju/files/a_deep_reinforcement_learning_approach_for_optimizing_function_allocation_in_serverless_with_a_distributed_image_registry.pdf',
    repository: '',
    description: '2022 · The emergence of the Function-as-a-Service (FaaS) paradigm enables software developers to focus on business logic all the while entrusting the service provider in a serverless environment to elastically scale up during a burst of requests or scale down when request rates are low. One of the key enablers of FaaS is the widespread adoption of containerization technology such as Docker, which packages software into images that can be loaded and executed in any other computer running the Docker engine. An encumbering limitation of FaaS is significant overhead when downloading these images to newly instantiated workers from a centralized image repository. Large bursts of requests cause new workers to be instantiated and lead to so-called "cold-start" latencies. Recent works have investigated distributed image registries in the flavor of downloading images from existing workers and the scheduling of functions with knowledge of the server resource availability and function request information separately. However, the scheduling of functions in servers distant from existing images can lead to sub-optimal function completion times, especially in the context of a bursty workload. FaaSFabric addresses these issues by incorporating the information of image locations into the scheduling decisions. In this paper, we present fine-grained overhead breakdowns of workload traces, a Mixed Integer Linear Program (MILP) formulation of incorporating distributed image registry information in request allocation decisions, a justification of the potential of Deep Reinforcement Learning (DRL), and a proposed DRL formulation. We also demonstrate that in a simple workload, image pulling can take up to 80% of the total function completion time on average, which shows the potential for a distributed image registry-aware scheduler to outperform baseline and state-of-the-art schedulers.',
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
    website: 'https://uwaterloo.ca/scholar/sites/ca.scholar/files/jd2sanju/files/tailoring_product_recommendations_for_mobile_devices.pdf',
    repository: '',
    description: '2022 · Since the beginning of the COVID-19 pandemic, online shopping has grown at a rate not seen before. Because of this, it is pertinent to display product recommendations in a way that makes it easy for users to understand what they are looking at and find what they need. Currently, there exists a lack of research on how to tailor the display of these recommendations to different devices. This is especially important for mobile devices where there is significantly less space to display all of the necessary information. In this paper, we explore two factors that influence a user’s product selection decision process on mobile devices, mainly the size of the picture and amount of explanation for each product, and perform a user study to quantify the amount of influence these factors have.',
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
    website: 'https://uwaterloo.ca/scholar/sites/ca.scholar/files/jd2sanju/files/enabling_parallel_smart_contract_execution_using_sgx.pdf',
    repository: '',
    description: '2021 · Decentralized applications built using smart contracts are skyrocketing. These applications take advantage of blockchain’s availability and security guarantees. However, blockchains have failed to cope with the increase in adoption because of inherent limited scalability and poor throughput. This prevents mainstream adoption of application execution on blockchain. In this paper, we present SLAB, a novel smart contract architecture that addresses these limitations by proposing parallel smart contract execution. We separate computation from consensus layer and leverage Intel SGX to scale transaction execution. SLAB uses three major concepts for optimization. First, we use smart locks and dependency tree to enable transaction execution in parallel. Second, by utilizing the trust properties of Trusted Execution Environments (TEEs), SLAB eliminates redundant transaction execution. Third, we support complex smart contract to smart contract calls by smart allocation of transactions and communication between compute nodes. We claim that our system is highly scalable. And, as compared to ethereum, we expect a many-fold increase in system throughput.',
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
    website: 'https://uwaterloo.ca/scholar/sites/ca.scholar/files/jd2sanju/files/data_privacy_in_blockchain_using_intel_sgx_-_a_systematic_literature_review.pdf',
    repository: '',
    description: '2021 · Data privacy is an important issue for businesses, governments, and the general public. Blockchain is an emerging technology that decentralizes trust among a number of potentially malicious peers in comparison to centralized systems. One of the challenges for blockchain systems is to provide privacy while providing high transaction throughput. Intel Software Guard Extensions (SGX), and other Trusted Execution Environments (TEEs) provide trust guarantees when executing a piece of code. Through this technology, several aspects of blockchains can be anonymized, thus preserving data privacy . In this paper, we present a systematic literature review of blockchain systems that use data privacy techniques with a focus on applications of Intel SGX.',
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
    website: 'https://uwaterloo.ca/scholar/sites/ca.scholar/files/jd2sanju/files/image_processing_using_serverless_functions_final_report.pdf',
    repository: '',
    description: '2020 · One of the largest barriers to entry in machine learning is the scarcity of data. Several steps are involved in machine learning model creation, particularly, data collection, data preparation, choosing a model, training, etc. The project focuses on the step of data preparation, namely data augmentation, and specifically in the area of image processing. However, the framework proposed is extensible toward other data type, such as text, and video. Data augmentation is the creation of data from primary data samples using well-established transformations, such as rotations, pepper-salt distortions, etc. to create more samples for training a machine learning model. More notably, serverless computing, which involves a platform distributing processes across different transient servers, is increasingly a popular method in computing as it streamlines the setup of acquiring and establishing hardware, networks, etc. The project proposes framework that establishes a programming interface for serverless functions to be called to process the data.',
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
    website: 'https://uwaterloo.ca/scholar/sites/ca.scholar/files/jd2sanju/files/t-music_web_system_final_report.pdf',
    repository: '',
    description: '2020 · T-Music is an innovative algorithm that composes a series of musical notes from a given series of input lyrics using frequent pattern mining as well as other data mining techniques. To demonstrate the capabilities of the algorithm, an online interface is desired for access to the public. The project identifies the user interactions required for T-Music and establishes a web interface for online access. The result of the project is an implementation of system design concepts to allow a maintainable and scalable system to deploy the usage of the algorithm.',
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
    website: 'https://uwaterloo.ca/scholar/sites/ca.scholar/files/jd2sanju/files/comprehensive_analysis_of_water_supply_shortage_and_solutions_in_california.pdf',
    repository: '',
    description: '2017 · Water is a very precious resource, it supports the lives of billions of people. However, due to a series of problems, water shortage becomes more prominent. [1]. This shortage causes not only economic slowdown, but also mortal illnesses and regional conflicts. Water shortage is occurring more frequently around the world in both developing and developed countries and arouses interest in its causes. \n' +
      '\n' +
      'This report will study water shortage in California. According to the California Department of Water Resources, the water demand in California mainly comprises of three domains in which 50% is for environmental use, 40% is for agricultural use, and 10% is for urban use [2]. For environmental use, the water is mainly for preservation of the ecology in some protected regions under the federal and states laws, and for maintaining the water quality for agricultural and urban uses [2]. Although environmental use is related to the hydrology in California, it indirectly affects human activities and significantly consume the water as compared to other uses – mainly agriculture. \n' +
      '\n' +
      'In the last few decades, due to the increasing yield of crops, and the switch to perennial crops [2], water usage dropped slightly for the industry. However, agricultural industry still relies on stable water supply heavily in order to produce good-quality, profitable crops. Being one of the major industries in California, which contributes to approximately 2% of the GDP of the state, together with other derived production profits [3], the water supply plays an important role in sustaining the economy of the industry and California. \n' +
      '\n' +
      'By comparing climate and agricultural data to the drought level in California as defined by the United States Drought Monitor (USDM), this report will provide an analysis of the causes of water shortage in California and compare and suggest solutions to mitigate the issue.',
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
