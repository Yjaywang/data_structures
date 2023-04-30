// ES6 create Map
let myMap = new Map();

var keyString = "I am string",
  keyObj = {},
  keyFunc = function () {},
  keyNumber = 1;

// add element by different type of key
myMap.set(keyString, "string value"); //string
myMap.set(keyObj, { obj: 1 }); // obj
myMap.set(keyFunc, function () {
  console.log("I am function");
}); // function
myMap.set(keyNumber, 100); //number

// map size
myMap.size; // 4

// value search
myMap.get(keyObj); // {obj: 1}

// check value exist
myMap.has(keyString); //  true

// delete element by key
myMap.delete(keyNumber);
myMap.size; // 3

// map change to array
[...myMap.values()]; // ["string value", {obj: 1}, ƒ]

//iterate values
for (let i of myMap.values()) {
  console.log("value: ", i);
}
//iterate keys
for (let i of myMap.keys()) {
  console.log("key: ", i);
}
// iterate key value
for (let [key, value] of myMap) {
  console.log("key value: ", key, value);
}
