import { ASC } from '../constants/sortOrder';

export const sortBy = (sortOrder = ASC) => (a, b) => {
  if (sortOrder === ASC) {
    return a - b;
  }

  const first = a[sortOrder];
  const second = b[sortOrder];
  if (first < second) {
    return -1;
  }
  if (first > second) {
    return 1;
  }
  return 0;
};
