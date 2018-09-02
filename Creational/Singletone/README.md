## Singleton design pattern

### Main idea 
In JavaScript, Singletons serve as a shared resource namespace which isolate implementation code from the global namespace so as to provide a single point of access for functions.
In practice, the Singleton pattern is useful when exactly one object is needed to coordinate others across a system

#### Singleton
 The Singleton pattern is thus known because it restricts instantiation of a class to a single object. Classically, the Singleton pattern can be implemented by creating a class with a method that creates a new instance of the class if one doesn't exist. In the event of an instance already existing, it simply returns a reference to that object.
##### Applicability

+ There must be exactly one instance of a class, and it must be accessible to clients from a well-known access point.
+ When the sole instance should be extensible by subclassing, and clients should be able to use an extended instance without modifying their code.

##### Usage 
+ One example is using an office printer. If there are ten people in an office, and they all use one printer, ten computers share one printer (instance). By sharing one printer, they share the same resources.
+ Cache class can be a perfect example of singleton , becuase we want to share the cache store across our application and also making sure that we carry the same instance from one file to another.