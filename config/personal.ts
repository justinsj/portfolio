export interface Personal {
  name: string;
  fullName: string;
  title: string;
  about: string;
  desc: string;
  photo?: string;
  resume: string;
  available: boolean;
}

export const personal: Personal = {
  name: 'Justin',
  fullName: 'Justin San Juan',
  title: 'Software Engineer & Solutions Architect',
  about: `
    Justin is a performance-obsessed software engineer who loves to collaborate and build well-structured, scalable applications.
    He influences change in challenging environments to emphasize using best practices
    in developing high-quality software that exceeds expectations. Justin is also an
    avid open source contributor who values learning and growing with people, teams, and technologies.
  `,
  desc: 'Justin San Juan is a software engineer with over 4 years of experience in cloud computing, e-commerce, NLP Chatbots, ML, and system design.',
  resume:
    'https://drive.google.com/file/d/11aQ9crBbp2L7DXCPFPcZH4aE1gL2Zj1V/view?usp=sharing',
  available: true,
};
