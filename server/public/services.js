angular.module('usersServices', []).factory('usersFactory', ['$http', function($http) {
  return {
    all: function() {
      return $http.get('/api/users');
    },
    get: function(userId) {
      return $http.get('/api/users/' + userId);
    },
    update: function(user) {
      return $http.put('/api/users/' + user.id, user);
    },
    create: function(user) {
      return $http.post('/api/users', user);
    },
    destroy: function(user) {
      return $http.delete('/api/users/' + user.id, user);
    }
  }
}])
  .factory('countriesFactory', ['$http', function($http) {
    return {
      all: function() {
        return $http.get('/api/countries');
      }
    }
  }
]);
