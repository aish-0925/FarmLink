angular.module("FarmLinkApp")
.controller("FarmerCtrl", function ($scope, $location, ApiService) {

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

  if (!$scope.user || $scope.user.role !== "farmer") {
    $location.path("/login");
    return;
  }

  /* =========================
     State
  ========================== */
  $scope.produce = [];
  $scope.matchingRequests = [];
  $scope.contracts = [];
  $scope.deliveries = [];
  $scope.salesTotal = 0;

  /* =========================
     Load Data
  ========================== */

  // Farmer produce
  ApiService.getFarmerProduce()
    .then(res => {
      $scope.produce = res.data;
    })
    .catch(() => {
      $scope.produce = [];
    });

  // Matching chef requests
  ApiService.getMatchingRequests()
    .then(res => {
      $scope.matchingRequests = res.data;
    })
    .catch(() => {
      $scope.matchingRequests = [];
    });

  // Contracts
  ApiService.getContracts()
    .then(res => {
      $scope.contracts = res.data;
      calculateSales();
    })
    .catch(() => {
      $scope.contracts = [];
    });

  /* =========================
     Helpers
  ========================== */
  function calculateSales() {
    let total = 0;
    $scope.contracts.forEach(c => {
      const price = Number(c.price) || 0;
      const qty = Number(c.qty) || 1;
      total += price * qty;
    });
    $scope.salesTotal = total;
  }

  /* =========================
     Actions
  ========================== */
  $scope.openAddProduce = function () {
    alert("Add Produce modal (to be implemented)");
  };

  $scope.openSchedule = function () {
    alert("Schedule Delivery (to be implemented)");
  };

  $scope.logout = function () {
    localStorage.removeItem("token");
    $location.path("/login");
  };

});
