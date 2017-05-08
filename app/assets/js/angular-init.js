let app = angular.module('motionApp', []);

app.controller('controller', ['$scope', '$window', function($scope, $window) {
		textGetter().then(
			json => $scope.text = json,
			error => alert(error)
		); 

		// header
		$scope.width = $window.innerWidth;
	    window.onresize = () => { $scope.$apply(() => $scope.width = $window.innerWidth); };
	}
]);

app.directive('header', () => {
	return { 
		restrict: 'E',
		templateUrl: 'app/components/header/header.html'
	};
});

app.directive('merits', () => {
	return { 
		restrict: 'E',
		templateUrl: 'app/components/merits/merits.html'
	};
});

app.directive('team', () => {
	return { 
		restrict: 'E',
		templateUrl: 'app/components/team/team.html'
	};
});

app.directive('portfolio', () => {
	return { 
		restrict: 'E',
		templateUrl: 'app/components/portfolio/porfolio.html'
	};
});

app.directive('pricing', () => {
	return { 
		restrict: 'E',
		templateUrl: 'app/components/pricing/pricing.html'
	};
});

app.directive('tweets', () => {
	return { 
		restrict: 'E',
		templateUrl: 'app/components/tweets/tweets.html'
	};
});

app.directive('footer', () => {
	return { 
		restrict: 'E',
		templateUrl: 'app/components/footer/footer.html'
	};
});