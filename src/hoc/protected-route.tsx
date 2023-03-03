import { Route } from '@/common';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '@/store';

interface IProtectedRouteProps {
  children: JSX.Element;
  redirectLink?: Route;
}

export const ProtectedRoute = ({ children, redirectLink = Route.HOME }: IProtectedRouteProps) => {
  const user = useAppSelector((state) => state.auth.user);

  if (!user) {
    return <Navigate to={redirectLink} replace />;
  }

  return children;
};
