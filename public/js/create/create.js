'use strict'; 

app.config(function($stateProvider) {
	$stateProvider.state('create', {
		url: '/create/:userId',
		templateUrl: 'js/create/create.html',
		controller: 'CreateCtrl',
			// retrieve the author object with users $stateParams
		resolve: {
			author: function(User, $stateParams) {
				return User.find($stateParams.userId)
			}
		}
	
	})
})

// add necessary dependencies here 
app.controller('CreateCtrl', function($scope, $state, Post, author) {

	$scope.previewTrue = false;
	//$scope.newPost = {}; // trust angular does that for you ^^
	$scope.preview = function() {
		$scope.previewTrue = !$scope.previewTrue;
	}

    $scope.newPost = {name: author.username};
	$scope.createNewPost = function(newPost) {
		newPost.author = author._id
		return Post.create(newPost)
		.then(function() {
			$state.go('main')
		})
	}

	/*

	TODOS: 
	1 - create the object that the form can use via ng-model
  2 - create a function that 
	 		a) persists the ng-modeled post object 
			b) changes the state to 'main'  

	*/
	
}) 