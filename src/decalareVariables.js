// Var
console.log(name);
var name = `John Doe`; // Hoisting: undefined
// Thực chất js sẽ hiểu là:
var name2;
console.log(name2);
name2 = `John Doe`; // Hoisting: undefined
// => Hoisting: Biến được khai báo trước khi sử dụng, nhưng giá trị sẽ là undefined cho đến khi gán giá trị.
// Function declaration
sayHi();
function sayHi() {
  console.log('Hi!');
}
// => Hoisting: Function declaration được hoisted hoàn toàn, có thể gọi trước khi khai báo.
// Function expression
sayHello(); // TypeError: sayHello is not a function
var sayHello = function () {
  console.log('Hello!');
}; // => Hoisting: Function expression không được hoisted, chỉ có biến được hoisted với giá trị undefined.

//let
console.log(nameLet); // ReferenceError: Cannot access 'nameLet' before initialization
let nameLet = `Jane Doe`; // => Hoisting: Biến được hoisted nhưng không thể truy cập trước khi khai báo
