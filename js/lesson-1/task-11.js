// Напиши функцію printNumbers(n), яка приймає число n і виводить у консоль всі числа від 1 до n, 
//але з такими правилами:
// Якщо число парне, вивести його звичайно.
// Якщо число непарне, додати до нього ! (наприклад, 3!, 7!).

function printNumbers(n) {
    for (let i = 1; i <= n; i++){
        if (i % 2 === 0){
            console.log(i)
        } else {
            console.log(`${i}!`)
        }
    }
}

printNumbers(10); 