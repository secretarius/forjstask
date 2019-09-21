////
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var newArray = [];
var counter = 0;

newArray = array.forEach(function(item) {
    newArray.push(counter += item);
});
console.log(counter);

//////
var response = [
  {
    index: 0,
    isActive: true,
    age: 20,
    name: "Langley Morton",
    gender: "male",
    email: "langlemorton@medifax.com"
  },
  {
    index: 1,
    isActive: false,
    age: 20,
    name: "Terry Cook",
    gender: "female",
    email: "terrycook@medifax.com"
  },
  {
    index: 2,
    isActive: false,
    age: 37,
    name: "Lang Lou",
    gender: "male",
    email: "langlou@medifax.com"
  }
];

var newArrayResponce = [];
var getNames = function(item){
    newArrayResponce.push(item.name)
}
//forEach
response.forEach(getNames);
console.log(newArrayResponce);

//////
function setDefaultVaue(Id) {
    response.forEach(function(item){
        if (item.index === Id) {
            item.isActive = true;
        }
        else {
            item.isActive = false;
        }
    })
}

function setDefaultVaue(Id) {
    response.forEach(function(item){
        (item.index === Id) ? item.isActive = true : item.isActive = false;
    })
}

function setDefaultVaue(Id) {
    response.forEach(function(item) {
        item.isActive = (item.index === Id) 
    })
}

let isActiveId = 1;
setDefaultVaue(isActiveId);
console.log(response);
