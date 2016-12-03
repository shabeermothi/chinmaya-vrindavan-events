(function () {
    'use strict';

    angular.module('eventsApp')
        .directive('subscribeEvent', subscribeEventDirective)
        .factory('SubscribeEventService', SubscribeEventService);

    SubscribeEventService.$inject = ['$http', '$log'];

    function subscribeEventDirective () {
        SubscribeEventDirectiveCtrl.$inject = ['$scope', '$log', 'SubscribeEventService', '$window'];

        return {
            restrict: 'A',
            scope: {
                eventId: '='
            },
            templateUrl: 'partials/events/subscribe/subscribe-to-an-event.html',
            controller: SubscribeEventDirectiveCtrl,
            controllerAs: 'vm'
        };

        function SubscribeEventDirectiveCtrl ($scope, $log, SubscribeEventService, $window) {
            var vm = this;

            vm.userEventDetails = {};
            vm.eventDetails = [
                {
                    key: 'child',
                    type: 'select',
                    templateOptions: {
                        label: 'Child Name',
                        placeholder: 'Child Name',
                        options: []
                    }
                },
                {
                    key: 'week1',
                    type: 'checkbox',
                    templateOptions: {
                        label: 'Week 1: June 20 – June 24 : Theme: Inside Out – Being powerful comes from within'
                    }
                },
                {
                    key: 'week2',
                    type: 'checkbox',
                    templateOptions: {
                        label: 'Week 2: June 27 – July 1 : Theme: The Survivor Overcoming fears'
                    }
                },
                {
                    key: 'week3',
                    type: 'checkbox',
                    templateOptions: {
                        label: 'Week 3: July 5 – July 8 : Theme: Just do it'
                    }
                },
                {
                    key: 'week4',
                    type: 'checkbox',
                    templateOptions: {
                        label: 'Week 4: July 11 – July 15 : Theme: Less drama, more Dharma'
                    }
                },
                {
                    key: 'week5',
                    type: 'checkbox',
                    templateOptions: {
                        label: 'Week 5: July 18 – July 22 : Theme: Quantity vs. Quality'
                    }
                },
                {
                    key: 'week6',
                    type: 'checkbox',
                    templateOptions: {
                        label: 'Week 6: July 25 – July 29 : Theme: Divergent – Going against the tide'
                    }
                },
                {
                    key: 'week7',
                    type: 'checkbox',
                    templateOptions: {
                        label: 'Week 7: Aug 1 – Aug 5 : Theme: Catching Fire: Ignite Your Faith'
                    }
                },
                {
                    key: 'week8',
                    type: 'checkbox',
                    templateOptions: {
                        label: 'Week 8: Aug 8 – Aug 12 : Theme: Impossible is nothing'
                    }
                },
                {
                    key: 'week9',
                    type: 'checkbox',
                    templateOptions: {
                        label: 'Week 9: Aug 15 – Aug 19 : Theme: Challenge Everything'
                    }
                },
                {
                    key: 'week10',
                    type: 'checkbox',
                    templateOptions: {
                        label: 'Week 10: Aug 22 – Aug 26 : Theme: Dude, Where is my Karma'
                    }
                },
                {
                    key: 'weektime1',
                    type: 'select',
                    templateOptions: {
                        label: 'Week 1',
                        options: [{"name": "9:00 - 12:00", "value": "9:00 - 12:00"}, {"name": "9:00 - 1:30", "value": "9:00 - 1:30"}, {"name": "9:00 - 4:30", "value": "9:00 - 4:30"}]
                    },
                    "hideExpression": "!model.week1"
                },
                {
                    key: 'weekaftercare1',
                    type: 'select',
                    templateOptions: {
                        label: 'Week 1 After Care',
                        options: [{"name": "Yes", "value": "Yes"}, {"name": "No", "value": "No"}]
                    },
                    "hideExpression": 'model.weektime1 != "9:00 - 4:30"'
                },
                {
                    key: 'weektime2',
                    type: 'select',
                    templateOptions: {
                        label: 'Week 2',
                        options: [{"name": "9:00 - 12:00", "value": "9:00 - 12:00"}, {"name": "9:00 - 1:30", "value": "9:00 - 1:30"}, {"name": "9:00 - 4:30", "value": "9:00 - 4:30"}]
                    },
                    "hideExpression": "!model.week2"
                },
                {
                    key: 'weekaftercare2',
                    type: 'select',
                    templateOptions: {
                        label: 'Week 2 After Care',
                        options: [{"name": "Yes", "value": "Yes"}, {"name": "No", "value": "No"}]
                    },
                    "hideExpression": 'model.weektime2 != "9:00 - 4:30"'
                },
                {
                    key: 'weektime3',
                    type: 'select',
                    templateOptions: {
                        label: 'Week 3',
                        options: [{"name": "9:00 - 12:00", "value": "9:00 - 12:00"}, {"name": "9:00 - 1:30", "value": "9:00 - 1:30"}, {"name": "9:00 - 4:30", "value": "9:00 - 4:30"}]
                    },
                    "hideExpression": "!model.week3"
                },
                {
                    key: 'weekaftercare3',
                    type: 'select',
                    templateOptions: {
                        label: 'Week 3 After Care',
                        options: [{"name": "Yes", "value": "Yes"}, {"name": "No", "value": "No"}]
                    },
                    "hideExpression": 'model.weektime3 != "9:00 - 4:30"'
                },
                {
                    key: 'weektime4',
                    type: 'select',
                    templateOptions: {
                        label: 'Week 4',
                        options: [{"name": "9:00 - 12:00", "value": "9:00 - 12:00"}, {"name": "9:00 - 1:30", "value": "9:00 - 1:30"}, {"name": "9:00 - 4:30", "value": "9:00 - 4:30"}]
                    },
                    "hideExpression": "!model.week4"
                },
                {
                    key: 'weekaftercare4',
                    type: 'select',
                    templateOptions: {
                        label: 'Week 4 After Care',
                        options: [{"name": "Yes", "value": "Yes"}, {"name": "No", "value": "No"}]
                    },
                    "hideExpression": 'model.weektime4 != "9:00 - 4:30"'
                },
                {
                    key: 'weektime5',
                    type: 'select',
                    templateOptions: {
                        label: 'Week 5',
                        options: [{"name": "9:00 - 12:00", "value": "9:00 - 12:00"}, {"name": "9:00 - 1:30", "value": "9:00 - 1:30"}, {"name": "9:00 - 4:30", "value": "9:00 - 4:30"}]
                    },
                    "hideExpression": "!model.week5"
                },
                {
                    key: 'weekaftercare5',
                    type: 'select',
                    templateOptions: {
                        label: 'Week 5 After Care',
                        options: [{"name": "Yes", "value": "Yes"}, {"name": "No", "value": "No"}]
                    },
                    "hideExpression": 'model.weektime5 != "9:00 - 4:30"'
                },
                {
                    key: 'weektime6',
                    type: 'select',
                    templateOptions: {
                        label: 'Week 6',
                        options: [{"name": "9:00 - 12:00", "value": "9:00 - 12:00"}, {"name": "9:00 - 1:30", "value": "9:00 - 1:30"}, {"name": "9:00 - 4:30", "value": "9:00 - 4:30"}]
                    },
                    "hideExpression": "!model.week6"
                },
                {
                    key: 'weekaftercare6',
                    type: 'select',
                    templateOptions: {
                        label: 'Week 6 After Care',
                        options: [{"name": "Yes", "value": "Yes"}, {"name": "No", "value": "No"}]
                    },
                    "hideExpression": 'model.weektime6 != "9:00 - 4:30"'
                },
                {
                    key: 'weektime7',
                    type: 'select',
                    templateOptions: {
                        label: 'Week 7',
                        options: [{"name": "9:00 - 12:00", "value": "9:00 - 12:00"}, {"name": "9:00 - 1:30", "value": "9:00 - 1:30"}, {"name": "9:00 - 4:30", "value": "9:00 - 4:30"}]
                    },
                    "hideExpression": "!model.week7"
                },
                {
                    key: 'weekaftercare7',
                    type: 'select',
                    templateOptions: {
                        label: 'Week 7 After Care',
                        options: [{"name": "Yes", "value": "Yes"}, {"name": "No", "value": "No"}]
                    },
                    "hideExpression": 'model.weektime7 != "9:00 - 4:30"'
                },
                {
                    key: 'weektime8',
                    type: 'select',
                    templateOptions: {
                        label: 'Week 8',
                        options: [{"name": "9:00 - 12:00", "value": "9:00 - 12:00"}, {"name": "9:00 - 1:30", "value": "9:00 - 1:30"}, {"name": "9:00 - 4:30", "value": "9:00 - 4:30"}]
                    },
                    "hideExpression": "!model.week8"
                },
                {
                    key: 'weekaftercare8',
                    type: 'select',
                    templateOptions: {
                        label: 'Week 8 After Care',
                        options: [{"name": "Yes", "value": "Yes"}, {"name": "No", "value": "No"}]
                    },
                    "hideExpression": 'model.weektime8 != "9:00 - 4:30"'
                },
                {
                    key: 'weektime9',
                    type: 'select',
                    templateOptions: {
                        label: 'Week 9',
                        options: [{"name": "9:00 - 12:00", "value": "9:00 - 12:00"}, {"name": "9:00 - 1:30", "value": "9:00 - 1:30"}, {"name": "9:00 - 4:30", "value": "9:00 - 4:30"}]
                    },
                    "hideExpression": "!model.week9"
                },
                {
                    key: 'weekaftercare9',
                    type: 'select',
                    templateOptions: {
                        label: 'Week 9 After Care',
                        options: [{"name": "Yes", "value": "Yes"}, {"name": "No", "value": "No"}]
                    },
                    "hideExpression": 'model.weektime9 != "9:00 - 4:30"'
                },
                {
                    key: 'weektime10',
                    type: 'select',
                    templateOptions: {
                        label: 'Week 10',
                        options: [{"name": "9:00 - 12:00", "value": "9:00 - 12:00"}, {"name": "9:00 - 1:30", "value": "9:00 - 1:30"}, {"name": "9:00 - 4:30", "value": "9:00 - 4:30"}]
                    },
                    "hideExpression": "!model.week10"
                },
                {
                    key: 'weekaftercare10',
                    type: 'select',
                    templateOptions: {
                        label: 'Week 10 After Care',
                        options: [{"name": "Yes", "value": "Yes"}, {"name": "No", "value": "No"}]
                    },
                    "hideExpression": 'model.weektime10 != "9:00 - 4:30"'
                }
            ];

            SubscribeEventService.getChildDetails($window.sessionStorage.userId).then(function (response) {
                var childNames = [];
                for (var i=0; i<response.length; i++) {
                    childNames.push({
                        name: response[i].name,
                        value: response[i].id
                    });
                }

                vm.eventDetails[0].templateOptions.options = childNames;
             });

            /*SubscribeEventService.getEventDetails($scope.eventId).then(function (response) {
                vm.eventDetails = response;
            })*/
        }
    }
    
    function SubscribeEventService ($http, $log) {
        return {
            getEventDetails: getEventDetails,
            subscribeEvent: subscribeEvent,
            getChildDetails: getChildDetails
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

        function getChildDetails (userId) {
            return $http({
                method: 'GET',
                url: '/user-details/child-details/' + userId
            }).then(function (response) {
                return response.data;
            });
        }
    }
})();