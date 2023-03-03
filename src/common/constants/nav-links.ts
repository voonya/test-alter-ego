import { Route } from '../enums';

interface INavLink {
  translateKey: string;
  path: Route;
  private: boolean;
}

const NAV_LINKS = [
  {
    translateKey: 'nav.news',
    path: Route.NEWS,
    private: false,
  },
  {
    translateKey: 'nav.profile',
    path: Route.PROFILE,
    private: true,
  },
];

export { NAV_LINKS };
