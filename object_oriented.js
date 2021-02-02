//object oriented approach
class Plant {
  constructor() {
    this.water = 0;
    this.soil = 0;
    this.light = 0;
  }

  hydrate() {
    this.water ++
  }

  feed() {
    this.soil ++
  }

  giveLight() {
    this.light ++
  }
}

// to create & hydrate a plant ...

let plant = new Plant();
plant.hydrate()
plant
//> Plant { water: 1, soil: 0, light: 0}

//Not a very flexible program, may be prone to bugs
// -->  all methods must be called on instances of the Plant class
// --> methods have side effects (altering the state of the plant obj)
// --> method mutate state (directly)
// --> fxns don't return anything