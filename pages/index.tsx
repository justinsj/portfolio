import * as API from 'api';
import config from 'config';
import { Project } from 'config/projects';
import { projects as appProjects } from 'config/projects.apps';
import { projects as backendProjects } from 'config/projects.backend';
import { projects as opensourceProjects } from 'config/projects.opensource';

import useBoolean from 'hooks/useBoolean';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import { Article, Video } from 'types';
import { Award, awards } from '../config/awards';
import { research } from '../config/research';

interface HomeStaticProps {
  appProjects: Project[];
  backendProjects: Project[];
  opensourceProjects: Project[];
  research: Project[];
  awards: Award[];
  videos: Video[];
  articles: Article[];
}

const Banner = dynamic(import('components/Banner'));
const Conditional = dynamic(import('components/Conditional'));
const Header = dynamic(import('components/Header'));
const Layout = dynamic(import('components/Layout'));

const AwardList = dynamic(import('components/List/Award'));
const ResearchList = dynamic(import('components/List/Research'));
const ProjectList = dynamic(import('components/List/Project'));
const ArticleList = dynamic(import('components/List/Article'));
const VideoList = dynamic(import('components/List/Video'));

const AboutBottomSheet = dynamic(import('components/BottomSheet/About'));
const ContactBottomSheet = dynamic(import('components/BottomSheet/Contact'));
const ProjectBottomSheet = dynamic(import('components/BottomSheet/Project'));

function Home(props: HomeStaticProps): React.ReactElement {
  const { appProjects, backendProjects, opensourceProjects,
    articles, videos, awards, research } = props;

  const [initialProject] = appProjects;
  const [activeProject, setActiveProject] = useState<Project>(initialProject);


  const [about, openAbout, closeAbout] = useBoolean(false);
  const [contact, openContact, closeContact] = useBoolean(false);
  const [project, openProject, closeProject] = useBoolean(false);

  function onProject(project: Project): void {
    setActiveProject(project);
    openProject();
  }

  return (
    <Layout>
      <Header />
      <Banner onAbout={openAbout} onContact={openContact} />

      <Conditional condition={appProjects}>
        <ProjectList
          title='Web & App Development'
          description={`I make breathtaking apps.`}
          projects={appProjects}
          onProject={onProject}
        />
      </Conditional>

      <Conditional condition={backendProjects}>
        <ProjectList
          title='Backend & Automation'
          description={`I love automating and designing for scale.`}
          projects={backendProjects}
          onProject={onProject}
        />
      </Conditional>

      <Conditional condition={opensourceProjects}>
        <ProjectList
          title='Open Source Contributions'
          description={`I also contribute to open-source projects`}
          projects={opensourceProjects}
          onProject={onProject}
        />
      </Conditional>

      <Conditional condition={config.research}>
        <ResearchList
          title='Research'
          description={`Meticulously-studied papers I have written.`}
          research={research}
          onResearch={onProject}
        />
      </Conditional>

      <Conditional condition={config.articles}>
        <ArticleList
          title='Articles'
          description={`When I'm not writing code, I write articles`}
          articles={articles}
        />
      </Conditional>

      <Conditional condition={config.videos}>
        <VideoList
          title='Videos'
          description='I also make videos'
          videos={videos}
        />
      </Conditional>

      <Conditional condition={config.awards}>
        <AwardList
          title='Awards'
          description={`Achievements that showcase my tenacity.`}
          awards={awards}
        />
      </Conditional>

      <AboutBottomSheet open={about} onDismiss={closeAbout} />
      <ContactBottomSheet open={contact} onDismiss={closeContact} />
      <ProjectBottomSheet
        open={project}
        onDismiss={closeProject}
        project={activeProject}
      />
    </Layout>
  );
}

export default Home;

export async function getServerSideProps() {
  const articles = await API.getArticles();
  const videos = await API.getVideos();

  const props: HomeStaticProps = {
    appProjects,
    backendProjects,
    opensourceProjects,
    research,
    awards,
    articles,
    videos,
  };

  return { props };
}
