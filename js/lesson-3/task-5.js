// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і 
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sorry, it is not an array!'.

function findSmallestNumber(numbers) {
    // Спочатку перевіряємо, чи numbers є масивом
    if (!Array.isArray(numbers)) {
      return 'Sorry, it is not an array!';
    }
    
    // Ініціалізуємо змінну smallest першим елементом масиву
    let smallest = numbers[0];
    
    // Перебираємо масив починаючи з другого елемента
    for (let i = 1; i < numbers.length; i++) {
      // Якщо знайдене число менше за поточне smallest, оновлюємо smallest
      if (numbers[i] < smallest) {
        smallest = numbers[i];
      }
    }
    
    return smallest;
  }
  
  const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
  console.log(findSmallestNumber(numbers)); // має вивести 2
  