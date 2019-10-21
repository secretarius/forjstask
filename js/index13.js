const SYM = Symbol();
const o = { a: 1, b: 2, c: 3, [SYM]: 4 };

for (let prop in o) {
  if (!o.hasOwnProperty(prop)) continue;
  console.log(`${prop}: ${o[prop]}`);
}

Object.keys(o).forEach(prop => console.log(`${prop}: ${o[prop]}`));

const ob = { apple: 1, xochitl: 2, balloon: 3, guitar: 4, xylophone: 5 };
Object.keys(ob)
  .filter(prop => prop.match(/^x/))
  .forEach(prop => console.log(`${prop}: ${ob[prop]}`));

class Car {
  constructor() {}
}

const car1 = new Car();
const car2 = new Car();

console.log(car1 instanceof Car);
console.log(car1 instanceof Array);

// class Car {
//     constructor(make, model) {
//         this.make = make;
//         this.model = model;
//         this.userGears = ['P', 'N', 'R', 'D'];
//         this.userGear = this.userGears[0];
//     }
//     shift(gear) {
//         if(this.userGears.indexOf(gear) < 0)
//             throw new Error('Ошибочная передача : $ { gear }');
//         this.userGear = gear;
//     }
// }

// const car1 = new Car("Tesla", "Model S");
// const car2 = new Car("Mazda", "3i");
// car1.shift('D');
// car2.shift('R');

// console.log(car1.userGear);
// console.log(car2.userGear);

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this._userGears = ["P", "N", "R", "D"];
    this._userGear = this._userGears[0];
  }

  get userGear() {
    return this._userGear;
  }
  set userGear(value) {
    if (this._userGears.indexOf(value) < 0)
      throw new Error("Ошибочная передача : $ { value }");
    this.userGear = value;
  }

  shift(gear) {
    this._userGear = gear;
  }
}

const car1 = new Car("Tesla", "Model S");
const car2 = new Car("Mazda", "3i");
car1.shift("D");
car2.shift("R");

console.log(car1.userGear);
console.log(car2.userGear);

const car3 = new Car();
const car4 = new Car();
console.log(car3.shift === Car.prototype.shift);
car3.shift("D");
car3.shift("d");
console.log(car3.userGear);
console.log(car3.shift === car4.shift);
car3.shift = function(gear) {
  this._userGear = gear.toUpperCase();
};
console.log(car3.shift === Car.prototype.shift);
console.log(car3.shift == car4.shift);
car3.shift("d");
console.log(car3.userGear);

//setInterval clearInterval
const start = new Date();
let i = 0;
const intervalId = setInterval(function() {
  let now = new Date();
  if (now.getMinutes() !== start.getMinutes() || ++i > 10)
    return clearInterval(intervalId);
  console.log(`${i}: ${now}`);
}, 5 * 1000);

//Область видимости и асинхронное виполнение
function countdown(){
let i;
console.log("Обратний отсчет: ");
  for(i=5; i>=0; i=i-1) {
      setTimeout(function() {
          console.log(i===0 ? "Старт!" : i);
      }, (5-1)*1000);
  }
}
countdown();

/*
function countdown(){
    console.log("Обратний отсчет: ");
      for(let i=5; i>=0; i=i-1) {
          setTimeout(function() {
              console.log(i===0 ? "Старт!" : i);
          }, (5-1)*1000);
      }
    }
    countdown();
*/

function countdown(seconds){
    return new Promise(function(resolve, reject) {
        for(let i=seconds; i>=0; i=i-1) {
          setTimeout(function() {
              if(i === 13) return reject (new Error("Принципиально ето не считаем!"));
              if(i>0) console.log(i + '...');
              else resolve (console.log("Старт!"));
          }, (seconds-i)*1000);
    }
});
}
const p = countdown(15);
p.then(function() {
    console.log("Обратний отсчет завешен");
});
p.catch(function(err) {
        console.log("Ошибка в обратном отсчете: " + err.message);
});

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    getArea() {
        return this.height * this.width;
    }
}

const someRect = new Rectangle(3, 8);
console.log(someRect.getArea());