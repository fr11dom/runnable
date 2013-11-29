yBlog.factory('httpSer', function($http) {
    return{
		get: function(url, callback){
			$http({method: 'GET', url: url}).success(function(data){
	            if(data.status === "ok"){
                    if(callback){
                        callback(data.data);
                    }
                }else{
                    alert(data.message);
                }
			  });
        }
    }
});