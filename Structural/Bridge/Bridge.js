/**
 * Interface for Devices act as implementation
 */
// interface
class Device {
  
  isEnabled() {};
  
  enable() {};
  
  disable() {};
  
  getVolume() {};
  
  setVolume() {}
  
  getChannel() {};
  
  setChannel(channel) {};
  
  printStatus() {};
  
}


/**
 * Devices Radio, TV (act as implementation)
 */

class Radio extends Device {
  
  constructor(){
    super();
    this.enabled = false;
    this.channel = 1;
    this.volumeLevel = 50;
  }
  
  isEnabled(){
    return this.enabled;
  }
  
  enable(){
    this.enabled = true;
  }
  
  disable() {
    this.enabled = false;
  }
  
  getChannel(){
    return this.channel;
  }
  
  setChannel(channel) {
    this.channel = channel;
  }
  
  setVolume(volumn) {
    this.volumeLevel = volumn;
  }
  
  getVolume() {
    return this.volumeLevel;
  }
  
  printStatus() {
    console.log('I\'m Radio');
    console.log(`I\'m ${this.enabled? 'enabled': 'disabled'}`);
    console.log(`Currently channel is ${this.channel}`);
    console.log(`Volume level ${this.volumeLevel}`)
  }
  
}

class TV extends Device {
  
  constructor(){
    super();
    this.enabled = false;
    this.channel = 1;
    this.volumeLevel = 0;
  }
  
  isEnabled(){
    return this.enabled;
  }
  
  enable(){
    this.enabled = true;
  }
  
  disable() {
    this.enabled = false;
  }
  
  getChannel(){
    return this.channel;
  }
  
  setChannel(channel) {
    this.channel = channel;
  }
  
  setVolume(volumn) {
    this.volumeLevel = volumn;
  }
  
  getVolume() {
    return this.volumeLevel;
  }
  
  printStatus() {
    console.log('I\'m TV');
    console.log(`I\'m ${this.enabled? 'enabled': 'disabled'}`);
    console.log(`Currently channel is ${this.channel}`);
    console.log(`Volume level ${this.volumeLevel}`)
  }
  
}

/**
 * Remotes (act as abstraction)
 */
// interface
 class Remote {
   
   power() {};
  
   volumeDown() {};
  
   volumeUp() {};
  
   channelDown() {};
  
   channelUp() {};
}

class BasicRemote extends Remote {
  
  constructor(device) {
    super();
    this.device = device;
  }
  
  power(){
    console.log('Remote: power switch');
    this.device.isEnabled() ? this.device.disable() : this.device.enable();
  }
  
  channelDown(){
    console.log('Remote: channel down');
    this.device.setChannel(this.device.getChannel() - 1);
  }
  
  channelUp(){
    console.log('Remote: channel up');
    this.device.setChannel(this.device.getChannel() + 1);
  }
  
  volumeDown() {
    console.log('Remote: volume down');
    this.device.setVolume(this.device.getVolume() - 10);
  }
  
  volumeUp() {
    console.log('Remote: volume up');
    this.device.setVolume(this.device.getVolume() + 10);
  }
  
}

class AdvancedRemote extends BasicRemote {
   
   constructor(device){
     super();
     this.device = device;
   }
   
   mute() {
    console.log('Remote: mute');
    this.device.setVolume(0);
   }
}

(()=>{

   let radio = new Radio();
   let tv = new TV();
   
   console.log('-------------------------------');
   console.log('Test Basic Remote');
   let basicRemote = new BasicRemote(radio);
   basicRemote.power();
   basicRemote.volumeUp();
   basicRemote.channelDown();
   radio.printStatus();
  
   console.log('-------------------------------');
   console.log('Test Advanced Remote');
   let advancedRemote = new AdvancedRemote(tv);
   advancedRemote.power();
   advancedRemote.channelUp();
   advancedRemote.mute();
   tv.printStatus();
})();