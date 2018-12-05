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