// Напишіть функцію calculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.

function calculateAverage(numbers){
    let arithmeticMean = 0;
    let sum = 0;

    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i];
        arithmeticMean = sum / numbers.length;
    }
    
    return arithmeticMean;
}