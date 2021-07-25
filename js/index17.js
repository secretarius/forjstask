function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }
  let r = 0;
  let fibN = 1;

while(r < 20) {
    if(fib(fibN) % 2 === 0) {
        console.log(fibN+" " +fib(fibN));
        r++;
    }
    fibN++;
}

// every only for general characteristic of all array elements

///////////////////////////
let a = ['19', '001'];

let getSum = function(num) {
    let result = String(num).split('').reduce(function(a,b){ return +a+ +b; });
    return result;
};

let r = a.map(e => getSum(e));
