import type { Award } from 'config/awards';
import React, { memo, useCallback } from 'react';
import AwardCard from '../Card/Award';
import { SubHeaderProps } from '../SubHeader';
import BaseList from './Base';

interface AwardListProps extends SubHeaderProps {
  awards: Award[];
}

function AwardList(props: AwardListProps): React.ReactElement {
  const { title, description, awards } = props;

  const renderProjectsList = useCallback(
    (award: Award): React.ReactNode => {
      const { title, description, banner } = award;


      return (
        <AwardCard
          title={title}
          description={description}
          banner={banner}
        />
      );
    },
    [],
  );

  return (
    <BaseList
      title={title}
      description={description}
      data={awards}
      renderList={renderProjectsList}
    />
  );
}

export default memo(AwardList);
