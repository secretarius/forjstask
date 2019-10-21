const obj = {
  name: "Alex",
  lastname: "Martin",
  dateOfBirth: "18th October",
  friends: ["Bob", "Cristine"]
};

obj.address = "Earth";
obj["address2"] = "Moon";
obj.name = "Zed";
obj["name"] = "Nik";

console.log(obj.address2);
console.log(obj["name"]);
console.log(obj);

const proprtyName = "firstName";
const ob = {
  [proprtyName.toUpperCase()]: "Alex"
};

console.log(obj);

const obj1 = {
  firstName: "Alex",
  lastnName: "Martin",

  printFullName() {
    return `${this.firstName} ${this.lastnName}`;
  }
};

console.log(obj1.printFullName());

console.log("firstName" in obj1);
console.log("middleName" in obj1);
console.log("isPrototypeOf" in obj1);

console.log(obj1.hasOwnProperty("firstName"));
console.log(obj1.hasOwnProperty("middleName"));
console.log(obj1.hasOwnProperty("isPrototypeOf"));

// for (const property in obj) {
//     const value = obj[property];
//     console.log(property, value);
// }

const allProperties = Object.keys(obj);
console.log(allProperties);

for (const property in allProperties) {
  const value = obj[property];
  console.log(property, value);
}

const allValues = Object.values(obj);
console.log(allValues);

const allEntries = Object.entries(obj);
console.log(allEntries);

for (const [key, value] of Object.entries(obj)) {
  console.log(key, value);
}

const obj11 = {
  name: "Alex"
};
const obj22 = {
  name: "Alex"
};
obj11 === obj22; // => false
obj11 === obj11; // => true

const obj3 = {
    name: 'Sam',
    nestedObj: {
        adress: 'Mars'
    }
}

const obj4 = {
    ...obj3
}

console.log(obj4);

const obj5 = JSON.parse(JSON.stringify(obj1));
console.log(obj5);

const arr = ['Alex', 'Earth'];
typeof arr;       // => object

console.log(Object.entries(arr));

function func1() {
    return 'Alex';
  }
  typeof func1;    // => 'function'
  func1.name;      // => 'func1'
  func1.address = 'Earth'; // Setting our own property
  func1.address;      // => 'Earth' 
  func1['address'];   // => 'Earth'
  
// Objects
const p1 = {
  x: 10, 
  y: 20,
  move(x, y) {
    this.x += x;
    this.y += y;
  },
  toString() {
    return `[${this.x}, ${this.y}]`;
  }
};

p1.move(-5, 10);

console.log(p1);
console.log(p1.toString());
console.log(p1 +'');

//prototype
//конструктор прототипа
function Point(x, y) {
  // ссилка на this на тот обєкт которий создался в результате визова конструктора 
  this.x = x;
  this.y = y;
}

//статический метод самого класса,  у контруктора метода Point
Point.from = function(obj) {
  const { x, y } = obj;
   /*создается новий обект которий попадаєт в this, потом x і y передаются 
   в конструктор і новий пустой обєкт передается в this і они присваиваются this */
  return new Point(x, y); 
}

// у кажого екземпляра new Point будет етот метод
Point.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
;}

Point.prototype.toString = function() {
  return `[${this.x}, ${this.y}]`;
}

console.log('function prototype is: ', (function() {}).prototype);
console.log('lambda prototype is:  ', (() => {}).prototype);
console.log('Point prototype is: ', Point.prototype);
console.log('move prototype is: ', Point.prototype.move.prototype);
console.log('toString prototype is: ', Point.prototype.toString.prototype);

const p1 = new Point(10, 20);
p1.move(-5, 10);

console.log(p1);
console.log(p1.toString());
console.log(p1 +'');

//class
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  move(x, y) {
    this.x +=x;
    this.y +=y;
  }

  toString() {
    return `[${this.x}, ${this.y}]`;
  }

  static from(obj) {
    const { x, y } = obj;
    return new Point(x, y);
  }
}

console.log('Point prototype is: ', Point.prototype);
console.log('move prototype is: ', Point.prototype.move.prototype);
console.log('constructor prototype is: ', Point.constructor.prototype);
console.log('prototype constructor prototype is: ', Point.prototype.constructor.prototype);

const p1 = new Point(10, 20);
p1.move(-5, 10);

console.log(p1);
console.log(p1.toString());
console.log(p1 +'');

//closure замикание

const point = (x, y) => {
  const p = {};

  p.move = (newx, newy) => {
    x += newx;
    y += newy;
  }

  p.toString = () => `[${x}, ${y}]`;

  return p;
};

const p1 = point(10, 20);
p1.move(-5, 10);

console.log(p1);
console.log(p1.toString());
console.log(p1 +'');

//bind
function move(x, y) {
  this.x += x;
  this.y += y;
} 

function toString() {
  return `[${this.x}, ${this.y}]`;
}

const p1 = { x: 10, y: 20 };
const p1move = move.bind(p1);
const p1toString = toString.bind(p1);
p1move(-5, 10);

console.log(p1);
console.log(p1toString());
console.log(p1 +'');



//logger

const logger = level => {
  const color = logger.colors[level] || logger.colors.info;
  return s => {
    const date = new Date().toISOString();
    console.log(color + date + '\t' + s);
  };
};

logger.colors = {
  warning: '\x1b[1;33m',
  error: '\x1b[0;31m',
  info: '\x1b[1;37m'
};

const warning = logger('warning');
const error = logger('error');
const debug = logger('debug');
const slow = logger('slow');

slow('I am slow logger');
warning('Hello');
error('World');
debug('Bye!');

//prototype
function Logger(level) {
  this.color = Logger.colors[level] || Logger.colors.info;
}

Logger.colors = {
  warning: '\x1b[1;33m',
  errror: '\x1b[0;31m',
  info: '\x1b[1;37m'
}

Logger.prototype.log = function(s) {
  const date = new Date().toISOString();
  console.log(this.color + date + '\t' + s);
};

const warning = new Logger('warning');
const error = new Logger('error');
const debug = new Logger('debug');
const slow = new Logger('slow');

slow.log('I am slow logger');
warning.log('Hello');
error.log('World');
debug.log('Bye!');

//class
class Logger {
  constructor(level) {
    this.color = Logger.colors[level] || Logger.colors.error;
  };

log(s) {
  const date = new Date().toISOString();
  console.log(this.color + date + '\t' + s);
}
}

Logger.colors = {
  warning: '\x1b[1;33m',
  errror: '\x1b[0;31m',
  info: '\x1b[1;37m'
};

 
const warning = new Logger('warning');
const error = new Logger('error');
const debug = new Logger('debug');
const slow = new Logger('slow');

slow.log('I am slow logger');
warning.log('Hello');
error.log('World');
debug.log('Bye!');

//inherits

function Rect(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

Rect.prototype.toString = function() {
  return `[${this.x}, ${this.y}, ${this.width}, ${this.height}]`
}

function Square(x, y, side) {
  Rect.call(this, x, y, side, side); 
}

Object.setPrototypeOf(Square.prototype, Rect.prototype);

const p1 = new Square(10, 20, 50);
console.log(p1.toString());

//class

class Rect {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

toString() {
  return `[${this.x}, ${this.y}, ${this.width}, ${this.height}]`
}
}

class Square extends Rect {
  constructor(x, y, side) {
    super(x, y, side, side);
  }
}

const p1 = new Square(10, 20, 50);
console.log(p1.toString());

// setPrototype 
class Rect {
  toString() {
    return `[${this.x}, ${this.y}, ${this.width}, ${this.height}]`;
  }
}

const p1 = {x: 10, y: 20, width: 50, heigth: 50};
Object.setPrototypeOf(p1.Rect.prototype);
//p1.__proto__ = Rect.prototype;

console.log(p1.toString());

// присв в констр метод
function Rect(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.toString = function() {
  return `[${this.x}, ${this.y}, ${this.width}, ${this.height}]`
}
}

const p1 = new Rect(10, 20, 50, 50);
console.log(p1.toString());

//get - set

class Rect {
  constructor(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

get area() {
  return this.width * this.height;
}

set side(l) {
  this.width = l;
  this.height = l;
}

get side() {
  if (this.width !== this.height) throw new Error('not a Square');
  return this.width;
}
}

const p1 = new Rect(10, 20, 50, 100);
console.log(p1.area);
p1.side = 150;
console.log(p1.side);
console.log(p1.area);