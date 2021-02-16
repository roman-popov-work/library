import { ASC } from '../constants/sortOrder';

export const sortBy = (sortOrder = ASC) => (a, b) => {
  if (sortOrder === ASC) {
    return a - b;
  }
  console.log(a, b, sortOrder);
  const first = a[sortOrder].toLowerCase();
  const second = b[sortOrder].toLowerCase();
  if (first < second) {
    return -1;
  }
  if (first > second) {
    return 1;
  }
  return 0;
};
