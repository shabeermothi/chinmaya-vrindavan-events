(function () {
    'use strict';

    angular.module('events')
        .factory('EventsSubscriptionService', EventsSubscriptionService);

    EventsSubscriptionService.$inject = ['$http', '$log', '$q'];

    function EventsSubscriptionService ($http, $log, $q) {
        return {
            getEventSubscriptions: getEventSubscriptions,
            getSubscriptionDetails: getSubscriptionDetails,
            getEventBasePrice: getEventBasePrice
        };

        function getEventSubscriptions (eventId) {
            return $http({
                method: 'GET',
                url: '/user-events/' + eventId
            }).then(function (response) {
                return response.data;
            });
        }

        function getSubscriptionDetails (eventSubscription) {
            var deferred = $q.defer();

            $http({
                method: 'GET',
                url: '/users/' + eventSubscription.userId
            }).then(function (response) {
                deferred.resolve(response.data);
            });

            return deferred.promise;
        }

        function getEventBasePrice (eventId) {
            return $http({
                method: 'GET',
                url: '/event-price/' + eventId
            }).then(function (response) {
                return response.data;
            });
        }
    }
})();
