import { ArticlesProvider } from '../providers/articles/ArticlesProvider';
import { MediumArticlesProvider } from '../providers/articles/MediumArticlesProvider';

export type ArticlesConfig = {
  renderer: ArticlesProvider,
};

export type Articles = ArticlesConfig;

export const articles: ArticlesConfig = {
  renderer: new MediumArticlesProvider(
    'justinsj',
  ),
};
