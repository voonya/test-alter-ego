import { HttpService } from './http';
import { IArticle, ApiEndpoint, NewsApiEndpoint } from '@/common';

class NewsService {
  private _limit = 10;
  private _httpService;

  constructor(httpService: HttpService) {
    this._httpService = httpService;
  }

  public getArticles(page = 0, count = this._limit): Promise<IArticle[]> {
    return this._httpService.get(`${ApiEndpoint.NEWS}?_start=${page * count}&_limit=${count}`);
  }

  public async deleteArticle(id: string): Promise<IArticle | null> {
    console.log(id);
    const article = await this.getArticle(id);
    console.log(article);
    if (article) {
      await this._httpService.delete(
        `${ApiEndpoint.NEWS}${NewsApiEndpoint.DELETE.replace(':id', id)}`,
      );
    }

    return article;
  }

  public async getArticle(id: string): Promise<IArticle | null> {
    const article = await this._httpService
      .get(`${ApiEndpoint.NEWS}${NewsApiEndpoint.GET_BY_ID.replace(':id', id)}`)
      .then((data) => {
        console.log(data);

        if (Object.keys(data).length === 0) {
          return null;
        }

        return data;
      });

    return article;
  }
}

export { NewsService };
