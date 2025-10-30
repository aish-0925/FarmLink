app.controller('chefDashboardController', function($scope, apiService) {
  $scope.requests = [];
  $scope.newRequest = {};
  $scope.offers = [];
  $scope.selectedRequest = null;

  $scope.loadRequests = function() {
    apiService.getRequests().then(res => {
      $scope.requests = res.data;
    });
  };

  $scope.createRequest = function() {
    apiService.createRequest($scope.newRequest).then(() => {
      alert('Request created successfully!');
      $scope.newRequest = {};
      $scope.loadRequests();
    });
  };

  $scope.viewOffers = function(request) {
    $scope.selectedRequest = request;
    apiService.getOffersByRequestId(request.id).then(res => {
      $scope.offers = res.data;
    });
  };

  $scope.acceptOffer = function(offer) {
    apiService.acceptOffer(offer.id).then(() => {
      offer.status = 'Accepted';
      alert('Offer accepted!');
    });
  };

  $scope.logout = function() {
    localStorage.removeItem('token');
    window.location.href = '#!/login';
  };

  $scope.loadRequests();
});
