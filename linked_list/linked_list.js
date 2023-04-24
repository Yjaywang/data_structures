// append(ele):  add a node to tail
// insert(position, ele): add a node at specific position
// removeAt(position): remove specific position's node
// remove (ele): remove specific node
// indexOf(ele):  return node's position，return -1 if not exist
// toString(): 把 List 物件內容轉換成字串
// size(): return how many nodes in linked list

class LinkedListNode {
  constructor(ele) {
    this.next = null;
    this.ele = ele;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(ele) {
    let newNode = new LinkedListNode(ele);

    // first check nodelist empty or not
    if (this.head == null) {
      // 1. if yes, head is new node
      this.head = newNode;
    } else {
      // 2. if not, tail node need to point to new node
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }

  insert(position, ele) {
    // check position reasonable
    if (position > -1 && position <= this.length) {
      let newNode = new LinkedListNode(ele);
      let current = this.head;

      // 1.1 check new node is head (position ==0)
      if (position == 0) {
        newNode.next = current;
        this.head = newNode;
      } else {
        // 1.2 loop current = previous, till position = index
        let previous;
        let index = 0;
        while (index != position) {
          index++;
          previous = current;
          current = current.next;
        }
        newNode.next = current;
        previous.next = newNode;
      }
      this.length++;
      return true;
    } else {
      return false;
    }
  }

  removeAt(position) {
    // check position reasonable
    if (position > -1 && position < this.length) {
      // check position is head or not
      let current = this.head;
      if (position == 0) {
        // 1.1
        this.head = current.next;
      } else {
        // 1.2
        let index = 0;
        let previous;

        // loop till find the position's node (current)
        while (position != index) {
          index++;
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      this.length--;
      return current.ele;
    } else {
      return false;
    }
  }

  remove(ele) {
    // find position first, then call remove at position function
    let index = this.indexOf(ele);
    return this.removeAt(index);
  }

  indexOf(ele) {
    // return node index
    let index = -1;
    let current = this.head;
    while (current) {
      index++;
      if (current.ele == ele) {
        return index;
      }
      current = current.next;
    }
    return -1;
  }

  toString() {
    let current = this.head;
    let string = "";
    while (current) {
      string += current.ele;
      current = current.next;
    }
    return string;
  }

  size() {
    return this.length;
  }
}
