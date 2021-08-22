import { Article } from '../../types';

/**
 * Base class for rendering articles
 */
export class ArticlesProvider {
  /**
   * Returns Article[]
   */
  async getArticles(): Promise<Article[]> {
    return [];
  }
}