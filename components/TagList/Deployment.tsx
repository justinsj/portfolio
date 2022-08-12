import { LinkOutlined } from '@ant-design/icons';
import { Tag } from 'antd';
import { Colors } from 'config/colors';
import type { Deployment } from 'config/projects';
import React, { memo, useCallback } from 'react';
import { Tuple } from 'types';
import BaseTagList from './Base';
import { Names } from '../../config/names';

interface DeploymentListProps {
  skipHeader?: boolean;
  deployment: Deployment;
}

function DeploymentList(props: DeploymentListProps): React.ReactElement {
  const { deployment, skipHeader = false } = props;

  const renderDeployment = useCallback(
    (entry: Tuple<string>): React.ReactNode => {
      const [platform, url] = entry;
      const color = Colors[platform];
      const name = Names[platform];

      // const icon: React.ReactNode = <LinkOutlined />;

      return (
        <a
          className='pb-1'
          href={url}
          aria-label={platform}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Tag className='p-2 flex items-center text-base' color={color}>
            View on {name}
          </Tag>
        </a>
      );
    },
    [],
  );

  return (
    <BaseTagList
      title='Deployments'
      className={'justify-center'}
      skipHeader={skipHeader}
      data={Object.entries(deployment)}
      renderList={renderDeployment}
    />
  );
}

export default memo(DeploymentList);
