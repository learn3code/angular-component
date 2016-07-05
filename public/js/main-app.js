/* global angular */

(function() {

    angular.module('angComp').component('mainApp', {
        transclude: true,
        template: '<div ng-transclude></div>',
        $routeConfig: [{
            path: '/',
            name: 'Buildings',
            component: 'buildings',
            useAsDefault: true
        },
        {
            path: '/buildings',
            name: 'Buildings',
            component: 'buildings'
        },
        {
            path: '/places',
            name: 'Places',
            component: 'places'
        },
        {
            path: '/men',
            name: 'Men',
            component: 'men'
        },
        {
            path: '/women',
            name: 'Women',
            component: 'women'
        },
        {
            path: '/animals',
            name: 'Animals',
            component: 'animals'
        }]
    });

})();