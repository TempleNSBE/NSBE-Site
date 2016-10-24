var app = angular.module('nsbeApp', ['ngRoute']).run function($rootScope) {

});

app.config(function($routeProvider){
	$routeProvider

		.when('/', {
			templateUrl: 'index.html'
			controller: 'mainController'
		})
})

