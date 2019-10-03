const arr1 = [1, 2, 3];
const arr2 = ["one", 2, "three"];
const arr3 = [ [1, 2, 3], ["one", 2, "three"] ];

const arr4 = [
    { name : "Fred", type : "object", luckyNumbers: [5, 7, 13]},
     [ 
        { name : "Susan", type : "object" },
        { name : "Anthony", type : "object" },

    ],
    1, 
        function() { return " в элементе массива может также находиться и функция";
    },
        "three",
];

console.log(arr1[0]);
console.log(arr1[2]);
console.log(arr3[1]);
console.log(arr4[1][0]);

console.log(arr1.length);
console.log(arr4.length);
console.log(arr4[1].length);

console.log(arr1[4] = 5);
console.log(arr1);
console.log(arr1.length);

console.log(arr2[10]);
console.log(arr2.length);

const arr5 = new Array();
console.log(arr5);
const arr6 = new Array(1, 2, 3);
console.log(arr6);
const arr7 = new Array(2);
console.log(arr7);
const arr8 = new Array("2");
console.log(arr8);

//pop push shift unshift
const arr = [ "Ь", "с", "d"];
arr.push("e")
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift("a");
console.log(arr);
arr.shift();
console.log(arr);

// concat в конец добавляет
const arrConcat = [1, 2, 3];
console.log(arrConcat.concat(4, 5, 6));// [ 1, 2, 3, 4, 5, 6 ]
console.log(arrConcat); //[ 1, 2, 3 ]

//slice
const arrSlice = [1, 2, 3, 4, 5];
console.log(arrSlice.slice(3)); // [ 4, 5 ]
console.log(arrSlice); // [ 1, 2, 3, 4, 5 ]
console.log(arrSlice.slice(2, 4)); // [ 3, 4 ]
console.log(arrSlice); // [ 1, 2, 3, 4, 5 ]
console.log(arrSlice.slice(-2)); // [ 4, 5 ]
console.log(arrSlice); // [ 1, 2, 3, 4, 5 ]
console.log(arrSlice.slice(1, -2)); // [ 2, 3 ]
console.log(arrSlice); // [ 1, 2, 3, 4, 5 ]
console.log(arrSlice.slice(2, -2)); // [ 3 ]
console.log(arrSlice); // [ 1, 2, 3, 4, 5 ]