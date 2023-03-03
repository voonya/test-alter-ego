import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { IUser } from '@/common';
import { logoutUser, loginUser, getUser, clearError } from './actions';

interface IAuthState {
  user: IUser | null;
  error: string;
  loading: boolean;
}

const user = createReducer<IUser | null>(null, {
  [loginUser.fulfilled.type]: (_, { payload }) => payload,
  [loginUser.rejected.type]: () => null,

  [logoutUser.fulfilled.type]: () => null,

  [getUser.fulfilled.type]: (_, { payload }) => payload,
  [getUser.rejected.type]: () => null,
});

const loading = createReducer<boolean>(false, {
  [loginUser.pending.type]: () => true,
  [loginUser.fulfilled.type]: () => false,
  [loginUser.rejected.type]: () => false,

  [logoutUser.pending.type]: () => true,
  [logoutUser.fulfilled.type]: () => false,
  [logoutUser.rejected.type]: () => false,

  [getUser.pending.type]: () => true,
  [getUser.fulfilled.type]: () => false,
  [getUser.rejected.type]: () => false,
});

const error = createReducer<string>('', {
  [loginUser.pending.type]: () => '',
  [loginUser.rejected.type]: (_, { payload }) => payload,

  [logoutUser.pending.type]: () => '',
  [logoutUser.rejected.type]: (_, { payload }) => payload,

  [clearError.type]: () => '',
});

const authReducer = combineReducers<IAuthState>({
  user,
  loading,
  error,
});

export { authReducer, getUser, loginUser, logoutUser, clearError };
