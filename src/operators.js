//assignment operators
const a = 10;
const b = 1 + 1 * 2; // b = 3
const name = 'Hiep';
const isValid = true;

// unary operators:
const count = 5;
const incrementedCount = ++count; // incrementedCount = 6, tăng trước dùng sau
console.log(incrementedCount); // 6
const incrementedCount2 = count++; // incrementedCount2 = 6, count = 7, dùng trước tăng sau
const result = incrementedCount2 + 1; // incrementedCount2 đang mang giá trị là 6 và đang giữ cộng 1, khi đó reuslt sẽ hiểu là incrementedCount2 ++1 = 7

const decrementedCount = --count; // decrementedCount = 4
console.log(decrementedCount); // 4

const quality = +`5.5`; // quality = 5.5, chuyển đổi chuỗi sang số
console.log(quality); // 5.5
console.log(typeof quality); // number
const isTrue = !true; // isTrue = false, phủ định giá trị boolean

// ternary operator
// condition ? exprIfTrue : exprIfFalse

const age = 18;
const isAdult = age >= 18 ? 'Yes' : 'No'; // isAdult
const canVote = age >= 18 ? 'Yes' : 'No'; // canVote = 'Yes'
console.log(canVote); // Yes
console.log(isAdult); // Yes
