var person = {
    name: "Olha"

}

//глобальна фунція не звязана з жодни об'єктом
function sayHello() {
    return "Hello, " + this.name; 
};
//this посилається на об'єкт person
//установка контекста
person.sayHello = sayHello;
//sayHello тепер належить об'єту person
console.log(person.sayHello());




////////////////////////////////////////////////////////
var person2 = {
    name: "Alex",
    sayHello2: function() {
        return "Hello, " + this.name; 
    }
};

var anotherPerson = {
    name: "Bob"
}

//змініити контекст метода після його обявлення
//sayHello буде праціювати в контексті anotherPerson
anotherPerson.sayHello2 = person2.sayHello2;

console.log(person2.sayHello2());
console.log(anotherPerson.sayHello2());
// console.log(person2.sayHello2.call(anotherPerson)); // з функцією call;

