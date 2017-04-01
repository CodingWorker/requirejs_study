//这种用法不是健壮，一般仅仅用在初始化时的跨域请求
define(['http://baidu.com/data-josn?callback=define']
	
	//data 为跨域请求的响应，
	//仅仅支持返回类型为json object的服务
	function(data){

	});