/* global angular */

(function(angular) {

    angular.module('angComp', ['ngComponentRouter', 'ngResource'])
        .config(function($locationProvider) {
            $locationProvider.html5Mode(true);
        })
        .value('$routerRootComponent', 'mainApp');

    angular.element(document).ready(function() {
        angular.bootstrap(document, ["angComp"]);
    });

})(angular);