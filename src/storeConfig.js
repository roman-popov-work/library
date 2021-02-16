import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import { getAuthorsStateFromStorage } from './utils/getAuthorsStateFromStorage';
import { getBooksStateFromStorage } from './utils/getBooksStateFromStorage';

const preloadedState = {
  authors: getAuthorsStateFromStorage(),
  books: getBooksStateFromStorage(),
};

export const store = configureStore({
  reducer: rootReducer,
  preloadedState,
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => {
    /* eslint-disable-next-line global-require */
    const newRootReducer = require('./rootReducer').default;
    store.replaceReducer(newRootReducer);
  });
}
