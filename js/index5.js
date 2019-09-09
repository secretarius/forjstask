function hello() {
    console.log('Hello', this)
}

const person = {
    name: 'Alex',
    age: 25,
    sayHello: hello,
    sayHelloWindow: hello.bind(document),
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`);
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
        console.log(`Job is ${job}`); // this не указивается потомучто ми его передаем как параметр в фунцию
        console.log(`Phone is ${phone}`); // тоже что и више
        console.groupEnd();
    }
}

const lena = {
    name: 'Elena',
    age: 23
}

// const fnLensInfoLog = person.logInfo.bind(lena)
// fnLensInfoLog('Frontend', '063-000-00-00')

// const fnLensInfoLog = person.logInfo.bind(lena, 'Frontend', '063-000-00-00')
// fnLensInfoLog()

// person.logInfo.call(lena, 'Frontend', '063-000-00-00')
person.logInfo.apply(lena, ['Frontend', '063-000-00-00'])


// person.logInfo.bind(lena)();

// console.log(person.sayHello());
// console.log(person.sayHelloWindow());

/// ===================

const array = [1, 2, 3, 4, 5]

// function myltBy(arr, n) {
//     return arr.map(function(i) {
//         return i * n
//     })
// }

// Array.prototype.myltBy = function(n) {
//     console.log('multBy', this); // this является масивом у которого ми визиваем етот метод
// }
// console.log(array.myltBy(array, 5));


Array.prototype.myltBy = function(n) {
    return this.map(function(i) {
        return i * n
    })
}
    console.log(array.myltBy(20));
