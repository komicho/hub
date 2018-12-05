app.controller('index', function($scope, $routeParams, $http) {

    $scope.allCategories = function()
    {
        $http.get("data/data.json").then(function(response) {
            $scope.categories = response.data.categories;
        });
    }

});