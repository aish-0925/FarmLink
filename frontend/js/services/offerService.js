app.service('offerService', function($http, authService) {
    const API_URL = 'http://localhost:5000/api/offers';

    // 🔹 Create a new offer for a request (Farmer)
    this.createOffer = function(offerData) {
        return $http.post(API_URL, offerData, {
            headers: { Authorization: 'Bearer ' + authService.getToken() }
        });
    };

    // 🔹 Get all offers for a specific request
    this.getOffersByRequest = function(requestId) {
        return $http.get(`${API_URL}/request/${requestId}`, {
            headers: { Authorization: 'Bearer ' + authService.getToken() }
        });
    };

    // 🔹 Update offer status (Chef accepts/rejects)
    this.updateOfferStatus = function(offerId, status) {
        return $http.put(`${API_URL}/${offerId}/status`, { status }, {
            headers: { Authorization: 'Bearer ' + authService.getToken() }
        });
    };
});
