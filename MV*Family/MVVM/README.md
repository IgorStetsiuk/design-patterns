## MVVM (MODEL-VIEW-VIEWMODEL) design pattern

### Goals of MVVM

### Overview

![Photo](https://www.oreilly.com/library/view/learning-javascript-design/9781449334840/httpatomoreillycomsourceoreillyimages1547825.png)

#### Main Concepts 

![IMG](https://upload.wikimedia.org/wikipedia/commons/8/87/MVVMPattern.png)

**Models**

Models hold information, but typically don’t handle behavior. They don’t format information or influence how data appears in the browser as this isn’t their responsibility. Instead, formatting of data is handled by the View, whilst behavior is considered business logic that should be encapsulated in another layer that interacts with the Model - the ViewModel.


**ViewModel**

ViewModel which is an object or set of objects that represent the View’s State. 


**Model**

Model refers either to a domain model, which represents real state content (an object-oriented approach), or to the data access layer, which represents content (a data-centric approach).[citation needed]

**View**

As in the model-view-controller (MVC) and model-view-presenter (MVP) patterns, the view is the structure, layout, and appearance of what a user sees on the screen.[6] It displays a representation of the model and receives the user's interaction with the view (clicks, keyboard, gestures, etc.), and it forwards the handling of these to the view model via the data binding (properties, event callbacks, etc.) that is defined to link the view and view model.

**View model**

The view model is an abstraction of the view exposing public properties and commands. Instead of the controller of the MVC pattern, or the presenter of the MVP pattern, MVVM has a binder, which automates communication between the view and its bound properties in the view model. The view model has been described as a state of the data in the model.

The main difference between the view model and the Presenter in the MVP pattern, is that the presenter has a reference to a view whereas the view model does not. Instead, a view directly binds to properties on the view model to send and receive updates. To function efficiently, this requires a binding technology or generating boilerplate code to do the binding.

### Advantages

+ MVVM Facilitates easier parallel development of a UI and the building blocks that power it
+ Abstracts the View and thus reduces the quantity of business logic (or glue) required in the code behind it
+ The ViewModel can be easier to unit test than event-driven code
+ The ViewModel (being more Model than View) can be tested without concerns of UI automation and interaction

### Examples

+ Angular
+ React
+ Vue

#### Sources 

[MVVM](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#detailmvvm)
