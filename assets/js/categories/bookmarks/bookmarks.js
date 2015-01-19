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
            controller: 'BookmarksListCtrl as bookmarksListCtrl',
            templateUrl: '/assets/js/categories/bookmarks/bookmarks.tmpl.html'
          }
        }
      })
  })
  .controller('BookmarksListCtrl', function ($stateParams, BookmarksModel){
    var bookmarksListCtrl = this;
    bookmarksListCtrl.currentCategoryName = $stateParams.category;

    BookmarksModel.getBookmarks()
      .then(function(result){
        bookmarksListCtrl.bookmarks = result;
      });
  })
;
