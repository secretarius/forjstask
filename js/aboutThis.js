// global a
// function foo() {
//     console.log(this.a);
// }

// var a = 2;
// foo();//TypeError: Cannot read property 'a' of undefined

// obj содержит ссилку на foo в момент ее визова
function foo() {
  console.log(this.a);
}

var obj = {
  a: 2,
  foo: foo
};

obj.foo(); // 2

// Для места вызова важен только верхний/последний уровень цепочки ссылок на свойства объекта.
function foo() {
  console.log(this.a);
}

var obj2 = {
  a: 42,
  foo: foo
};
var obj1 = {
  a: 2,
  obj2: obj2
};

obj1.obj2.foo(); // 42

// Неявная потеря this
function foo() {
  console.log(this.a);
}
var obj = {
  a: 2,
  foo: foo
};
var bar = obj.foo; // Ссылка на функцию/синоним!
var a = "oops, global"; // `a` также является свойством
// глобального объекта
bar(); // "oops, global"

// Передача параметров — всего лишь неявное присваивание, а по-
// скольку мы передаем функцию, происходит неявное присваивание
// ссылки, поэтому конечный результат будет таким же, как в пре-
// дыдущем фрагменте.
function foo() {
  console.log(this.a);
}
function doFoo(fn) {
  // `fn` - просто еще одна ссылка на `foo`
  fn(); // <-- место вызова!
}
var obj = {
  a: 2,
  foo: foo
};
var a = "oops, global"; // `a` также является свойством
// глобального объекта
doFoo(obj.foo); // "oops, global"

// // Явное связывание Они получают в первом параметре
// объект, который должен использоваться для this, а затем вызы-
// вают функцию с заданным значением this. Так как вы напрямую
// указываете, какое значение должно быть присвоено this, мы будем
// называть этот способ связывания явным.

// Вызов foo с явным связыванием foo.call(..) позволяет прину-
// дительно задать его this значение obj.

function foo() {
  console.log(this.a);
}
var obj = {
  a: 2
};
foo.call(obj); // 2

// Жесткое связывание
function foo() {
  console.log(this.a);
}
var obj = {
  a: 2
};
var bar = function() {
  foo.call(obj);
};
bar(); // 2
setTimeout(bar, 100); // 2
// У жестко связанной функции `bar` значение `this` не может
// заменяться
bar.call(window); // 2

// // Самый типичный способ упаковки функции с жестким связыва-
// нием создает сквозную передачу любых переданных аргументов
// и полученного возвращаемого значения:
function foo(something) {
  console.log(this.a, something);
  return this.a + something;
}
var obj = {
  a: 2
};
var bar = function() {
  return foo.apply(obj, arguments);
};
var b = bar(3); // 2 3
console.log(b); // 5

function foo(something) {
  console.log(this.a, something);
  return this.a + something;
}
// Простая вспомогательная функция `bind`
function bind(fn, obj) {
  return function() {
    return fn.apply(obj, arguments);
  };
}
var obj = {
  a: 2
};
var bar = bind(foo, obj);
var b = bar(3); // 2 3
console.log(b); // 5

//// Function.prototype.bind
function foo(something) {
  console.log(this.a, something);
  return this.a + something;
}
var obj = {
  a: 2
};
var bar = foo.bind(obj);
var b = bar(3); // 2 3

// «Контексты» вызовов API
function foo(el) {
  console.log(el, this.id);
}
var obj = {
  id: "awesome"
};
// Использовать `obj` как `this` для вызовов `foo(..)`
[1, 2, 3].forEach(foo, obj);
// 1 awesome 2 awesome 3 awesome

// Связывание new
function foo(a) {
  this.a = a;
}
var bar = new foo(2);
console.log(bar.a); // 2
