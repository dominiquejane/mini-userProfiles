var app = angular.module('userProfiles');
app.controller('userController', function ($scope, userService){

	// $scope.getUsers = function () {
	// 	return userService.getUsers();
	// };
	// $scope.users = $scope.getUsers();

	$scope.getUsers = function () {
		$scope.users = userService.getUsers();
	}();

	


});