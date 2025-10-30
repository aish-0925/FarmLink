app.service('apiService', function($http) {
  const BASE_URL = 'http://localhost:5000/api';
  const token = localStorage.getItem('token');

  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  this.getRequests = () => $http.get(`${BASE_URL}/requests`, config);
  this.createRequest = (data) => $http.post(`${BASE_URL}/requests`, data, config);
  this.getOffersByRequestId = (id) => $http.get(`${BASE_URL}/offers/request/${id}`, config);
  this.acceptOffer = (id) => $http.put(`${BASE_URL}/offers/${id}/accept`, {}, config);
});
