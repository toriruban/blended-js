// Знайдіть перше непарне число

const numbers = [2, 9, 6, 8, 1, 10, 12];

const notEven = numbers.find(el => el % 2 !== 0);
console.log(notEven);