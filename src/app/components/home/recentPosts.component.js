var home = {
  templateUrl: './home.html',
  controller: 'HomeCtrl'
};

angular
  .module('components.home')
  .component('home', home)
  .config(function($stateProvider) {
    $stateProvider
      .state('home', {
        parent: 'app',
        url:'^/home',
        component: 'home'
      });
  });
