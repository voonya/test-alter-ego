import { Route } from '../common';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../store';

interface IPublicRouteProps {
  children: JSX.Element;
  redirectLink?: Route;
}

export const PublicRoute = ({ children, redirectLink = Route.HOME }: IPublicRouteProps) => {
  const currentPath = useLocation().pathname;
  const user = useAppSelector((state) => state.auth.user);

  const restrictedRoutes: string[] = [Route.LOGIN];

  if (user && restrictedRoutes.includes(currentPath)) {
    return <Navigate to={redirectLink} replace />;
  }

  return children;
};
