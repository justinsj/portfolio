import { personal, Personal } from './personal';
import { contact, Contact } from './contact';
import { projects, Project } from './projects';
import { research } from './research';
import { articles, Articles } from './articles';
import { videos, Videos } from './videos';
import { analytics, Analytics } from './analytics';
import { awards, Award } from './awards';

interface Config {
  personal: Personal;
  contact: Contact;
  awards?: Award[];
  research?: Project[];
  projects?: Project[];
  articles?: Articles;
  videos?: Videos;
  analytics?: Analytics;
}

const config: Config = {
  personal,
  contact,
  awards,
  research,
  projects,
  articles,
  videos,
  analytics,
};

export default config;
