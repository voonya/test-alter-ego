import { useEffect, useState } from 'react';
import CircularProgress from '@mui/joy/CircularProgress';
import { Layout } from '../layouts';

const NewsPage = () => {
  const [news, setNews] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    Promise.resolve(['1', '2', '3'])
      .then((data) => setNews(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Layout>
      <div>
        {loading && <CircularProgress />}
        {!loading && news.map((article) => <p key={article}>{article}</p>)}
      </div>
    </Layout>
  );
};

export { NewsPage };
