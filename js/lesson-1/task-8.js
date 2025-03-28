// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

function min(a, b) {
    // Перетворюємо вхідні значення на числа
    const numA = Number(a);
    const numB = Number(b);
  
    // Перевіряємо, чи хоча б одне значення є NaN
    if (isNaN(numA) || isNaN(numB)) {
      return 'Not a number!';
    }
  
    // Повертаємо менше число
    return numA < numB ? numA : numB;
  }