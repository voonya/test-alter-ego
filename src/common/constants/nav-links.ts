import { Route } from '@/common';

interface INavLink {
  translateKey: string;
  path: Route;
  private: boolean;
}

const NAV_LINKS: INavLink[] = [
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
