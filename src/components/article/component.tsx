import { memo } from 'react';
import { IArticle } from '@/common';
import s from './styles.module.scss';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '@/store';

interface IArticleProps {
  article: IArticle;
  onDelete: (id: string) => void;
}
const Article = memo(({ article, onDelete }: IArticleProps) => {
  const { t } = useTranslation();

  const user = useAppSelector((state) => state.auth.user);

  const onDeleteHandle = () => {
    onDelete(article.id + '');
  };
  return (
    <div className={s.wrapper}>
      <h3>
        <span>{article.id}</span>
        {article.title}
      </h3>
      <p>{article.body}</p>
      {user && (
        <Button variant='contained' onClick={onDeleteHandle}>
          {t('article.deleteBtn')}
        </Button>
      )}
    </div>
  );
});

export { Article };
