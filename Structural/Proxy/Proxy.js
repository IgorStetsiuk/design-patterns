class DorInterface {
  open() {};
  close() {};
}

class LabDoor extends DorInterface {
  open() {
    console.log('Opening lab door')
  }
  
  close() {
    console.log('Closing the lab door')
  }
}

/**
 * Then we have a proxy to secure any doors that we want
 */


class Security extends DorInterface{
  constructor(door) {
    super();
    this.door = door
  }
  
  open(password) {
    if (this.authenticate(password)) {
      this.door.open()
    } else {
      console.log('Big no! It ain\'t possible.')
    }
  }
  
  authenticate(password) {
    return password === 'ecr@t'
  }
  
  close() {
    this.door.close()
  }
}

(() => {
  const door = new Security(new LabDoor());
  door.open('invalid'); // Big no! It ain't possible.
  
  door.open('ecr@t'); // Opening lab door
  door.close() // Closing lab door
})();