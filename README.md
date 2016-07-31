Setup:
  -npm install jasmine
  -Go to the jasmine-runner.html in test folder to run tests.
  -Click the show check box at the right hand side of the page to see the tests.

Description:
So what's going on?
  -Good question. This is a template for different players.
  -Assumptions are noted as comments in the corresponding .js file.
Src folder:
  -The interfaces folder, brings interfaces to JS. By creating a class that defines empty functions and then using these interfaces as inheritance parent classes, we create an interface of sorts as these functions aren't usable unless overridden, as they do nothing.
  -Decorators are used to create the player we want via composition. By programming to the interface we can use composition to create players combining functionality, but keeping it decoupled so you can have the functionality you need for a specific player.


TODO:
1) Create Pause Interface & Implementation
2) Create Logging, Pausing Player
3) Create State Obj to manage & encapsulate state of player (inject in also?)
