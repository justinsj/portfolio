import { Card as AntDesignCard } from 'antd';
import clsx from 'clsx';
import Image from 'next/image';
import React, { memo } from 'react';
import { background, BaseProps, border, color, dimensions } from './Base';

interface ResearchProps extends BaseProps {
  banner: string;
}

function Research(props: ResearchProps): React.ReactElement {
  const { title, banner, description, onClick } = props;

  return (
    <AntDesignCard
      className={clsx(dimensions, border, color)}
      onClick={onClick}
      cover={
        <div className={'border border-transparent'}>
          <Image
            className={background}
            src={banner}
            height={565}
            width={400}
            objectFit='cover'
            alt={title}
          />
        </div>
      }
    >
      <div className='flex flex-col pt-2 pb-4 px-6'>
        <span className='text-lg font-bold'>{title}</span>
        <p className='mt-1 text-sm font-light line-clamp-2'>{description}</p>
      </div>
    </AntDesignCard>
  );
}

export default memo(Research);
