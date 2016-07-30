// Add properties of a base class to a subClass that don't already exist.
var MIXIN = function(base, subClass){
  var prop;
  for(prop in base){
    if(typeof base[prop] === "function" &&
     !subClass[prop]){ // ensures not overriding current functionality
      subClass[prop] = base[prop].bind(base);
    }
  }
};
