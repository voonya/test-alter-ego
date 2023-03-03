import { Route, BASENAME } from '@/common';

function getPath(...path: Route[]) {
  return `/${BASENAME}/${path.join('/')}`;
}

export { getPath };
