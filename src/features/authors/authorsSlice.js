import { createSlice } from '@reduxjs/toolkit';
import store from 'store2';
import { v4 } from 'uuid';

const authorsStorage = store.namespace('authors');

const authorsSlice = createSlice({
  name: 'authors',
  initialState: {},
  reducers: {
    addAuthor(state, action) {
      const { author } = action.payload;
      /* eslint-disable no-param-reassign */
      state[author.id] = author;
      /* eslint-enable */
    },
  },
});

export const { addAuthor } = authorsSlice.actions;

export default authorsSlice.reducer;

export const saveAuthor = (firstName, lastName) => (dispatch) => {
  const id = v4();
  const author = {
    id,
    firstName,
    lastName,
  };
  authorsStorage(id, author);
  dispatch(addAuthor({ author }));
};
