let app = angular.module('motionApp', []);

app.controller('controller', ['$scope', '$window', function($scope, $window) {
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