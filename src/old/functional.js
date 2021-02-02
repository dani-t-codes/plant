//functional approach
const hydrate = (plant) => {
  //function literal ^^ - expression that defines an unnamed fxn
  return {
    ...plant,
    water: (plant.water || 0) + 1
    //if an obj doesn't contain a water property, then plant.water will default to 0 (not NaN)
    // increments property by 1
  }
};
//^^ still shallow cloning, but will need a special library to ensure a deep clone of the original object

const feed = (plant) => {
  return {
    ...plant,
    soil: (plant.soil || 0) + 1
  }
};

const light = (plant) => {
  return {
    ...plant,
    soil: (plant.soil || 0) + 1
  }
};

// so far not very reusable code above
// methods look similar enough that there is definitely room for refactoring