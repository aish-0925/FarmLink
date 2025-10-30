app.controller('farmerdashboardController', function($scope, requestService, offerService) {
  const token = localStorage.getItem('token');

  $scope.requests = [];
  $scope.selectedRequest = null;
  $scope.offerData = {};

  // Load all requests
  requestService.getRequests(token)
    .then(response => {
      $scope.requests = response.data;
      console.log("Requests loaded:", $scope.requests);
    })
    .catch(err => {
      console.error("Error loading requests:", err);
      $scope.error = "Error loading requests.";
    });

  // Submit offer
  $scope.makeOffer = function(request, offerData) {
    const offer = {
      requestId: request._id,
      price: offerData.price,
      deliveryTime: offerData.deliveryTime
    };

    offerService.createOffer(offer, token)
      .then(res => {
        alert("Offer submitted successfully!");
        $scope.selectedRequest = null;
        $scope.offerData = {};
      })
      .catch(err => {
        console.error("Error submitting offer:", err);
        alert("Error submitting offer.");
      });
  };
});
