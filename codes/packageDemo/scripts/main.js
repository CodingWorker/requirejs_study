requirejs.config({
	baseUrl:'./scripts',
	paths:{
		jquery:'../../libs/jquery'
	},
	packages:['cart', 'store'],
	deps:[],
	callback:function(){ //回调函数在deps加载后就会执行，在下面的模块调用之前
		alert('requirejs.config.callback');
	},
	urlArgs:'bust=random',    //该参数将会自动附加在获取资源如js/html等的GET url参数后面，
	//可以使用参数有效的处理缓存问题：'bust='+(new Date()).getTime()
	scriptType:'text/javascript', //当框架将模块通过script标签引入
	//html时，该配置项将作为type的值，注意该值可能导致某些模块加载失败
	enforceDefine:true, //指明必须使用AMD定义模块格式
});

requirejs(['cart', 'store/a.js', 'store/util'],
	function(cart, store, util){

	},
	function(err){//定义出错的解决办法
		alert(err);  //类似console的信息
		alert(err.requireModules); //err会包含一个出错信
		//模块的数组
		//然后可以使用undef注销模块，在这里还可以使用requirejs.config将
		//新定义的paths指定一个正确的路径来加载失败的依赖模块
		if (failedId === 'jquery') {
//undef is function only on the global requirejs object.
//Use it to clear internal knowledge of jQuery. Any modules
//that were dependent on jQuery and in the middle of loading
//will not be loaded yet, they will wait until a valid jQuery
//does load.
requirejs.undef(failedId);

//Set the path to jQuery to local path
requirejs.config({
paths: {
jquery: 'local/jquery'
            }
        });

//Try again. Note that the above require callback
//with the "Do something with $ here" comment will
//be called if this new attempt to load jQuery succeeds.
require(['jquery'], function() {});
    } else {
//Some other error. Maybe show message to the user.
    }
}		
	});//还可以在function(err)中重载requirejs.onError = function(err) 
