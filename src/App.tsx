import './App.scss';
import './utils/i18n';
import { LanguagePicker } from './components';
import { BrowserRouter, Route, Routes as RouterRoutes } from 'react-router-dom';
import { HomePage, NewsPage, ProfilePage } from './pages';
import { Routes } from './common';
import { PROJECT_REPO_NAME } from './common';

function App() {
  return (
    <div className='App'>
      <BrowserRouter basename={`/${PROJECT_REPO_NAME}`}>
        <RouterRoutes>
          <Route path={Routes.HOME} element={<HomePage />} />
          <Route path={Routes.NEWS} element={<NewsPage />} />
          <Route path={Routes.PROFILE} element={<ProfilePage />} />
        </RouterRoutes>
      </BrowserRouter>
      <LanguagePicker />
    </div>
  );
}

export default App;
