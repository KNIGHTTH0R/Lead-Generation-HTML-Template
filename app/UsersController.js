var myapp= angular.module("Users",['UsersService'])
.controller("UsersController",function($scope,$http,$window,service,$location){
 
 $scope.signUp = function() {

		 	service.SignUp($scope.snEmail).then(function(promise){
		 		console.log($scope.snEmail)
		 	console.log(promise);
		});
};
});