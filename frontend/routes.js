angular.module("FarmLinkApp").config(function ($routeProvider) {

  $routeProvider

    // 🌾 Landing Page
    .when("/", {
      templateUrl: "views/home.html"
    })

    // 🔐 Login / Register
    // Supports: #!/login?role=chef OR #!/login?role=farmer
    .when("/login", {
      templateUrl: "views/login.html",
      controller: "LoginCtrl"
    })

    // 👨‍🍳 Chef Dashboard
    .when("/chef", {
      templateUrl: "views/chef-dashboard.html",
      controller: "ChefCtrl"
    })

    // 👨‍🌾 Farmer Dashboard
    .when("/farmer", {
      templateUrl: "views/farmer-dashboard.html",
      controller: "FarmerCtrl"
    })

    // ❌ Fallback
    .otherwise({
      redirectTo: "/"
    });

});
