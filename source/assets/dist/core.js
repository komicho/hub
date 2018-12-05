var app = angular.module('app', ['ngRoute', 'hc.marked']);

// configure our routes
app.config(function($interpolateProvider, $routeProvider) {

	$interpolateProvider.startSymbol('{{').endSymbol('}}');
	
	$routeProvider.
	when('/404', {
		templateUrl : 'views/404.html',
	}).
	when('/', {
		templateUrl : 'views/index.html',
		controller  : 'index'
	}).
	when('/:categorie', {
		templateUrl : 'views/categorie.html',
		controller  : 'categorie'
	}).
	when('/:categorie/:subCategorie', {
		templateUrl : 'views/sub_categorie.html',
		controller  : 'categorie'
	}).
    when('/:categorie/:subCategorie/:post', {
		templateUrl : 'views/post.html',
		controller  : 'post'
	}).
    otherwise({
        redirectTo: '/404'
	});
});
app.controller('index', function($scope, $routeParams, $http) {

    $scope.allCategories = function()
    {
        $http.get("data/data.json").then(function(response) {
            $scope.categories = response.data.categories;
        });
    }

});
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
app.controller('post', function($scope, $routeParams, $http) {

    var categorie = $routeParams.categorie
    var subCategorie = $routeParams.subCategorie
    var post = $routeParams.post
    
    
    $http.get("data/data.json").then(function(response) {
        var posts = response.data.contents[categorie][subCategorie];
        if (!Object.keys(posts).includes(post)) {
            location.href = '#/404';
            return false;
        }
        var data = posts[post];
        data.path = '/data/posts/' + data.path;
        $scope.post = data;
        $scope.contributorsGitHub(data.path);
    });

    $scope.allCategories = function()
    {
        $http.get("data/data.json").then(function(response) {
            $scope.categories = response.data.categories;
        });
    }

    $scope.contributorsGitHub = function(path){
        $http.get("https://api.github.com/repos/komichoHub/komichoHub.github.io/commits?path=" + path).then(function(response) {
            var data = response.data;
            var contributors = [];
            data.forEach(function(i) {
                contributors.push({
                    'author': {
                        'id': i.author.id,
                        'name': i.commit.author.name
                    },
                    'date': i.commit.author.date,
                    'message': i.commit.message
                });
            });
            $scope.contributors = contributors;

        });
    }
});