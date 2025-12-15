angular.module("FarmLinkApp")
.controller("LoginCtrl", function ($scope, $location, $routeParams, ApiService) {

  // Roles
  $scope.roles = ["chef", "farmer"];

  // Auto-select role from URL (?role=chef)
  const roleFromUrl = $routeParams.role;

  $scope.login = {
    role: roleFromUrl || "chef",
    email: "",
    password: ""
  };

  $scope.register = {
    role: roleFromUrl || "chef",
    name: "",
    email: "",
    password: ""
  };

  // LOGIN
  $scope.loginUser = function () {
    ApiService.login($scope.login)
      .then(res => {
        localStorage.setItem("token", res.data.token);

        // Redirect based on role
        if (res.data.role === "chef") {
          $location.path("/chef");
        } else {
          $location.path("/farmer");
        }
      })
      .catch(err => {
        alert(err.data?.error || "Login failed");
      });
  };

  // REGISTER
  $scope.registerUser = function () {
    ApiService.register($scope.register)
      .then(() => {
        alert("Registration successful. Please login.");
        $location.path("/login");
      })
      .catch(err => {
        alert(err.data?.error || "Registration failed");
      });
  };

});
