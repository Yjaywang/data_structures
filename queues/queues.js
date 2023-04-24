class Queue {
  constructor() {
    this.list = [];
  }
  // push to right
  enqueue(ele) {
    this.list.push(ele);
  }
  // pop left
  dequeue() {
    this.list.shift();
  }
  // check size
  size() {
    return this.list.length;
  }
  // return left 1st
  front() {
    return this.list[0];
  }
  // clear all
  clear() {
    this.list = [];
  }
}

let queueAnimals = new Queue();
queueAnimals.enqueue("duck");
queueAnimals.enqueue("deer");
queueAnimals.enqueue("bear");
console.log(queueAnimals.size());
