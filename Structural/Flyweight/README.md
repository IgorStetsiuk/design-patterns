# Flyweight

### Definition 
   + Flyweight is a structural design pattern that lets you fit more objects into the available amount of RAM by sharing common parts of object state among multiple objects, instead of keeping it in each object.
   + Use sharing to support large numbers of fine-grained objects efficiently.
   + The Motif GUI strategy of replacing heavy-weight widgets with light-weight gadgets.
### Problem / Motivation
   
   
### Usage / Applicability
When you have to support a huge amount of objects that hardly fit into given RAM.

+ The benefit from applying the Flyweight pattern relies heavily on how and where it is used. It is most useful when:
  
  + an application needs to spawn a large number of objects;
  + these objects consume all system RAM;
  + objects contain duplicate state, that can be extracted and shared.


### The flyweight design pattern solves problems like:

+ Large numbers of objects should be supported efficiently.
+ Creating large numbers of objects should be avoided.
    
### Real life example

+ The Flyweight uses sharing to support large numbers of objects efficiently. Modern web browsers use this technique to prevent loading same images twice. When browser loads a web page, it traverse through all images on that page. Browser loads all new images from Internet and places them the internal cache. For already loaded images, a flyweight object is created, which has some unique data like position within the page, but everything else is referenced to the cached one.
+ Did you ever have fresh tea from some stall? They often make more than one cup that you demanded and save the rest for any other customer so to save the resources e.g. gas etc. Flyweight pattern is all about that i.e. sharing.
  

### UML Diagram / Structures

   ![Flyweight](./Flyweight.js)
   
### Sources 

  [RefactoringGuru](https://refactoring.guru/design-patterns/flyweight)
  
  [Wikipedia](https://en.wikipedia.org/wiki/Flyweight_pattern)
  
  [Soursemaking](https://sourcemaking.com/design_patterns/flyweight)
  
  [Git](https://github.com/sohamkamani/javascript-design-patterns-for-humans#-decorator)
  
  [Git2](https://gist.github.com/addyosmani/2668755)
 
   
   
   
  