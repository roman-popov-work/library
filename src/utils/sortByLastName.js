export const sortByLastName = (a, b) => {
  const lastNameA = a.lastName.toLowerCase();
  const lastNameB = b.lastName.toLowerCase();
  if (lastNameA < lastNameB) {
    return -1;
  }
  if (lastNameA > lastNameB) {
    return 1;
  }
  return 0;
};
