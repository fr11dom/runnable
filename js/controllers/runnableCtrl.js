yBlog.controller('RunnableCtrl', function RunnableCtrl($scope, $location, httpSer){
	httpSer.get('/getList', function(d){
   		$scope.list = d;
  	});
});