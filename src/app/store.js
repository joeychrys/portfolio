import cursorSlice from '../features/cursor/cursorSlice';
import routerSlice from '../features/router/routerSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    cursor: cursorSlice,
    router: routerSlice,
  },
});
