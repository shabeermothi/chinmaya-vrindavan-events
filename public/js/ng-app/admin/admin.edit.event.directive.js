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
            editEvent.eventFromDateOpen = false;
            editEvent.eventToDateOpen = false;

            // Toggle From date calendar
            editEvent.toggleToCalendar = function () {
                editEvent.eventToDateOpen = !editEvent.eventToDateOpen;
            };

            // Toggle To date calendar
            editEvent.toggleFromCalendar = function () {
                editEvent.eventFromDateOpen = !editEvent.eventFromDateOpen;
            };

            editEvent.eventDetails = {};

            editEvent.eventDetails.eventDate = new Date();

            editEvent.updateEvent = function () {
                $log.info("Updated Event Details ", eventDetails);
            };
        }
    }

})();
