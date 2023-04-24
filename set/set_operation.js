// union--------------------------------------------------
const union = (firstSet, otherSet) => {
  // store union, use es6 Spread syntax
  return new Set([...firstSet, ...otherSet]);
};

// example 1
let a = new Set([1, 2, 3]);
let b = new Set([2, 3, 4, 5, 6]);
union(a, b); // 1, 2, 3, 4, 5, 6

// example 2
let c = new Set();
c.add(1);
c.add(2);
c.add(3);
let d = new Set([1, 2, 3]);
union(a, b); // {1, 2, 3, 4, 5, 6}

// intersection------------------------------------------------
const intersection = (firstSet, otherSet) => {
  // store intersectionSet
  let intersectionSet = new Set();
  firstSet.forEach((i) => {
    if (otherSet.has(i) == true) {
      intersectionSet.add(i);
    }
  });
  // get the same value
  return intersectionSet;
};
// example
let e = new Set([1, 2, 3]);
let f = new Set([2, 3, 4, 5, 6]);
intersection(e, f); // {2, 3}

// difference -----------------------------------------
// union - intersection
const difference = (firstSet, otherSet) => {
  // store union
  let differenceSet = union(firstSet, otherSet);
  let intersectionSet = intersection(firstSet, otherSet);
  differenceSet.forEach((i) => {
    if (intersectionSet.has(i) == true) {
      differenceSet.delete(i);
    }
  });

  return differenceSet;
};
// example
let g = new Set([1, 2, 3]);
let h = new Set([2, 3, 4, 5, 6]);
difference(g, h); // {1, 4, 5, 6}

// subtracting -----------------------------------------
// firstset - otherset
const subtracting = (firstSet, otherSet) => {
  let subtractingSet = new Set([...firstSet]);
  otherSet.forEach((i) => {
    if (subtractingSet.has(i) == true) {
      subtractingSet.delete(i);
    }
  });
  return subtractingSet;
};

// example
let i = new Set([1, 2, 3]);
let j = new Set([2, 3, 4, 5, 6]);
console.log(subtracting(i, j)); // {1}
