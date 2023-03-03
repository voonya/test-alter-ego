import { HttpService } from './http';
import { NewsService } from './news';
import { AuthService } from './auth';
import { LanguageService } from './language';

const httpService = new HttpService();

const newsService = new NewsService(httpService);

const authService = new AuthService();

const langService = new LanguageService();

export { newsService, authService, langService };
