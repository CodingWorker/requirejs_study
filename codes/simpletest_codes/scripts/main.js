//set the config of this app when using requirejs
requirejs.config=({
	//set the baseurl,use when default
	baseUrl:'scripts',
	// path.config
	paths:{
		//if the module id start with app,then load it from the
		//app directory
		//the config is relative to the baseUrl
		app:'./app',
		jquary:'libs/jquery-3.2.0.min.js',
		index:'./index/index.js',
	}
});

// requirejs(['index'],
// 	function(index){
// 		index.alert(12);
// 	});
// requirejs(
// 	//set the 依赖项
// 	['jquary', 'index'],
// 	//by the above, the jquary and index module can all be used here now
// 	function($, index){
// 		console.log($)
// 	});

requirejs(['usespecialjs'],
	function(usespecialjs){
		console.log(usespecialjs);
	});
