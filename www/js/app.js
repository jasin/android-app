// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('androidapp', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/')

  $stateProvider

  .state('index', {
    url: '/',
    templateUrl: 'index'
  })

  .state('Angle_Sine_Bar', {
    url: '/Angle_Sine_Bar',
    templateUrl: 'Angle_Sine_Bar'
  })

  .state('Bolt_Circle', {
      url: '/Bolt_Circle',
      templateUrl: 'Bolt_Circle'
  })

  .state('Tap_Drill_Sizes', {
      url: '/Tap_Drill_Sizes',
      templateUrl: 'Tap_Drill_Sizes'
  })

  .state('Right_Triangle_Measurements', {
      url: '/Right_Triangle_Measurements',
      templateUrl: 'Right_Triangle_Measurements'
  })
})

.controller('formulaListCtrl', function($scope, $location){
  $scope.formulas = [
    {formula: 'Angle Sine Bar', url: 'Angle_Sine_Bar'},
    {formula: 'Bolt Circle', url: 'Bolt_Circle'},
    {formula: 'Tap Drill Sizes', url: 'Tap_Drill_Sizes'},
    {formula: 'Right Triangle Measurements', url: 'Right_Triangle_Measurements'}
  ];

  $scope.load = function(formula){
    var url = "/" + formula;
    console.log(url);
    $location.path(url);
  }
})

