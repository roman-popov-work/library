import { ASC, PUBLICATION_YEAR } from '../constants/sortOrder';

export const sortBy = (sortOrder = ASC) => (a, b) => {
  if (sortOrder === ASC) {
    return a - b;
  }

  if (sortOrder === PUBLICATION_YEAR) {
    const first = Number(a[sortOrder] || '9999');
    const second = Number(b[sortOrder] || '9999');
    return first - second;
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
