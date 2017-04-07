define(function(require){
	var mod=require('./number');  //不需要指定模块名称可以访问相邻模块
	alert('requireindex2');
	alert(mod);
});