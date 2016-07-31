Setup:
  npm install jasmine

Description:
So what's going on?
  -Good question. This is a template for different players.
  -Assumptions are noted as comments in the corresponding .js file.
Src folder:
  -The interfaces folder, brings interfaces to JS. By creating a class that defines empty functions and then using these interfaces as inheritance parent classes, we create an interface of sorts as these functions aren't usable unless overridden, as they do nothing.
  -Decorators are used to create the player we want from the interfaces and implementations we have available to us. By programming to the interface we can use composition to create players combining functionality, but keeping it decoupled so functionality doesn't need to know about each other. 


TODO:
1) Create Standard Player
2) Create Pause Interface & Implementation
3) Create Logging, Pausing Player
4) Create State Obj to manage & encapsulate state of player (inject in also?)
