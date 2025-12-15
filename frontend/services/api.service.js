angular.module("FarmLinkApp")
.factory("ApiService", function ($http) {

  const BASE_URL = "http://localhost:5000/api";

  // Helper to attach JWT
  function authHeader() {
    const token = localStorage.getItem("token");
    return token
      ? { headers: { Authorization: "Bearer " + token } }
      : {};
  }

  return {

    /* =======================
       AUTH
    ======================== */

    login(data) {
      return $http.post(`${BASE_URL}/auth/login`, data);
    },

    register(data) {
      return $http.post(`${BASE_URL}/auth/register`, data);
    },

    /* =======================
       CHEF APIs
    ======================== */

    // Get chef's ingredient requests
    getChefRequests() {
      return $http.get(`${BASE_URL}/chef/requests`, authHeader());
    },

    // Create new ingredient request
    createChefRequest(data) {
      return $http.post(
        `${BASE_URL}/chef/requests`,
        data,
        authHeader()
      );
    },

    // Get offers received by chef
    getChefOffers() {
      return $http.get(`${BASE_URL}/chef/offers`, authHeader());
    },

    /* =======================
       FARMER APIs
    ======================== */

    // Get farmer produce list
    getFarmerProduce() {
      return $http.get(`${BASE_URL}/farmer/produce`, authHeader());
    },

    // Add new produce
    addFarmerProduce(data) {
      return $http.post(
        `${BASE_URL}/farmer/produce`,
        data,
        authHeader()
      );
    },

    // Matching chef requests for farmer
    getMatchingRequests() {
      return $http.get(
        `${BASE_URL}/farmer/requests`,
        authHeader()
      );
    },

    /* =======================
       CONTRACTS
    ======================== */

    // Farmer & Chef contracts
    getContracts() {
      return $http.get(
        `${BASE_URL}/contracts`,
        authHeader()
      );
    },

    createContract(data) {
      return $http.post(
        `${BASE_URL}/contracts`,
        data,
        authHeader()
      );
    }

  };
});
