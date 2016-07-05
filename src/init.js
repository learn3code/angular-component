/* global angular */

(function() {

    angular.module('angComp', ['ngComponentRouter', 'ngResource'])
        .config(['$locationProvider', function($locationProvider) {
            $locationProvider.html5Mode(true);
        }])
        .value('$routerRootComponent', 'mainApp');

    angular.element(document).ready(function() {
        angular.bootstrap(document, ['angComp']);
    });

})();