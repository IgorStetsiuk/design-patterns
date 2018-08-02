/*
Interface Wheel

getDiameter();
getWidth();

*/

class Wheel {
  
  constructor(diameter,width){
    this.diameter = diameter;
    this.width = width;
  }
  
  getDiameter(){
    return this.diameter;
  }
  
  getWidth(){
    return this.width;
  }
}


//Factory
class WheelFactory  {
  static makeWheel(diameter, width) {
    return new Wheel(diameter, width);
  }
}


function testWheelFactory (){
  const carWheel = WheelFactory.makeWheel(16,30);
  console.log(carWheel.getDiameter());
  console.log(carWheel.getWidth());
}

testWheelFactory();