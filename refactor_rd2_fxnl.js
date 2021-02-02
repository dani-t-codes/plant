//fxn'l rd 2

//step 1 - make variables more abstract
const changeState = (state, prop) => {
  return {
    ...state,
    [prop]: (state[prop] || 0) + 1
    // prop/(s) is a common name for a property passed in within React
  }
}

//step 2 - unlimit fxn from only incrementing a property by 1
const changeState = (state, prop, value) => ({
  ...state,
  [prop] : (state[prop] || 0) + value
})

//step 3 - above is a fxn with 3 args --> turn into a unary fxn by currying
const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
}
//^^ this setup purposely creates a **function factory**!
//now the following, more specific fxns can be created with the current changeState()

const feed = changeState("soil");
const hydrate = changeState("water");
const giveLight = changeState("light");

//add 5 to the soil of a plant
feed(5)(plant)

//could get even more specific
const blueFood = changeState("soil")(5)
const greenFood = changeState("soil")(10)
const yuckyFood = changeState("soil")(-5)

blueFood(plant) // which would increase a plant's food level by 5

//NOW ...
// the fxn is pure, does not mutate state, has no side effects
//fxn is unary and takes only one arg
//fxn uses currying, which allows reuse as a fxn factory
//fxn takes advantage of closures (wouldn't be able to curry w/o it)
//fxn is sufficiently abstracted that it could be used with other types of objects that could be incremented or decremented as well

//Next step: use closures to store state in app, which we can't currently do now