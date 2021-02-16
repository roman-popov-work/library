import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import { getAuthorsFromStorage } from './utils/getAuthorsFromStorage';

const preloadedState = {
  authors: getAuthorsFromStorage(),
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
