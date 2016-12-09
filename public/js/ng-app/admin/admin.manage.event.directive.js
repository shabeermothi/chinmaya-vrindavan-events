(function () {
    'use strict';

    angular.module('events.admin')
        .directive('manageEvent', manageEventDirective);

    function manageEventDirective () {
        ManageEventDirectiveCtrl.$inject = ['$scope', '$log'];

        return {
            restrict: 'A',
            templateUrl: 'partials/admin/manage-event/manage-an-event.html',
            controller: ManageEventDirectiveCtrl,
            controllerAs: 'manageEvent'
        };

        function ManageEventDirectiveCtrl ($scope, $log) {
            var manageEvent = this;
        }
    }

})();