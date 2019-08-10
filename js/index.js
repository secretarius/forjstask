function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

// замыкание с переменной x со значением 5
var add5 = makeAdder(5);

// замыкание с переменной x со значением 10
var add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12

//связивание this - по умолчанию
function globOb() {
  console.log(this.a); //2
}

var a = 2;
globOb(); // undefine в strict или глобал 2

// неявное связивание - this
function foo() {
  console.log(this.a); //3
}
var obj = {
  a: 3,
  foo: foo // obj - содержит ету ссилку на функцию в момент визова
};

obj.foo(); // наличие у места визова контестоного обекта(obj)

//явное связивание - this
function fWithCall() {
  console.log(this.a); //4
}
var obj2 = {
  a: 4
};

fWithCall.call(obj2); // this - заданий обєкт

//связивание fWithNew - this

function fWithNew(a) {
  this.a = a;
}

var bar = new fWithNew(5); // this - сконструирований обєкт
console.log(bar.a); //5



//Array.filter
var someNum = [13, 21, 30, 41, 50, 33, 29];
  
function eddNum(x, i) {
  return i % 2 == 0;
}
console.log(someNum.filter(eddNum));

var words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

const result = words.filter(word => word.length > 6);

console.log(result);

var array = [12, 5, 8, 130, 44];

function isBigEnough(value) {
  return value >= 10;
}

console.log(array.filter(isBigEnough)); 