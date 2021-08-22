import { ArticlesProvider } from '../providers/articles/ArticlesProvider';
import { DevToArticlesProvider } from '../providers/articles/DevToArticlesProvider';

export type ArticlesConfig = {
  renderer: ArticlesProvider,
};

export type Articles = ArticlesConfig;

export const articles: ArticlesConfig = {
  renderer: new DevToArticlesProvider(
    'karanpratapsingh',
    'https://dev.to/api/articles'
  ),
};
