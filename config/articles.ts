import { Article } from '../types';
import config from './index';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { async } from '../utils';

/**
 * Base class for rendering articles
 */
export class ArticlesRenderer {
  /**
   * Returns Article[]
   */
  async getArticles(): Promise<Article[]> {
    return [];
  }
}

export class DevToArticlesRenderer {
  private username: string;
  private apiUrl: string;

  constructor(username: string, apiUrl: string){
    this.username = username;
    this.apiUrl = apiUrl;
  }
  async getArticles(): Promise<Article[]> {
    if (this.apiUrl == null) return [];
    if (this.username == null) return [];

    const articles: Article[] = [];

    const url: string = `${this.apiUrl}`;
    const request: AxiosRequestConfig = {
      params: {
        username: this.username,
      },
    };

    const [response, error] = await async<AxiosResponse, AxiosError>(
      axios.get(url, request),
    );

    if (error) {
      const message = error?.response?.data?.error?.message;
      console.log(message);
      return articles;
    }

    response?.data.forEach((data: any) => {
      const {
        id,
        title,
        description,
        tag_list: tags,
        published_at: publishedAt,
        url,
      } = data;

      const article: Article = {
        id,
        title,
        description,
        url,
        tags,
        publishedAt,
      };
      articles.push(article);
    });

    return articles;
  }
}
export type ArticlesConfig = {
  renderer: ArticlesRenderer,
};

export type Articles = ArticlesConfig;

export const articles: ArticlesConfig = {
  renderer: new DevToArticlesRenderer(
    'karanpratapsingh',
    'https://dev.to/api/articles'
  ),
};
