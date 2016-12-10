(function () {
    'use strict';

    angular.module('events')
        .factory('EventsListService', EventListService);

    EventListService.$inject = ['$http', '$log'];

    function EventListService ($http, $log) {
        return {
            getEvents: getEvents,
            deleteEvent: deleteEvent
        };

        function getEvents () {
            return $http({
                method: 'GET',
                url: '/events'
            }).then(function (response) {
                return response.data;
            });
        }
        
        function deleteEvent (eventId) {
            return $http({
                method: 'DELETE',
                url: '/events/' + eventId
            }).then(function (response) {
                return $http({
                   method: 'DELETE',
                    url: '/user-events/' + eventId
                }).then(function (res) {
                    return res;
                });
            });
        }
    }
})();