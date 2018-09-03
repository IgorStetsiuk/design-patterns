# Decorator

### Definition 

+ **Decorator** is a structural design pattern that lets you attach new behaviors to objects by placing them inside wrapper objects that contain these behaviors.
+ Attach additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.
+ Client-specified embellishment of a core object by recursively wrapping it.
+ Wrapping a gift, putting it in a box, and wrapping the box.

   
  
### Problem / Motivation

   You want to add behavior or state to individual objects at run-time. Inheritance is not feasible because it is static and applies to an entire class.

### Solution 

The decorator pattern relies on special objects called decorators (or wrappers). They have the same interface as an object that they suppose to wrap, so the client code will not notice when you hand it a wrapper instead of the original object.

All wrappers have a field for storing an instance of an original object. Most wrappers initialize that field with an object passed into their constructor.   

### Usage / Applicability

 When you need to dynamically assign the behaviors to objects without breaking the code that uses these objects.
 
 + The Decorator pattern allows assigning new behaviors to objects dynamically and implicitly to a client code. Objects can be wrapped with multiple wrappers at the same time, resulting in a stacking behavior of all wrappers.
   
 When it is not possible or awkward to extend the object behavior with inheritance.

 +  Many programming languages have the final keyword that can be used to prevent further extension of a class. When dealing with such code, the only option for the extension is to use the Decorator pattern.  

### The decorator design pattern solves problems like:

+ Responsibilities should be added to (and removed from) an object dynamically at run-time.
+ A flexible alternative to subclassing for extending functionality should be provided.

When using subclassing, different subclasses extend a class in different ways. But an extension is bound to the class at compile-time and can't be changed at run-time.
  
### UML Diagram / Structures

  ![DecoratorGeneralUMLDiagram](./Decorator.js)
   
### Sources 

  [RefactoringGuru](https://refactoring.guru/design-patterns/decorator)
  
  [Soursemaking](https://sourcemaking.com/design_patterns/decorator)
  
  [Git](https://github.com/sohamkamani/javascript-design-patterns-for-humans#-decorator)
  
  [Wiki](https://en.wikipedia.org/wiki/Decorator_pattern)
 
   
   
   
  