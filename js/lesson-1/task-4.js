// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'): 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

const userInput = prompt('Enter your minutes');

const totalMinutes = Number(userInput);
const hours = Math.floor(totalMinutes / 60); // Кількість годин
const minutes = totalMinutes % 60; // Кількість хвилин

const formatted = String(hours).padStart(2, '0') + ':' + String(minutes).padStart(2, '0');
console.log(formatted);