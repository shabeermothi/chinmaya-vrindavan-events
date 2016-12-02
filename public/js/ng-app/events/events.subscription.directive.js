(function () {
    'use strict';

    angular.module('eventsApp')
        .directive('subscribeEvent', subscribeEventDirective)
        .factory('SubscribeEventService', SubscribeEventService);

    SubscribeEventService.$inject = ['$http', '$log'];

    function subscribeEventDirective () {
        SubscribeEventDirectiveCtrl.$inject = ['$scope', '$log', 'SubscribeEventService'];

        return {
            restrict: 'A',
            scope: {
                eventId: '='
            },
            templateUrl: 'partials/events/subscribe/subscribe-to-an-event.html',
            controller: SubscribeEventDirectiveCtrl,
            controllerAs: 'vm'
        };

        function SubscribeEventDirectiveCtrl ($scope, $log, SubscribeEventService) {
            var vm = this;

            vm.userEventDetails = {};
            vm.eventDetails = [
                {
                    key: 'email',
                    type: 'input',
                    templateOptions: {
                        type: 'email',
                        label: 'Email address',
                        placeholder: 'Enter email'
                    }
                },
                {
                    key: 'password',
                    type: 'input',
                    templateOptions: {
                        type: 'password',
                        label: 'Password',
                        placeholder: 'Password'
                    }
                },
                {
                    key: 'checked',
                    type: 'checkbox',
                    templateOptions: {
                        label: 'Check me out'
                    }
                }
            ];

            /*SubscribeEventService.getEventDetails($scope.eventId).then(function (response) {
                vm.eventDetails = response;
            })*/
        }
    }
    
    function SubscribeEventService ($http, $log) {
        return {
            getEventDetails: getEventDetails,
            subscribeEvent: subscribeEvent
        };

        function getEventDetails (eventId) {
            return $http({
                method: 'GET',
                url: '/events/' + eventId
            }).then(function (response) {
                return response.data;
            });
        }

        function subscribeEvent () {

        }
    }
})();