/* jDrupal 8 + AngularJs + Views */
app.controller('jobsCtrl', ['$scope', 'drupal', function($scope, drupal) {
   var path = '/lista-ofertas.json'; // The Drupal path to the Views JSON page display.
    drupal.viewsLoad(path).then(function (view) {
      var results = view.getResults();
      $scope.$apply(function () {
        $scope.titles = results;
      });
    });
}]);
