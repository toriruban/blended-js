// Напиши функцію isPalindrome(str), яка перевіряє, чи є рядок паліндромом
// 📍 Паліндром – це слово або фраза, яка читається однаково зліва направо і справа наліво.
// 📍 Наприклад: "radar", "level", "мадам" – паліндроми, а "hello" – ні.

function isPalindrome(str) {
    const strReverse = str.split("").reverse().join("");
    return str === strReverse; 
}





console.log(isPalindrome("radar")); // true
console.log(isPalindrome("level")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("топот")); // true