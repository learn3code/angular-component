/* global angular */

(function() {

    angular.module('angComp').component('mainNav', {
        template: `<ul class="side-nav">
                        <li><a ng-link="['Buildings']">Buildings</a></li>
                        <li><a ng-link="['Places']">Places</a></li>
                        <li><a ng-link="['Men']">Men</a></li>
                        <li><a ng-link="['Women']">Women</a></li>
                        <li><a ng-link="['Animals']">Animals</a></li>
             </ul>`,
    });

})();