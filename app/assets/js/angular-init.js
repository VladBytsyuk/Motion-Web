let app = angular.module('motionApp', ['ui.router'])
	.config([
		'$stateProvider',
		'$urlRouterProvider',
		function($stateProvider, $urlRouterProvider) {
		  $stateProvider

		    .state('team', {
		      url: '/team',
		      templateUrl: 'app/components/team/team.html',
		      controller: 'controller'
		    })

		    .state('team-item0', {
		      url: '/team-item0',
		      templateUrl: 'app/components/team/team_item0.html',
		      controller: 'controller'
		    })

		    .state('team-item1', {
		      url: '/team-item1',
		      templateUrl: 'app/components/team/team_item1.html',
		      controller: 'controller'
		    })

		    .state('team-item2', {
		      url: '/team-item2',
		      templateUrl: 'app/components/team/team_item2.html',
		      controller: 'controller'
		    })

		    .state('team-item3', {
		      url: '/team-item3',
		      templateUrl: 'app/components/team/team_item3.html',
		      controller: 'controller'
		    });

	  	$urlRouterProvider.otherwise('/team');
	}]);

app.factory("auth", ["$firebaseAuth",
  ($firebaseAuth) => $firebaseAuth(new Firebase("https://motion-web-bd9c2.firebaseio.com"))
]);


app.controller('controller', ['$scope', '$window', function($scope, $window, auth) {
		textGetter().then(
			json => $scope.text = json,
			error => alert(error)
		); 

		$scope.width = $window.innerWidth; 
		$scope.boxHeight = angular.element(document.querySelector('portfolio_box_invisible')).offsetHeight;
	    window.onresize = () => { 
	    	$scope.$apply(() => {
	    		$scope.width = $window.innerWidth;
	    	});
	    };
	    $scope.openPopup = () => {
	    	$scope.isPopupOpen = true;
	    	$scope.user.name = '';
	    	$scope.user.number = '';
	    	$scope.user.adress = '';
	    };
	    $scope.closePopup = () => {
	    	const nameRegEp = /^[a-zA-Z]{2,30}$/;
	        const phoneRegExp = /^[0-9]{7,16}$/;
	        const adressRegExp = /\S+@\S+\.\S+/;
	        let isBreak = false;

	        $scope.nameHighlighted = false;
	        $scope.numberHighlighted = false;
	        $scope.adressHighlighted = false;

	        if ($scope.user.name == '' || !$scope.user.name.match(nameRegEp)) {
	            $scope.nameHighlighted = true;
	            isBreak = true;
	        }
	        if ($scope.user.number == '' || !$scope.user.number.match(phoneRegExp)) {
	            $scope.numberHighlighted = true;
	            isBreak = true;
	        }
	        if ($scope.user.adress == '' || !$scope.user.adress.match(adressRegExp)) {
	            $scope.adressHighlighted = true;
	            isBreak = true;
	        }

	        if (!isBreak) {
	        	$scope.isPopupOpen = false;
	        }
	    };

		$scope.login = (authMethod) => {
		    auth.$authWithOAuthRedirect(authMethod)
		    	.then((authData) => {})
		    	.catch((error) => {
				    if (error.code === 'TRANSPORT_UNAVAILABLE') {
				        auth.$authWithOAuthPopup(authMethod)
				        	.then((authData) => {});
				    } else {
				        console.log(error);
				    }
			    });

			auth.$onAuth((authData) => {
				if (authData === null) {
			      console.log('Not logged in yet');
			    } else {
			      console.log('Logged in as', authData.uid);
			    }
			    // This will display the user's name in our view
			    $scope.authData = authData;
			});
		};

		
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