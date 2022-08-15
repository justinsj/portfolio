import { Colors } from './colors';

export enum Stack {
  // Languages
  go,
  typescript,
  javascript,
  python,
  java,
  csharp,

  // Frontend
  react,
  reactnative,
  d3,

  // Backend
  graphql,
  node,
  django,

  // Cloud
  aws,
  gcp,
  docker,
  kubernetes,

  // Databases
  redis,
  postgres,
  mongo,
  wordpress,

  // Skills
  algorithms,

  // Systems
  serverless,
  gpu,
  fpga,

  reinforcementlearning,
  distributedsystems,
  hci,
  machinelearning,

  blockchain,
  security,
  privacy,
  smartcontracts,
  dataanalysis,
  tensorflow,
}

export const WorkStack = [
  Stack.algorithms,
  Stack.go,
  Stack.react,
  Stack.reactnative,
  Stack.d3,
  Stack.java,
  Stack.python,
  Stack.typescript,
  Stack.javascript,
  Stack.kubernetes,
  Stack.docker,
  Stack.aws,
];

type StackInfoMap = {
  value: string;
  color: string;
};

export const StackInfo: Record<Stack, StackInfoMap> = {
  [Stack.typescript]: {
    value: 'TypeScript',
    color: Colors.typescript,
  },
  [Stack.javascript]: {
    value: 'JavaScript',
    color: Colors.javascript,
  },
  [Stack.java]: {
    value: 'Java',
    color: Colors.java,
  },
  [Stack.go]: {
    value: 'Go',
    color: Colors.go,
  },
  [Stack.react]: {
    value: 'React',
    color: Colors.react,
  },
  [Stack.reactnative]: {
    value: 'React Native',
    color: Colors.reactnative,
  },
  [Stack.graphql]: {
    value: 'GraphQL',
    color: Colors.graphql,
  },
  [Stack.aws]: {
    value: 'AWS',
    color: Colors.aws,
  },
  [Stack.docker]: {
    value: 'Docker',
    color: Colors.docker,
  },
  [Stack.kubernetes]: {
    value: 'Kubernetes',
    color: Colors.kubernetes,
  },
  [Stack.gcp]: {
    value: 'Google Cloud',
    color: Colors.gcp,
  },
  [Stack.python]: {
    value: 'Python',
    color: Colors.python,
  },
  [Stack.node]: {
    value: 'Node',
    color: Colors.node,
  },
  [Stack.django]: {
    value: 'Django',
    color: Colors.django,
  },
  [Stack.postgres]: {
    value: 'Postgres',
    color: Colors.postgres,
  },
  [Stack.redis]: {
    value: 'Redis',
    color: Colors.redis,
  },
  [Stack.mongo]: {
    value: 'MongoDB',
    color: Colors.mongo,
  },
  [Stack.wordpress]: {
    value: 'WordPress',
    color: Colors.wordpress,
  },
  [Stack.csharp]: {
    value: 'C#',
    color: Colors.csharp,
  },
  [Stack.d3]: {
    value: 'D3',
    color: Colors.d3,
  },
  [Stack.algorithms]: {
    value: 'Algorithms',
    color: Colors.algorithms,
  },
  [Stack.serverless]: {
    value: 'Serverless',
    color: Colors.serverless,
  },
  [Stack.distributedsystems]: {
    value: 'Distributed Systems',
    color: Colors.distributedsystems,
  },
  [Stack.gpu]: {
    value: 'GPU',
    color: Colors.gpu,
  },
  [Stack.fpga]: {
    value: 'FPGA',
    color: Colors.fpga,
  },
  [Stack.reinforcementlearning]: {
    value: 'Reinforcement Learning',
    color: Colors.machinelearning,
  },
  [Stack.hci]: {
    value: 'HCI',
    color: Colors.hci,
  },
  [Stack.machinelearning]: {
    value: 'Machine Learning',
    color: Colors.machinelearning,
  },
  [Stack.blockchain]: {
    value: 'Blockchain',
    color: Colors.blockchain,
  },
  [Stack.privacy]: {
    value: 'Privacy',
    color: Colors.privacy,
  },
  [Stack.security]: {
    value: 'Security',
    color: Colors.security,
  },
  [Stack.smartcontracts]: {
    value: 'Smart Contracts',
    color: Colors.smartcontract,
  },
  [Stack.dataanalysis]: {
    value: 'Data Analysis',
    color: Colors.dataanalysis,
  },
  [Stack.tensorflow]: {
    value: 'Tensorflow',
    color: Colors.machinelearning,
  },

};
