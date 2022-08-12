import React, { memo } from 'react';
import SubHeader from '../SubHeader';

type BaseTagListData = any;

interface BaseTagListProps {
  title: string;
  data: BaseTagListData[];
  skipHeader?: boolean;
  renderList: (item: BaseTagListData) => React.ReactNode;
  className?: string;
}

function BaseTagList(props: BaseTagListProps): React.ReactElement {
  const { data, renderList, title, skipHeader = false, className } = props;

  let list = (
    <div className={`flex flex-wrap ${className}`}>
      {React.Children.toArray(data.map(renderList))}
    </div>
  );

  if (skipHeader) {
    return list;
  }

  return <SubHeader title={title} description={list} />;
}

export default memo(BaseTagList);
