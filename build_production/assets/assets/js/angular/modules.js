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