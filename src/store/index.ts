import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { reducer as theme } from './slice/theme-slice';
import { getCookieValue } from '../utils';

const reducer = combineReducers({
  theme
});

export const store = configureStore({
  reducer,
  preloadedState: {
    theme: {
      mode: (getCookieValue('theme') as 'dark' | 'light') ?? 'light'
    }
  }
});

store.subscribe(() => {
  console.log(store.getState());
  localStorage.setItem('theme', JSON.stringify(store.getState().theme.mode));
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
