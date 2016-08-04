// Simplified Logger - not expected to work. (Implementation not important to design pattern)
var file;
var _lastLogMsg;

var LogToFile = function(logFile){
  file = logFile;
};

LogToFile.prototype = Object.create(Logger);

LogToFile.prototype.debug = function(log){
  file.writeDebug(log);
  _lastLogMsg = log;
};

LogToFile.prototype.error = function(log){
  file.writeError(log);
  _lastLogMsg = log;
};

LogToFile.prototype.getLastLog = function(){
  return _lastLogMsg;
};
