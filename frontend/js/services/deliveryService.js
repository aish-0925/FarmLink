app.service('deliveryService', function($http) {
    const API_URL = 'http://localhost:5000/api/deliveries';

    this.createDelivery = function(delivery, token) {
        return $http.post(API_URL, delivery, {
            headers: { Authorization: 'Bearer ' + token }
        });
    };

    this.updateDeliveryStatus = function(deliveryId, status, token) {
        return $http.put(API_URL + '/' + deliveryId, { status }, {
            headers: { Authorization: 'Bearer ' + token }
        });
    };

    this.getDeliveries = function(token) {
        return $http.get(API_URL, {
            headers: { Authorization: 'Bearer ' + token }
        });
    };
});
