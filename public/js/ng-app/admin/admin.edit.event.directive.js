(function () {
    'use strict';

    angular.module('events.admin')
        .directive('editEvent', editEventDirective);

    function editEventDirective () {
        EditEventDirectiveCtrl.$inject = ['$scope', '$log'];

        return {
            restrict: 'A',
            templateUrl: 'partials/admin/edit-event/edit-an-event.html',
            controller: EditEventDirectiveCtrl,
            controllerAs: 'editEvent'
        };

        function EditEventDirectiveCtrl ($scope, $log) {
            var editEvent = this;
        }
    }

})();