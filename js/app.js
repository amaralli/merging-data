/* 
    app.js
    Angular application for the address book challenge

    Add code here to create a new Angular application and controller.
    The array of employee objects is already in a global variable named 'pawneeEmployees'
*/

var employeeModule = angular.module('AddressBook', []);

employeeModule.controller('AddressController', function($scope) {
	$scope.employees = pawneeEmployees;
	$scope.sortCol = 'lastName';
	$scope.sortBy = function(colName) {
		$scope.sortCol = colName;
	}
	$scope.isSortedBy = function(colName) {
		return $scope.sortCol == colName;
	}
	$scope.searchString = undefined;
});