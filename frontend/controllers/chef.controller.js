angular.module("FarmLinkApp")
.controller("ChefCtrl", function ($scope, $location, ApiService) {

  /* =========================
     Get logged-in user from JWT
  ========================== */
  function getCurrentUser() {
    const token = localStorage.getItem("token");
    if (!token) return null;
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch {
      return null;
    }
  }

  $scope.user = getCurrentUser();

  if (!$scope.user || $scope.user.role !== "chef") {
    $location.path("/login");
    return;
  }

  /* =========================
     State
  ========================== */
  $scope.requests = [];
  $scope.offers = [];
  $scope.contracts = [];
  $scope.estimatedSpend = 0;

  /* =========================
     Load data
  ========================== */

  // Chef requests
  ApiService.getChefRequests()
    .then(res => {
      $scope.requests = res.data;
    })
    .catch(() => {
      $scope.requests = [];
    });

  // Incoming offers
  ApiService.getChefOffers()
    .then(res => {
      $scope.offers = res.data;
    })
    .catch(() => {
      $scope.offers = [];
    });

  // Contracts
  ApiService.getContracts()
    .then(res => {
      $scope.contracts = res.data;
      calculateSpend();
    })
    .catch(() => {
      $scope.contracts = [];
    });

  /* =========================
     Helpers
  ========================== */
  function calculateSpend() {
    let total = 0;
    $scope.contracts.forEach(c => {
      const price = Number(c.price) || 0;
      const qty = Number(c.qty) || 1;
      total += price * qty;
    });
    $scope.estimatedSpend = total;
  }

  /* =========================
     Actions
  ========================== */
  $scope.logout = function () {
    localStorage.removeItem("token");
    $location.path("/login");
  };

});
