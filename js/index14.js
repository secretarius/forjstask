const name = 'Alex';
const age = 37;

function getName() {
    return this.name;
}

function getPropName() {
    return 'someDynamicValue'
}

const color = 'green';

const user = {
    name,
    age,
    getName,
    getAge() {
        return this.age
    },
    [1 + 1]: 2,
    [getPropName()]: 'some dynamic value',
    [color]: 'red', 

};

function returnDynamicValue() {
    return 'dynamic value';
}

const loser = {
    name,
    age,

    get info() {
        return 'Hello, my name is ${name}, I am ${age}'
    },

    set info(str) {
        alert(str);
    },

    getName,
    [returnDynamicValue()]: 'dynamicValue'
};

const props = {
    country: 'Ukraine',
    city: 'Lviv',
    address: 'Some addres',
    name: 'Sasha'
}

const newObj = Object.assign({}, user, props);
console.log(newObj);

const newObject = {
    ...user,
    ...props
}

console.log(newObject);

console.log(loser);
console.log(loser.info);
console.log(loser.info = 'another new tesxt');

console.log(user);
console.log(user.getName());
console.log(user.getAge());  