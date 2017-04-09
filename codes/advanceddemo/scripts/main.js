requirejs.config({
	baseUrl:'scripts',
	paths:{
		app:'app',
		jquery:'../../libs/jquery'
	},
	waitSeceds:10
});

define(['jquery', 'app/index', 'app/domreadydemo'],
	function($){
		alert($);
	});
