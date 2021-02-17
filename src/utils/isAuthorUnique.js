export const isAuthorUnique = (firstName, lastName, authors = []) => {
  if (!firstName || !lastName) {
    return false;
  }

  const foundAuthor = Object.keys(authors)
    .map((id) => authors[id])
    .find((author) => (
      firstName.toLowerCase() === author.firstName.toLowerCase()
      && lastName.toLowerCase() === author.lastName.toLowerCase()
    ));

  return !foundAuthor;
};
