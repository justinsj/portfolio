import type { Research } from 'config/research';
import React, { memo, useCallback } from 'react';
import ResearchCard from '../Card/Research';
import { SubHeaderProps } from '../SubHeader';
import BaseList from './Base';
import Project from './Project';

interface ResearchListProps extends SubHeaderProps {
  research: Project[];
  onResearch: (research: Research) => void;
}

function ResearchList(props: ResearchListProps): React.ReactElement {
  const { title, description, research, onResearch } = props;

  const renderResearchList = useCallback(
    (research: Research): React.ReactNode => {
      const { title, description, banner } = research;

      function onResearchClick(): void {
        onResearch(research);
      }

      return (
        <ResearchCard
          title={title}
          description={description}
          banner={banner}
          onClick={onResearchClick}
        />
      );
    },
    [onResearch],
  );

  return (
    <BaseList
      title={title}
      description={description}
      data={research}
      renderList={renderResearchList}
    />
  );
}

export default memo(ResearchList);