//this fxn stores state
const storeState = () => {
  let currentState = {}; // would add { soil: 0, light: 0, water: 0 }; to initialize the plant with all three props
  return (changeStateFunction) => {
    const newState = changeStateFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

const stateControl = storeState();

//This is a fxn factory. Can create more specific fxns that alter a plant's soil, water and light to varying degrees.
const changeStateFunction = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
}

const feed = changeStateFunction("soil");
const hydrate = changeStateFunction("water");
const giveLight = changeStateFunction("light");

const blueFood = changeStateFunction("soil")(5)
const greenFood = changeStateFunction("soil")(10)
const yuckyFood = changeStateFunction("soil")(-5)