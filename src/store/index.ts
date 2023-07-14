import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { initialState as initialAuthState, reducer as auth } from './slice/auth-slice';
import { reducer as theme } from './slice/theme-slice';
import { getCookieValue } from '../common/utils';
import { AUTH_STATE_LOCAL_STORAGE_KEY, THEME_MODE_LOCAL_STORAGE_KEY } from '../common/constants';

const reducer = combineReducers({
  auth,
  theme
});

export const store = configureStore({
  reducer,
  preloadedState: {
    theme: {
      mode: (getCookieValue('theme') as 'dark' | 'light') ?? 'light'
    },
    auth: {
      ...JSON.parse(localStorage.getItem('auth') ?? JSON.stringify(initialAuthState))
    }
  }
});

store.subscribe(() => {
  console.log(store.getState());
  localStorage.setItem(THEME_MODE_LOCAL_STORAGE_KEY, JSON.stringify(store.getState().theme.mode));
  localStorage.setItem(AUTH_STATE_LOCAL_STORAGE_KEY, JSON.stringify(store.getState().auth));
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
