angular.module('Eggly', [
  'categories',
  'categories.bookmarks'
])
    .controller('MainCtrl', function($scope) {
      $scope.categories = [
        {"id": 0, "name": "Development"},
        {"id": 1, "name": "Design"},
        {"id": 2, "name": "Exercise"},
        {"id": 3, "name": "Humor"}
      ];

      $scope.bookmarks = [
        {"id":0, "title": "AngularJS", "url": "http://angularjs.org", "category": "Development" },
        {"id":1, "title": "Egghead.io", "url": "http://angularjs.org", "category": "Development" },
        {"id":2, "title": "A List Apart", "url": "http://alistapart.com/", "category": "Design" },
        {"id":3, "title": "One Page Love", "url": "http://onepagelove.com/", "category": "Design" },
        {"id":4, "title": "MobilityWOD", "url": "http://www.mobilitywod.com/", "category": "Exercise" },
        {"id":5, "title": "Robb Wolf", "url": "http://robbwolf.com/", "category": "Exercise" },
        {"id":6, "title": "Senor Gif", "url": "http://memebase.cheezburger.com/senorgif", "category": "Humor" },
        {"id":7, "title": "Wimp", "url": "http://wimp.com", "category": "Humor" },
        {"id":8, "title": "Dump", "url": "http://dump.com", "category": "Humor" }
      ];

    $scope.currentCategory = null;
    $scope.isCreating = false;
    $scope.isEditing = false;

    function isCurrentCategory(category) {
      return $scope.currentCategory !== null && category.name === $scope.currentCategory.name;
    }

    function setCurrentCategory(category) {
      $scope.currentCategory = category;
      cancelCreating();
      cancelEditing();
    }

    function filterCategories(bookmark) {
      if ($scope.currentCategory === null) {
        return true
      } else {
        return ( bookmark.category === $scope.currentCategory.name );
      }
    }

    $scope.setCurrentCategory = setCurrentCategory;
    $scope.isCurrentCategory = isCurrentCategory;
    $scope.filterCategories = filterCategories;

    function createBookmark(bookmark) {
      bookmark.id = $scope.bookmarks.length;
      //bookmark.category = $scope.currentCategory.name;
      $scope.bookmarks.push(bookmark);

      resetCreateForm();
    }

    function setEditedBookmark(bookmark) {
      $scope.editedBookmark = angular.copy(bookmark);
    }

    function updateBookmark(bookmark) {
      var index = _.findIndex($scope.bookmarks, function(b){
        return b.id === bookmark.id;
      });

      $scope.bookmarks[index] = bookmark;
      $scope.editedBookmark = null;
      $scope.isEditing = false;
    }

    function deleteBookmark(bookmark) {
      _.remove($scope.bookmarks, function(b){
        return b.id === bookmark.id;
      });
    }

    function isSelectedBookmark(bookmarkID) {
      return $scope.editedBookmark !== null && $scope.editedBookmark.id === bookmarkID;
    }

    //Creating and Editing States
    function startCreating() {
      $scope.isCreating = true;
      $scope.isEditing = false;
      resetCreateForm();
    }

    function cancelCreating() {
      $scope.isCreating = false;
    }

    function startEditing() {
      $scope.isCreating = false;
      $scope.isEditing = true;
    }

    function cancelEditing() {
      $scope.isEditing = false;
      $scope.editedBookmark = null;
    }

    function shouldShowCreating() {
      return $scope.currentCategory && !$scope.isEditing;
    }

    function shouldShowEditing() {
      return $scope.isEditing && !$scope.isCreating;
    }

    //Creating and Editing States

    function resetCreateForm() {
      $scope.newBookmark = {
        title: "",
        url: "",
        category: $scope.currentCategory.name
      }
    }

    $scope.createBookmark = createBookmark;
    $scope.editedBookmark = null;
    $scope.setEditedBookmark = setEditedBookmark;
    $scope.updateBookmark = updateBookmark;
    $scope.deleteBookmark = deleteBookmark;
    $scope.isSelectedBookmark = isSelectedBookmark;

    $scope.startCreating = startCreating;
    $scope.cancelCreating = cancelCreating;
    $scope.shouldShowCreating = shouldShowCreating;

    $scope.startEditing = startEditing;
    $scope.cancelEditing = cancelEditing;
    $scope.shouldShowEditing = shouldShowEditing;

  });
;
