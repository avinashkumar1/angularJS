//defining controllers for route.

define(["angular", "angularRoute", "App"], function(angular, angularRoute, app){

				return angular.module("controllers" , []).controller("PhonecatCtrl", [ "$scope", "$http", function($scope, $http){

						//reading all phone list.
						$http.get('phones/phones.json').success(function(data){
								$scope.phones = data;
						});

						//default sorting by name.
						$scope.orderValue = 'name';

				}]).controller("PhoneCtrl", [ "$scope", "$routeParams", "$http", function($scope, $routeParams, $http){
							//reading the individual phone details
							$http.get('phones/'+$routeParams.phoneId+'.json').success(function(data){
									$scope.phone = data;
									$scope.mainImageUrl = data.images[0];
							});

							$scope.setMainImage = function(url){
									$scope.mainImageUrl = url;
							}

				}]);

		
});
	
