'use strict'; 

app.config(function($stateProvider) {
	$stateProvider.state('post', {
		url: '/post/:postId',
		templateUrl: 'js/post/post.html',
		controller: 'PostCtrl', 
		//retrieves all the users so that the author field of the posts 
		//will be automatically populated
		resolve: {
            post: function(Post, $stateParams){
            	return Post.find($stateParams.postId);
            },
    		author: function(User, post){
					return User.find(post.author);
			}
		}	
	})
});

// add necessary dependencies 
app.controller('PostCtrl', function($scope, post, author) {
	$scope.post = post;
	$scope.post.username = author.username;
   /*edit mode*/				
   $scope.editMode = false;

   $scope.editPost = function(){
       $scope.editMode = !$scope.editMode;
   }

   $scope.savePost = function(post){
   		$scope.editMode = !$scope.editMode;
   		console.log(post);
   		//Post.updateAll();

   }


})