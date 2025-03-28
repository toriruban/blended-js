// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'. 

const userInput = Number(prompt('Enter a number'));
const number = userInput;

if (number === 10){
    console.log(alert("Вірно"))
} else {
    console.log(alert("Невірно"))
}

console.log(number)