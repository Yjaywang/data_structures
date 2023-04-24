# Map vs. Object

## setup

- object

```
// 1 literal, the most common
let objLiteral = {
	id: 1,
	name: 'Hannah'
}

// 2 by constructor, too slow
let objConstructor = new Object()
objConstructor['id'] = 1;


// 3 using Object.prototype.create
let objCreate = Object.create(null);
Object.defineProperty(objCreate, 'id', {
	value: 1
})
```

- map

```
//Empty Map
let map1 = new Map()

// have value when define
let map = new Map([['id',1], ['name','Hannah']]);
```

## method comparison

![](https://i.imgur.com/DoataOP.png)

## details

1. ES5 Object key must be **String**, map can accept any type
2. Objects 抓值效率比較差??
3. Object no sequence

```
var myObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(myObj )); // console: ['2', '7', '100']

var myMap =new Map([[100,'a'],[2,'b'], [7, 'c' ]])
myMap.keys() // {100, 2, 7}
```

## when to use object?

1. only need to store simple data, and sure key is string (你用 Map 還是要 new Map() 出來沒別的方法。而 literal 建立比 constructor 快多了)
2.

```
var obj = {
    id: 1,
    name: "It's Me!",
    print: function(){
        return `Object Id: ${this.id}, with Name: ${this.name}`;
    }
}
console.log(obj.print());//Object Id: 1, with Name: It's Me.
```

3. if you want to change to JSON

## when to use map?

1. you need sequence for key and value
2. you need different types of key
3. search speed better than object
