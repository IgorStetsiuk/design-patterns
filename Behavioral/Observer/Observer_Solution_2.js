class Subject {
	constructor() {
	}
	
	Attach (Observer){
		this.observers.push(Observer);
	}
	
	Dettach (Observer){
		for(let i in this.observers)
			if(this.observers[i] === Observer)
				this.observers.splice(i, 1)
	}
	
	Notify (){
		for(let i in this.observers){
			this.observers[i].Update(this);
		}
	}
}

class ConcreteSubject extends Subject {
	constructor() {
		super();
		this.subjectState = null;
		this.observers = [];
	}
	
	GetState() {
		return this.subjectState;
	}
	
	SetState(state) {
		this.subjectState = state;
		this.Notify()
	}
}

class Observer {
	constructor() {
	}
	
	Update (){
	}
}

class ConcreteObserver extends Observer {
	constructor() {
		super();
		this.observerState = '';
		
	}
	
	Update (Subject){
		this.observerState = Subject.GetState();
	}
}


// test function
function init_Observer() {
	let observer1 = new ConcreteObserver();
	let observer2 = new ConcreteObserver();
	let subject = new ConcreteSubject();
	subject.Attach(observer1);
	subject.Attach(observer2);
	subject.SetState('state 1')
}