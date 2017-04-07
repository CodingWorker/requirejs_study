requirejs.config({
	baseUrl:'scripts',
	paths:{
		jquery:'../../libs/jquery'
	}
});

define(['jquery'],
	function($){
		alert($);
	});
