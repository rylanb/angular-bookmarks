angular.module('categories', [
  'eggly.models.categories'
])
  .config(function($stateProvider){
    $stateProvider
      .state('eggly.categories', {
        url: '/',
        views: {
          'categories@': {
            controller: 'CategoriesCtrl',
            templateUrl: '/assets/js/categories/categories.tmpl.html'
          },
          'bookmarks@': {
            controller: 'BookmarksCtrl',
            templateUrl: '/assets/js/categories/bookmarks/bookmarks.tmpl.html'
          }

        }
      })
  })
  .controller('CategoriesCtrl', function CategoriesCtrl($scope){

  })
;
