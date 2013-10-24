define(["angular", "App", "angularRoute"], function(angular, app, angularRoute){

			return app.config(["$routeProvider" , function($routeProvider){

						$routeProvider.when("/phones", {										
									templateUrl:"template/phoneList.html",
									controller:"PhonecatCtrl"
						}).when("/phones/:phoneId", {
									templateUrl:"template/phone.html",
									controller:"PhoneCtrl"
						}).					
						otherwise({
							redirectTo:'/phones'
						});	
		  }
			]);
});


