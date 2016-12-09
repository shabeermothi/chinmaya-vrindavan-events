(function () {
    'use strict';

    angular.module('events')
        .directive('eventsList', EventsListDirective);

    function EventsListDirective () {
        EventsListDirectiveCtrl.$inject = ['$scope', '$log', 'EventsListService'];

        return {
            restrict: 'A',
            scope: {
                showEvents: '@?'
            },
            templateUrl: 'partials/events/events-list.html',
            controller: EventsListDirectiveCtrl,
            controllerAs: 'eventsList'
        };

        function EventsListDirectiveCtrl ($scope, $log, EventsListService) {
            var eventsList = this;
            
            EventsListService.getEvents().then(function (response) {
                eventsList.events = response;
            });
        }
    }

})();