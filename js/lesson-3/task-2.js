// Дано масив об'єктів. Створіть новий масив, що містить всі значення 
// з масивів values кожного об'єкту, збережених в одному масиві. 
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

const data = [
 { id: 1, values: [1, 2, 3] },
 { id: 2, values: [4, 5, 6] },
 { id: 3, values: [7, 8, 9] },
];

const value = data.flatMap(el => el.values);
console.log(value)


// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);

// console.log(sum); // Виведе: 15
