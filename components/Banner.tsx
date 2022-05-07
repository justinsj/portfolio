import config from 'config';
import React, { memo, useMemo } from 'react';
import { getRandomColorPair } from 'utils';
import ColorText from './ColorText';
import Conditional from './Conditional';
import { background } from './Card/Base';
import Image from 'next/image';

const { personal } = config;

interface BannerProps {
  onAbout: VoidFunction;
  onContact: VoidFunction;
}

function Banner(props: BannerProps): React.ReactElement {
  const { onAbout, onContact } = props;
  const [aboutColor, contactColor] = useMemo(getRandomColorPair, []);

  return (
    <div className='banner flex flex-col flex-1 justify-center px-6 lg:px-10 py-10 dark:text-white'>
      <Conditional condition={personal.photo}>
        <div className='flex self-center sm:self-start mb-5 sm:mb-3 lg:mb-5 h-32 w-32 lg:w-44 lg:h-44 relative'>
          <Image
            className='rounded-full' src={personal.photo ? personal.photo : ''}
            layout='fill'
            objectFit='cover'
            alt={`${personal.fullName}'s profile photo`}
          />
        </div>
      </Conditional>

      <h1 className='text-3xl lg:text-5xl font-bold dark:text-white'>
        Hi, I am {personal.name}
      </h1>
      <p className='my-2 text-lg lg:my-4 lg:text-2xl font-light'>
        {personal.title}
      </p>
      <p className='lg:text-xl font-light'>
        Read more
        <ColorText
          className='mx-2'
          text='about me'
          backgroundColor={aboutColor}
          onClick={onAbout}
        />
        or
        <ColorText
          className='ml-2'
          text='contact me'
          backgroundColor={contactColor}
          onClick={onContact}
        />
      </p>
      <Conditional condition={personal.available}>
        <p className='lg:text-xl font-light mt-4 lg:mt-6'>
          <ColorText
            className='bg-black text-white dark:bg-white dark:text-black'
            text={`I'm available for hire!`}
            onClick={onContact}
          />
        </p>
      </Conditional>
    </div>
  );
}

export default memo(Banner);
