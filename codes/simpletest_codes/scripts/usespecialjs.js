//如果使用了.js结尾，则require不会使用baseUrl+path的方式来加载依赖项，而是像传统的js
//加载
//满足以下三种方式的依赖，reuirejs不会使用baseUrl+path：
//1. 以.js结尾
//1. 以/开头
//2. 以url协议开头，如http或者https等
define(['./scripts/loopA.js'],function(loopA){
		return function(){
			console.log('loopA');
			console.log('loopB');
		}
		
});