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

//includes: kiểm tra chuỗi con 
console.log(sentence.includes('quick')); // Output: true
console.log(sentence.includes('cat')); // Output: false

//replace: thay thế chuỗi con 
const originalText = 'I love JavaScript JavaScript!';
const newText = originalText.replace('JavaScript', 'programming');// Output: I love programming!
const newText2 = originalText.replaceAll('JavaScript', 'programming'); // Thay thế tất cả 
const newText3 = originalText.replace('asdasd', 'programming'); // Không tìm thấy chuỗi con, không thay thế gì
console.log(newText); // Output: I love programming!
console.log(newText2); // Output: I love programming programming!
console.log(newText3); // Output: I love JavaScript JavaScript!

// repeat: lặp lại chuỗi
const repeatedString = 'Hello! '.repeat(3);
console.log(repeatedString); // Output: Hello! Hello! Hello!

//slice: cắt chuỗi
// slice(start, end) - cắt từ vị trí start đến end (không bao gồm end, nếu không có end thì cắt đến hết chuỗi, nếu start âm thì tính từ cuối chuỗi, nếu)
const slicedString = 'Hello, world!'.slice(0, 5);
console.log(slicedString); // Output: Hello
const slicedString2 = 'Hello, world!'.slice(7);
console.log(slicedString2); // Output: world!
const slicedString3 = 'Hello, world!'.slice(-6);
console.log(slicedString3); // Output: world!
const slicedString4 = 'Hello, world!'.slice(-6, -1);
console.log(slicedString4); // Output: world


