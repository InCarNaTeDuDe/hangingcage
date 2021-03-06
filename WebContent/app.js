(function() {
    "use strict";
    var app = angular.module("hangingcafe", ["ngRoute"]);
    app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
        // $locationProvider.html5Mode(true);
        $routeProvider.when("/login", {
            controller: "LoginController",
            templateUrl: 'WebContent/views/login.html',
            title: 'Login'
        }).
        when("/about", {
            controller: 'AboutController',
            templateUrl: 'WebContent/views/about.html',
            title: 'Login'
        }).
        when("/food-list", {
            controller: 'FoodListController',
            templateUrl: 'WebContent/views/food-list.html',
            title: 'Login'
        }).
        when("/food-grid", {
            controller: 'FoodGridController',
            templateUrl: 'WebContent/views/food-grid.html',
            title: 'Login'
        }).
        when("/food-detail", {
            controller: 'FoodDetailController',
            templateUrl: 'WebContent/views/food-detail.html',
            title: 'Login'
        }).
        when("/terms", {
            templateUrl: 'WebContent/views/terms.html',
            title: 'Login'
        }).
        when("/policy", {
            templateUrl: 'WebContent/views/policy.html',
            title: 'Login'
        }).
        when("/contact", {
            templateUrl: 'WebContent/views/contact.html',
            title: 'Login'
        }).
        otherwise({ redirectTo: '/login' });;
    }]);
})();