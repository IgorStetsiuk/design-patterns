
const CAR_TYPES = {
  SPORT_CAR: 'Sport car',
  CITY_CAT: 'Sity car',
  SUV:'SUV'
};

/**
 * Builder interface defines all possible ways to configure a product.
 */

class Builder {
 setType(type) {};
 setSeats(seats) {};
 setEngine(engine) {};
 setTransmission(transmission) {};
 setTripComputer(tripComputer) {};
 setGPSNavigator(gpsNavigator) {};
}


/**
 * Car is a product class.
 */
class Car {
  constructor(type, seats, engine, transmission, tripComputer, GPSNavigator ) {
    this.type = type;
    this.seats = seats;
    this.engine = engine;
    this.transmission = transmission;
    this.tripComputer = tripComputer;
    this.GPSNavigator= GPSNavigator;
  }
  
  getType() {
    return this.type;
  }
  
  getSeat() {
    return this.seats;
  }
}


/**
 * Concrete builders implement steps defined in the common interface.
 */

class  CarBuilder extends Builder{
  setType(type){
    this.type = type;
  }
  
  setSeats(seats){
    this.seats = seats;
  }
  
  setEngine(engine){
    this.engine = engine;
  }
  
  setTransmission(transmission){
    this.transmission = transmission
  }
  
  setTripComputer(tripComputer){
    this.tripComputer = tripComputer;
  }
  
  setGPSNavigator(GPSNavigator){
    this.GPSNavigator = GPSNavigator;
  }
  
  getResult(){
    let {type, seats, engine, transmission, tripComputer, GPSNavigator} = this;
    return new  Car(type, seats, engine, transmission, tripComputer, GPSNavigator);
  }
  
}

/**
 * Car is a product class.
 */
class Manual {
  constructor(type, seats, engine, transmission, tripComputer, GPSNavigator ) {
    this.type = type;
    this.seats = seats;
    this.engine = engine;
    this.transmission = transmission;
    this.tripComputer = tripComputer;
    this.GPSNavigator= GPSNavigator;
  }
  
  printSpecification(){
    console.log(`This is a ${this.type} it has ${this.seats} and power engine ${this.engine} worked with ${this.transmission}.`);
    this.tripComputer && console.log(`And equipped with ${this.tripComputer}`);
    this.GPSNavigator && console.log(`Latest version of ${this.GPSNavigator}`);
    
  }
  
}


/**
 * Car manual is another product. Note that it does not have the same ancestor
 * as a Car. They are not related.
 */
class  ManualBuilder extends Builder{
  setType(type){
    this.type = type;
  }
  
  setSeats(seats){
    this.seats = seats;
  }
  
  setEngine(engine){
    this.engine = engine;
  }
  
  setTransmission(transmission){
    this.transmission = transmission
  }
  
  setTripComputer(tripComputer){
    this.tripComputer = tripComputer;
  }
  
  setGPSNavigator(GPSNavigator){
    this.GPSNavigator = GPSNavigator;
  }
  
  getResult(){
    let {type, seats, engine, transmission, tripComputer, GPSNavigator} = this;
    return new  Manual(type, seats, engine, transmission, tripComputer, GPSNavigator);
  }
  
}

/**
 * Director defines the order of building steps. It works with a builder object
 * through common Builder interface. Therefore it may not know what product is
 * being built.
 */
class Director {
  
  constructSportCar(builder){
    builder.setType(CAR_TYPES.SPORT_CAR);
    builder.setSeats(2);
    builder.setEngine('3.0.0');
    builder.setTransmission('semi automatic');
    builder.setTripComputer('Computer');
    builder.setGPSNavigator('GPS');
  }
  
  constructorSUVCar(builder){
    builder.setType(CAR_TYPES.SUV);
    builder.setSeats(4);
    builder.setEngine('2,5');
    builder.setTransmission('manual');
    builder.setGPSNavigator('GPS');
  }
}


/**
 * Demo class. Everything comes together here.
 */
(function client() {
  let director = new Director();
  
  // Director gets the concrete builder object from the client
  // (application code). That's because application knows better which
  // builder to use to get a specific product.
  let builder = new CarBuilder();
  director.constructSportCar(builder);
  
  // The final product is often retrieved from a builder object, since
  // Director is not aware and not dependent on concrete builders and
  // products.
  let SportCar = builder.getResult();
  console.log(SportCar.getType());
  
  
  let manualBuilder = new ManualBuilder();
  // Director may know several building recipes.
  director.constructSportCar(manualBuilder);
  let manualToSportCar = manualBuilder.getResult();
  manualToSportCar.printSpecification();
})();