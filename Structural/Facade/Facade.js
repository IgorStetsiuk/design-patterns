/**
 * In this examples, the Facade simplifies communication with a complex video conversion framework.
 * The Facade provides a single class with a single method that handles all the complexity of configuring the right classes of the framework and retrieving result in a correct format.
 * */

class Computer {
  
  getElectricShock() {
    console.log('Ouch!')
  }
  
  makeSound() {
    console.log('Beep beep!')
  }
  
  showLoadingScreen() {
    console.log('Loading..')
  }
  
  bam() {
    console.log('Ready to be used!')
  }
  
  closeEverything() {
    console.log('Bup bup bup buzzzz!')
  }
  
  sooth() {
    console.log('Zzzzz')
  }
  
  pullCurrent() {
    console.log('Haaah!')
  }
}

// Here we have the facade

class ComputerFacade {
  constructor(computer) {
    this.computer = computer
  }
  
  turnOn() {
    this.computer.getElectricShock();
    this.computer.makeSound();
    this.computer.showLoadingScreen();
    this.computer.bam();
  }
  
  turnOff() {
    this.computer.closeEverything();
    this.computer.pullCurrent();
    this.computer.sooth();
  }
}

const computer = new ComputerFacade(new Computer());
computer.turnOn(); // Ouch! Beep beep! Loading.. Ready to be used!
computer.turnOff(); // Bup bup buzzz! Haah! Zzzzz