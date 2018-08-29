
/**
 * Classic implementation of Abstract pattern
 * scheduled to implement on ES5 way
 */


/**
 * Abstract factory knows about all (abstract) product types.
 */
class GraphicUIAbstractFactory {
  createButton(){}
  createCheckbox(){}
}

/**
 * Abstract Factory assumes that you have several families of products,
 * structured into separate class hierarchies (Button/Checkbox). All products of
 * the same family have the common interface.
 *
 * This is the common interface for buttons family.
 */

// interface
class Button {
    constructor() {}

    click(){
        console.log(`${this.name} on click event bubbled`);
    }
}


/**
 * All products families have the same varieties (MacOS/Windows).
 *
 * This is a MacOS variant of a button.
 *
 * Implements interface, concrete product
 */

class MacBookButton extends Button{
    constructor(name) {
        super();
        this.name = name;
    }
}

/**
 * All products families have the same varieties (MacOS/Windows).
 *
 * This is another variant of a button.
 *
 * Implements interface, concrete product
 */

class WindowsButton extends Button{
    constructor(name) {
        super();
        this.name = name;
    }
}

/**
 * Checkboxes is the second product family. It has the same variants as buttons.
 */
// interface checkbox
class Checkbox {
  isSelected(){
    console.log(`${this.name} someone has selected me`)
  }
}

/**
 * This is a variant of a checkbox.
 *
 * Implements interface, concrete product
 */

class MacBookCheckbox extends Checkbox {
  constructor(name) {
    super();
    this.name = name;
  }
}

/**
 *
 * This is another variant of a checkbox.
 */
// Implements interface, concrete product
class WindowsCheckbox extends Checkbox{
  constructor(name) {
    super();
    this.name = name;
  }
}

// Concrete factory
/**
 * Each concrete factory extends basic factory and responsible for creating
 * products of a single variety.
 */
class MacOSFactory extends GraphicUIAbstractFactory {
    
    constructor({button, checkbox}) {
      super();
      this.buttonName = button;
      this.checkboxOptions = checkbox;
    }
    
   createButton() {
     return new MacBookButton(this.buttonName);
   }
   
   createCheckbox() {
     return new MacBookCheckbox(this.checkboxOptions);
   }
}

// Concrete factory
/**
 * Each concrete factory extends basic factory and responsible for creating
 * products of a single variety.
 */
class WindowsFactory extends GraphicUIAbstractFactory {
  constructor({button, checkbox}) {
    super();
    this.buttonName = button;
    this.checkboxOptions = checkbox;
  }
  
  createButton() {
    return new WindowsButton(this.buttonName);
  }
  
  createCheckbox() {
    return new WindowsCheckbox(this.checkboxOptions);
  }
  
}

/**
 * Factory users don't care which concrete factory they use since they work with
 * factories and products through abstract interfaces.
 */

class Application {
  constructor(graphicFactory) {
    this.button = graphicFactory.createButton();
    this.checkbox = graphicFactory.createCheckbox();
  }
  
  paint() {
    this.button.click();
    this.checkbox.isSelected();
  }
}


const macbookOptions = {
  system: 'MacBook',
  button: 'Enter For Mac',
  checkbox: 'List of countries'
};

const windowsOptions = {
  system: 'Windows',
  button: 'Enter For windows',
  checkbox: 'List of dishes'
};

/**
 * Application picks the factory type and creates it in run time (usually at
 * initialization stage), depending on the configuration or environmentfunction demonstration() {
 * variables.
 */

class DemoApp {
 static configureApplication(options) {
    let application = null;
    let factory = null;
    
    switch (options.system) {
      case 'MacBook':
        factory = new MacOSFactory(options);
        application  = new Application(factory);
        break;
      case 'Windows':
        factory = new WindowsFactory(options);
        application = new Application(factory);
        break;
    }
    
    return application;
  }
}

(function client() {
  let application = DemoApp.configureApplication(windowsOptions);
  application.paint();
})();

