// ES6 Set
let instruments = new Set();

instruments.add("piano");
instruments.has("guitar"); // false
instruments.add("drum");
instruments.delete("guitar"); // 裡面根本沒有 guitar 所以回傳 false

console.log(instruments); //Set(2) { 'piano', 'drum' }
console.log(instruments.size); // 2
console.log([...instruments]); //['piano', 'drum']
console.log(Array.from(instruments)); // or use Array.from,
