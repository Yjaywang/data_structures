// -------------------------------------
// Before add and remove have to check the element already exist in current Set
// -------------------------------------
class MySet {
  constructor() {
    this.items = {};
  }
  // add value
  add(value) {
    if (!this.has(value)) {
      this.items[value] = value;
    }
  }
  // delete value
  delete(value) {
    if (this.has(value)) {
      delete this.items[value];
      return true;
    }
    return false;
  }
  // check set has value
  has(value) {
    return this.items.hasOwnProperty(value);
  }
  // clear set
  clear() {
    this.items = {};
  }
  // return set size
  size() {
    return Object.keys(this.items).length;
  }

  // return all values
  values() {
    return Object.values(this.items);
  }
}

let instruments = new MySet();

instruments.add("piano");
instruments.has("guitar");
instruments.add("guitar");
instruments.add("drum");
instruments.delete("guitar");

console.log(instruments); //MySet { items: { piano: 'piano', drum: 'drum' } }
console.log(instruments.size()); //2
console.log(instruments.values()); //['piano', 'drum']
