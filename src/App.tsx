import './App.scss';
import './utils/i18n';
import {
  BrowserRouter,
  Route as RouterRoute,
  Routes as RouterRoutes,
  Navigate,
} from 'react-router-dom';
import { HomePage, NewsPage, ProfilePage, LoginPage } from '@/pages';
import { Route, BASENAME } from '@/common';
import { LanguageProvider, ProtectedRoute, PublicRoute, UserProvider } from '@/hoc';
import './App.scss';

function App() {
  return (
    <LanguageProvider>
      <UserProvider>
        <BrowserRouter basename={`/${BASENAME}`}>
          <RouterRoutes>
            <RouterRoute
              path={Route.HOME}
              element={
                <PublicRoute>
                  <HomePage />
                </PublicRoute>
              }
            />
            <RouterRoute
              path={Route.NEWS}
              element={
                <PublicRoute>
                  <NewsPage />
                </PublicRoute>
              }
            />
            <RouterRoute
              path={Route.PROFILE}
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <RouterRoute
              path={Route.LOGIN}
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <RouterRoute path={'*'} element={<Navigate to={Route.HOME} />} />
          </RouterRoutes>
        </BrowserRouter>
      </UserProvider>
    </LanguageProvider>
  );
}

export default App;
