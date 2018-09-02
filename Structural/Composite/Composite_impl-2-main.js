/**
 * "Component"
 */

class Graphic {
  print() {};
}

/**
 * Composite
 */

class CompositeGraphic extends Graphic {
  constructor() {
    super();
    this.graphicList = [];
  }
  
  print() {
    this.graphicList.forEach(elem => elem.print());
  }
  
  addGraphicComponent(graphicComponent) {
    this.graphicList.push(graphicComponent);
  }
  
  removeGraphicComponent(graphicComponent) {
    this.graphicList.filter((elem) => elem !== graphicComponent);
  }
  
}

/**
 * Leaf
 */
class Ellipse extends Graphic {
  
  print() {
    console.log("Ellipse");
  }
}

/**
 * Leaf
 */
class Triangle extends Graphic {
  print() {
    console.log("Triangle")
  }
}

(() => {

  let triangle1 = new Triangle();
  let triangle2 = new Triangle();
  let ellipse = new Ellipse();
  
  let compositeGraphic = new CompositeGraphic();
  let compositeGraphic1 = new CompositeGraphic();
  let compositeGraphic2 = new CompositeGraphic();
  
  
  //Composes the graphics
  compositeGraphic1.addGraphicComponent(triangle1);
  compositeGraphic1.addGraphicComponent(triangle2);
  
  compositeGraphic2.addGraphicComponent(ellipse);
  compositeGraphic2.addGraphicComponent(triangle1);
  
  compositeGraphic.addGraphicComponent(compositeGraphic1);
  compositeGraphic.addGraphicComponent(compositeGraphic2);
  
  compositeGraphic.print();
  
  

})();