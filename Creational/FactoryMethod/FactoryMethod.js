/*
Interface Vehicle

showSpecification();

*/

// interface
class IVehicle  {
  showSpecification() {
    console.log(`${this.vehicleMake} issued in ${this.issuedYear}` )
  };
}

// implements interface Vehicle
class Car extends IVehicle{
  constructor(){
    super();
    this.vehicleMake = 'Toyota';
    this.issuedYear = 2018;
  }
  
}

// implements interface Vehicle
class Truck extends IVehicle{
  constructor(){
    super();
    this.vehicleMake = 'Nissan';
    this.issuedYear = 2015;
  }
 
}

class VehicleFactory {

  static makeVehicle(vehicleType) {
    let vehicle = null;
    
    switch(vehicleType) {
      case 'truck':
        vehicle =  new Truck();
        break;
      case 'car':
        vehicle =  new Car();
        break;
    }
    
    return vehicle;
  }
}

function test() {
  
  const truck = VehicleFactory.makeVehicle('truck');
  const car = VehicleFactory.makeVehicle('car');
  
  car.showSpecification();
  truck.showSpecification();
  
}

test();