(function () {
    'use strict';

    angular.module('events.admin')
        .directive('defineAnEvent', addEventDirective)
        .directive('defineEventDetails', defineEventDetailsDirective)
        .directive('linkEventDetails', linkEventDetailsDirective);

    function addEventDirective () {
        AddEventDirectiveCtrl.$inject = ['$scope', '$log', '$timeout', 'DefineEventService', '$state'];

        return {
            restrict: 'A',
            templateUrl: 'partials/admin/add-event/add-an-event.html',
            controller: AddEventDirectiveCtrl,
            controllerAs: 'event'
        };

        function AddEventDirectiveCtrl($scope, $log, $timeout, DefineEventService, $state) {
            var event = this;

            event.fieldsModel    = loadMySavedEdaFieldsModel(); //="edaFieldsModel" - see easy form generator model -
            event.dataModel            = {}; //data Model: filling form will fill it (submit event will return updated data model)

            event.submitButtonText = 'Create Event'; //button text
            event.cancelButtonText = 'Cancel'; //button text

            event.createEvent = submitFormEvent; //event called on form submit
            event.cancelEvent  = cancelFormEvent; //event called on form cancel

            function loadMySavedEdaFieldsModel(){
                return DefineEventService.getEventDefinition();
            }

            //submit will return updated dataModel in "dataModelSubmitted" parameter
            function submitFormEvent(dataModelSubmitted){
                DefineEventService.saveEvent(dataModelSubmitted).then(function (response) {
                    $state.go('addEvent.details', {'eventId': response.data._id, 'eventName': response.data.eventName});
                });

            }

            function cancelFormEvent(){
                console.info('Cancel event: you can manage this event in your controller');
            }
        }
    }

    function defineEventDetailsDirective () {
        DefineEventDetailsDirectiveCtrl.$inject = ['$scope', '$log', '$timeout', 'easyFormSteWayConfig', 'DefineEventService', '$state'];

        return {
            restrict: 'A',
            scope: {
                eventId: '=',
                eventName: '='
            },
            templateUrl: 'partials/admin/add-event/add-event-details.html',
            controller: DefineEventDetailsDirectiveCtrl,
            controllerAs: 'eventDetails'
        };

        function DefineEventDetailsDirectiveCtrl ($scope, $log, $timeout, easyFormSteWayConfig, DefineEventService, $state) {
            var eventDetails = this;

            eventDetails.eventName = $scope.eventName;

            eventDetails.easyFormGeneratorModel	= {};
            eventDetails.saveForm 							= saveForm;
            eventDetails.currentLangue					= refreshCurrentLanguage();
            eventDetails.switchLanguage					= switchLanguage;


            function switchLanguage(toLanguage){
                if(angular.isString){
                    easyFormSteWayConfig.setLanguage(toLanguage);
                    refreshCurrentLanguage();

                    console.info('language changed to ' + eventDetails.currentLangue);
                }
            }

            function refreshCurrentLanguage(){
                return easyFormSteWayConfig.getCurrentLanguage();
            }

            function saveForm(easyFormGeneratorModel){
                DefineEventService.saveEventDetails(easyFormGeneratorModel, $scope.eventId);
                $state.go('addEvent.linkSubEvents', {'eventId': $scope.eventId, 'eventName': $scope.eventName});
            }
        }
    }

    function linkEventDetailsDirective () {
        LinkEventDetailsDirectiveCtrl.$inject = ['$scope', '$log', '$timeout', 'easyFormSteWayConfig', 'UpdateEventService', '$state'];

        return {
            restrict: 'A',
            scope: {
                eventId: '=',
                eventName: '='
            },
            templateUrl: 'partials/admin/add-event/add-event-linksubevent.html',
            controller: LinkEventDetailsDirectiveCtrl,
            controllerAs: 'linkEventDetails'
        };

        function LinkEventDetailsDirectiveCtrl ($scope, $log, $timeout, easyFormSteWayConfig, UpdateEventService, $state) {
            var linkEventDetails = this;

            linkEventDetails.eventId = $scope.eventId;
            linkEventDetails.eventName = $scope.eventName;
            linkEventDetails.links = {};

            UpdateEventService.getEventDetails(linkEventDetails.eventId).then(function (response) {
                linkEventDetails.eventFields = response.eventDetails.edaFieldsModel;
            });

            linkEventDetails.saveLinks = function () {
                $log.info('links => ', linkEventDetails.links);
            };
        }
    }

})();
