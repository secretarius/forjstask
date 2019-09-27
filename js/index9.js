let scores = [3, 4, 5];

// let [low, mid, high, higher] = scores;
// console.log(low, mid, high, higher);

// let [low, , high] = scores;
// console.log(low, high);

// let [low, ...rest] = scores;
// console.log(low, rest);

function computerScore([low, mid]) {
    console.log(low, mid);
}
computerScore([8, 9]);

function getScores() {
    return [6, 7, 8]
}

let score = getScores();
console.log(score);

let [low, mid, high] = getScores();
console.log(low, mid, high);

let yes = 'Yes';
let no = 'No';
[yes, no] = [no, yes];
console.log('Yes is', yes);
console.log('No is', no);
console.log('o_O');

