
// The common interface for all components.
class Coffee {
  getCost() {};
  getDescription() {};
}

// The concrete component act as a base layer.
class SimpleCoffee extends Coffee {
  
  getCost() {
    return 10;
  }
  
  getDescription(){
    return 'Simple coffee';
  }
  
}


//Base decorator
class SimpleCoffeeDecorator extends Coffee {
  
  constructor(wrappee) {
    super();
    this.wrappee = wrappee;
  }
  
  getCost() {
    return this.wrappee.getCost();
  }
  
  getDescription() {
    return this.wrappee.getDescription();
  }
  
}

//Concrete Decorator
class MilkCoffeDecorator extends SimpleCoffeeDecorator {
  
  constructor(wrappee){
    super(wrappee);
  }
  
  getCost() {
    return this.wrappee.getCost() * 1.5;
  }
  
  getDescription(){
    return this.wrappee.getDescription() + ' with milk';
  }
  
}

//Concrete Decorator
class VanillaCoffeeDecorator extends SimpleCoffeeDecorator {
  
  constructor(wrappee){
    super(wrappee);
  }
  
  getCost() {

    return this.wrappee.getCost() * 1.5;
  }
  
  getDescription(){
    this.addVanilla();
    return this.wrappee.getDescription() + ' with vanilla';
  }
  
  addVanilla() {
    console.log('Put vanilla');
  }
  
}

// Client. Main.

(() => {
 
  console.log('---__ Simple usage __ ---');
  console.log('**************************');
 // Can use here if/else or switch/case or use factory method
 let coffee = new SimpleCoffee();
 
  console.log(coffee.getCost());
  console.log(coffee.getDescription());
  console.log('**************************');
  
  coffee = new MilkCoffeDecorator(coffee);
  console.log(coffee.getCost());
  console.log(coffee.getDescription());
  console.log('**************************');

  coffee = new VanillaCoffeeDecorator(coffee);
  console.log(coffee.getCost());
  console.log(coffee.getDescription());
  console.log('**************************');

  
})();

(() => {
  
  console.log('---__ Another usage __ ---');
  console.log('**************************');
  
  let coffee = new VanillaCoffeeDecorator(new MilkCoffeDecorator(new SimpleCoffee()));
  console.log(coffee.getCost());
  console.log(coffee.getDescription());
  console.log('**************************');
})();

(() => {
  
  console.log('---__ Another usage 2__ ---');
  console.log('**************************');
  
  let someOption = 'milk';
  let coffee = new SimpleCoffee();
  
  if(someOption === 'milk') {
    coffee = new MilkCoffeDecorator(coffee);
  } else if(someOption === 'vanilla') {
    coffee = new VanillaCoffeeDecorator(coffee);
  }
  
  console.log(coffee.getCost());
  console.log(coffee.getDescription());
  
})();