// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

const salaries = {
    Mango: 100,
    Poly: 160,
    Ajax: 1470,
  };

const values = Object.values(salaries);
let sum = 0;

for (const value of values){
  sum += value;
}
console.log(sum)

// console.log(sum) поза циклом, виводиться фінальне значення суми, тобто 1730.
// виклик console.log(sum) всередині циклу показує проміжні результати, а поза циклом — остаточну суму.