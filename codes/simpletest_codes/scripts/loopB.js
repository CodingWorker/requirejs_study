define(
['require', 'loopA'],
function(){
	//if loopA depend loopB,it will be null here
	
	return function(){
		//in here, the loopA is not null
		return require('loopA').doSomething();
	}
});
