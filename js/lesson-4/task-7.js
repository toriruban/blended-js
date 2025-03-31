// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту. 
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

const stringArray = ['banana', 'orange', 'apple', 'pear'];

const sortedArray = stringArray.toSorted((a, b) => a[0].localeCompare(b[0]));
console.log(sortedArray)