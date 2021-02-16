import { createSlice } from '@reduxjs/toolkit';
import store from 'store2';
import { v4 } from 'uuid';

const authorsStorage = store.namespace('authors');

const authorsSlice = createSlice({
  name: 'authors',
  initialState: [],
  reducers: {
    addAuthor(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addAuthor } = authorsSlice.actions;

export default authorsSlice.reducer;

export const saveAuthor = (firstName, lastName) => (dispatch) => {
  const id = v4();
  const authorObject = {
    id,
    firstName,
    lastName,
  };
  authorsStorage(id, authorObject);
  dispatch(addAuthor(authorObject));
};
