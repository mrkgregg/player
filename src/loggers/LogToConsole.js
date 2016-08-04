// Simplified Logger - not expected to work. (Implementation not important to design pattern)
var _lastLogMsg;
var _console;
var LogToConsole = function(console){
  _console = console;
};

LogToConsole.prototype = Object.create(Logger); // prototype = the interface

LogToConsole.prototype.debug = function(log){
  _console.log(log);
  _lastLogMsg = log;
};

LogToConsole.prototype.error = function(log){
  _console.error(log);
  _lastLogMsg = log;
};

LogToConsole.prototype.getLastLog = function(){
  return _lastLogMsg;
};
