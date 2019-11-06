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

var user = {
    name: "Alex",
    
	sayHallo: function() {
		console.log("Say hello " + this.name);
    }
}

setTimeout(user.sayHallo, 1000);// Say hello undefined

// var f = user.sayHallo;
// setTimeout(f, 1000); // Say hello undefined

setTimeout(user.sayHallo.bind(user), 1000);// Say hello Alex

//////////////// call, app;y, bind
var employee1 = {
    name: "Alex",
    position: "Proect manager",
    salary: 1000
};

var employee2 = {
    name: "Olha",
    position: "Junior developer",
    salary: 800
};

var employee3 = {
    name: "Yana",
    position: "Meddle developer",
    salary: 1000,
};

function promote(newPosition, salaryRise) {
    this.position = newPosition;
    this.salary += salaryRise;

    return this.name + " is " + this.position + " and earns $" + this.salary;
}
//call
console.log(promote.call(employee1, "Department head", 500));
//apply
console.log(promote.apply(employee2, ["Middle developer", 300]));
//bind
var promoteYana = promote.bind(employee3);
console.log(promoteYana("Senior developer", 1500));
var promoteYanaToSenior = promote.bind(employee3, "Senior developer");
console.log(promoteYanaToSenior(1500));


// bind
function f(y) {
    return this.x + y;
}

var o = {
    x: 5,
}

// var g = f.bind(o);
// console.log(g(2));

function bind (f, o) {
    return function() {
        return f.apply(o, arguments);
        }
    }

var g = bind(f, o);
console.log(g(10));



////////////////////////////////////////////
const one = function(){

    return this;
    
    }
    
    const two= one.bind({foo: "var"})
    
    const c = two.bind(null)
    
    console.log(c())

/////////////////////////////////////////////////
    function bind(func, context){

        return function(...args) {
            return func.apply(
                        context,
                        args
                    );
        }
    }
    
    const a = function () {
        return this;
    }
    
    const b = bind(a, {foo: 'var' });
    
    const c = bind(b, null);
    
    const d = bind(c, { g: '1' });
    
    console.log(c())

    /////////////////////
var context = { 
    foo: "bar" 
};

function returnFoo() {
  return this.foo;
}

// console.log(returnFoo());//undefined

var bound = returnFoo.bind(context);

// Свойство теперь в области видимости
console.log(bound()); 

////////////////
this.x = 9;
var module = {
  x: 81,
  getX: function() { return this.x; }
};

console.log(module.getX());

var getX = module.getX;
console.log(getX()); 

var boundGetX = getX.bind(module);
console.log(boundGetX()); 

//forEach
////////
var each = function(arr, callback, thisArg) {
    // var i;
    // var length = arr.length;
    for(var i = 0; i < arr.length; i++) {
        callback.call(thisArg, arr[i], i , arr);
    }
}

var Person = function(name) {
    this.name = name;
  };
  
  Person.prototype.say = function(phrase) {
    console.log(this.name + ' says ' + phrase);
  }
  
  Person.prototype.mumble = function(phrases) {
    phrases.forEach(function(phrase) {
      this.say(phrase);
    }, this);
  }
  
  var johnDoe = new Person('John Doe');
  johnDoe.mumble(['Hello, World!', 'JS is great', 'I\'m designer and i don\'t have job']);



  each([1,2,3,4,5], (num, i , arr) => {console.log(num, i, arr);});

