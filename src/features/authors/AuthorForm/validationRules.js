export const firstNameRules = [
  {
    required: true,
    message: 'Пожалуйста, заполните имя автора!',
  },
  {
    max: 20,
    message: 'Имя автора не должно быть длиннее 20 букв!',
  },
];

export const lastNameRules = [
  {
    required: true,
    message: 'Пожалуйста, заполните фамилию автора!',
  },
  {
    max: 20,
    message: 'Фамилия автора не должна быть длиннее 20 букв!',
  },
];
