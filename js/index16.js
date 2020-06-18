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
var PersonForMap = function(name) {
  this.name = name; 
  this.phrases = null;
};

PersonForMap.prototype.sayhello = function(phrase) {
  return this.name + " sayshello " + phrase;
}

PersonForMap.prototype.grabPhrases = function(phrases) {
  this.phrases = phrases.map(function(phrase) {
    return this.sayhello(phrase);
  }, this)
}

var jhon = new PersonForMap('Jhon');
jhon.grabPhrases(['Hello, World!', 'JS is great', 'I\'m designer and i don\'t have job']);
console.log(jhon.phrases);



var slice = function(str) {
    return str.slice(0, 5);
}

var frameworks = ['Knockout', 'Backbone', 'Angular'].map(slice);
console.log(frameworks);

//map hand
var map = function(arrAY, callback, thisArguments) {
    var res = [];
    for(var i = 0; i < arrAY.length; i++) {
        res.push(callback.call(thisArguments, arrAY[i], i, arrAY));
    }
    return res;
};

var pows = map([10, 20, 30], Math.pow);
console.log(pows); // [1,20,900]