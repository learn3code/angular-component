/* global angular */

(function() {

    class BuildingService {
        constructor($resource) {
            this._$resource = $resource;
        }

        Buildings() {
            return this._$resource('data/buildings.json');
        }
    }

    class BuildingController {
        constructor(service) {
            this._service = service;
        }

        $onInit() {
            this.rows = this._service.Buildings().query(() => {});
        }
    }

    angular.module('angComp')
        .service('buildingService', ['$resource', BuildingService])
        .component('buildings', {
            template: `<div class="panel clearfix" ng-repeat="row in $ctrl.rows">
                    {{ ::row.name }}
                  </div>`,
            controller: ['buildingService', BuildingController]
        });

})();