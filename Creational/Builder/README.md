# Builder

### Definition 
   + Separate the construction of a complex object from its representation so that the same construction process can create different representations.
   + The **intent** of the Builder design pattern is to separate the construction of a complex object from its representation. By doing so the same construction process can create different representations.
   + Unlike other creational patterns, Builder does not require products to have a common interface. That makes it possible to produce different products using the same construction process.
### Problem / Motivation
  Creating and assembling the parts of a complex object directly within a class is inflexible. It commits the class to creating a particular representation of the complex object and makes it impossible to change the representation later independently from (without having to change) the class.
  
  The Builder design pattern describes how to solve such problems:
  
  + Encapsulate creating and assembling the parts of a complex object in a separate Builder object.
  + A class delegates object creation to a Builder object instead of creating the objects directly.
  
  A class (the same construction process) can delegate to different Builder objects to create different representations of a complex object.

 

### Usage/Applicability 
   1. When you have a "telescopic" constructor.
  
   The Builder pattern allows building objects step by step. Moreover, you can use only required steps and skip the optional ones when building a simple object.

   2. When your code has to create different representations of one product (for example, stone and wooden houses). Construction of the product has similar steps that differ in details. 
    Plus, although the products may be similar, they do not necessary have to have a common base class or interface.
    
   Builder can be used to construct different products using the same building process.
   Each distinct product will be represented by a separate builder class. Code that controls the construction order may live in a single director class.
    
   3. When you have to build a Composite tree or another complex object.
   
  Builder constructs products steps by step. It allows deferred or even recursive building that is mandatory when you are working with tree structures. Builder does not expose unfinished product while running construction steps. This prevents client code from getting corrupted results.  

### UML Diagram 

   ![GeneralUML](./FactoryMethod.png)

Sources 

  [Wikipedia](https://en.wikipedia.org/wiki/Builder_pattern)
     
  [Soursemaking](https://sourcemaking.com/design_patterns/builder)
  
  [RefactoringGuru](https://refactoring.guru/design-patterns/builder)
 
   
   
  