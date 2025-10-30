app.service('requestService', function($http, authService) {
    const API_URL = 'http://localhost:5000/api/requests';

    // 🔹 Create a new ingredient request (used by Chef)
    this.createRequest = function(requestData) {
        return $http.post(API_URL, requestData, {
            headers: { Authorization: 'Bearer ' + authService.getToken() }
        });
    };

    // 🔹 Get all requests (for Farmer or Chef)
    this.getRequests = function() {
        return $http.get(API_URL, {
            headers: { Authorization: 'Bearer ' + authService.getToken() }
        });
    };

    // 🔹 Get a single request by ID
    this.getRequestById = function(id) {
        return $http.get(`${API_URL}/${id}`, {
            headers: { Authorization: 'Bearer ' + authService.getToken() }
        });
    };
});
