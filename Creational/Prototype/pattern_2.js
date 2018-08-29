/**
 * In the sample code we have a CustomerPrototype object that clones objects
 * given a prototype object. Its constructor function accepts a prototype of type Customer.
 *
 * Calling the clone method will generate a new Customer object with its property values initialized with the prototype values.
 */


class CustomerPrototype {
	constructor(proto) {
		this.proto = proto;
	}
	
	clone() {
		const customer = new Customer();
		
		customer.first = this.proto.first;
		customer.last = this.proto.last;
		customer.status = this.proto.status;
		
		return customer;
	}
}

class Customer {
	constructor(first, last, status) {
		this.first = first;
		this.last = last;
		this.status = status;
	}
	
	say() {
		console.log(`Name: ${this.first} ${this.last}, status: ${this.status}`);
	}
}

function run() {
	const proto = new Customer('FirstName', 'LastName', 'pending');
	const prototype = new CustomerPrototype(proto);
	const customer = prototype.clone();
	
	customer.say();
}
run();