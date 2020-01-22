let user = {
    firstName: 'Petya'
  };
  let admin = {
    firstName: 'Vasya'
  };
  function getName() {
    return this.firstName;
  }
  
  user.f = getName;
  admin.f = getName;
  console.log(user.f());
  console.log(admin.f());
  console.log(user['f']());

  'use strict'
  function getName() {
    console.log(this);
  }
  
  getName(); // undefined
  

  let a = {
      name: "Ivan",
      hi() {
          console.log(this.name);
      }
  }

  let hi = a.hi;
  console.log(hi());



  ///scope
  function parent() {
    let childCount = 0;

    function child() {
        childCount++
        console.log(`called ${childCount} time(s)`);
    }

    child()
    return child;
  }

//   let firstChild = parent();
//   firstChild();

parent();
//   let secoundChild = parent();
//   secoundChild();
//   secoundChild();
//   secoundChild();
//   secoundChild();
//   secoundChild();