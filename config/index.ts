import { personal, Personal } from './personal';
import { contact, Contact } from './contact';
import { Project } from './projects';
import { research } from './research';
import { articles, Articles } from './articles';
import { videos, Videos } from './videos';
import { analytics, Analytics } from './analytics';

interface Config {
  personal: Personal;
  contact: Contact;
  research?: Project[];
  projects?: Project[];
  articles?: Articles;
  videos?: Videos;
  analytics?: Analytics;
}

const config: Config = {
  personal,
  contact,
  research,
  articles,
  videos,
  analytics,
};

export default config;
