var recentPosts = {
  templateUrl: './recent-posts.html',
  controller: 'BlogCtrl'
}

angular
  .module('components.main')
  .component('recentPosts', recentPosts)
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        parent: 'app',
        url:'^/main',
        component: 'recentPosts'
      });
  });
