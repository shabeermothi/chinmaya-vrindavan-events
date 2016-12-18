(function () {
    'use strict';

    angular.module('events.admin')
        .factory('DefineEventService', defineEventService);

    defineEventService.$inject = ['$http', '$log', '$filter'];

    function defineEventService ($http, $log, $filter) {
        return {
            saveEvent: saveEvent,
            saveEventDetails: saveEventDetails,
            getEventDefinition: getEventDefinition
        };

        function saveEvent (eventData) {
            eventData.eventDetails = [];

            return $http({
                method: 'POST',
                url: '/events',
                data: eventData
            });
        }

        function saveEventDetails (eventDetails, eventId) {
            $http({
                method: 'GET',
                url: '/events/' + eventId
            }).then(function (response) {
                var event = response.data;
                event.eventDetails = eventDetails;

                $http({
                    method: 'PUT',
                    url: '/events/' + eventId,
                    data: event
                });
            });
        }

        function getEventDefinition () {
            return [
                {
                    "line": -1,
                    "activeColumn": 1,
                    "columns": [
                        {
                            "numColumn": 1,
                            "exist": true,
                            "control": {
                                "type": "input",
                                "key": "eventName",
                                "selectedControl": "TextInput",
                                "subtype": "",
                                "templateOptions": {
                                    "label": "Event Name",
                                    "required": true,
                                    "description": "Name of the event",
                                    "placeholder": "",
                                    "options": []
                                },
                                "formlyExpressionProperties": {},
                                "formlyValidators": {},
                                "formlyValidation": {
                                    "messages": {}
                                },
                                "edited": true
                            }
                        },
                        {
                            "numColumn": 2,
                            "exist": true,
                            "control": {
                                "type": "textarea",
                                "key": "eventDescription",
                                "selectedControl": "TextArea",
                                "subtype": "",
                                "templateOptions": {
                                    "label": "Event Description",
                                    "required": true,
                                    "description": "Description of the event",
                                    "placeholder": "",
                                    "options": []
                                },
                                "formlyExpressionProperties": {},
                                "formlyValidators": {},
                                "formlyValidation": {
                                    "messages": {}
                                },
                                "edited": true
                            }
                        },
                        {
                            "numColumn": 3,
                            "exist": true,
                            "control": {
                                "type": "datepicker",
                                "key": "eventDate",
                                "selectedControl": "",
                                "subtype": "",
                                "templateOptions": {
                                    "label": "Event From Date",
                                    "required": true,
                                    "description": "",
                                    "placeholder": "",
                                    "options": []
                                },
                                "formlyExpressionProperties": {},
                                "formlyValidators": {},
                                "formlyValidation": {
                                    "messages": {}
                                },
                                "edited": true
                            }
                        }
                    ]
                },
                {
                    "line": 0,
                    "activeColumn": 2,
                    "columns": [
                        {
                            "numColumn": 1,
                            "exist": true,
                            "control": {
                                "type": "datepicker",
                                "key": "eventToDate",
                                "selectedControl": "",
                                "subtype": "",
                                "templateOptions": {
                                    "label": "Event To Date",
                                    "required": true,
                                    "description": "",
                                    "placeholder": "",
                                    "options": []
                                },
                                "formlyExpressionProperties": {
                                    "templateOptions.disabled": "!model.eventDate"
                                },
                                "formlyValidators": {},
                                "formlyValidation": {
                                    "messages": {}
                                },
                                "edited": true
                            }
                        },
                        {
                            "numColumn": 2,
                            "exist": true,
                            "control": {
                                "type": "input",
                                "key": "eventFbPage",
                                "selectedControl": "TextInput",
                                "subtype": "",
                                "templateOptions": {
                                    "label": "Event Facebook URL",
                                    "required": true,
                                    "description": "Facebook page of the event",
                                    "placeholder": "",
                                    "options": []
                                },
                                "formlyExpressionProperties": {},
                                "formlyValidators": {},
                                "formlyValidation": {
                                    "messages": {}
                                },
                                "edited": true
                            }
                        },
                        {
                            "numColumn": 3,
                            "exist": true,
                            "control": {
                                "type": "input",
                                "key": "eventTwitterPage",
                                "selectedControl": "TextInput",
                                "subtype": "",
                                "templateOptions": {
                                    "label": "Event Twitter URL",
                                    "required": true,
                                    "description": "Twitter page of the event",
                                    "placeholder": "",
                                    "options": []
                                },
                                "formlyExpressionProperties": {},
                                "formlyValidators": {},
                                "formlyValidation": {
                                    "messages": {}
                                },
                                "edited": true
                            }
                        }
                    ]
                }
                /*,
                {
                    "line": -1,
                    "activeColumn": 1,
                    "columns": [
                        {
                            "numColumn": 1,
                            "exist": true,
                            "control": {
                                "type": "input",
                                "key": "eventTag",
                                "selectedControl": "TextInput",
                                "subtype": "",
                                "templateOptions": {
                                    "label": "Event Tag(s)",
                                    "required": true,
                                    "description": "Tags/Categories for the event",
                                    "placeholder": "",
                                    "options": []
                                },
                                "formlyExpressionProperties": {},
                                "formlyValidators": {},
                                "formlyValidation": {
                                    "messages": {}
                                },
                                "edited": true
                            }
                        }
                    ]
                }*/
            ];
        }
    }
})();
