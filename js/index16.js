//forEach by hand
var each = function (array, callback, thisArg) {
  for (var i = 0; i < array.length; i++) {
    callback.call(thisArg, array[i], i, array);
  }
};
var Person = function (name) {
  this.name = name;
};

Person.prototype.say = function (phrase) {
  console.log(this.name + "say" + phrase);
};

// Person.prototype.mumble = function(phrases) {
//   phrases.forEach(function(prase) {this.say(prase)}, this);
// }

Person.prototype.mumble = function (phrases) {
  each(
    phrases,
    function (prase) {
      this.say(prase);
    },
    this
  );
};

var jhonDou = new Person("Jhon Dou");
jhonDou.mumble([
  "Hello, World!",
  "JS is great",
  "I'm designer and i don't have job",
]);

each([1, 2, 3], function (num, i, nums) {
  console.log("Number: " + num + ", index: " + i + ",", nums);
});

//==================================================================================

//map by hand

var nums = [10, 20, 30, 40];

var res = nums.map(function (num, i, nums) {
  return Math.pow(num, i);
});
// Исходный массив nums не изменяется
console.log(nums); // [10,20,30,40]
// результат выполнения map, записанный в переменную
console.log(res); // [1,20,900,64000]

var result = nums.map(Math.pow);
console.log(result);

//=============================================
var PersonForMap = function (name) {
  this.name = name;
  this.phrases = null;
};

PersonForMap.prototype.sayhello = function (phrase) {
  return this.name + " sayshello " + phrase;
};

PersonForMap.prototype.grabPhrases = function (phrases) {
  this.phrases = phrases.map(function (phrase) {
    return this.sayhello(phrase);
  }, this);
};

var jhon = new PersonForMap("Jhon");
jhon.grabPhrases([
  "Hello, World!",
  "JS is great",
  "I'm designer and i don't have job",
]);
console.log(jhon.phrases);

var slice = function (str) {
  return str.slice(0, 5);
};

var frameworks = ["Knockout", "Backbone", "Angular"].map(slice);
console.log(frameworks);

//map hand
var map = function (arrAY, callback, thisArguments) {
  var res = [];
  for (var i = 0; i < arrAY.length; i++) {
    res.push(callback.call(thisArguments, arrAY[i], i, arrAY));
  }
  return res;
};

var pows = map([10, 20, 30], Math.pow);
console.log(pows); // [1,20,900]

//==================================================================================

//filter by hand

var filter = function (arrrayA, callback, thisArgu) {
  var resultat = [];
  for (var i = 0; i < arrrayA.length; i++) {
    if (callback.call(thisArgu, arrrayA[i], i, arrrayA)) {
      resultat.push(arrrayA[i]);
    }
  }
  return resultat;
};

var strs = ["Hello", ",", "JavaScript", "World", "!"];

var data = filter(strs, function (str) {
  return str.toLowerCase() !== str;
});

console.log(data);

var nums = [1, 20, 4, 2, 5, 3, 24, 6, 45];

var getNum = filter(nums, function (num) {
  return num > 5;
});

console.log(getNum);

// var sum = nums.reduce((total, amount) => total + amount, 1000);
// console.log(sum);

//some example

let custumers = data.filter(function (custumer) {
  return custumer.purchases.some(function (purchase) {
    return (
      purchase === "iPhone" || purchase === "Macbook" || purchase === "iMac"
    );
  });
});
console.log(customers);
// [{"name":"Wanda","email":"wjenkins0@irs.gov","purchases":["iPhone","dishwasher","cucumbers"]},
// {"name":"Paula","email":"pstephens2@boston.com","purchases":["apples","Macbook","iPhone"]},
// {"name":"Steven","email":"sgonzales5@mashable.com","purchases":["iMac","Android phone","Windows 10"]},
// {"name":"Lisa","email":"lgreene8@spotify.com","purchases":["pork","iMac","cheese"]}]

//some by hand

let some = function (array, callbacks, thisArgumentss) {
  for (let i = 0; i < array.length; i++) {
    if (callbacks.call(thisArgumentss, array[i], i, array)) {
      return true;
    }
  }
  return false;
};

const nums = [10, 20, 30, 40, 50];

let someTrue = some(nums, function (num) {
  return num < 30;
});

console.log(someTrue);

///////////////
var arr = [1, 2, 3, 4, 5];

var o = {
  checkNumber: function (curNum) {
    return curNum == 3;
  },
};

let someAr = arr.some(function (curN) {
  return this.checkNumber(curN);
}, o);

console.log(someAr);

/// every by hand

let every = function (ar, callb, thisAr) {
  for (let i = 0; i < ar.length; i++) {
    if (!callb.call(thisAr, ar[i], i, ar)) {
      return false;
    }
  }
  return true;
};

const nums = [30, 30, 30, 30, 30];

let someEvery = every(nums, function (ever) {
  return ever === 30;
});

console.log(someEvery);
