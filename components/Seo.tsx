import config from 'config';
import { NextSeo } from 'next-seo';

const { personal, contact } = config;

function Seo(): React.ReactElement {
  const description: string = `${personal.desc}`;

  const additionalLinkTags = [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
  ];

  const twitter = {
    handle: contact.twitter,
    site: contact.site,
    cardType: 'summary_large_image',
  };

  return (
    <NextSeo
      title={personal.fullName}
      description={description}
      additionalLinkTags={additionalLinkTags}
      twitter={twitter}
    />
  );
}

export default Seo;
