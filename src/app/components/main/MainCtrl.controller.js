function MainCtrl(MainService) {

  let vm = this;
  vm.activate = activate;
  vm.recentFeed = recentFeed;
  
  vm.feed = '';
  activate();

  function activate() {
    recentFeed();
  }

  function recentFeed() {
    BlogService.scrape().then((res) => res);
  }



}

angular
  .module('components.main')
  .controller('MainCtrl', MainCtrl);