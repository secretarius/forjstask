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

//Деструктивное присваивание обектов
let person = {
    firstname: 'John',
    lastname: 'Doe'
};

let {firstname, lastname} = person;
console.log(firstname, lastname);

// let {firstname: first, lastname: last} = person;

let {firstname: first, lastname: last} = {firstname: 'John', lastname: 'Doe'};

console.log(first, last);

// let {firstname, lastname} = {firstname: 'John', lastname: 'Doe'};
// console.log(firstname, lastname);

let user = {
    firstname: 'John',
    lastname: 'Doe',
    social: {
        facebook: 'johndoe',
        twitter: 'jdoe'
    }
};

let {firstname: first, lastname: last, social: {facebook}, age = 25} = user;
console.log(first, last, facebook, age);


function post(url, {data: { firstname, lastname}, cache}) {
    console.log(firstname, lastname, cache);
}

let result = post('api/users', {data: user, cache: false }); 


/// 
function getUserInfo() {
    return {
            firstname: 'John',
            lastname: 'Doe',
            social: {
                facebook: 'johndoe',
                twitter: 'jdoe'
    }
};
}

let { firstname, lastname, social: {twitter} } = getUserInfo();
console.log(firstname, lastname, twitter);