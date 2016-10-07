var app = {
  templateUrl: './app.html'
}

angular
  .module('app')
  .component('app', app)
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/')
    $stateProvider
      .state('app', {
       redirectTo: 'main',
       url:'/',
       component: 'app'
      })
  });