// Дано масив чисел [1, 2, 3, 4, 5]. 
// Застосуйте метод для обчислення суми елементів масиву.

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, currentValue) => acc + currentValue, 0)
console.log(sum);