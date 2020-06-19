//Class
class Duck {
    constructor(name) {
        this.name = name;
    }

    quack() {
        return this.name + " Duck: Quack-quack!"
    }
}

/// Наследование

class TalkingDuck extends Duck {
    constructor(name) {
        super(name);
    }

    quack() {
        return super.quack() + "My name is " + this.name;
    }

}

let donald = new TalkingDuck("Donald");
console.log(donald);//TalkingDuck { name: 'Donald' }


///Class old syntax
var Duck = function(name) {
    this.name = name;
}

Duck.prototype.quack = function() {
    return this.name + " Duck: Quack-quack!"
}

/// Наследование

var TalkingDuck = function(name) {
    Duck.call(this, name);
}

TalkingDuck.prototype = Object.create(Duck.prototype);
TalkingDuck.prototype.constructor = TalkingDuck;

TalkingDuck.prototype.quack = function() {
    return Duck.prototype.call(this) + " My name is " + this.name;
}

/// Инстанцирование

var donaldD = new TalkingDuck('Donald');
console.log(donaldD);//TalkingDuck { name: 'Donald' }

///Prototype//////////////////////////////////////////////////////////////

var duck$ = {// "$" в этом контексте читается как "прототип": duck$ == Duck.prototype
    name: "",
    quack: function(name) {
        return this.name +" Duck: Quack-quack!";
    }
}

var donald = {
    __proto__: duck$,
    name: 'Donald'
}

var daffy = {
    __proto__: duck$,
    name: 'Daffy'
}

console.log(donald.quack());//Donald Duck: Quack-quack!
console.log(daffy.quack());//Daffy Duck: Quack-quack!
console.log(duck$.isPrototypeOf(donald));//true
console.log(duck$.isPrototypeOf(daffy));//true
//Суть прототипного (делегирующего) наследования состоит в том, 
//что один объект может ссылаться на другой, что делает его прототипом. 
//Если при обращении к свойству/методу оно не будет найдено в самом объекте,
//поиск продолжится в прототипе, а далее в прототипе прототипа и т.д.

//daffy и donald используют один общий метод quack(), который предоставляет 
//им прототип duck$. С прототипной точки зрения donald и daffy являются клонами 
//объекта duck$, а с класс-ориентированной — “экземплярами класса” duck$.

var donaldDu = Object.create(duck$, { 
    name: {value: "Donald"}
});

console.log (Object.getPrototypeOf(donaldDu) === duck$);//true











//////////////////////////////////////////////////////////////////
var obj = {
    name: "БезИмени",
    get lazy(){
        console.log("Инициализация свойства lazy...");
        // Вычисляем значение:
        var value = "Лениво инициализированное свойство " + this.name;
        
        // Переопределяем свойство, для того чтобы при следующем
        // обращении к нему, оно не вычислялось заново:
        Object.defineProperty(this, 'lazy', {
            value: value, 
            writable: true, enumerable: true
        });
        console.log("Инициализация окончена.");
        return value;
    },
    // оставляем возможность инициализировать свойство 
    // самостоятельно, в обход функции-инициализатора 
    // (если это не будет влиять на согласованность объекта):
    set lazy(value){
        console.log("Установка свойства lazy...");
        Object.defineProperty(this, 'lazy', {
            value: value, 
            writable: true, enumerable: true
        });
    }
};
console.log( obj.lazy );
// Инициализация свойства lazy...
// Лениво инициализированное свойство БезИмени

console.log( obj.lazy );// Инициализатор не запускается снова
// Лениво инициализированное свойство БезИмени

obj.lazy = "Переопределено";// Сеттер не запускается, т.к. свойство уже инициализировано
console.log( obj.lazy );
// Переопределено