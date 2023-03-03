import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { authService } from '@/services';
import { i18n } from '@/utils/i18n';

enum AuthAction {
  LOGIN = 'AUTH/LOGIN',
  LOGOUT = 'AUTH/LOGOUT',
  GET_USER = 'AUTH/GET_USER',
  CLEAR_ERRORS = 'AUTH/CLEAR_ERRORS',
}

interface ILoginData {
  username: string;
  password: string;
}

const loginUser = createAsyncThunk(
  AuthAction.LOGIN,
  async (data: ILoginData, { rejectWithValue }) => {
    const user = await authService.login(data.username, data.password);

    if (!user) {
      return rejectWithValue(i18n.t('login.incorrectDataError'));
    }

    return user;
  },
);

const logoutUser = createAsyncThunk(AuthAction.LOGOUT, async (_, { rejectWithValue }) => {
  const user = await authService.logout();

  if (!user) {
    return rejectWithValue(i18n.t('logout.alreadyLogoutError'));
  }

  return user;
});

const getUser = createAsyncThunk(AuthAction.GET_USER, async (_) => {
  const user = await authService.getUser();

  return user;
});

const clearError = createAction(AuthAction.CLEAR_ERRORS);

export { loginUser, logoutUser, getUser, clearError };
