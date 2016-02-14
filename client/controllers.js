var usersControllers = angular.module('usersControllers', []);

usersControllers.controller('UsersListCtrl', ['$scope', 'usersFactory',
function($scope, usersFactory) {
  usersFactory.all().success(function(users) {
    $scope.users = users;
    $scope.loadComplete = true;
  });
    $scope.order = "fullname";
}]);

usersControllers.controller('UserDetailCtrl', ['$scope', '$routeParams', 'usersFactory', 'countriesFactory', '$location',
function($scope, $routeParams, usersFactory, countriesFactory, $location) {
  // get flag (edit or create)
  isEdit = $routeParams.userId !== undefined;

  // if editing, get user from server and write it to scope
  if (isEdit) {
    usersFactory.get($routeParams.userId).success(function(data) {
      $scope.user = data;
      $scope.user.country_id = $scope.user.country_id.toString();
    })
  }
  else {
    $scope.user = {};
  }
  isSuccess = function() {$location.path('/users')};
  isFail = function() {alert('ERROR')};

  $scope.destroy = function() {
    usersFactory.destroy($scope.user).then(isSuccess,isFail)
  }

  $scope.phoneValid = true;
  $scope.$watch('user.phone', function(newValue, oldValue) {
    // test user's phone with regexp
    // if not match:
    if($scope.user === undefined) return;
    $scope.phoneValid = /^\+\d-\(\d{3}\)-\d{3}-\d{2}-\d{2}/.test($scope.user.phone)
    // if match, input looks normal
  })

  // save will create or update (depending on where we are)
  $scope.save = function() {
    phoneFormat = /^\+\d-\(\d{3}\)-\d{3}-\d{2}-\d{2}/.test($scope.user.phone);
    if (!phoneFormat) {
      alert('Wrong phone format')
    }
    else {
      if(isEdit) {
        usersFactory.update($scope.user).then(isSuccess,isFail)
      }
      else {
        usersFactory.create($scope.user).then(isSuccess,isFail)
      }
    }
  }

  // get countries list
  countriesFactory.all().success(function(countries) {
    $scope.countries = countries;
  });
}]);
