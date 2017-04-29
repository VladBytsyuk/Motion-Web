let app = angular.module('motionApp', []);

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
		templateUrl: 'app/components/portfolio/portfolio.html'
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