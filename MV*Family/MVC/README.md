## MVC design pattern

### Goals of MVC 

**Simultaneous development**

Because MVC decouples the various components of an application, developers are able to work in parallel on different components without impacting or blocking one another. For example, a team might divide their developers between the front-end and the back-end. The back-end developers can design the structure of the data and how the user interacts with it without requiring the user interface to be completed. Conversely, the front-end developers are able to design and test the layout of the application prior to the data structure being available.

**Code reuse**

By creating components that are independent of each other, developers are able to reuse components quickly and easily in other applications. The same (or similar) view for one application can be refactored for another application with different data because the view is simply handling how the data is being displayed to the user.

### Overview
**Model**

The central component of the pattern. It is the application's dynamic data structure, independent of the user interface. It directly manages the data, logic and rules of the application.

**View**

Any representation of information such as a chart, diagram or table. Multiple views of the same information are possible, such as a bar chart for management and a tabular view for accountants.

**Controller**

Accepts input and converts it to commands for the model or view.
In addition to dividing the application into these components, the model–view–controller design defines the interactions between them.

+ The model is responsible for managing the data of the application. It receives user input from the controller.
+ The view means presentation of the model in a particular format.
+ The controller responds to the user input and performs interactions on the data model objects. The controller receives the input, optionally validates it and then passes the input to the model.

As with other software patterns, MVC expresses the "core of the solution" to a problem while allowing it to be adapted for each system.
Particular MVC architectures can vary significantly from the traditional description here.

![MVC](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/MVC-Process.svg/1280px-MVC-Process.svg.png)

#### Main Concepts 

![MVC_2](https://developer.chrome.com/static/images/mvc.png)

**Model**

is where the application’s data objects are stored. The model doesn’t know anything about views and controllers. When a model changes, typically it will notify its observers that a change has occurred.


**View**
 
is what's presented to the users and how users interact with the app. The view is made with HTML, CSS, JavaScript and often templates. This part of your Chrome App has access to the DOM.

**Controller**

The controller is the decision maker and the glue between the model and view. The controller updates the view when the model changes. It also adds event listeners to the view and updates the model when the user manipulates the view.

In the todo list web app, when the user checks an item as completed, the click is forwarded to the controller. The controller modifies the model to mark item as completed. If the data needs to be persistent, it also makes an async save to the server. 
For example, in the above todo list web app, you can create a view that nicely presents the list of todo items to your users. Users can also enter a new todo item through some input format; however, the view doesn’t know how to update the model because that’s the controller’s job.

Models represent application data whilst views are what the user is presented on screen. As such, MVC relies on the Observer pattern for some of its core communication (something that surprisingly isn't covered in many articles about the MVC pattern). When a model is changed it notifies its observers (Views) that something has been updated - this is perhaps the most important relationship in MVC. The observer nature of this relationship is also what facilitates multiple views being attached to the same model.

### Advantages

+ Simultaneous development – Multiple developers can work simultaneously on the model, controller and views.
+ High cohesion – MVC enables logical grouping of related actions on a controller together. The views for a specific model are also grouped together.
+ Low coupling – The very nature of the MVC framework is such that there is low coupling among models, views or controllers
+ Ease of modification – Because of the separation of responsibilities, future development or modification is easier
+ Multiple views for a model – Models can have multiple views

### Examples
In the last few years, a series of JavaScript MVC frameworks have been developed, such as 
+ backbone.js, 
+ ember.js, 
+ AngularJS, 

...

While they all have their unique advantages, each one of them follows some form of MVC pattern with the goal of encouraging developers to write more structured JavaScript code.

#### Sources 
  [AddyOsmani MV*](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#detailmvcmvp)

  [Wikipedia](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)
  
  [SitePoint](https://www.sitepoint.com/mvc-design-pattern-javascript/)
  
  [MVC Architecture](https://developer.chrome.com/apps/app_frameworks#mvc)
 
