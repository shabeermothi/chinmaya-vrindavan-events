(function () {
    'use strict';

    angular.module('events.admin')
        .directive('editEvent', editEventDirective)
        .directive('editEventDetails', editEventDetailsDirective)
        .directive('editEventLinkDetails', editEventLinkDetailsDirective);

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

    function editEventLinkDetailsDirective () {
        EditEventLinkDetailsDirectiveCtrl.$inject = ['$scope', '$log', '$timeout', 'easyFormSteWayConfig', 'UpdateEventService', '$state', 'SubscribeEventService'];

        return {
            restrict: 'A',
            scope: {
                eventId: '=',
                eventName: '='
            },
            templateUrl: 'partials/admin/edit-event/edit-event-linksubevent.html',
            controller: EditEventLinkDetailsDirectiveCtrl,
            controllerAs: 'editLinkEventDetails'
        };

        function EditEventLinkDetailsDirectiveCtrl ($scope, $log, $timeout, easyFormSteWayConfig, UpdateEventService, $state, SubscribeEventService) {
            var editLinkEventDetails = this;

            editLinkEventDetails.eventId = $scope.eventId;
            editLinkEventDetails.eventName = $scope.eventName;
            editLinkEventDetails.links = {};

            UpdateEventService.getEventDetails(editLinkEventDetails.eventId).then(function (response) {
                editLinkEventDetails.fullEventDetails = response;
                editLinkEventDetails.eventFields = response.eventDetails.edaFieldsModel;

                SubscribeEventService.getEventPrice(editLinkEventDetails.eventId).then(function (eventPriceResp) {
                    $log.info("event price response => ", eventPriceResp);
                    for (var price of eventPriceResp.eventFieldPrices) {
                        for (var key in price) {
                            if (key.indexOf("basicSelect") > -1 || key.indexOf("select") > -1) {
                                for (var option in price[key]) {
                                    if (editLinkEventDetails.links[key]) {
                                        editLinkEventDetails.links[key]["price"][option] = price[key][option];
                                    } else {
                                        editLinkEventDetails.links[key] = {};
                                        editLinkEventDetails.links[key]["price"] = {};
                                        editLinkEventDetails.links[key]["price"][option] = price[key][option];
                                    }
                                }
                            } else if(key.indexOf("checkbox") > -1) {
                                for (var option in price[key]) {
                                    if (editLinkEventDetails.links[key]) {
                                        editLinkEventDetails.links[key]["price"]["yes"] = price[key][option];
                                    } else {
                                        editLinkEventDetails.links[key] = {};
                                        editLinkEventDetails.links[key]["price"] = {};
                                        editLinkEventDetails.links[key]["price"]["yes"] = price[key][option];
                                    }
                                }
                            }
                        }

                    }

                });
            });

            editLinkEventDetails.updateLinks = function () {
                for (var x in editLinkEventDetails.links) {

                    if (editLinkEventDetails.links[x].price) {
                        var priceObj = {};
                        priceObj[x] = editLinkEventDetails.links[x].price;

                        UpdateEventService.addPrice(editLinkEventDetails.fullEventDetails._id, priceObj);
                    }

                    var sourceFieldType = getType(x);
                    if (editLinkEventDetails.links.hasOwnProperty(x)) {
                        for (var a in editLinkEventDetails.eventFields) {
                            if (editLinkEventDetails.eventFields.hasOwnProperty(a)) {
                                for (var b in editLinkEventDetails.eventFields[a].columns) {
                                    if (editLinkEventDetails.eventFields[a].columns.hasOwnProperty(b)) {
                                        if (editLinkEventDetails.links[x].targetField && editLinkEventDetails.links[x].targetField.hasOwnProperty("control")) {
                                            if (editLinkEventDetails.eventFields[a].columns[b].control.key === editLinkEventDetails.links[x].targetField.control.key) {
                                                delete editLinkEventDetails.eventFields[a].columns[b].control.edited;
                                                delete editLinkEventDetails.eventFields[a].columns[b].control.subtype;
                                                delete editLinkEventDetails.eventFields[a].columns[b].control.selectedControl;

                                                if (editLinkEventDetails.links[x].action === "disable" && sourceFieldType !== "select") {
                                                    editLinkEventDetails.eventFields[a].columns[b].control.formlyExpressionProperties = {
                                                        "templateOptions['disabled']": "!model['" + x + "']"
                                                    };
                                                } else if (editLinkEventDetails.links[x].action === "enable" && sourceFieldType !== "select") {
                                                    editLinkEventDetails.eventFields[a].columns[b].control.formlyExpressionProperties = {
                                                        "templateOptions['disabled']": "model['" + x + "']"
                                                    };
                                                } else if (editLinkEventDetails.links[x].action === "disable" && (sourceFieldType === "basicSelect" || sourceFieldType === "select")) {
                                                    editLinkEventDetails.eventFields[a].columns[b].control.formlyExpressionProperties = {
                                                        "templateOptions['disabled']": "model['" + x + "'] == '" + editLinkEventDetails.links[x].sourceValue.value + "'"
                                                    };
                                                } else if (editLinkEventDetails.links[x].action === "enable" && (sourceFieldType === "basicSelect" || sourceFieldType === "select")) {
                                                    editLinkEventDetails.eventFields[a].columns[b].control.formlyExpressionProperties = {
                                                        "templateOptions['disabled']": "model['" + x + "'] != '" + editLinkEventDetails.links[x].sourceValue.value + "'"
                                                    };
                                                }

                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                function getType (property) {
                    for (var a in editLinkEventDetails.eventFields) {
                        if (editLinkEventDetails.eventFields.hasOwnProperty(a)) {
                            for (var b in editLinkEventDetails.eventFields[a].columns) {
                                if (editLinkEventDetails.eventFields[a].columns.hasOwnProperty(b)) {
                                    if (editLinkEventDetails.eventFields[a].columns[b].control.key === property) {
                                        if (editLinkEventDetails.eventFields[a].columns[b].control.type === 'basicSelect') {
                                            editLinkEventDetails.eventFields[a].columns[b].control.type = "select";
                                        }

                                        delete editLinkEventDetails.eventFields[a].columns[b].control.edited;
                                        delete editLinkEventDetails.eventFields[a].columns[b].control.subtype;
                                        delete editLinkEventDetails.eventFields[a].columns[b].control.selectedControl;

                                        return editLinkEventDetails.eventFields[a].columns[b].control.type;
                                    }
                                }
                            }
                        }
                    }
                }

                editLinkEventDetails.fullEventDetails.eventDetails.edaFieldsModel = editLinkEventDetails.eventFields;

                UpdateEventService.updateEvent(editLinkEventDetails.fullEventDetails).then(function (response) {
                    $state.go('manageEvent');
                }, function (error) {
                    $log.info('Failure');
                });
            };
        }
    }

})();
