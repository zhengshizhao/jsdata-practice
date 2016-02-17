'use strict';

app.config(function($stateProvider) {
	$stateProvider.state('main', {
		url: '/',
		templateUrl: '/main.html',
		controller: 'MainController',
		resolve: {
			users: function (User) {
				return User.findAll()
			},
			posts: function (Post, users) {
				return Post.findAll({})
			}
		}
	})
})

app.controller('MainController', function($scope, posts, Post) {
	
	$scope.allPosts = posts;
	//console.log('posts: ', posts);

	var dataInJsDataCache = Post.getAll()
	//console.log('data in jsdata cache: ', dataInJsDataCache)

})


