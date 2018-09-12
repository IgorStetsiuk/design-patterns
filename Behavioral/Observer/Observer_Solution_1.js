class ObserverList {
	constructor() {
		this.observerList = []
	}
	
	add(observer) {
		this.observerList.push(observer);
	}
	
	count() {
		return this.observerList.length;
	}
	
	get(index) {
		if (index > -1 && index < this.observerList.length) {
			return this.observerList[index];
		}
	}
	
	indexOf(obj) {
		let startIndex = 0;
		while (startIndex < this.observerList.length) {
			if (this.observerList[startIndex] === obj) {
				return startIndex
			}
		}
		return -1;
	}
	
	removeAt(index) {
		this.observerList.splice(index, 1);
	};
}

class Subject {
	constructor() {
		this.observerList = new ObserverList();
	}
	
	addObserver(observer) {
		this.observerList.add(observer)
	}
	
	removeObserver(observer) {
		const observerIndex = this.observerList.indexOf(observer);
		this.observerList.removeAt(observerIndex)
	}
	
	notify(context) {
		const amount = this.observerList.count();
		for (let i = 0; i < amount; i++) {
			this.observerList.get(i).update(context);
		}
	}
}

class Observer {
	update(context){
		// The update functionality here will
		// be overwritten later with custom behaviour
	}
}