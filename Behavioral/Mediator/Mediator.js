/**
 * Solution 1
 */

class Participant {
  constructor(name) {
    this.name = name;
    this.chatroom = null;
  }
  
  send(message, receiver) {
    this.chatroom.send(message, this, receiver);
  }
  
  receive(message, sender) {
    console.log(`${sender.name} receiver ${this.name} : ${message}`);
  }
}

class Chatroom {
  constructor() {
    this.participants = {};
  }
  
  register(participant) {
    this.participants[participant.name] = participant;
    participant.chatroom = this;
  }
  
  send(message, sender, receiver) {
    if (receiver) {
      receiver.receive(message, sender);
    } else {
      for (let key in this.participants) {
        if (this.participants[key] !== sender) {
          this.participants[key].receive(message, sender);
        }
      }
    }
  }
}

// test function
(() => {
  
  const yoko = new Participant('Yoko'),
    john = new Participant('John'),
    paul = new Participant('Paul'),
    ringo = new Participant('Ringo'),
    chatRoom = new Chatroom();
  
  chatRoom.register(yoko);
  chatRoom.register(john);
  chatRoom.register(paul);
  chatRoom.register(ringo);
  
  yoko.send("All you need is love.");
  yoko.send("I love you John.");
  john.send("Hey, no need to broadcast", yoko);
  paul.send("Ha, I heard that!");
  ringo.send("Paul, what do you think?", paul);
})();



//TODO : Come up with another solution 2