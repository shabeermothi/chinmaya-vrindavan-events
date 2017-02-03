(function () {
    'use strict';

    angular.module('events.admin')
        .directive('editEvent', editEventDirective)
        .directive('editEventDetails', editEventDetailsDirective);

    function editEventDirective () {
        EditEventDirectiveCtrl.$inject = ['$scope', '$log', 'UpdateEventService'];

        return {
            restrict: 'A',
            scope: {
                eventId: '='
            },
            templateUrl: 'partials/admin/edit-event/edit-an-event.html',
            controller: EditEventDirectiveCtrl,
            controllerAs: 'editEvent'
        };

        function EditEventDirectiveCtrl ($scope, $log, UpdateEventService) {
            var editEvent = this;

            editEvent.eventDetails = {};
            editEvent.eventFromDateOpen = false;
            editEvent.eventToDateOpen = false;
            editEvent.extendedEventDateOpen = false;

            // Toggle From date calendar
            editEvent.toggleToCalendar = function () {
                editEvent.eventToDateOpen = !editEvent.eventToDateOpen;
            };

            // Toggle To date calendar
            editEvent.toggleFromCalendar = function () {
                editEvent.eventFromDateOpen = !editEvent.eventFromDateOpen;
            };

            editEvent.toggleExtendedEventDateCalendar = function () {
                editEvent.extendedEventDateOpen = !editEvent.extendedEventDateOpen;
            };

            UpdateEventService.getEventDetails($scope.eventId).then(function (response) {
                editEvent.eventDetails = response;
                editEvent.eventDetails.eventDate = new Date(response.eventDate);
                editEvent.eventDetails.eventToDate = new Date(response.eventToDate);
            });

            editEvent.updateEvent = function () {
                UpdateEventService.updateEvent(editEvent.eventDetails).then(function () {
                    UpdateEventService.navigateToEventDetails(editEvent.eventDetails._id);
                });
            };
        }
    }

    function editEventDetailsDirective () {
        EditEventDetailsDirectiveCtrl.$inject = ['$scope', '$log', '$timeout', 'easyFormSteWayConfig', 'UpdateEventService'];

        return {
            restrict: 'A',
            scope: {
                eventId: '='
            },
            templateUrl: 'partials/admin/edit-event/edit-event-details.html',
            controller: EditEventDetailsDirectiveCtrl,
            controllerAs: 'editEventDetails'
        };

        function EditEventDetailsDirectiveCtrl ($scope, $log, $timeout, easyFormSteWayConfig, UpdateEventService) {
            var editEventDetails = this;
            var eventResponse;

            UpdateEventService.getEventDetails($scope.eventId).then(function (response) {
                eventResponse = response;
                editEventDetails.eventName = response.eventName;
                editEventDetails.easyFormGeneratorModel	= response.eventDetails;
                editEventDetails.saveForm = saveForm;
            });

            function saveForm(easyFormGeneratorModel){
                eventResponse.eventDetails = easyFormGeneratorModel;
                UpdateEventService.updateEvent(eventResponse, $scope.eventId).then(function () {
                    UpdateEventService.navigaveToManageEvents($scope.eventId);
                });
            }
        }
    }

})();
