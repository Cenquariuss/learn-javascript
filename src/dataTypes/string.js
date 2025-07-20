const name = 'Hiep';
const occupation = 'developer';
const greeting = `Hello,I'm ${name}! I am a ${occupation}.`;
console.log(greeting); // Output: Hello, Hiep!

//.length 
const str = 'Hello, world!';
console.log(str.length); // Output: 13

// Tìm kiếm chuỗi con
const text = 'Hello, world!';
// indexOf
console.log(text.indexOf('w')); // Output: 7
console.log(text.indexOf('world')); // Output: 7
console.log(text.indexOf('JavaScript')); // Output: -1 (not found)

//lastIndexOf
console.log(text.lastIndexOf('o')); // Output: 8

//toLowerCase và toUpperCase
const string = 'Hello, World!';
console.log(string.toLowerCase()); // Output: hello, world!
console.log(string.toUpperCase()); // Output: HELLO, WORLD!

//split: tách chuỗi thành mảng
const csv = 'apple,banana,cherry';
const fruits = csv.split(',');
console.log(fruits); // Output: ['apple', 'banana', 'cherry']

//startsWith và endsWith: 
const sentence = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence.startsWith('The')); // Output: true
console.log(sentence.endsWith('dog.')); // Output: true
console.log(sentence.endsWith('lazy.')); // Output: true


