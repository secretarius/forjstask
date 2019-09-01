// // обработчик без ловушек
// let target = {};

// let proxy = new Proxy(target, {}); //создает прокси-обєкт для использования вместо другого
// proxy.name = "proxy";

// console.log(proxy.name);
// console.log(target.name);

// target.name = "target";
// console.log(proxy.name);
// console.log(target.name);

let target = {
    name: "target"
};

let proxy = new Proxy(target, {
    set(trapTarget, key, value, receiver) { // Ловушка set должна вернуть true если значение било присвоено свойству или false
                                            // ловушка set переопредиляет повидение по умолчанию опереции присваевания значение 
    if(!trapTarget.hasOwnProperty(key)) {
        if(isNaN(value)) {
            throw new TypeError("Property must be a number.");
        }
    }
    return Reflect.set(trapTarget, key, value, receiver); // Reflect.set() опредиляет повидение по умолчанию
}   
});

proxy.count = 1;
console.log(proxy.count);
console.log(target.count);

proxy.name = "proxy";
console.log(proxy.name);
console.log(target.name);

proxy.anotherName = "proxy"; // TypeError: Property must be a number.
console.log(proxy.anotherName); // 


// Смена прототипа обекта
// let person = {
//     getGreating(){
//         return "Hello!";
//     }
// };

// let dog = {
//     getGreating(){
//         return "Woof";
//     }
// };

// let friend = Object.create(person);
// console.log(friend.getGreating()); // "Hello!""
// console.log(Object.getPrototypeOf(friend) === person); //true

// Object.setPrototypeOf(friend, dog);
// console.log(friend.getGreating()); // "Woof"
// console.log(Object.getPrototypeOf(friend) === dog); //true


let person = {
    getGreating(){
        return "Hello";
    }
};

let dog = {
    getGreating(){
        return "Woof";
    }
};

// let friend = {
//     getGreating(){
//         return Object.getPrototypeOf(this).getGreating.call(this) + ", hi!"
//     }
// };

let friend = {
    getGreating() { // метод - функція мае внутрішню властивість [[HomeObject]] - 
                    // яка посилається на обєкт якому належить метод
        return super.getGreating() + ", hi!"
    }
};

Object.setPrototypeOf(friend, person); 
console.log(friend.getGreating()); // "Hello, hi!" викличеться в констекті person тому
                                //  що  Object.getPrototypeOf(this) вказівник на поточний прототип обєкта
console.log(Object.getPrototypeOf(friend) === person); //true

Object.setPrototypeOf(friend, dog); // dog прототип для friend
console.log(friend.getGreating()); // "Woof" викличеться в констекті dog тому
                            //  що  Object.getPrototypeOf(this) вказівник на поточний прототип обєкта
console.log(Object.getPrototypeOf(friend) === dog); // true

