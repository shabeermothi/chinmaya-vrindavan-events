(function () {
    'use strict';

    angular.module('events')
        .directive('eventsList', EventsListDirective)
        .filter('eventsFilter', EventsFilter);

    function EventsListDirective () {
        EventsListDirectiveCtrl.$inject = ['$scope', '$log', 'EventsListService', '$filter', '$uibModal', 'EventsSubscriptionService'];

        return {
            restrict: 'A',
            scope: {
                showEvents: '@?'
            },
            templateUrl: 'partials/events/events-list.html',
            controller: EventsListDirectiveCtrl,
            controllerAs: 'eventsList'
        };

        function EventsListDirectiveCtrl ($scope, $log, EventsListService, $filter, $uibModal, EventsSubscriptionService) {
            var eventsList = this;

            eventsList.currentPage = 0;
            eventsList.pageSize = 5;

            getAllEvents();

            eventsList.filterEvents = function (eventType) {
                EventsListService.getEvents().then(function (response) {
                    eventsList.events = response;
                    eventsList.events = $filter('eventsFilter')(eventsList.events, eventType);
                });
            };

            eventsList.viewSubscriptions = function (size, event) {
                $uibModal.open({
                    animation: true,
                    ariaLabelledBy: 'modal-title',
                    ariaDescribedBy: 'modal-body',
                    templateUrl: 'partials/events/view-event-subscriptions.html',
                    controller: 'ModalInstanceCtrl',
                    controllerAs: 'viewEventSubscriptionCtrl',
                    size: size,
                    resolve: {
                        eventSubscriptions: function () {
                            return EventsSubscriptionService.getEventSubscriptions(event._id);
                        },
                        sourceEvent: function () {
                            return event;
                        }
                    }
                });
            };

            eventsList.deleteEvent = function (event) {
                EventsListService.deleteEvent(event._id).then(function () {
                    getAllEvents();
                });
            };

            function getAllEvents () {
                EventsListService.getEvents().then(function (response) {
                    eventsList.events = response;

                    eventsList.currentPage = 0;
                    eventsList.pageSize = 5;
                    eventsList.numberOfPages=function(){
                        return Math.ceil(eventsList.events.length/eventsList.pageSize);
                    };
                });
            }

        }
    }

    function EventsFilter () {
        return function (events, eventType) {
            var filteredEvent, filteredEvents = [];

            if (eventType === 'active') {
                for (var x = 0; x < events.length; x++) {
                    if (new Date(events[x].eventToDate) > new Date()) {
                        filteredEvent = events[x];
                        filteredEvents.push(filteredEvent);
                    }
                }
            } else if (eventType === 'expired') {
                for (var x = 0; x < events.length; x++) {
                    if (new Date(events[x].eventToDate) < new Date()) {
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
