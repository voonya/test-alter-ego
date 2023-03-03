import { ReactNode, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { getUser } from '@/store/auth';
import { authService } from '@/services';

interface IUserProviderProps {
  children: ReactNode;
}

const UserProvider = ({ children }: IUserProviderProps) => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);
  const userExist = authService.userExist();

  useEffect(() => {
    if (userExist && !auth.user && !auth.loading) {
      dispatch(getUser());
    }
  }, [dispatch, auth]);

  return <>{children}</>;
};

export { UserProvider };
