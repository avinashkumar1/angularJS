//containing all js file.

require.config({

		shim: {
				'angular' : {'exports' : 'angular'},
				'angularRoute': ['angular'],
				'angularMocks': {
					deps:['angular', 'jquery'],
					'exports':'angular.mock'
				}
		},

		paths: {
				"angular":"../lib/angular/angular",
				"angularRoute":"../lib/angular/angular-route",
				"angularMocks":"../lib/angular/angular-mocks",
				"jquery":"../lib/jquery/jquery-1.10.2",
				"text": "../lib/require/text",
				"controllers":"controllers",
				"App":"app",
				"Route":"route"		
		}

});


	// hey Angular, we're bootstrapping manually!
	window.name = "NG_DEFER_BOOTSTRAP!";

	require([
		'angular',
		'App',
		'Route'
	], function(angular, app, routes) {

		var $html = angular.element(document.getElementsByTagName('html')[0]);
		angular.element().ready(function() {	

			$html.addClass('ng-app');
			angular.bootstrap($html, [app['name']]);

		});
	});

