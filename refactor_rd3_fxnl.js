//fxnl refactor rd 3
//practice with closures!!!
//more challenging content
const storeState = () => {
  let currentState = {};
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

//Main fxn
//1) outer fxn is stored in constant storeState, no arg; only job is to store currentState of an obj
//2) currentState will be initialized as a {}; use let b/c currentState will be mutated ea time the inner fxn is called
//3) outer fxn returns an anon inner fxn that takes one param, stateChangeFxn
//--> inner fxn takes a fxn as an arg b/c 1st class citizen
//--> fxn passed in will specify the exact change that should be made to currentState
//4) `const newSTate = stateChangeFxn(currentState);` will take fxn we pas in as an arg then call it currentState, saving new state in a constant called newState instead of mutating currentState
//5) Rule break! update currentState after making a copy of newState and assigning it to currentState
// --> similar to React's setState() method
//6) inner fxn will return newState
//--> could use either newState || currentState b/c they are equal
// different use cases will call for different things
//7) `const stateControl = storeState();`
//return newState;` stores fxn in another constant; invokes the storeState() fxn & creates a closure over currentState variable in outer fxn

//stores entire fxn in another constant
const stateControl = storeState();

const feed = changeState("soil");
const hydrate = changeState("water");
const giveLight = changeState("light");

const blueFood = changeState("soil")(5)
const greenFood = changeState("soil")(10)
const yuckyFood = changeState("soil")(-5)
//> { soil: 5 }

const fedPlant = stateControl(blueFood);
//> { soil: 5 }
//^^ blue food passed into stateControl, which invokes inner fxn storeState()
//blueFood is an arg for stateChangeFunction param; now const newState = blueFood(currentState);
//^ invokes ...
//(state) => ({ ... state, ["soil"] : (state["soil"] || 0) + 5})