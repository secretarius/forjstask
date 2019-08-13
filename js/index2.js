// // Метод Object.getOwnPropertyDescriptor() возвращает дескриптор свойства 
// для собственного свойства (то есть такого, которое находится непосредственно 
// в объекте, а не получено через цепочку прототипов) переданного объекта.
// var myObject = {
//     a: 2
// };
// console.log(Object.getOwnPropertyDescriptor( myObject, "a" ));
// {
// value: 2,
// writable: true,
// enumerable: true,
// configurable: true
// }

//Не перезаписываемое
// "use strict";
// var myObject = {};
// Object.defineProperty( myObject, "a", {
//     value: 2,
//     writable: false, // не перезаписываемо!
//     configurable: true,
//     enumerable: true
// } );
// myObject.a = 3; //// TypeError
// console.log(myObject.a);         


// Hе конфигурируемо!
// var myObject = {
//     a:2
// };
// myObject.a = 3; //3

// Object.defineProperty(myObject, "a", {
//     value: 4,
//     writable: true,
//     configurable: false,
//     enumerable: true
// });


// console.log(myObject.a); //4

// Object.defineProperty(myObject, "a", {
//     value: 6,
//     writable: true,
//     configurable: true,
//     enumerable: true
// });  //TypeError: Cannot redefine property: a

// Configurable:false препятствует возможности использовать оператор 
// delete для удаления существующего свойства.
// var myObject = {
//     a:2
// };
// console.log(myObject.a); //2
// delete myObject.a;
// console.log(myObject.a); //undefined

// Object.defineProperty(myObject, "a", {
//     value: 2,
//     writable: true,
//     configurable: false,
//     enumerable: true
// });

// console.log(myObject.a);  //2
// delete myObject.a;
// console.log(myObject.a); //2


// writable:false и configurable:false вы по сути можете создать 
// константу (не может быть изменена, переопределенна или удалена)
// var myObject = {};
// Object.defineProperty( myObject, "FAVORITE_NUMBER", {
//     value: 42,
//     writable: false,
//     configurable: false
// } );


// // запретить добавление новых свойств объекта, но в то же 
// время оставить существующие свойства нетронутыми, используйте 
// Object.preventExtensions(..)
// var myObject = {
//     a: 2
// };
// Object.preventExtensions( myObject );
// myObject.b = 3;
// myObject.b; // undefined


// геттер сеттер
// //var myObject = {
//     // определим геттер для `a`
//     get a() {
//         return this._a_;
//     },
//     // определим сеттер для `a`
//     set a(val) {
//         this._a_ = val * 2;
//     }
// };
// myObject.a = 2;
// console.log(myObject.a);


// // Оператор in проверит находится ли свойство в объекте или 
// существует ли оно уровнем выше в цепочке [[Prototype]] объекта 
// hasOwnProperty(..) наоборот проверяет есть ли свойство только у 
// объекта myObject или нет и не опрашивает цепочку [[Prototype]]
// var myObject = {
//     a:2
// };

// console.log("a" in myObject); //true
// console.log("b" in myObject); //false

// console.log(myObject.hasOwnProperty("a")); //true
// console.log(myObject.hasOwnProperty("b")); //false

// // myObject.b по факту существует и имеет доступное значение, но 
// оно не отображается в цикле for..in (хотя, внезапно, оно обнаружилось 
// проверкой на существование оператором in). Всё потому, что по сути 
// «перечислимое» означает «будет учтено, если пройти перебором по 
// свойствам объекта»
// var myObject = { };
//     Object.defineProperty(
//     myObject,
//     "a",
//     // сделаем `a` перечисляемым, как обычно
//     { enumerable: true, value: 2 }
// );
// Object.defineProperty(
//     myObject,
//     "b",
//     // сделаем `b` неперечисляемым
//     { enumerable: false, value: 3 }
// );
// console.log(myObject.propertyIsEnumerable( "a" ));   // true
// console.log(myObject.propertyIsEnumerable( "b" ));  // false
// console.log(Object.keys(myObject));                 // ["a"]
// console.log(Object.getOwnPropertyNames(myObject));  // ["a", "b"]

// for..of запрашивает объект-итератор (из стандартной встроенной 
// функции, на языке спецификации известной как @@iterator) 
// у перебираемой сущности, а затем перебирает возвращаемые 
// значения, вызывая метод next() объекта-итератора для каждой 
// итерации цикла.
// var myArray = [ 1, 2, 3 ];
// for (var v of myArray) {
//     console.log( v );
// }
// 1
// 2
// 3
// В @@iterator мы получаем внутреннее свойство объекта, используя 
// Symbol из ES6: Symbol.iterator
// var myArray = [ 1, 2, 3 ];
// var it = myArray[Symbol.iterator]();
// console.log(it.next()); // { value:1, done:false }
// console.log(it.next()); // { value:2, done:false }
// console.log(it.next()); // { value:3, done:false }
// console.log(it.next()); // { done:true }

// let string = JSON.stringify({squirrel: false, events:["weekend"]});
// console.log(string);
// console.log(JSON.parse(string).events);


function PersoneType(name){
    this.name = name;
}

PersoneType.prototype.sayName = function(){
    console.log(this.name);
};

var person = new PersoneType("Vasja");
person.sayName();

console.log(person instanceof PersoneType); //true
console.log(person instanceof Object);   //true



class PersoneClass {
    constructor(name) {
        this.name = name;
    }
    sayName(){
        console.log(this.name);
    }
}

let persone = new PersoneClass("Alex");
persone.sayName();

console.log(persone instanceof PersoneClass); //true
console.log(persone instanceof Object);   //true

console.log(typeof PersoneClass); //"function"
console.log(typeof PersoneClass.prototype.sayName);   //"function"

//Использование класов-виражений

//Передача класа функциям в аргументах
function createObject(classDef){
    return new classDef();
}


let obj = createObject(class {
    sayHi(){
        console.log("Hi!"); //Hi!
    }
});

obj.sayHi();

//Создание синглтонов путем немедлинного визова конструктора класа
let person = new class {

    constructor(name){
        this.name = name;
    }

    sayName(){
        console.log(this.name); //"Alex"
    }
}("Alex");

person.sayName(); 

//git check

// Методи генератори

class MyClass {
    *createIterator(){
        yield 1;
        yield 2;
        yield 3;
    }
}

let instance = new MyClass();
let iterator = instance.createIterator();

class Collection {
    constructor(){
        this.items = [];
    }
    *[Symbol.iterator]() {
        yield *this.items.values();
    }
}

var collection = new Collection();
collection.items.push(1);
collection.items.push(2);
collection.items.push(3);

for (let x of collection){
    console.log(x);
}
// 1
// 2
// 3

function Rectangle(length, width){
    this.length = length;
    this.width = width;
}

Rectangle.prototype.getArea = function(){
    return this.length * this.width;
};

function Square(length){
    Rectangle.call(this, length, length)
}

Square.prototype = Object.create(Rectangle.prototype, {
    constructor: {
        value: Square,
        enumerable: true,
        writable: true,
        configurable: true
    }
});

var square = new Square(3);

console.log(square.getArea());              // 9
console.log(square instanceof Square);      // true
console.log(square instanceof Rectangle);   // true

class Rectangle {
    constructor(length, width){
        this.length = length;
        this.width = width;
    }

    getArea() {
        return this.length * this.width;
    }
}

class Square extends Rectangle {
    constructor(length){
        super(length, length);
    }
}

var square = new Square(3);

console.log(square.getArea());              // 9
console.log(square instanceof Square);      // true
console.log(square instanceof Rectangle);   // true
