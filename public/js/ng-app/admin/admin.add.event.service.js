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
                                "templateOptions": {
                                    "label": "Event Name",
                                    "required": true,
                                    "description": "Name of the event",
                                    "placeholder": ""
                                },
                                "formlyExpressionProperties": {},
                                "formlyValidators": {},
                                "formlyValidation": {
                                    "messages": {
                                        "minlength": "Event Name must be atleast 5 characters long."
                                    }
                                }
                            }
                        },
                        {
                            "numColumn": 2,
                            "exist": true,
                            "control": {
                                "type": "textarea",
                                "key": "eventDescription",
                                "templateOptions": {
                                    "label": "Event Description",
                                    "required": true,
                                    "description": "Description of the event",
                                    "placeholder": ""
                                },
                                "formlyExpressionProperties": {},
                                "formlyValidators": {},
                                "formlyValidation": {
                                    "messages": {}
                                },
                                "edited": false
                            }
                        },
                        {
                            "numColumn": 3,
                            "exist": true,
                            "control": {
                                "type": "input",
                                "key": "eventTotalDiscount",
                                "templateOptions": {
                                    "type": "number",
                                    "label": "Event Discount ($)",
                                    "required": false,
                                    "description": "Applicable when the number of subevents chosen are greater than 4. Calculated by Event Discount ($) x number of chosen subevents",
                                    "placeholder": ""
                                },
                                "formlyExpressionProperties": {},
                                "formlyValidators": {},
                                "formlyValidation": {
                                    "messages": {}
                                },
                                "edited": false
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
                                "key": "eventDate",
                                "templateOptions": {
                                    "label": "Event From Date",
                                    "required": true,
                                    "description": "",
                                    "placeholder": ""
                                },
                                "formlyExpressionProperties": {},
                                "formlyValidators": {},
                                "formlyValidation": {
                                    "messages": {}
                                },
                                "edited": false
                            }
                        },
                        {
                            "numColumn": 2,
                            "exist": true,
                            "control": {
                                "type": "datepicker",
                                "key": "eventToDate",
                                "templateOptions": {
                                    "label": "Event End Date",
                                    "required": true,
                                    "description": "",
                                    "placeholder": ""
                                },
                                "formlyExpressionProperties": {},
                                "formlyValidators": {},
                                "formlyValidation": {
                                    "messages": {}
                                }
                            }
                        },
                        {
                            "numColumn": 3,
                            "exist": true,
                            "control": {
                                "type": "input",
                                "key": "eventBasePrice",
                                "templateOptions": {
                                    "type": "number",
                                    "label": "Event Base Price ($)",
                                    "required": false,
                                    "description": "",
                                    "placeholder": ""
                                },
                                "formlyExpressionProperties": {},
                                "formlyValidators": {},
                                "formlyValidation": {
                                    "messages": {}
                                },
                                "edited": false
                            }
                        }
                    ]
                },
                {
                    "line": 1,
                    "activeColumn": 3,
                    "columns": [
                        {
                            "numColumn": 1,
                            "exist": true,
                            "control": {
                                "type": "input",
                                "key": "eventDiscount",
                                "templateOptions": {
                                    "type": "number",
                                    "label": "SubEvent Sibling Discount (%)",
                                    "required": false,
                                    "description": "Applicable when the subevent has been already subscribed by the user for an existing family member.",
                                    "placeholder": ""
                                },
                                "formlyExpressionProperties": {},
                                "formlyValidators": {},
                                "formlyValidation": {
                                    "messages": {}
                                },
                                "edited": false
                            }
                        },
                        {
                            "numColumn": 3,
                            "exist": true,
                            "control": {
                                "type": "input",
                                "key": "eventFbPage",
                                "selectedControl": "TextInput",
                                "subtype": "",
                                "templateOptions": {
                                    "label": "Event Facebook URL",
                                    "required": false,
                                    "description": "Facebook page of the event",
                                    "placeholder": "",
                                    "options": []
                                },
                                "formlyExpressionProperties": {},
                                "formlyValidators": {},
                                "formlyValidation": {
                                    "messages": {}
                                }
                            }
                        },
                        {
                            "numColumn": 4,
                            "exist": true,
                            "control": {
                                "type": "input",
                                "key": "eventTwitterPage",
                                "selectedControl": "TextInput",
                                "subtype": "",
                                "templateOptions": {
                                    "label": "Event Twitter URL",
                                    "required": false,
                                    "description": "Twitter page of the event",
                                    "placeholder": "",
                                    "options": []
                                },
                                "formlyExpressionProperties": {},
                                "formlyValidators": {},
                                "formlyValidation": {
                                    "messages": {}
                                }
                            }
                        }
                    ]
                },
                {
                    "line": 1,
                    "activeColumn": 4,
                    "columns": [
                        {
                            "numColumn": 1,
                            "exist": true,
                            "control": {
                                "type": "input",
                                "key": "maxTotalDiscount",
                                "defaultValue": 4,
                                "templateOptions": {
                                    "type": "number",
                                    "label": "Number of subevents to be chosen for total discount",
                                    "required": false,
                                    "description": "Defaults to 4",
                                    "placeholder": "4"
                                },
                                "formlyExpressionProperties": {},
                                "formlyValidators": {},
                                "formlyValidation": {
                                    "messages": {}
                                },
                                "edited": false
                            }
                        },
                        {
                            "numColumn": 2,
                            "exist": true,
                            "control": {
                                "type": "input",
                                "key": "eventExtendedPrice",
                                "templateOptions": {
                                    "type": "number",
                                    "label": "Event Price after cutoff date ($)",
                                    "required": false,
                                    "description": "Event Base Price after the cutoff date",
                                    "placeholder": ""
                                },
                                "formlyExpressionProperties": {},
                                "formlyValidators": {},
                                "formlyValidation": {
                                    "messages": {}
                                },
                                "edited": false
                            }
                        },
                        {
                            "numColumn": 3,
                            "exist": true,
                            "control": {
                                "type": "datepicker",
                                "key": "extendedEventDate",
                                "templateOptions": {
                                    "label": "Cutoff date for extended pricing",
                                    "required": false,
                                    "description": "Date from which the extended pricing will be applicable",
                                    "placeholder": ""
                                },
                                "formlyExpressionProperties": {},
                                "formlyValidators": {},
                                "formlyValidation": {
                                    "messages": {}
                                },
                                "edited": false
                            }
                        }
                    ]
                }
            ];
        }
    }
})();
