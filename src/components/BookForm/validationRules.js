const title = [
  {
    required: true,
    message: 'Пожалуйста, заполните заголовок',
  },
  {
    max: 30,
    message: 'Заголовок книги не должен быть длинее 30 символов',
  },
];

const authorList = [
  {
    required: true,
    message: 'Пожалуйста, выберите минимум одного автора',
  },
];

const numberOfPages = [
  {
    required: true,
    message: 'Пожалуйста, укажите количество страниц',
  },
  {
    pattern: new RegExp(/^(10000|[1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])$/),
    message: 'Количество страниц не может быть меньше 1 и больше 10000',
  },
];

const publisherName = [
  {
    max: 30,
    message: 'Название издательства не должно быть длинее 30 символов',
  },
];

const publicationYear = [
  {
    validator: (_, value) => (value.year() >= 1800 ? Promise.resolve() : Promise.reject('Год публикации не может быть меньше 1800')), // eslint-disable-line prefer-promise-reject-errors
  },
];

const releaseDate = [
  {
    validator: (_, value) => (value.isSameOrAfter('1800-01-01') ? Promise.resolve() : Promise.reject('Дата выхода в тираж не может быть раньше чем 01.01.1800')), // eslint-disable-line prefer-promise-reject-errors
  },
];

const isbn = [
  {
    pattern: new RegExp(/^(?:ISBN(?:-1[03])?:? )?(?=[0-9X]{10}$|(?=(?:[0-9]+[- ]){3})[- 0-9X]{13}$|97[89][0-9]{10}$|(?=(?:[0-9]+[- ]){4})[- 0-9]{17}$)(?:97[89][- ]?)?[0-9]{1,5}[- ]?[0-9]+[- ]?[0-9]+[- ]?[0-9X]$/),
    message: 'Некорректный ISBN',
  },
];

export const validationRules = {
  title,
  authorList,
  numberOfPages,
  publisherName,
  publicationYear,
  releaseDate,
  isbn,
};
