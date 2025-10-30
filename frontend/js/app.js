var app = angular.module('farmLinkApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/landing.html',
            controller: 'landingController'
        })
        .when('/login', {
            templateUrl: 'pages/login.html',
            controller: 'authController'
        })
        .when('/register', {
            templateUrl: 'pages/register.html',
            controller: 'authController'
        })
        .when('/chef-dashboard', {
            templateUrl: 'pages/chef-dashboard.html',
            controller: 'chefDashboardController'
        })
        .when('/farmer-dashboard', {
            templateUrl: 'pages/farmer-dashboard.html',
            controller: 'farmerDashboardController'
        })
        .otherwise({ redirectTo: '/' });
});
