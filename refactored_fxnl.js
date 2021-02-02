// fxnl, rd 2 w/ refactoring
const changePlantState = (plant, property) => {
  return {
    ...plant,
    [property]: (plant[property] || 0) + 1
  }
}
//^^ passes plant and specific property in that we want to change
//**square brackets can pass the value of a variable into an object key or property - ES6 fxnality */

//to call the fxn...
let plant = { soil: 0, light: 0, water: 0 }
changePlantState(plant, "soil")
//>{soil: 1, light: 0, water: 0}

//Additional refactoring for more reusable, flexible function

//Currently still limited ...
// 1) still specific to plants when could be used to increment any property of an obj by 1
// solution: rename vars to be more abstract
// 2) limited by incrementing a plant property by just 1
// solution: create ways to increment (or decrement) different properties in different ways
// 3) this fxn takes multiple args, so might be night to turn this into an unary fxn with just one arg
// solution: curry!