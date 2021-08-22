export enum ContactType {
  github = 'github',
  linkedin = 'linkedin',
  twitter = 'twitter',
  email = 'email',
}

export interface Contact {
  twitter: string;
  site: string;
  links: Record<ContactType, string>;
}

export const contact: Contact = {
  twitter: '@JustinSJ16',
  site: 'justinsj.com',
  links: {
    github: 'https://github.com/justinsj',
    linkedin: 'https://linkedin.com/in/justinsj',
    twitter: 'https://twitter.com/justinsj16',
    email: 'mailto:justin.sanjuan@uwaterloo.ca',
  },
};
