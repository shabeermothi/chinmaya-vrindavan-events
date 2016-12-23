(function () {
    'use strict';

    angular.module('events.admin')
        .factory('UpdateEventService', updateEventService);

    updateEventService.$inject = ['$http', '$log', '$filter', '$state'];

    function updateEventService ($http, $log, $filter, $state) {
        return {
            getEventDetails: getEventDetails,
            updateEvent: updateEvent,
            navigateToEventDetails: navigateToEventDetails,
            navigaveToManageEvents: navigaveToManageEvents
        };

        function updateEvent (eventData) {
            return $http({
                method: 'PUT',
                url: '/events/' + eventData._id,
                data: eventData
            });
        }

        function getEventDetails (eventId) {
            return $http({
                method: 'GET',
                url: '/events/' + eventId
            }).then(function (response) {
                return response.data;
            });
        }

        function navigateToEventDetails (eventId) {
            $state.go('editEventDetails', {"eventId": eventId});
        }

        function navigaveToManageEvents (eventId) {
            $state.go('manageEvents');
        }
    }
})();
