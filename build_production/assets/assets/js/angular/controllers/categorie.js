app.controller('categorie', function($scope, $routeParams, $http) {

    $scope.categorie = function()
    {
        $http.get("data/data.json").then(function(response) {
            var categories = response.data.categories;
            if (!Object.keys(response.data.categories).includes($routeParams.categorie)) {
                location.href = '#/404';
                return false;
            }
            $scope.categorie = categories[$routeParams.categorie];
            var posts = response.data.contents[$scope.categorie.href];
            $scope.posts = posts[Object.keys(posts)[0]];
        });
    }
    
    $scope.subCategorie = function()
    {
        $scope.subCategorie = $routeParams.subCategorie;
        $http.get("data/data.json").then(function(response) {
            var categorie = response.data.categories[$routeParams.categorie];
            if (!Object.keys(response.data.contents[categorie.href]).includes($routeParams.subCategorie)) {
                location.href = '#/404';
                return false;
            }
            $scope.categorie = categorie;
            $scope.posts = response.data.contents[categorie.href][$routeParams.subCategorie];
        });
    }

    $scope.allCategories = function()
    {
        $http.get("data/data.json").then(function(response) {
            $scope.categories = response.data.categories;
        });
    }
});