import { useEffect, useState } from 'react';
import CircularProgress from '@mui/joy/CircularProgress';
import { Layout } from '@/layouts';
import { newsService } from '@/services';
import { IArticle } from '@/common';
import { Article } from '@/components';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Container } from '@mui/material';
import s from './styles.module.scss';
import variables from '@/variables.module.scss';

const NewsPage = () => {
  const { t } = useTranslation();

  const [news, setNews] = useState<IArticle[]>([]);
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(0);

  useEffect(() => {
    fetchNews();
  }, [page]);

  const loadMoreHandle = () => {
    setPage((prev) => prev + 1);
  };

  const fetchNews = () => {
    setLoading(true);

    newsService
      .getArticles(page)
      .then((data) => setNews((prev) => [...prev, ...data]))
      .finally(() => setLoading(false));
  };
  const deleteArticle = async (id: string) => {
    setLoading(true);
    const article = await newsService.deleteArticle(id);

    if (article) {
      setNews([...news].filter((art) => art.id !== article.id));
    }

    setLoading(false);
  };

  return (
    <Layout>
      <Container>
        <div className={s.wrapper}>
          {news.length === 0 && <div>No articles</div>}
          <div>
            {news.map((article) => (
              <Article key={article.id} article={article} onDelete={deleteArticle} />
            ))}
          </div>

          <Button variant='contained' onClick={loadMoreHandle}>
            {t('news.loadMoreBtn')}
          </Button>
          {loading && (
            <div className={s.spinnerWrapper}>
              <CircularProgress sx={{ color: variables.color }} />
            </div>
          )}
        </div>
      </Container>
    </Layout>
  );
};

export { NewsPage };
