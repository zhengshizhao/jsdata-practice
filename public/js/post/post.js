'use strict'; 

app.config(function($stateProvider) {
	$stateProvider.state('post', {
		url: '/post/:postId',
		templateUrl: 'js/post/post.html',
		controller: 'PostCtrl', 
		resolve: {
			AllUsers: function(User){
					return User.findAll();
			}
		}
		/*
				add a resolve block that retrieves all the users
				so that the author field of the posts will be automatically 
				populated
		*/
	})
});

// add necessary dependencies 
app.controller('PostCtrl', function($scope, Post, User, $stateParams) {
		
		Post.find($stateParams.postId)
		.then(function(post) {
       User.find(post.author)
       .then(function(theUser){
   
				$scope.post = post;
				$scope.post.username = theUser.username;
				 })
			});

   
	/* 1. FIND POST
		use state params to retrieve the post id and attach post object to scope 
		on controller load 
	*/
   $scope.editMode = false;

   $scope.editPost = function(){
       $scope.editMode = !$scope.editMode;
   }

   $scope.savePost = function(post){
   		$scope.editMode = !$scope.editMode;
   		console.log(post);
   		//Post.updateAll();

   }


	/*
		2. EDIT POST 
		create a function that edits the post, adds an alert that the post has been 
		successfully edited, and displays the edited post.  

	*/

})