import store from 'store2';

const authorsStorage = store.namespace('authors');

export const getAuthorsStateFromStorage = () => authorsStorage.getAll() || {};
