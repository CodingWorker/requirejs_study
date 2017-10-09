//配置requirejs
requirejs.config({
	baseUrl:'js/lib',//配置好baseUrl后，之后在其他的模块中依赖js模块时的查找路径是相对于这个baseUrl的
	paths:{
		app:'../app'//这里指定的可以在依赖加载的时候按这里的配置解析
	}
});


requirejs([/*定义依赖项*/'require','index','key-value', 'func'], function(/*依赖*/require,index,kv, func){
		console.log(123);
		console.log(index);
		console.log(kv);
		console.log(kv.name+', '+kv.age);
		func();//函数模块调用

		var kv2=require('key-value');//这里加载与定义依赖项等价
		console.log(kv2);
});