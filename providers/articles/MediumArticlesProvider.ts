import { Article } from '../../types';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { async } from '../../utils';

export class MediumArticlesProvider {
  private username: string;
  constructor(username: string){
    this.username = username;
  }

  async getArticles(): Promise<Article[]> {
    const {username} = this;
    if (username == null) return [];

    const articles: Article[] = [];

    const url: string = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`;
    const request: AxiosRequestConfig = {};

    const [response, error] = await async<AxiosResponse, AxiosError>(
      axios.get(url, request),
    );

    if (error) {
      const message = error?.response?.data?.error?.message;
      console.log(message);
      return articles;
    }

    response?.data.items.forEach((data: any) => {
      const {
        guid,
        title,
        description,
        categories,
        pubDate,
        link,
      } = data;

      const guidItems = guid.split("/");
      const id = guidItems[guidItems.length - 1];

      const article: Article = {
        id,
        title,
        description: description.replace(/<(.*?)>/g,''), // Remove HTML format
        url: link,
        tags: categories.map((category: string) => category.replace(/-/g,' ')),
        publishedAt: pubDate,
      };
      articles.push(article);
    });

    return articles;
  }
}