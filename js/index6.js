class Animal {
    constructor(options){
      this.name = options.name
      this.age = options.age
      this.hasTail = options.hasTail
    }
    
    voice(){
      console.log('I am animal') // добавляется в прототип
    }
  }
  
//   const animal = new Animal({//наследник класса Animal и его прототип
//     name: "Animal",
//     age: 7,
//     hasTail: true
//   });

class Cat extends Animal {
    constructor(options){
        super(options)
        this.color = options.color
    }
    voice(){
        super.voice()
        console.log('I am cat');
      }

    get ageInfo(){
        return this.age * 7;
    }

    set ageInfo(newAge){
        this.age = newAge;
    }
}
  
const cat = new Cat(
    {
    name: "Animal",
    age: 7,
    hasTail: true,
    color: "black"
    }
);

var arr = ["Яблоко", "Апельсин", "Груша"];

arr.forEach(function(item, i, arr) {
  console.log( i + ": " + item + " (массив:" + arr + ")" );
});