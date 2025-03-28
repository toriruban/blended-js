// Напишіть функцію findLongestWord(string), яка 
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

function findLongestWord(string) {
    const singleWord = string.split(' ');
    let longestWord = singleWord[0];

    for (let i = 1; i < singleWord.length; i++){
        if (singleWord.length > longestWord){
            longestWord = singleWord[i];
        }

    }
    return longestWord;   
}

console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

// У пошуку найдовшого слова ми працюємо з двома різними речами:

// singleWord – це масив слів (наприклад, ["London", "is", "the", "capital", "of", "Great", "Britain"]).
// Тому, коли ми перебираємо масив, звертаємося до конкретного елемента як singleWord[i].
// Наприклад, singleWord[0] – це "London", singleWord[1] – це "is" тощо.

// longestWord – це окрема змінна, яка зберігає одне конкретне слово (найдовше, яке ми знайшли на цей момент).
// Вона не є масивом, а звичайним рядком. Тому в ній немає потреби звертатися через індекс, щоб отримати «слово» – це вже і є «слово».
// Якщо б тобі потрібно було отримати окрему літеру з цього слова, то ти б дійсно зверталася як longestWord[0]. 
//Але для пошуку найдовшого слова ти порівнюєш довжини рядків, тобто longestWord.length із singleWord[i].length.