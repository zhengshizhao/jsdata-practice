'use strict';

app.config(function($stateProvider) {

	$stateProvider.state('signup', {
		url: '/signup',
		templateUrl: 'js/signup/signup.html',
		controller: 'SignupCtrl'
	})
})

// add necessary dependencies here
app.controller('SignupCtrl', function($scope, $state, User) {

  //1 - create the signup object for ng-modelling
  //$scope.signup = { };  // angular will create an object. 

  // 2 - create a `sendSignup` function that
  //     a) persists the user data 
  //     b) changes the state to  'create' while sending along important user data
  //     (HINT: $stateParams)
  $scope.sendSignup = function(signup) {
    return User.create(signup)
    .then(function(newUser) {
      $state.go('create', { userId: newUser._id })
    })
  }

})