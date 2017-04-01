define(
//循环依赖，将require 注入到依赖
['require', 'loopB'],
function(require, loopB){
	//if looB depend loopA,it will be null here
	
	return function(title){
		//in here,the loopB is not null
		return require('looB').doSomething();
	}
});
