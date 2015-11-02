/**
 * Created by Sathvik on 30/10/15.
 */
var app = angular.module('portfolioApp', ["ngMaterial","ngRoute"]);


app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('deep-purple')
        .warnPalette('red');
});

app.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: 'pages/home.html',
            controller: 'portfolioCtrl'
        })
        .when('/projects',{
            templateUrl: 'pages/projects.html',
            controller: 'portfolioCtrl'
        })
        .when('/experience',{
            templateUrl: 'pages/experience.html',
            controller: 'portfolioCtrl'
        })
        .when('/resume',{
            templateUrl: 'pages/resume.html',
            controller: 'portfolioCtrl'
        })
        .when('/skills',{
            templateUrl: 'pages/skills.html',
            controller: 'portfolioCtrl'
        })
        .when('/newstabs',{
            templateUrl: 'pages/newstabs.html',
            controller: 'portfolioCtrl'
        });
});