///////////////
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
      total += i;
    }
    return total;
  }
  
 console.log(addUpTo(6));

//////////////
function sum(n) {
  if(n ==1) return 1;
  return n + sum(n-1);
}

console.log(sum(6));


///////////// find max number from Array

function findMaxNumbe(myArray) {
  var maxNum = myArray[0];
  for(var i = 1; i < myArray.length; i++) {
    var curNumber = myArray[i];
    if(curNumber > maxNum) {
      maxNum = curNumber;
    }
  }
  return maxNum;
}

console.log(findMaxNumbe([1, 10, 100, 2, 3, 1000, 4, 5, 10000, 6]));

/// loop statement --for..in and for..of
function giveMeFive(obj){
  var res = [];
  for(let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if(key.length == 5) res.push(key);
      if(obj[key].length == 5) res.push(obj[key]);
    }
  }
    return res;
}

console.log(giveMeFive({Our:"earth", is:"a", beautyful:"world"}));
console.log(giveMeFive({Ihave:"enough", money:"to", buy:"a", car:"model"}));

///// find odd number
var arr = [1, 2, 3, 4, 5];

console.log(arr.filter((el) => el%2 == 1));

function findOddNumbers(arr) {
  var result =[];
for(var i = 0; i < arr.length; i++) {
  if(arr[i]%2==1){
    result.push(arr[i]);
      }
  }
return result;
}
console.log(findOddNumbers(arr));

