define(
//the first variables are array, are the dependencies
['jquary'],

// return a object to the module
function($){//in the funciton,$ is the same to jquary
	alert($);

	//return an object to define the module
	return {
		count:0,
		color:'red',
		size:'small',
		addSome:function(num){
			count=count+num;
			alert(this);
		}
	};
});
