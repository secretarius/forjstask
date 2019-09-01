// Итерация массива book
// const book = [
//   " Twinkle, twinkle, little bat!",
//   " How I wonder what you're at!",
//   " Up above the world you fly,",
//   " Like а tea tray in the sky.",
//   " Twinkle, twinkle, little bat!",
//   " How I wonder what you're at!"
// ];

// const it = book.values();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());


// let current = it.next();
// while(!current.done){
//     console.log(current.value);
//     current = it.next();
// }; 

// const it1 = book.values();
// const it2 = book.values();

// console.log(it1.next());
// console.log(it1.next());

// console.log(it2.next());
// console.log(it1.next());

// класс Og системноrо журнала, в котором сообщениям будут 
// добавляться временные метки.

// class Og {
//     constructor() {
//         this.messages = [];
//     }
//     add(message) {
//         this.messages.push({message: message, timestamp: Date.now() });
//     }
//     [Symbol.iterator]() {
//         return this.messages.values();
//     }
// }

// const og = new Og();
// og.add("Первый день на море");
// og.add("Видели большую рыбу");
// og.add("Видели корабль");

// for(let entry of og) {
//     console.log(`${entry.message} @ ${entry.timestamp}`);
// } 

// Итератор для создание чисел Фибоначчи

class FibonacciSequence {
    [Symbol.iterator] () {
        let а = 0, Ь = 1;
        return {
            next() {
                let rval = { value: Ь , done: false };
                Ь += а ;
                 а = rval.value;
                return rval;
            }
        };
    }
}

const fib = new FibonacciSequence();
let i = 0;
for(let n of fib) {
    console.log(n);
    if(++i > 9) break;
}

