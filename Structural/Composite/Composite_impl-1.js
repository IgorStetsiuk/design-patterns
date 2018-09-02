/**
 *
 * Real world example
 *
 * Every organization is composed of employees. Each of the employees has same features i.e.
 * has a salary, has some responsibilities, may or may not report to someone, may or
 * may not have some subordinates etc.
 *
 * In plain words
 *
 * Composite pattern lets clients to treat the individual objects in a uniform manner.
 *
 * Wikipedia says
 *
 * In software engineering, the composite pattern is a partitioning design pattern.
 * The composite pattern describes that a group of objects is to be treated
 * in the same way as a single instance of an object. The intent of a composite is
 * to "compose" objects into tree structures to represent part-whole hierarchies.
 * Implementing the composite pattern lets clients treat individual objects and compositions uniformly.*
 *
 */

/*
Employee interface :

constructor(name, salary)
getName()
setSalary()
getSalary()
getRoles()
*/

// implements employee interface
class Developer {
  
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  
  getName() {
    return this.name;
  }
  
  setSalary(salary) {
    this.salary = salary;
  }
  
  getSalary() {
    return this.salary;
  }
  
  getRoles() {
    return this.roles;
  }
  
  develop() {
    /* */
  }
}


// implements employee interface
class Designer {
  
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  
  getName() {
    return this.name;
  }
  
  setSalary(salary) {
    this.salary = salary;
  }
  
  getSalary() {
    return this.salary;
  }
  
  getRoles() {
    return this.roles;
  }
  
  design() {
    /* */
  }
}

/**
 * Then we have an organization which consists of several different types of employees
 */

class Organization {
  constructor(){
    this.employees = []
  }
  
  addEmployee(employee) {
    this.employees.push(employee)
  }
  
  getNetSalaries() {
    let netSalary = 0;
    
    this.employees.forEach(employee => {
      netSalary += employee.getSalary()
    });
    
    return netSalary
  }
}


// Prepare the employees
const john = new Developer('John Doe', 12000);
const jane = new Designer('Jane', 10000);

// Add them to organization
const organization = new Organization();
organization.addEmployee(john);
organization.addEmployee(jane);

console.log("Net salaries: " , organization.getNetSalaries()); // Net Salaries: 22000