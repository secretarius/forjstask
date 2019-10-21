//simple

function inc(a) {
  return a + 1;
}

const sum = function(a, b) {
  return a + b;
};

const max = (a, b) => (a > b ? a : b);

const avg = (a, b) => {
  const s = sum(a, b);
  return s / 2;
};

console.log("inc(5) = " + inc(5));
console.log("sum(1, 3) = " + sum(1, 3));
console.log("max(8, 6) = " + max(8, 6));
console.log("avg(8, 6) = " + avg(8, 6));

//scopes
const cities = ["Athens", "Roma", "London", "Beijing", "Kiev", "Riga"];
const f = s => s.length;

function f1() {
  const cities = ["Athens", "Roma"];
  const f = s => s.toUpperCase();
  console.dir({ cities });
  console.dir(cities.map(f));

  {
    const f = s => s.toLowerCase();
    console.dir({ cities });
    console.dir(cities.map(f));
  }

  {
    const cities = ["London", "Beijing", "Kiev"];
    console.dir({ cities });
    console.dir(cities.map(f));
  }
}

f1();
console.dir({ cities });
console.dir(cities.map(f));

// abstraction

const power = Math.pow;
const square = x => power(x, 2);
const cube = x => power(x, 3);

console.log(power(10, 2));
console.log(square(10));
console.log(power(10, 3));
console.log(cube(10));

// introspection
function inc(x) {
  return ++x;
}

const sum1 = function(a, b) {
  return a + b;
};

const max1 = (a, b) => (a > b ? a : b);

console.log("Names: ");
console.dir({
  inc: inc.name,
  sum1: sum1.name,
  max1: max1.name
});

console.log("Arguments: ");
console.dir({
  inc: inc.length,
  sum1: sum1.length,
  max1: max1.length
});

console.log(
  "Anonymous function: " +
    function(x) {
      return x;
    }.name
);
console.log("Anonymous lambda: " + (x => x).name);

console.log("toString: ");
console.dir({
  inc: inc.toString(),
  sum1: sum1.toString(),
  max1: max1.toString()
});

// default

// ES6 style for default parameter values
//
function fnNew(a, b = "Hello", c = 5) {
  console.dir({ a, b, c });
}

fnNew(1, 2, 3);
fnNew(1, 2);
fnNew(1);
fnNew();

// Old style for default parameter values
//
function fnOld(a, b, c) {
  b = b || "Hello";
  c = c || 5;
  console.dir({ a, b, c });
}

fnOld(1, 2, 3);
fnOld(1, 2);
fnOld(1);
fnOld();

// Hash style for default parameter values
//
function fnHash(args) {
  args.a = args.a || [7, 25, 10];
  args.b = args.b || "Hello";
  args.c = args.c || 100;
  console.dir(args);
}

fnHash({ a: [1, 2, 3], b: "Hi", c: 3 });
fnHash({ b: "World" });
fnHash({ c: 7 });

//rest

const f11 = (...args) => {
  console.log(args);
};

f11(1, 2, 3, "string");

const f2 = (...args) => {
  args.forEach(arg => {
    const type = typeof arg;
    console.log("Type: " + type);
    if (type === "object") {
      console.log("Value: " + JSON.stringify(arg));
    } else {
      console.log("Value: " + arg);
    }
  });
};

f2(1, "Marcus", { field: "value" });

// method
const powName = 'pow';

const obj1 = {
  fn1: function inc(a) {
    return ++a;
  },
  sum: function(a, b) {
    return a + b;
  },
  inc(a) {
    return ++a;
  },
  max: (a, b) => {
    return a > b ? a : b;
  },
  min: (a, b) => (a < b ? a : b),
  dec: a => --a,
  [powName](a, b) {
    return Math.pow(a, b);
  }
};

console.log('obj1.fn1.name = ' + obj1.fn1.name);
console.log('obj1.sum.name = ' + obj1.sum.name);
console.log('obj1.inc.name = ' + obj1.inc.name);
console.log('obj1.max.name = ' + obj1.max.name);
console.log('obj1.min.name = ' + obj1.min.name);
console.log('obj1.dec.name = ' + obj1.dec.name);

console.log('obj1.fn1(5) = ' + obj1.fn1(5));
console.log('obj1.sum(1, 3) = ' + obj1.sum(1, 3));
console.log('obj1.max(8, 6) = ' + obj1.max(8, 6));

console.log('obj1.pow(8, 6) = ' + obj1.pow(8, 6));
console.log('obj1[\'pow\'](8, 6) = ' + obj1['pow'](8, 6));

//this
const Context = function() {
    this.name = 'Marcus';
    const city = {
      name: 'Kiev',
      year: 482,
      f1: function() {
        return this.name;
      },
      f2: () => {
        return this.name;
      },
      f3() {
        return this.name;
      }
    };
    return city;
  };
  
  const city = new Context();
  
  console.log('city.f1() = ' + city.f1());
  console.log('city.f2() = ' + city.f2());
  console.log('city.f3() = ' + city.f3());

  // iife
  (function f1() {
    console.log('f1');
  })(); // function expresion - функциональное виражение (все что в скобках то виражение)
  
  (function() {
    console.log('anonymous');
  })();
  
  (() => {
    console.log('lambda');
  })();
  
  {
    console.log('block');
  }

// call, apply
function f1(a, b) {
    console.log('f1(' + a + ', ' + b + ')');
  }
  
  f1(2, 3);
  f1.call(null, 2, 3); //null - вместо него передать обект и етот он будет виден функции f1 через иден this
  
  const arr = [2, 3];
  f1(...arr);
  f1.apply(null, arr);
  