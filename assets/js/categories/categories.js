angular.module('categories', [
  'eggly.models.categories'
])
  .config(function($stateProvider){
    $stateProvider
      .state('eggly.categories', {
        url: '/',
        views: {
          'categories@': {
            controller: 'CategoriesListCtrl as categoriesListCtrl',
            templateUrl: '/assets/js/categories/categories.tmpl.html'
          }
        }
      });
  })
  .controller('CategoriesListCtrl', function CategoriesCtrl(CategoriesModel){
    var categoriesListCtrl = this;

    CategoriesModel.getCategories()
      .then(function(result){
        categoriesListCtrl.categories = result;
      });
  })
;
