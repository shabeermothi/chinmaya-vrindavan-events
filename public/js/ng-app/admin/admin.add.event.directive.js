(function () {
    'use strict';

    angular.module('events.admin')
        .directive('addAnEvent', addEventDirective);
    
    function addEventDirective () {
        AddEventDirectiveCtrl.$inject = ['$scope', '$log'];

        return {
            restrict: 'A',
            templateUrl: 'partials/admin/add-event/add-an-event.html',
            controller: AddEventDirectiveCtrl,
            controllerAs: 'vm'
        };
        
        function AddEventDirectiveCtrl ($scope, $log) {
            $log.info('Add Event Directive Controller!');
        }
    }
})();