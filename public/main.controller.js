'use strict';

app.config(function($stateProvider) {
	$stateProvider.state('main', {
		url: '/',
		templateUrl: '/main.html',
		controller: 'MainController',
		resolve: {
			users: function (User) {
				return User.findAll()
			}, //users: User => User.findAll()
			posts: function (Post, users) {
				return Post.findAll({})
				//posts: Post => Post.findAll({})
			}
		}
	})
})

app.controller('MainController', function($scope, posts, Post) {
	
	//$scope.allPosts = posts;
	//console.log('posts: ', posts);
   Post.bindAll({},$scope, 'allPosts')
	//var dataInJsDataCache = Post.getAll()
	//console.log('data in jsdata cache: ', dataInJsDataCache)

})


