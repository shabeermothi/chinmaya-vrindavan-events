(function () {
    'use strict';

    angular.module('events')
        .directive('eventsList', EventsListDirective)
        .filter('eventsFilter', EventsFilter);

    function EventsListDirective () {
        EventsListDirectiveCtrl.$inject = ['$scope', '$log', 'EventsListService', '$filter'];

        return {
            restrict: 'A',
            scope: {
                showEvents: '@?'
            },
            templateUrl: 'partials/events/events-list.html',
            controller: EventsListDirectiveCtrl,
            controllerAs: 'eventsList'
        };

        function EventsListDirectiveCtrl ($scope, $log, EventsListService, $filter) {
            var eventsList = this;

            getAllEvents();

            function getAllEvents () {
                EventsListService.getEvents().then(function (response) {
                    eventsList.events = response;
                });
            }

            eventsList.filterEvents = function (eventType) {
                EventsListService.getEvents().then(function (response) {
                    eventsList.events = response;
                    eventsList.events = $filter('eventsFilter')(eventsList.events, eventType);
                });
            };
        }
    }
    
    function EventsFilter () {
        return function (events, eventType) {
            var filteredEvent, filteredEvents = [];

            if (eventType === 'active') {
                for (var x = 0; x < events.length; x++) {
                    if (new Date(events[x].eventDate) > new Date()) {
                        filteredEvent = events[x];
                        filteredEvents.push(filteredEvent);
                    }
                }
            } else if (eventType === 'expired') {
                for (var x = 0; x < events.length; x++) {
                    if (new Date(events[x].eventDate) < new Date()) {
                        filteredEvent = events[x];
                        filteredEvents.push(filteredEvent);
                    }
                }
            } else {
                filteredEvents = events;
            }

            return filteredEvents;
        };
    }

})();