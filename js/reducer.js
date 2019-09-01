// let state = 0;

// function updateState (state, action){
//     if(action === "Incriment"){
//         return state + 1;
//     } else if ( action === "Decriment"){
//         return state - 1;
//     } else {
//         return state;
//     }
// }

// state = updateState(state, "Incriment")
// console.log(state);

let state = 0;

function updateState(state, action) {
  if (action.type === "Incriment") {
    return state + action.amount;
  } else if (action.type === "Decriment") {
    return state - action.amount;
  } else {
    return state;
  }
}

const inc = { type: "Incriment", amount: 5 };
const dec = { type: "Decriment", amount: 3 };

state = updateState(state, inc);
console.log(state);

state = updateState(state, dec);
console.log(state);

state = updateState(state, {});
console.log(state);
