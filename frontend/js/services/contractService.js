app.service('contractService', function($http) {
    const API_URL = 'http://localhost:5000/api/contracts';

    this.createContract = function(offerId, token) {
        return $http.post(API_URL, { offerId }, {
            headers: { Authorization: 'Bearer ' + token }
        });
    };

    this.getContracts = function(token) {
        return $http.get(API_URL, {
            headers: { Authorization: 'Bearer ' + token }
        });
    };
});
