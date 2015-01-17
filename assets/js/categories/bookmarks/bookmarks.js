angular.module('categories.bookmarks', [
  'categories.bookmarks.create',
  'categories.bookmarks.edit',
  'eggly.models.categories',
  'eggly.models.bookmarks'
])
  .config( function( $stateProvider ) {
    $stateProvider
      .state('eggly.categories.bookmarks', {
        url: 'categories/:category',
        views: {
          'bookmarks@': {
            templateUrl: '/assets/js/categories/bookmarks/bookmarks.tmpl.html',
            controller: 'BookmarksCtrl'
          }
        }
      })
  })
  .controller('BookmarksCtrl', function ($scope, $stateParams){
    $scope.currentCategoryName = $stateParams.category;
  })
;
