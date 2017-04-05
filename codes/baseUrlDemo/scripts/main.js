//配置baseUrl
requirejs.config({
	baseUrl:'./scripts',
	paths:{
		app:'./app',
		index:'./app/index',
		//jquery:'../../libs/jquery',这样jQuery在本页面使用jQuery依赖时不会被正确的加载
		//或解析，而在其他页面使用jquery会正确的解析，即其他页面对ModuleId大小写不敏感
		jQuery:'../../libs/jquery',
	}
});

//自动解析依赖项的路径，并在最后加.js
//如这里会：../../libs/jquery.js
requirejs(['jQuery','app/colorandsize', 
	'app/colorandsize2', 'app/jqueryops', 'index'],
	function($, cs, cs2, jops, index){
	console.log($);
	console.log(cs);
	console.log(cs2);
	console.log(jops);
	console.log(index);
});