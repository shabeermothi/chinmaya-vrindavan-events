(function () {
    'use strict';

    angular.module('events')
        .factory('EventsListService', EventListService);

    EventListService.$inject = ['$http', '$log'];

    function EventListService ($http, $log) {
        return {
            getEvents: getEvents
        };

        function getEvents () {
            return $http({
                method: 'GET',
                url: '/events'
            }).then(function (response) {
                return response.data;
            });
        }
    }
})();