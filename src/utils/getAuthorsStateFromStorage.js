import store from 'store2';

const authorsStorage = store.namespace('authors');

export const getAuthorsStateFromStorage = () => {
  const authorsObject = authorsStorage.getAll();
  return Object.keys(authorsObject).map((key) => authorsObject[key]);
};
