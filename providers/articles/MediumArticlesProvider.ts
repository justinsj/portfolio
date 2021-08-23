import { Article } from '../../types';

const { parse } = require('medium-rss-to-json');

export class MediumArticlesProvider {
  private username: string;
  constructor(username: string){
    this.username = username;
  }

  async getArticles(): Promise<Article[]> {
    const {username} = this;
    if (username == null) return [];

    const articles: Article[] = [];

    const url: string = `https://medium.com/feed/@${username}`;

    const response = await parse(url);

    response.items.forEach((data: any) => {
      const {
        id,
        title,
        content_encoded,
        published,
        category,
        link,
      } = data;

      const article: Article = {
        id,
        title,
        description: content_encoded.replace(/<(.*?)>/g,''), // Remove HTML format
        url: link,
        tags: category.map((tag: string) => tag.replace(/-/g,' ')),
        publishedAt: new Date(published).toISOString(),
      };
      articles.push(article);
    });


    return articles;
  }
}