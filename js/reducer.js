// // let state = 0;

// // function updateState (state, action){
// //     if(action === "Incriment"){
// //         return state + 1;
// //     } else if ( action === "Decriment"){
// //         return state - 1;
// //     } else {
// //         return state;
// //     }
// // }

// // state = updateState(state, "Incriment")
// // console.log(state);

// // let state = 0;

// function updateState(state, action) {
//   if (action.type === "Incriment") {
//     return state + action.amount;
//   } else if (action.type === "Decriment") {
//     return state - action.amount;
//   } else {
//     return state;
//   }
// }

// class Store {
//     constructor(updateState, state){
//         this._updateState = updateState;
//         this._state = state;
//     }

//     get state(){
//         return this._state;
//     }

//     update(action){
//         this._state = this._updateState(this._state, action);
//     }
// }

// const store = new Store(updateState, 0);

// const inc = { type: "Incriment", amount: 5 };
// const dec = { type: "Decriment", amount: 3 };

// store.update(inc);
// console.log(store.state);

// store.update(dec);
// console.log(store.state);

// store.update({});
// console.log(store.state);

let state = 0;

function updateState(state, action) {
  if (action.type === "INCREMENT") {
    return state + action.amount;
  } else if (action.type === "DECREMENT") {
    return state - action.amount;
  } else {
    return state;
  }
}

const incrementAction = {type: "INCREMENT", amount: 5};
const decrementAction = {type: "DECREMENT", amount: 3};

state = updateState(state, incrementAction);
console.log(state);

state = updateState(state, decrementAction);
console.log(state);

state = updateState(state, {});
console.log(state);