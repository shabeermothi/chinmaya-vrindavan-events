(function () {
    'use strict';

    angular.module('events.admin')
        .directive('addAnEvent', addEventDirective);
    
    function addEventDirective () {
        AddEventDirectiveCtrl.$inject = ['$scope', '$log', '$timeout', 'easyFormSteWayConfig'];

        return {
            restrict: 'A',
            templateUrl: 'partials/admin/add-event/add-an-event.html',
            controller: AddEventDirectiveCtrl,
            controllerAs: 'vm'
        };

        function AddEventDirectiveCtrl($scope, $log, $timeout, easyFormSteWayConfig) {
            var demoCtrl = this;

            demoCtrl.easyFormGeneratorModel = {}; // TIP : save a form then look at the console to get a better idea of this model
            demoCtrl.saveForm = saveForm;
            demoCtrl.currentLangue = refreshCurrentLanguage();
            demoCtrl.switchLanguage = switchLanguage;

            //get current language
            console.info('Current language is ' + demoCtrl.currentLangue);


            function switchLanguage(toLanguage) {
                if (angular.isString) {
                    easyFormSteWayConfig.setLanguage(toLanguage);
                    refreshCurrentLanguage();

                    console.info('language changed to ' + demoCtrl.currentLangue);
                }
            }

            function refreshCurrentLanguage() {
                return easyFormSteWayConfig.getCurrentLanguage();
            }

            /**
             * when click on save form, will call your save form function :
             */
            function saveForm(easyFormGeneratorModel) {
                console.info('-> from here : you can save models to database (your controller)');
                console.dir({
                    'What is it?': 'this log shows you easy form returned model on save event',
                    'easyFormGeneratorModel': easyFormGeneratorModel
                });
            }
        }
    }
})();