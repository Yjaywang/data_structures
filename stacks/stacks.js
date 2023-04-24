class Stack {
  constructor() {
    this.list = [];
  }
  // add from top
  push(ele) {
    this.list.push(ele);
  }
  // remove from top
  pop() {
    return this.list.pop();
  }
  // size of stack
  size() {
    return this.list.length;
  }
  // check top
  top() {
    return this.list[this.list.length - 1];
  }
  // clear all
  clear() {
    this.list = [];
  }
}
let stack = new Stack();
stack.push("盤子 1");
stack.push("盤子 2");

console.log(stack.size());
