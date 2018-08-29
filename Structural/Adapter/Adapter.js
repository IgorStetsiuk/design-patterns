/**
 * RoundHoles are compatible with RoundPegs.
 */
class RoundHole {
  
  constructor(radius) {
    this.radius = radius;
  }
  
  getRadius() {
    return this.radius
  }
  
  isFits(roundPeg) {
    return this.radius >= roundPeg.getRadius();
  }
  
}


/**
 * RoundPegs are compatible with RoundHoles.
 */
class RoundPeg {
  
  constructor() {}
  
  getRadius() {
    return this.radius
  }
  
  // Have to use this setter, don't have ability to
  // override constructor
  setRadius(radius) {
    this.radius = radius;
  }
  
}

/**
 * SquarePegs are not compatible with RoundHoles (they were implemented by
 * previous development team). But we have to integrate them into our program.
 */

class SquarePeg {
  
  constructor(width) {
    this.width = width;
  }
  
  getWidth() {
    return this.width;
  }
  
  getSquare() {
    return Math.pow(this.width, 2);
  }
}

/**
 * Adapter allows fitting square pegs into round holes.
 */

class SquarePegAdapter extends RoundPeg {
  
  constructor(squarePeg) {
    super();
    this.squarePeg = squarePeg;
  }
  
  getRadius() {
    // Calculate a minimum circle radius, which can fit this peg.
    return Math.sqrt(Math.pow((this.squarePeg.getWidth() / 2), 2) * 2);
  }
}


/**
 * Somewhere in client code...
 */
(() => {

  let roundHole = new RoundHole(5);
  let roundPeg = new RoundPeg();
  roundPeg.setRadius(5);
  
  if (roundHole.isFits(roundPeg)) {
   console.log("Round peg r5 fits round hole r5.");
  }
  
  let smallSquarePeg = new SquarePeg(3);
  let largeSquarePeg = new SquarePeg(15);
  
  let squarePegs = [smallSquarePeg, largeSquarePeg];
  
  // This code won't execute. Uncaught TypeError: roundPeg.getRadius is not a function error cause squarePeg has'n method getRadius while executing
  // So we have to use adapter for squarePeg
  
  /*
  squarePegs.forEach((squarePeg) => {
    roundHole.isFits(squarePeg) ? console.log(`SquarePeg with ${squarePeg.getWidth()} width fits to the ${roundHole.getRadius()}`)
      : console.log(`SquarePeg with ${squarePeg.getWidth()} width doesn't fit to the ${roundHole.getRadius()}`);
  })
  */
  
  // After applying adapter to square we can get radius for square and knows whether it fits or now.
  let smallSquarePegAdapter = new SquarePegAdapter(smallSquarePeg);
  let largeSquarePegAdapter = new SquarePegAdapter(largeSquarePeg);
  
  let squarePegAdapters = [smallSquarePegAdapter, largeSquarePegAdapter];
  
  squarePegAdapters.forEach((squarePegAdapter) => {
    roundHole.isFits(squarePegAdapter) ? console.log(`SquarePeg with ${squarePegAdapter.getRadius()} radius fits to the ${roundHole.getRadius()}`)
      : console.log(`SquarePeg with ${squarePegAdapter.getRadius()} radius doesn't fit to the ${roundHole.getRadius()}`);
  })
  
})();