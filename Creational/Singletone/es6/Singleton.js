const Singletone = (function () {
	
	let instance;
	
	function init() {
		
		let privateCounter = 0;
		
		return {
			publicMethod: function () {
				console.log('public method')
			},
			increment: function () {
				privateCounter++;
			},
			getCount: function () {
				return privateCounter;
			}
		}
		
	}
	
	return {
		getInstance: function () {
			if (!instance) {
				instance = init();
				return instance
			} else {
				return instance;
			}
			
		}
		
		
	};
	
})();

let uniqCounter = Singletone.getInstance();
uniqCounter.increment();
uniqCounter.increment();
console.log(uniqCounter.getCount());

let secondCounter = Singletone.getInstance();
console.log(secondCounter.getCount());