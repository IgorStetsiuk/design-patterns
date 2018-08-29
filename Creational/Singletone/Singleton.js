let instance = null;

class Singletone {
	
	constructor() {
		if (!instance) {
			instance = this;
		}
		this.time = new Date();
		
		return instance;
		
	}
		
}



const singleTone = new Singletone();
const testSingletone = new Singletone();

console.log(singleTone.time === testSingletone.time);// true object are same