import { Card as AntDesignCard, Tag } from 'antd';
import clsx from 'clsx';
import { Colors } from 'config/colors';
import dataFormat from 'dateformat';
import React, { memo } from 'react';
import { BaseProps, border, color, dimensions } from './Base';

interface ArticleProps extends BaseProps {
  url: string;
  tags: string[];
  publishedAt: string;
}

function Article(props: ArticleProps): React.ReactElement {
  const { title, description, url, tags, publishedAt } = props;

  const date = dataFormat(new Date(publishedAt), 'mmm dS, yyyy');

  function renderTags(tag: string): React.ReactNode {
    return <Tag color={Colors[tag]}>{tag}</Tag>;
  }

  return (
    <a className='flex' target='_blank' aria-label={title} href={url} rel='noopener noreferrer nofollow'>
      <AntDesignCard
        className={clsx(dimensions, border, color, 'cursor-pointer', 'flex flex-col')}
        bodyStyle={{display:'flex', flexDirection:'column', flex: 1}}
      >
        <div className='flex flex-col flex-1 py-4 px-6'>
          <span className='text-lg font-bold'>
            {title}
          </span>
          <div className='flex my-2 overflow-x-hidden'>
            {React.Children.toArray(tags.map(renderTags))}
          </div>
          <span className='text-sm font-light line-clamp-2'>{description}</span>
          <p className='mt-auto text-xs font-light mt-2 text-right'>{date}</p>
        </div>
      </AntDesignCard>
    </a>
  );
}

export default memo(Article);
