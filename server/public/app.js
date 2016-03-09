var usersApp = angular.module('users', ['ngRoute', 'usersControllers', 'usersServices', 'ngMask']);

usersApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/users', {
    templateUrl: 'html/users-list.html',
    controller: 'UsersListCtrl'
  }).
  when('/users/new', {
    templateUrl: 'html/user-detail.html',
    controller: 'UserDetailCtrl'
  }).
  when('/users/edit/:userId', {
    templateUrl: 'html/user-detail.html',
    controller: 'UserDetailCtrl'
  }).
  otherwise({
    redirectTo: '/users'
  });
}]);
