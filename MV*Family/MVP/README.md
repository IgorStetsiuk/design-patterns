## MVP design pattern

### Goals of MVP

The main aim of MVP is decoupling of different aspects in the code. Basically there is 3 main such aspects in javascript,

+ DOM Manipulation
+ Event Handling
+ Server Communication(Ajax calls etc)

MVP improves the separation of concerns in presentation logic:

**The model**

Where we defines the data to be displayed or where data should be kept to manipulate.

**The view**

Is an interface that displays data (the model) and routes user commands (events) to the presenter to act upon that data.

**The presenter**

Acts upon the model and the view. It retrieves data from the model, and formats it for display in the view 


### Overview

**Model**

In an application with a good layered architecture, this model would only be the gateway to the domain layer or business logic. See it as the provider of the data we want to display in the view. Model’s responsibilities include using APIs, caching data, managing databases and so on.

**View**

The View, usually implemented by an Activity, will contain a reference to the presenter. The only thing that the view will do is to call a method from the Presenter every time there is an interface action.

**Presenter**

The Presenter is responsible to act as the middle man between View and Model. It retrieves data from the Model and returns it formatted to the View. But unlike the typical MVC, it also decides what happens when you interact with the View.

<p align="center">
  <img width="300" height="300" src="https://cdn-images-1.medium.com/max/1600/0*eeXWrzqwjCjSLpxD.">
</p>

#### Main Concepts 

### Advantages

#### Sources 
 
 [Medium main article](https://medium.com/@rohitkhatana/presenter-first-mvp-using-typescript-javascript-245a4fe041ef)
 
 [http://www.roypeled.com](http://www.roypeled.com/an-mvp-guide-to-javascript-model-view-presenter/)
