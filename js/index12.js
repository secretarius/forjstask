class User {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log(this.name);
    }
}

console.log(typeof User); // function

console.log(User === User.prototype.constructor);

console.log(Object.getOwnPropertyNames(User.prototype));

// перепишем класс User на чистых функциях

function User(name) {
    this.name = name;
}

User.prototype.sayHi = function() {
    console.log(this.name);
};

let user = new User("Ivan");
user.sayHi();

// динамически создавать классы «по запросу»
function makeClass(phrase) {
    return class {
        sayHi() {
        console.log(phrase);
        };
    };
}

let User = makeClass("Hello!");
new User().sayHi();

// Геттеры/сеттеры, другие сокращения
class User2 {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if(value.length < 4) {
            console.log("Имя слишком короткое.");
            return;
        }
        this._name = value;
    }
}

let userIvan = new User2("Ivan");
console.log(userIvan.name);

let userEva = new User2("Eva");
console.log(userEva.name);


// Функция-конструктор
function User(name) {
    this.name = name;
    this.isAdmin = false;
  }
  
  let user = new User("Вася");
  
  console.log(user.name); // Вася
  console.log(user.isAdmin); // false

  // Когда функция вызывается как new User(...), происходит следующее:

// Создаётся новый пустой объект, и он присваивается this.
// Выполняется код функции. Обычно он модифицирует this, добавляет туда новые свойства.
// Возвращается значение this.
// Другими словами, вызов new User(...) делает примерно вот что:

function User(name) {
    // this = {};  (неявно)
  
    // добавляет свойства к this
    this.name = name;
    this.isAdmin = false;
  
    // return this;  (неявно)
  }

  // То есть, результат вызова new User("Вася") – это тот же объект, что и:
  let user = {
    name: "Вася",
    isAdmin: false
  };

// Создание методов в конструкторе
// Использование конструкторов для создания объектов даёт большую гибкость. 
// Можно передавать конструктору параметры, определяющие, как создавать объект, 
// и что в него записывать.
// В this мы можем добавлять не только свойства, но и методы.
// Например, в примере ниже, new User(name) создаёт объект с 
// данным именем name и методом sayHi:

function User(name) {
    this.name = name;

    this.sayHi = function() {
        console.log("Меня зовут: " + this.name);
    };
}

let vasya = new User("Вася");
vasya.sayHi();
/*
vasya = {
   name: "Вася",
   sayHi: function() { ... }
}
*/