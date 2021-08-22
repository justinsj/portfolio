import { Article } from '../../types';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { async } from '../../utils';

export class DevToArticlesProvider {
  private username: string;
  private apiUrl: string;

  constructor(username: string, apiUrl: string){
    this.username = username;
    this.apiUrl = apiUrl;
  }
  async getArticles(): Promise<Article[]> {
    const {username, apiUrl} = this;
    if (apiUrl == null) return [];
    if (username == null) return [];

    const articles: Article[] = [];

    const url: string = `${apiUrl}`;
    const request: AxiosRequestConfig = {
      params: {
        username: username,
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
        id: id.toString(),
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