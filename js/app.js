var yBlog = angular.module('yBlog', ['RunnableMocks','ngRoute']);

yBlog.config(['$routeProvider', function($routeProvider){
  
  $routeProvider.
      when('/runnable', {
          controller: 'RunnableCtrl',
          templateUrl: 'views/runnable-list.html'
      }).
      when('/detail/css-pictxt', {
          templateUrl: 'views/css/css-pictxt.html'
      }).
      when('/detail/block-formatting-context', {
          templateUrl: 'views/css/block-formatting-context.html'
      }).
      when('/detail/close-float', {
          templateUrl: 'views/css/close-float.html'
      }).
      when('/about', {
        templateUrl: 'views/about-me.html'
      }).
      otherwise({redirectTo:'/runnable'});
}]);

yBlog.run(function($rootScope,$location, httpSer){
  httpSer.get('/getNav', function(d){
    $rootScope.nav = d;
  });

  $rootScope.$on('$routeChangeStart', function(event, next){
      $rootScope.url = $location.path();
      if($location.path() != '/about'){
         $rootScope.url = '/runnable';    
      }
  });
});