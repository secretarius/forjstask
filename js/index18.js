let number = function (busStops) {
  let totalPpl = 0;

  for (let i = 0; i < busStops.length; i++) {
    //   totalPpl += busStops[i][0];
    //   totalPpl -= busStops[i][1];
    let currStop = busStops[i];
    let getOn = currStop[0];
    let getOff = currStop[1];

    totalPpl += getOn;
    totalPpl -= getOff;
  }
  return totalPpl;
};

console.log(
  number([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
);
console.log(
  number([
    [3, 0],
    [9, 1],
    [4, 10],
    [12, 2],
    [6, 1],
    [7, 10],
  ])
);
//////////////////////////////////////

function getSum( a,b )
{
  let sum = 0;
//   let min = Math.min(a,b);
//   let max = Math.max(a,b);

  if(a == b) return a
  let max = a > b ? a : b;
  let min = a < b ? a : b;
  
  for(let i = min; i <= max; i++) {
    sum += i;
  }
  return sum
}

 console.log(getSum( 5, 13));
 
 //////////////////////////////////////
 let alphabetPosition = (text) => {
    let str = Array.from(text.toLowerCase().replace(/[^a-z]/g,''));
    let arr = [];
    for (let i = 0; i < str.length; i++) {
       arr.push(str[i].charCodeAt() - 96);
    }
      return arr.join(' ');
  }

  console.log(alphabetPosition("The sunset sets at twelve o' clock "));

//////////////////////////////////////
let friend = (fr) => {

  return fr.filter( (frie) => frie.length == 4)


  // let friendsList = [];

  // for(let i of fr) {
  //   if(i.length == 4) {
  //     friendsList.push(i);
  //   }
  // }
  // return friendsList
}

console.log(friend(["Rayan", "Sem", "Jhon", "Cassy", "Jery"]));

///////////////////////////////////

let obj = {
  a: "Hello",
  b: " this is",
  c: "javascript!"
}

let arr = Object.keys(obj).map((key) => obj[key]);
console.log(arr);

////////////////////////////////////////////////
function reverseWords(str) {
  return str.split(' ').map((el) => [...el].reverse().join('')).join(' ')

  }
  
console.log(reverseWords("This is an example!"));
//////////////////////////////////////////////

function squareDigits(num) {
  return +(num.toString().split('').map((n) => n * n).join(''))
}

console.log(squareDigits(9119));
console.log(squareDigits(3212));