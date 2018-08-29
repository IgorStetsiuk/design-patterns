## Prototype 

### Intent 
Specify the kinds of objects to create using a prototypical instance,
and create new objects by copying this prototype.

### Solution 
Declare an abstract base class that specifies a pure virtual "clone" method, and, maintains a dictionary of all 
"cloneable" concrete derived classes. Any class that needs a "polymorphic constructor" capability: derives itself 
from the abstract base class, registers its prototypical instance, and implements the clone() operation.

The client then, instead of writing code that invokes the
"new" operator on a hard-wired class name, calls a "clone" operation on the abstract base class, supplying a string or 
enumerated data type that designates the particular concrete derived class desired.

### Discussion and Applicability
The Prototype Pattern creates new objects, but rather than creating 
non-initialized objects it returns objects that are initialized with values
it copied from a prototype - or sample - object. The Prototype pattern is also referred 
to as the Properties pattern.

