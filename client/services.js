angular.module('usersServices', []).factory('usersFactory', ['$http', function($http) {
  return {
    all: function() {
      return $http.get('http://localhost:3000/users');
    },
    get: function(userId) {
      return $http.get('http://localhost:3000/users/' + userId);
    },
    update: function(user) {
      return $http.put('http://localhost:3000/users/' + user.id, user);
    },
    create: function(user) {
      return $http.post('http://localhost:3000/users', user);
    },
    destroy: function(user) {
      return $http.delete('http://localhost:3000/users/' + user.id, user);
    }
  }
}])
  .factory('countriesFactory', ['$http', function($http) {
    return {
      all: function() {
        return $http.get('http://localhost:3000/countries');
      }
    }
  }
]);
