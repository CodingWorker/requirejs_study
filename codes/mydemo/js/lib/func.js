define(['require'],function(require){
	return function(){
		console.log('function module');
		var cssUrl=require.toUrl('./style.css');//js/lib/style.css
		console.log(cssUrl);
	}
});