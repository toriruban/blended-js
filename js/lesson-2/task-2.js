// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

const logins = ["Peter", "John", "Igor", "Sasha"];

function checkLogin(array) {
    const userInput = prompt('What is your name?');
    
    // Перевірка, чи міститься userInput у масиві array
    if (array.includes(userInput)) {
        alert(`Welcome, ${userInput}!`);
    } else {
        alert('User not found');
    }
}
