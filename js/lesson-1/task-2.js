// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

const min = Math.floor(Math.random() * (59 - 0) + 0);

if (min >= 0 && min <=14){
    alert(`${min} входить в першу чверть`);
} else if (min >= 15 && min <= 29){
   alert(`${min} входить в другу чверть`);
} else if (min >= 30 && min <= 44){
   alert(`${min} входить в третю чверть`);
} else if (min >= 45 && min <= 59) {
   alert(`${min} входить в четверту чверть`);
} else {
    alert('Enter appropriate number')
}
