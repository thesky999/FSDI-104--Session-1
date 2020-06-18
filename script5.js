const numbers = [2,5,8,7,10,4,9];

console.table(numbers);

console.log(numbers[3]);

const months = new Array('Jan','Feb','Mar','Apr','May');
console.log(months[4]);

months.push("Jun");

console.unshift("Zero");

months.pop();
months.pop();

months.shift();

months.splice=(4,1);

months.reverse();
console.table(months);

