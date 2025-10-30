app.service('authService', function($http) {
    const API_URL = 'http://localhost:5000/api/auth';

    this.register = function(user) {
        return $http.post(API_URL + '/register', user);
    };

    this.login = function(user) {
        return $http.post(API_URL + '/login', user);
    };

    this.saveToken = function(token) {
        localStorage.setItem('token', token);
    };

    this.getToken = function() {
        return localStorage.getItem('token');
    };
});
