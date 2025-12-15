angular.module("FarmLinkApp")
.run(function ($rootScope, $location) {

  $rootScope.$on("$routeChangeStart", function (event, next) {

    const token = localStorage.getItem("token");

    // Public routes
    const publicRoutes = ["/", "/login"];

    // If route info missing, allow (prevents refresh crash)
    if (!next || !next.$$route) return;

    const path = next.$$route.originalPath;

    // 🔐 Block access if no token
    if (!publicRoutes.includes(path) && !token) {
      event.preventDefault();
      $location.path("/login");
      return;
    }

    // 🔐 Role-based access
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        const role = payload.role;

        if (path === "/chef" && role !== "chef") {
          event.preventDefault();
          $location.path("/login");
        }

        if (path === "/farmer" && role !== "farmer") {
          event.preventDefault();
          $location.path("/login");
        }

      } catch (err) {
        // Invalid or corrupted token
        localStorage.removeItem("token");
        event.preventDefault();
        $location.path("/login");
      }
    }
  });

});
