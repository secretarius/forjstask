let user = {
    firstName: 'Petya'
  };
  let admin = {
    firstName: 'Vasya'
  };
  function getName() {
    return this.firstName;
  }
  
  user.f = getName;
  admin.f = getName;
  console.log(user.f());
  console.log(admin.f());
  console.log(user['f']());

  'use strict'
  function getName() {
    console.log(this);
  }
  
  getName(); // undefined
  

  let a = {
      name: "Ivan",
      hi() {
          console.log(this.name);
      }
  }

  let hi = a.hi;
  console.log(hi());



  ///scope
  function parent() {
    let childCount = 0;

    function child() {
        childCount++
        console.log(`called ${childCount} time(s)`);
    }

    child()
    return child;
  }

//   let firstChild = parent();
//   firstChild();

parent();
//   let secoundChild = parent();
//   secoundChild();
//   secoundChild();
//   secoundChild();
//   secoundChild();
//   secoundChild();


let input = [80, 90, 100];
// let average = (arr) => devide(sum(arr), size(arr));
// average(input);

let sum = (total, current) => total + current;
let total = arr => arr.reduce(sum);
let size = arr => arr.length;
let devide = (a, b) => a/b;
let average = arr => devide(total(arr), size(arr));
console.log(average(input));

//array methods
let arr = [1,3,4,5,6,78,3,2,3,5,67,78];

let sum = arr.reduce((a,b) => a + b);
console.log(sum);//255

let arr3 = [1,2,3,true, false, undefined, null, NaN, "", "yess"];
let newAr = arr3.filter(Boolean);
console.log(newAr);//[1, 2, 3, true, "yess"]

let cars = ["Audi", "BMW","Jeep","Opel","Citroen"];

let arrSpred = [...cars];
console.log(arrSpred)// ["Audi", "BMW", "Jeep", "Opel", "Cetroen"]

let obSpred = {...cars};

console.log(obj);//{0: "Audi", 1: "BMW", 2: "Jeep", 3: "Opel", 4: "Citroen"}

let uni_n = [...new Set(arr)];
console.log(uni_n);// [1, 3, 4, 5, 6, 78, 2, 67]

let un = Array.from(new Set(arr));
console.log(un);// [1, 3, 4, 5, 6, 78, 2, 67]

let carss = [{ car: "Honda", color: "Red"},{ car: "Toyota", color: "Green"},{ car: "Seat", color: "Blue"},{ car: "BMW", color: "Red"},];
let car_name = Array.from(carss, ({car}) => car);
console.log(car_name);//["Honda", "Toyota", "Seat", "BMW"]

arr.splice(0, arr.length);
console.log(arr);// []

let arrA = [1,3,4,5,6,78,3,2,3,5,67,78];
let arrB = [1,0,4,6,3,5,63,78];

let y = [...new Set(arrA)].filter(item => arrB.includes(item));
console.log(y);//[1, 3, 4, 5, 6, 78]

let last_index = arrA.lastIndexOf(3);
console.log(last_index );//8

let randomNum = arrA[(Math.floor(Math.random() * (arrA.length)))];
console.log(randomNum);

let slijan = obj.concat(car_name);
console.log(slijan); //["Audi", "BMW", "Jeep", "Opel", "Citroen", "Honda", "Toyota", "Seat", "BMW"]

let slijan2 = [...obj,...car_name];
console.log(slijan2);//["Audi", "BMW", "Jeep", "Opel", "Citroen", "Honda", "Toyota", "Seat", "BMW"]

let unik3 = [...new Set([...obj,...car_name])];
console.log(unik3); //["Audi", "BMW", "Jeep", "Opel", "Cetroen", "Honda", "Toyota", "Seat"]


var a = [1,2,3,4],
b = [3,4,5,6],
c;

c = [...a, ...b];
console.log(c);// [1, 2, 3, 4, 3, 4, 5, 6]

for (var c=a, i=0; i<b.length; i++) a.push(b[i]);
console.log(c);//[1, 2, 3, 4, 3, 4, 5, 6]