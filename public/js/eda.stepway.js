!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in p||(p[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==v.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=p[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(v.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=p[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return x[e]||(x[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},r.name);t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=p[s],v=x[s];v?l=v.exports:c&&!c.declarative?l=c.esModule:c?(d(c),v=c.module,l=v.exports):l=f(s),v&&v.importers?(v.importers.push(t),t.dependencies.push(v)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=p[e];if(t)t.declarative?c(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=f(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=p[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){if(r===e)return r;var t={};if("object"==typeof r||"function"==typeof r)if(g){var n;for(var o in r)(n=Object.getOwnPropertyDescriptor(r,o))&&h(t,o,n)}else{var a=r&&r.hasOwnProperty;for(var o in r)(!a||r.hasOwnProperty(o))&&(t[o]=r[o])}return t["default"]=r,h(t,"__useDefault",{value:!0}),t}function c(r,t){var n=p[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==v.call(t,u)&&(p[u]?c(u,t):f(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function f(e){if(D[e])return D[e];if("@node/"==e.substr(0,6))return y(e.substr(6));var r=p[e];if(!r)throw"Module "+e+" not present.";return a(e),c(e,[]),p[e]=void 0,r.declarative&&h(r.module.exports,"__esModule",{value:!0}),D[e]=r.declarative?r.module.exports:r.esModule}var p={},v=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},g=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(m){g=!1}var h;!function(){try{Object.defineProperty({},"a",{})&&(h=Object.defineProperty)}catch(e){h=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var x={},y="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,D={"@empty":{}};return function(e,n,o){return function(a){a(function(a){for(var u={_nodeRequire:y,register:r,registerDynamic:t,get:f,set:function(e,r){D[e]=r},newModule:function(e){return e}},d=0;d<n.length;d++)(function(e,r){r&&r.__esModule?D[e]=r:D[e]=s(r)})(n[d],arguments[d]);o(u);var i=f(e[0]);if(e.length>1)for(var d=1;d<e.length;d++)f(e[d]);return i.__useDefault?i["default"]:i})}}}("undefined"!=typeof self?self:global)

(["1"], [], function($__System) {

    !function(){var t=$__System;if("undefined"!=typeof window&&"undefined"!=typeof document&&window.location)var s=location.protocol+"//"+location.hostname+(location.port?":"+location.port:"");t.set("@@cjs-helpers",t.newModule({getPathVars:function(t){var n,o=t.lastIndexOf("!");n=-1!=o?t.substr(0,o):t;var e=n.split("/");return e.pop(),e=e.join("/"),"file:///"==n.substr(0,8)?(n=n.substr(7),e=e.substr(7),isWindows&&(n=n.substr(1),e=e.substr(1))):s&&n.substr(0,s.length)===s&&(n=n.substr(s.length),e=e.substr(s.length)),{filename:n,dirname:e}}}))}();
    $__System.register("2", [], function (_export) {
        "use strict";

        return {
            setters: [],
            execute: function () {
                _export("default", window.angular);
            }
        };
    });
    $__System.registerDynamic("3", [], true, function($__require, exports, module) {
        ;
        var global = this,
            __define = global.define;
        global.define = undefined;
        module.exports = {
            "stepway": {"version": "1.2.0"},
            "dragdropway": {"version": "1.2.0"},
            "formviewer": {"version": "1.2.0"}
        };
        global.define = __define;
        return module.exports;
    });

    $__System.register('4', ['3'], function (_export) {
        'use strict';

        var easyFormConfig, EASY_FORM_VERSION_NAME, EASY_FORM_VERSION_VALUE, ACTIVE_MODAL_ANIMATION;

        function easyFromConfig(easyFormSteWayConfigProvider) {
            //enable/disable easy form modal animation
            //HERE : disabling animation due to angular bootstrap backdrop bug with angular >= 1.4
            easyFormSteWayConfigProvider.setModalAnimation(ACTIVE_MODAL_ANIMATION);
        }

        return {
            setters: [function (_) {
                easyFormConfig = _['default'];
            }],
            execute: function () {
                EASY_FORM_VERSION_NAME = 'easyFormGenVersion';
                EASY_FORM_VERSION_VALUE = easyFormConfig.stepway.version;
                ACTIVE_MODAL_ANIMATION = false;
                easyFromConfig.$inject = ['easyFormSteWayConfigProvider'];

                _export('default', easyFromConfig);

                _export('EASY_FORM_VERSION_NAME', EASY_FORM_VERSION_NAME);

                _export('EASY_FORM_VERSION_VALUE', EASY_FORM_VERSION_VALUE);
            }
        };
    });
    $__System.register("5", [], function (_export) {
        "use strict";

        var richTextTemplate, blankTemplate, subTitleTemplate, basicSelectTemplate, groupedSelectTemplate, datepickerTemplate, validationTemplate;
        return {
            setters: [],
            execute: function () {
                richTextTemplate = "\n\t<text-angular name=\"{{id}}\"\n\t\tclass=\"richTextAngular\"\n\t\tng-model=\"model[options.key || index]\">\n\t</text-angular>";
                blankTemplate = "<div></div>";
                subTitleTemplate = "\n\t<div class=\"row\">\n\t\t<div class=\"\">\n\t\t\t<h4 class=\"text-center\">\n\t\t\t{{options.templateOptions.placeholder}}\n\t\t\t<h4><hr/>\n\t\t</div>\n\t</div>";
                basicSelectTemplate = "\n<ol\n\tclass=\"nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg12\"\n\tng-model=\"model[options.key || index]\"\n\tid=\"{{id}}\"\n\tdisabled=\"options.templateOptions.options.length === 0\">\n\t<li class=\"nya-bs-option\" nya-bs-option=\"option in options.templateOptions.options\">\n\t\t<a>{{option.name}}</a>\n\t</li>\n</ol>";
                groupedSelectTemplate = "\n\t<ol class=\"nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg12\"\n\t\tng-model=\"model[options.key || index]\"\n\t\tdata-live-search=\"true\"\n\t\tdisabled=\"options.templateOptions.options.length === 0\">\n\t\t<li nya-bs-option=\"option in  options.templateOptions.options group by option.group\">\n\t\t\t<span class=\"dropdown-header\">{{$group}}</span>\n\t\t\t<a>\n\t\t\t\t<span>{{option.name}}</span>\n\t\t\t\t<span class=\"glyphicon glyphicon-ok check-mark\"></span>\n\t\t\t</a>\n\t\t</li>\n\t</ol>";
                datepickerTemplate = "\n<p class=\"input-group\">\n  <span class=\"input-group-btn\">\n      <button\n        type=\"button\"\n        class=\"btn btn-default\"\n        ng-click=\"formlyDatePicker.open($event)\">\n        <i class=\"glyphicon glyphicon-calendar\"></i>\n      </button>\n  </span>\n  <input  type=\"text\"\n          id=\"{{::id}}\"\n          name=\"{{::id}}\"\n          ng-model=\"model[options.key]\"\n          class=\"form-control\"\n          ng-click=\"datepicker.open($event)\"\n          uib-datepicker-popup=\"{{to.datepickerOptions.format}}\"\n          is-open=\"datepicker.opened\"\n          datepicker-options=\"to.datepickerOptions\"\n  />\n</p>\n";
                validationTemplate = "\n\t<div class=\"formly-template-wrapper form-group\"\n\t\t\t\t\t\tng-class=\"{'has-error': options.validation.errorExistsAndShouldBeVisible}\">\n\t\t\t\t<formly-transclude></formly-transclude>\n\t\t\t\t<div class=\"validation\"\n\t\t\t\t\t\t\tng-if=\"options.validation.errorExistsAndShouldBeVisible\"\n\t\t\t\t\t\t\tng-messages=\"options.formControl.$error\">\n\t\t\t\t\t<div ng-messages-include=\"validation.html\"></div>\n\t\t\t\t\t<div ng-message=\"{{::name}}\" ng-repeat=\"(name, message) in ::options.validation.messages\">\n\t\t\t\t\t\t{{message(options.formControl.$viewValue, options.formControl.$modelValue, this)}}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>";

                _export("richTextTemplate", richTextTemplate);

                _export("blankTemplate", blankTemplate);

                _export("subTitleTemplate", subTitleTemplate);

                _export("basicSelectTemplate", basicSelectTemplate);

                _export("groupedSelectTemplate", groupedSelectTemplate);

                _export("datepickerTemplate", datepickerTemplate);

                _export("validationTemplate", validationTemplate);
            }
        };
    });
    $__System.register('6', ['5'], function (_export) {
        /* global angular */
        'use strict';

        var richTextTemplate, blankTemplate, subTitleTemplate, basicSelectTemplate, groupedSelectTemplate, datepickerTemplate, validationTemplate;

        function formlyConfig(formlyConfigProvider) {

            formlyConfigProvider.setType({
                name: 'richEditor',
                template: richTextTemplate,
                wrapper: ['bootstrapLabel', 'bootstrapHasError']
            });

            formlyConfigProvider.setType({
                name: 'blank',
                template: blankTemplate
            });

            formlyConfigProvider.setType({
                name: 'subTitle',
                template: subTitleTemplate
            });

            formlyConfigProvider.setType({
                name: 'basicSelect',
                template: basicSelectTemplate,
                wrapper: ['bootstrapLabel', 'bootstrapHasError']
            });

            formlyConfigProvider.setType({
                name: 'groupedSelect',
                template: groupedSelectTemplate,
                wrapper: ['bootstrapLabel', 'bootstrapHasError']
            });

            // impplement from : http://jsbin.com/koredu/edit?js,output
            formlyConfigProvider.setType({
                name: 'upload',
                'extends': 'input',
                wrapper: ['bootstrapLabel', 'bootstrapHasError'],
                link: function link(scope, el, attrs) {
                    el.on("change", function (changeEvent) {
                        var file = changeEvent.target.files[0];
                        if (file) {
                            // console.log('scope.id', scope.id);
                            var fd = new FormData();
                            // use key on backEnd
                            fd.append('uploadFile', file);
                            scope.$emit('fileToUpload', fd);
                            var fileProp = {};
                            for (var properties in file) {
                                if (!angular.isFunction(file[properties])) {
                                    fileProp[properties] = file[properties];
                                }
                            }
                            scope.fc.$setViewValue(fileProp);
                        } else {
                            scope.fc.$setViewValue(undefined);
                        }
                    });
                    el.on("focusout", function (focusoutEvent) {
                        // dont run validation , user still opening pop up file dialog
                        if ($window.document.activeElement.id === scope.id) {
                            // so we set it untouched
                            scope.$apply(function (scope) {
                                scope.fc.$setUntouched();
                            });
                        } else {
                            // element losing focus so we trigger validation
                            scope.fc.$validate();
                        }
                    });
                },
                defaultOptions: {
                    templateOptions: {
                        type: 'file',
                        required: true
                    }
                }
            });

            ////////////////////////////
            // angular UI date picker
            ////////////////////////////
            // thx Kent C. Dodds

            var attributes = ['date-disabled', 'custom-class', 'show-weeks', 'starting-day', 'init-date', 'min-mode', 'max-mode', 'format-day', 'format-month', 'format-year', 'format-day-header', 'format-day-title', 'format-month-title', 'year-range', 'shortcut-propagation', 'datepicker-popup', 'show-button-bar', 'current-text', 'clear-text', 'close-text', 'close-on-date-selection', 'datepicker-append-to-body'];

            var bindings = ['datepicker-mode', 'min-date', 'max-date'];

            var ngModelAttrs = {};

            angular.forEach(attributes, function (attr) {
                ngModelAttrs[camelize(attr)] = { attribute: attr };
            });

            angular.forEach(bindings, function (binding) {
                ngModelAttrs[camelize(binding)] = { bound: binding };
            });

            formlyConfigProvider.setType({
                name: 'datepicker',
                template: datepickerTemplate,
                defaultOptions: {
                    ngModelAttrs: ngModelAttrs,
                    templateOptions: {
                        datepickerOptions: {
                            format: 'dd/MM/yyyy',
                            initDate: new Date(),
                            showWeeks: false
                        }
                    }
                },
                wrapper: ['bootstrapLabel', 'bootstrapHasError'],
                controller: ['$scope', function ($scope) {
                    // console.info('ui calendar init');
                    $scope.datepicker = {};

                    // make sure the initial value is of type DATE!
                    var currentModelVal = $scope.model[$scope.options.key];
                    if (typeof currentModelVal == 'string') {
                        $scope.model[$scope.options.key] = new Date(currentModelVal);
                    }

                    $scope.datepicker.opened = false;
                    $scope.datepicker.open = function ($event) {
                        $event.preventDefault();
                        $event.stopPropagation();
                        // console.info('ui calendar open event');
                        $scope.datepicker.opened = !$scope.datepicker.opened;
                    };
                }]

            });

            /**
             * wrappers to show validation errors
             * without having to rewrite formly types
             */
            formlyConfigProvider.setWrapper([{
                template: validationTemplate
            }]);

            function camelize(string) {
                string = string.replace(/[\-_\s]+(.)?/g, function (match, chr) {
                    return chr ? chr.toUpperCase() : '';
                });
                // Ensure 1st char is always lowercase
                return string.replace(/^([A-Z])/, function (match, chr) {
                    return chr ? chr.toLowerCase() : '';
                });
            }
        }

        return {
            setters: [function (_) {
                richTextTemplate = _.richTextTemplate;
                blankTemplate = _.blankTemplate;
                subTitleTemplate = _.subTitleTemplate;
                basicSelectTemplate = _.basicSelectTemplate;
                groupedSelectTemplate = _.groupedSelectTemplate;
                datepickerTemplate = _.datepickerTemplate;
                validationTemplate = _.validationTemplate;
            }],
            execute: function () {
                formlyConfig.$inject = ['formlyConfigProvider'];

                _export('default', formlyConfig);
            }
        };
    });
    $__System.registerDynamic("7", [], true, function($__require, exports, module) {
        ;
        var global = this,
            __define = global.define;
        global.define = undefined;
        module.exports = {
            "SAY_HI": "Hello",
            "EDIT_TAB": "Define Event",
            "PREVIEW_TAB": "Preview",
            "WIZARD_LINES": "lines",
            "WIZARD_LAYOUT": "layout",
            "WIZARD_CONTROLS": "controls",
            "WIZARD_SAVE": "save",
            "PAGER_PREVIOUS": "Previous",
            "PAGER_NEXT": "Next",
            "COMMAND_PANEL": "Options",
            "VISUAL_PANEL": "Visual",
            "ADD_NEW_LINE": "Add a new line",
            "SELECTED_LINE": "Selected line",
            "NUMBER_OF_COLUMN": "number of columns",
            "APPLY_CTRL2COL": "Apply controls to columns",
            "CLIC_TAP_2_OPEN": "Click / Tap on column to open control selection",
            "SELECT_2_APPLY_COL": "Select desired control and valid to apply it to column",
            "CUSTOM_SUBMIT_BTN": "Customize Submit button Text*",
            "CUSTOM_CANCEL_BTN": "Customize Cancel button Text*",
            "NAME_THIS_FORM": "Name this form*",
            "SAVE_THIS_FORM": "save this form",
            "FINAL_STEP": "Final Step : form preview",
            "DATA_MODEL": "DATA MODEL",
            "FIELDS_MODEL": "FIELDS MODEL (ready to save to database one)",
            "SELECT_A_CTRL": "Select a control",
            "SELECT_CTRL_IN_LIST": "Select a control in the list below",
            "COL_WILL_BE_BLANK": "Column will be blank",
            "EDIT_PROPERTIES": "Edit properties",
            "HEADER_TEXT": "Header text",
            "ADD_EDIT_HEADER_HERE": "Add / edit header text here",
            "SUBTITLE_TEXT": "Subtitle text",
            "ADD_EDIT_SUBTIL_HERE": "Add / edit subtitle text here",
            "LABEL_TEXT": "Label text",
            "ADD_EDIT_LABEL_HERE": "Add / edit control label here",
            "PLACEHOLDER": "placeholder",
            "ADD_EDIT_PLACEHOLD": "Add / edit placeholder text here",
            "REQUIRED": "Required",
            "DESCRIPTION": "Description",
            "ADDEDIT_DESCRIPTION": "Add / edit description here",
            "DATE_FORMAT": "Date format",
            "ADD_NEW_RADIO": "Add new radio",
            "ADD_RADIO_PLACEHOLD": "add new radio",
            "EDIT_REMOVE_RADIO": "Edit/Remove radio",
            "NO_RADIO_ADD_NEW": "no radio : add new radio values",
            "SEARCH_4_OPTION": "search for option",
            "ADD": "add",
            "ORDER": "order",
            "OPTION": "option",
            "GROUP": "group",
            "ADD_NEW_OPTIONS": "Add new options",
            "ADD_A_NEW_OPTION": "add new option",
            "EDIT_REMOVE_OPTIONS": "Edit/Remove options",
            "NO_OPTION_ADD_NEW": "no option : add new options",
            "ADD_NEW_GROUPS": "Add new groups",
            "ADD_A_NEW_GROUP": "Add new group",
            "EDIT_GROUPS_OPTIONS": "Edit/Remove options/groups",
            "NO_GROUP_ADD_NEW": "add new groups",
            "OK": "OK",
            "CANCEL": "Cancel"
        };
        global.define = __define;
        return module.exports;
    });

    $__System.registerDynamic("8", [], true, function($__require, exports, module) {
        ;
        var global = this,
            __define = global.define;
        global.define = undefined;
        module.exports = {
            "SAY_HI": "Bonjour",
            "EDIT_TAB": "Edition / Creation",
            "PREVIEW_TAB": "Aperçu",
            "WIZARD_LINES": "lignes",
            "WIZARD_LAYOUT": "disposition",
            "WIZARD_CONTROLS": "contrôles",
            "WIZARD_SAVE": "sauvegarder",
            "PAGER_PREVIOUS": "Précédent",
            "PAGER_NEXT": "Suivant",
            "COMMAND_PANEL": "Commandes",
            "VISUAL_PANEL": "Visuel",
            "ADD_NEW_LINE": "Ajouter une nouvelle ligne",
            "SELECTED_LINE": "Ligne sélectionnée",
            "NUMBER_OF_COLUMN": "nombre de colonnes",
            "APPLY_CTRL2COL": "Appliquer les contrôles aux colonnes",
            "CLIC_TAP_2_OPEN": "Cliquer sur une colonne pour ouvrir le menu d'édition",
            "SELECT_2_APPLY_COL": "Sélectionner un contrôle puis valider pour l'appliquer à la colonne",
            "CUSTOM_SUBMIT_BTN": "Personnaliser le texte du bouton envoie",
            "CUSTOM_CANCEL_BTN": "Personnaliser le texte du bouton annuler",
            "NAME_THIS_FORM": "Nommer le formulaire",
            "SAVE_THIS_FORM": "sauvegarder le formulaire",
            "FINAL_STEP": "Dernière étape : aperçu du formulaire",
            "DATA_MODEL": "MODELE DE DONNEES",
            "FIELDS_MODEL": "MODELE DES CHAMPS (modèle compatible base de données)",
            "SELECT_A_CTRL": "Sélectionner un contrôle",
            "SELECT_CTRL_IN_LIST": "Sélectionner un contrôle dans la liste ci-dessous",
            "COL_WILL_BE_BLANK": "La colonne sera vide",
            "EDIT_PROPERTIES": "Editer les propriétés",
            "HEADER_TEXT": "Texte du titre principal",
            "ADD_EDIT_HEADER_HERE": "Editer le textes du titre principal",
            "SUBTITLE_TEXT": "Texte du sous-titre",
            "ADD_EDIT_SUBTIL_HERE": "Editer le textes du sous-titre",
            "LABEL_TEXT": "Texte de l'étiquette",
            "ADD_EDIT_LABEL_HERE": "Editer le texte de l'étiquette",
            "PLACEHOLDER": "placeholder",
            "ADD_EDIT_PLACEHOLD": "Editer le placeholder",
            "REQUIRED": "Requis",
            "DESCRIPTION": "Description",
            "ADDEDIT_DESCRIPTION": "Ajouter / editer la description",
            "DATE_FORMAT": "Format de la date",
            "ADD_NEW_RADIO": "Ajouter un nouveau choix à cocher",
            "ADD_RADIO_PLACEHOLD": "Ajouter un nouveau choix à cocher",
            "EDIT_REMOVE_RADIO": "Editer / supprimer un choix à cocher",
            "NO_RADIO_ADD_NEW": "aucun choix à cocher : en ajouter un",
            "SEARCH_4_OPTION": "rechercher une option",
            "ADD": "ajouter",
            "ORDER": "ordre",
            "OPTION": "option",
            "GROUP": "groupe",
            "ADD_NEW_OPTIONS": "Ajouter de nouvelles options",
            "ADD_A_NEW_OPTION": "ajoutre une option",
            "EDIT_REMOVE_OPTIONS": "Editer / supprimer des options",
            "NO_OPTION_ADD_NEW": "aucune option : en ajouter",
            "ADD_NEW_GROUPS": "Ajouter de nouveaux groupes",
            "ADD_A_NEW_GROUP": "Ajouter un nouveau groupe",
            "EDIT_GROUPS_OPTIONS": "Editer / supprimer les groupes et options",
            "NO_GROUP_ADD_NEW": "ajouter de nouveaux groupes",
            "OK": "Valider",
            "CANCEL": "Annuler"
        };
        global.define = __define;
        return module.exports;
    });

    $__System.registerDynamic("9", [], true, function($__require, exports, module) {
        ;
        var global = this,
            __define = global.define;
        global.define = undefined;
        module.exports = {
            "SAY_HI": "Hola",
            "EDIT_TAB": "Editar / Crear",
            "PREVIEW_TAB": "Previsualizar",
            "WIZARD_LINES": "lineas",
            "WIZARD_LAYOUT": "diseño",
            "WIZARD_CONTROLS": "controles",
            "WIZARD_SAVE": "guardar",
            "PAGER_PREVIOUS": "Anterior",
            "PAGER_NEXT": "Siguiente",
            "COMMAND_PANEL": "Comando",
            "VISUAL_PANEL": "Visual",
            "ADD_NEW_LINE": "Agregar nueva linea",
            "SELECTED_LINE": "Linea seleccionada",
            "NUMBER_OF_COLUMN": "numero de columnas",
            "APPLY_CTRL2COL": "Aplicar controles a columnas",
            "CLIC_TAP_2_OPEN": "Click / Toque en la columna para seleccionar controles",
            "SELECT_2_APPLY_COL": "Selecciona el control deseado para aplicarlo a la columna",
            "CUSTOM_SUBMIT_BTN": "Personalizar texto de boton Enviar",
            "CUSTOM_CANCEL_BTN": "Personalizar texto de boton Cancelar",
            "NAME_THIS_FORM": "Nombrar formulario",
            "SAVE_THIS_FORM": "guardar formulario",
            "FINAL_STEP": "Ultimo paso : previsualizar formulario",
            "DATA_MODEL": "MODELO DE DATOS",
            "FIELDS_MODEL": "MODELO DE CAMPOS (listo para guardar en base de datos uno)",
            "SELECT_A_CTRL": "Selecciona un control",
            "SELECT_CTRL_IN_LIST": "Selecciona un control de la lista",
            "COL_WILL_BE_BLANK": "Columna sera vacia",
            "EDIT_PROPERTIES": "Editar propiedades",
            "HEADER_TEXT": "Texto de encabezado",
            "ADD_EDIT_HEADER_HERE": "Agregar / editar texto de encabezado aqui",
            "SUBTITLE_TEXT": "Texto de subtitulo",
            "ADD_EDIT_SUBTIL_HERE": "Agregar / editar texto de subtitulo aqui",
            "LABEL_TEXT": "Texto de etiqueta",
            "ADD_EDIT_LABEL_HERE": "Agregar / editar texto de etiqueta aqui",
            "PLACEHOLDER": "Marcador",
            "ADD_EDIT_PLACEHOLD": "Agregar / editar texto de marcador aqui",
            "REQUIRED": "Requerido",
            "DESCRIPTION": "Descripcion",
            "ADDEDIT_DESCRIPTION": "Agregar / editar descripcion aqui",
            "DATE_FORMAT": "Formato de fecha",
            "ADD_NEW_RADIO": "Agregar nuevo radio",
            "ADD_RADIO_PLACEHOLD": "agregar nuevo radio",
            "EDIT_REMOVE_RADIO": "Editar/Eliminar radio",
            "NO_RADIO_ADD_NEW": "sin radio : agregar nuevos valores de radio",
            "SEARCH_4_OPTION": "buscar opcion",
            "ADD": "agregar",
            "ORDER": "orden",
            "OPTION": "opcion",
            "GROUP": "grupo",
            "ADD_NEW_OPTIONS": "agregar nuevas opciones",
            "ADD_A_NEW_OPTION": "agregar nueva opcione",
            "EDIT_REMOVE_OPTIONS": "Editar/Eliminar opciones",
            "NO_OPTION_ADD_NEW": "sin opcion : agregar nuevas opciones",
            "ADD_NEW_GROUPS": "Agregar nuevos grupos",
            "ADD_A_NEW_GROUP": "Agregar nuevo grupo",
            "EDIT_GROUPS_OPTIONS": "Editar/Eliminar opciones/grupos",
            "NO_GROUP_ADD_NEW": "agregar nuevos grupos",
            "OK": "OK",
            "CANCEL": "Cancelar"
        };
        global.define = __define;
        return module.exports;
    });

    $__System.registerDynamic("a", [], true, function($__require, exports, module) {
        ;
        var global = this,
            __define = global.define;
        global.define = undefined;
        module.exports = {
            "SAY_HI": "Hallo",
            "EDIT_TAB": "Bearbeiten / Schaffen",
            "PREVIEW_TAB": "Vorschau",
            "WIZARD_LINES": "Linien",
            "WIZARD_LAYOUT": "Layout",
            "WIZARD_CONTROLS": "Steuerung",
            "WIZARD_SAVE": "sparen",
            "PAGER_PREVIOUS": "vorher.",
            "PAGER_NEXT": "nächste",
            "COMMAND_PANEL": "Anweisung",
            "VISUAL_PANEL": "visuell",
            "ADD_NEW_LINE": "Hinzufügen neuer Leitung",
            "SELECTED_LINE": "ausgewählte Linie",
            "NUMBER_OF_COLUMN": "Anzahl von Spalten",
            "APPLY_CTRL2COL": "gelten diese Steuer Spalte",
            "CLIC_TAP_2_OPEN": "klicken Sie auf Spalte zur Steuerungsauswahl öffnen",
            "SELECT_2_APPLY_COL": "Wählen Sie die gewünschte Steuerung und gültig , um es in Spalte anwenden",
            "CUSTOM_SUBMIT_BTN": "Passen Submit-Button Text",
            "CUSTOM_CANCEL_BTN": "Passen Cancel-Button Text",
            "NAME_THIS_FORM": "Nennen dieses Formular",
            "SAVE_THIS_FORM": "Speichern dieses Formular",
            "FINAL_STEP": "Endschritt : Formular Vorschau",
            "DATA_MODEL": "DATEN MODELL",
            "FIELDS_MODEL": "FELDER MODELL (Datenbank-kompatibel)",
            "SELECT_A_CTRL": "Wählen Sie ein Steuer",
            "SELECT_CTRL_IN_LIST": "Wählen Sie ein Steuer aus der Liste unten",
            "COL_WILL_BE_BLANK": "die Spalte werde leer sein",
            "EDIT_PROPERTIES": "Anzeigen",
            "HEADER_TEXT": "Kopftext",
            "ADD_EDIT_HEADER_HERE": "Kopftext ändern",
            "SUBTITLE_TEXT": "Untertitel",
            "ADD_EDIT_SUBTIL_HERE": "Untertitel ändern",
            "LABEL_TEXT": "Etikett",
            "ADD_EDIT_LABEL_HERE": "Etikett ändern",
            "PLACEHOLDER": "placeholder",
            "ADD_EDIT_PLACEHOLD": "placeholder ändern",
            "REQUIRED": "erforderlich",
            "DESCRIPTION": "Beschreibung",
            "ADDEDIT_DESCRIPTION": "Beschreibung ändern",
            "DATE_FORMAT": "Datumsformat",
            "ADD_NEW_RADIO": "Radiobutton hinzufügen",
            "ADD_RADIO_PLACEHOLD": "Radiobutton hinzufügen",
            "EDIT_REMOVE_RADIO": "Radiobutton ändern",
            "NO_RADIO_ADD_NEW": "kein Radiobutton : Radiobutton hinzufügen",
            "SEARCH_4_OPTION": "option suchen",
            "ADD": "hinzufügen",
            "ORDER": "bestellen",
            "OPTION": "Option",
            "GROUP": "Gruppe",
            "ADD_NEW_OPTIONS": "Optionen hinzufügen",
            "ADD_A_NEW_OPTION": "Option hinzufügen",
            "EDIT_REMOVE_OPTIONS": "Optionen ändern",
            "NO_OPTION_ADD_NEW": "kein option : Option hinzufügen",
            "ADD_NEW_GROUPS": "Gruppen hinzufügen",
            "ADD_A_NEW_GROUP": "Gruppe hinzufügen",
            "EDIT_GROUPS_OPTIONS": "Gruppen ändern",
            "NO_GROUP_ADD_NEW": "keine Gruppe : Gruppe hinzufügen",
            "OK": "bestätigen",
            "CANCEL": "stornieren"
        };
        global.define = __define;
        return module.exports;
    });

    $__System.registerDynamic("b", [], true, function($__require, exports, module) {
        ;
        var global = this,
            __define = global.define;
        global.define = undefined;
        module.exports = {
            "SAY_HI": "Merhaba",
            "EDIT_TAB": "Düzenle / Oluştur",
            "PREVIEW_TAB": "Önizleme",
            "WIZARD_LINES": "satırlar",
            "WIZARD_LAYOUT": "düzen",
            "WIZARD_CONTROLS": "kontroller",
            "WIZARD_SAVE": "kaydet",
            "PAGER_PREVIOUS": "Geri",
            "PAGER_NEXT": "İleri",
            "COMMAND_PANEL": "Komut",
            "VISUAL_PANEL": "Görsel",
            "ADD_NEW_LINE": "Yeni satır ekle",
            "SELECTED_LINE": "Seçili satır",
            "NUMBER_OF_COLUMN": "sütun sayısı",
            "APPLY_CTRL2COL": "Sütunlara form ögesi ekle",
            "CLIC_TAP_2_OPEN": "Form ögesi eklemek için sütunlara tıkla",
            "SELECT_2_APPLY_COL": "İstediğin ögeyi seçtikten sonra gerekli yerleri doldur ve kaydet",
            "CUSTOM_SUBMIT_BTN": "Gönder butonu yazısını düzenle",
            "CUSTOM_CANCEL_BTN": "İptal butonu yazısını düzenle",
            "NAME_THIS_FORM": "Forma isim ver",
            "SAVE_THIS_FORM": "formu kaydet",
            "FINAL_STEP": "Son aşama : form önizlemesi",
            "DATA_MODEL": "VERİ MODELİ",
            "FIELDS_MODEL": "ALAN MODELİ (veritabanına kaydetmeye hazır)",
            "SELECT_A_CTRL": "Form ögesi seç",
            "SELECT_CTRL_IN_LIST": "Verilen listeden bir form ögesi seç",
            "COL_WILL_BE_BLANK": "Sütun boş kalacak",
            "EDIT_PROPERTIES": "Özellikleri düzenle",
            "HEADER_TEXT": "Başlık yazısı",
            "ADD_EDIT_HEADER_HERE": "Başlık yazısını ekle / düzenle",
            "SUBTITLE_TEXT": "Altyazı",
            "ADD_EDIT_SUBTIL_HERE": "Altyazı ekle / düzenle",
            "LABEL_TEXT": "Form ögesinin adı",
            "ADD_EDIT_LABEL_HERE": "Ad ekle / düzenle",
            "PLACEHOLDER": "Form ögesinin içine geçici yazı ekle",
            "ADD_EDIT_PLACEHOLD": "Geçici yazı ekle / düzenle",
            "REQUIRED": "Gerekli",
            "DESCRIPTION": "Açıklama",
            "ADDEDIT_DESCRIPTION": "Açıklama ekle / düzenle",
            "DATE_FORMAT": "Tarih formatı",
            "ADD_NEW_RADIO": "Radio butonu ekle",
            "ADD_RADIO_PLACEHOLD": "radio butonu ekle",
            "EDIT_REMOVE_RADIO": "Radio butonunu ekle / düzenle",
            "NO_RADIO_ADD_NEW": "radio butonu yok : yeni buton ekle",
            "SEARCH_4_OPTION": "seçenek ara",
            "ADD": "ekle",
            "ORDER": "sıra",
            "OPTION": "seçenek",
            "GROUP": "grup",
            "ADD_NEW_OPTIONS": "Yeni seçenek ekle",
            "ADD_A_NEW_OPTION": "yeni seçenek ekle",
            "EDIT_REMOVE_OPTIONS": "Seçenekleri düzenle/sil",
            "NO_OPTION_ADD_NEW": "seçenek yok : yeni seçenek ekle",
            "ADD_NEW_GROUPS": "Yeni grup ekle",
            "ADD_A_NEW_GROUP": "Yeni grup ekle",
            "EDIT_GROUPS_OPTIONS": "Seçenek/Grup Ekle/sil",
            "NO_GROUP_ADD_NEW": "yeni grup ekle",
            "OK": "TAMAM",
            "CANCEL": "İptal"
        };
        global.define = __define;
        return module.exports;
    });

    $__System.registerDynamic("c", [], true, function($__require, exports, module) {
        ;
        var global = this,
            __define = global.define;
        global.define = undefined;
        module.exports = {
            "SAY_HI": "こんにちわ",
            "EDIT_TAB": "編集 / 作成",
            "PREVIEW_TAB": "プレビュー",
            "WIZARD_LINES": "ライン",
            "WIZARD_LAYOUT": "レイアウト",
            "WIZARD_CONTROLS": "コントロール",
            "WIZARD_SAVE": "サーブ",
            "PAGER_PREVIOUS": "前",
            "PAGER_NEXT": "次",
            "COMMAND_PANEL": "コマンド",
            "VISUAL_PANEL": "ビジュアル",
            "ADD_NEW_LINE": "新しいライン追加",
            "SELECTED_LINE": "選択されたライン",
            "NUMBER_OF_COLUMN": "カラムの数",
            "APPLY_CTRL2COL": "カラムにコントロール適用",
            "CLIC_TAP_2_OPEN": "コントロール選択を広げるには列をクリック",
            "SELECT_2_APPLY_COL": "好きなコントロールを選び適用",
            "CUSTOM_SUBMIT_BTN": "適用ボタンの文字変更する場合",
            "CUSTOM_CANCEL_BTN": "キャンセルボタンの文字変更する場合",
            "NAME_THIS_FORM": "形式に名前を付ける",
            "SAVE_THIS_FORM": "形式をサーブ",
            "FINAL_STEP": "ファイナルステップ : プレビュー形式",
            "DATA_MODEL": "データーモデル",
            "FIELDS_MODEL": "モデルフィールド",
            "SELECT_A_CTRL": "コントロールを選び選択",
            "SELECT_CTRL_IN_LIST": "以下のリストからコントロールを選び選択",
            "COL_WILL_BE_BLANK": "空になる列",
            "EDIT_PROPERTIES": "プロパティの変更",
            "HEADER_TEXT": "ヘッダーテキスト",
            "ADD_EDIT_HEADER_HERE": "ヘッダーテキスト文字変更",
            "SUBTITLE_TEXT": "サブタイトル　テキスト",
            "ADD_EDIT_SUBTIL_HERE": "サブタイトルテキスト文字変更",
            "LABEL_TEXT": "ラベルテキスト",
            "ADD_EDIT_LABEL_HERE": "ラベルテキスト文字変更",
            "PLACEHOLDER": "プレースホルダー",
            "ADD_EDIT_PLACEHOLD": "プレースホルダー文字変更",
            "REQUIRED": "必須",
            "DESCRIPTION": "説明",
            "ADDEDIT_DESCRIPTION": "説明の変更",
            "DATE_FORMAT": "日付の形式",
            "ADD_NEW_RADIO": "新ラジオボタンを追加",
            "ADD_RADIO_PLACEHOLD": "新ラジオボタンを追加",
            "EDIT_REMOVE_RADIO": "ラジオボタン変更",
            "NO_RADIO_ADD_NEW": "ラジオ無し : 新ラジオボタン追加",
            "SEARCH_4_OPTION": "オプション検索",
            "ADD": "追加",
            "ORDER": "順番",
            "OPTION": "オプション",
            "GROUP": "グループ",
            "ADD_NEW_OPTIONS": "新しいオプション追加",
            "ADD_A_NEW_OPTION": "新しいオプション追加",
            "EDIT_REMOVE_OPTIONS": "オプションの変更",
            "NO_OPTION_ADD_NEW": "オプション無し : 新しいオプション追加",
            "ADD_NEW_GROUPS": "新しいグループ追加",
            "ADD_A_NEW_GROUP": "新しいグループ追加",
            "EDIT_GROUPS_OPTIONS": "グループを変更",
            "NO_GROUP_ADD_NEW": "グループを追加",
            "OK": "オッケー",
            "CANCEL": "キャンセル"
        };
        global.define = __define;
        return module.exports;
    });

    $__System.register('d', ['7', '8', '9', 'a', 'b', 'c'], function (_export) {
        'use strict';

        var localEn, localFr, localEs, localDe, localTr, localJp, TRANSLATE_CONFIG;

        function translateConfig($translateProvider) {
            $translateProvider.translations('en', localEn);
            $translateProvider.translations('fr', localFr);
            $translateProvider.translations('es', localEs);
            $translateProvider.translations('de', localDe);
            $translateProvider.translations('tr', localTr);
            $translateProvider.translations('jp', localJp);
        }

        return {
            setters: [function (_) {
                localEn = _['default'];
            }, function (_2) {
                localFr = _2['default'];
            }, function (_3) {
                localEs = _3['default'];
            }, function (_a) {
                localDe = _a['default'];
            }, function (_b) {
                localTr = _b['default'];
            }, function (_c) {
                localJp = _c['default'];
            }],
            execute: function () {
                TRANSLATE_CONFIG = 'easyFormTranslateConfig';
                translateConfig.$inject = ['$translateProvider'];

                _export('default', translateConfig);

                _export('TRANSLATE_CONFIG', TRANSLATE_CONFIG);
            }
        };
    });
    $__System.register('e', ['d'], function (_export) {
        /* global angular */
        'use strict';

        var translateConfig, TRANSLATE_CONFIG, TRANSLATE_MODULE;
        return {
            setters: [function (_d) {
                translateConfig = _d['default'];
                TRANSLATE_CONFIG = _d.TRANSLATE_CONFIG;
            }],
            execute: function () {
                TRANSLATE_MODULE = 'eda.easyFormGenerator.translate';

                _export('default', angular.module(TRANSLATE_MODULE, []).config(translateConfig));
            }
        };
    });
    $__System.register('f', [], function (_export) {
        /* global angular */
        'use strict';

        var CORE_MODULES;
        return {
            setters: [],
            execute: function () {
                CORE_MODULES = ['textAngular', 'textAngularSetup', 'ngAnimate', 'toaster', 'formly', 'formlyBootstrap', 'ui.bootstrap', 'nya.bootstrap.select', 'pascalprecht.translate'];

                _export('default', angular.module('edaStepWayEasyFormGen.core', CORE_MODULES));
            }
        };
    });
    $__System.registerDynamic("10", [], true, function($__require, exports, module) {
        ;
        var global = this,
            __define = global.define;
        global.define = undefined;
        module.exports = "<section id=\"pageWfEdit\">\n\t<div ng-init=\"\">\n\t\t<div class=\"container\">\n\t\t\t<section id=\"preview\">\n\t\t\t\t<div id=\"preview-content\">\n\t\t\t\t\t<div class=\"content-container\">\n\t\t\t\t\t\t<!-- taoster alert -->\n\t\t\t\t\t\t<toaster-container  toaster-options=\"{\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t'position-class': 'toast-top-full-width',\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t'extendedTimeout':500,\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t'timeOut':500,\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\">\n\t\t\t\t\t\t</toaster-container>\n\t\t\t\t\t\t<uib-tabset justified=\"true\">\n\t\t\t\t\t\t\t<uib-tab active=\"vm.tab.editTab.active\" heading=\"{{'EDIT_TAB' | translate}}\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<!-- STEP INDICATOR -->\n\t\t\t\t\t\t\t\t<div class=\"row stepwizardTopmargin\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"stepwizard\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row stepwizard-row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"stepwizard-step col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-circle\" ng-class=\"{'btn-primary': vm.configuration.stepIndicators[0], 'btn-default': !vm.configuration.stepIndicators[0]}\" >1</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>{{'WIZARD_LINES' | translate}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"stepwizard-step col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-circle\" ng-class=\"{'btn-primary': vm.configuration.stepIndicators[1], 'btn-default': !vm.configuration.stepIndicators[1], 'disabled': (vm.configuration.configStepCounter < 1)}\"  >2</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>{{'WIZARD_LAYOUT' | translate}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"stepwizard-step col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default btn-circle\" ng-class=\"{'btn-primary': vm.configuration.stepIndicators[2], 'btn-default': !vm.configuration.stepIndicators[2], 'disabled': (vm.configuration.configStepCounter < 2)}\" >3</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>{{'WIZARD_CONTROLS' | translate}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"stepwizard-step col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default btn-circle\" ng-class=\"{'btn-primary': vm.configuration.stepIndicators[3], 'btn-default': !vm.configuration.stepIndicators[3], 'disabled': (vm.configuration.configStepCounter < 3)}\" >4</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>{{'WIZARD_SAVE' | translate}}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<ul class=\"pager\">\n\t\t\t\t\t\t\t\t\t<li ng-class=\"{'disabled':vm.stepIndicators[0]}\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary customPagerButton\" ng-click=\"vm.previousConfigStep()\" >\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-arrow-left fa-2x pull-left\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"pull-right\">{{'PAGER_PREVIOUS' | translate}}</span>\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li ng-class=\"{'disabled':vm.stepIndicators[3]}\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary customPagerButton\" ng-click=\"vm.nextConfigStep()\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"pull-left\">{{'PAGER_NEXT' | translate}}</span>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-arrow-right fa-2x pull-right\"></i>\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t<div class=\"animate-switch-container\" ng-switch on=\"vm.configuration.listConfigStep[vm.configuration.configStepCounter]\">\n\t\t\t\t\t\t\t\t\t<div class=\"animate-switch\" ng-switch-when=\"init\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"commandPanel\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div  class=\"panel panel-default\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\"><i class=\"fa fa-keyboard-o\"></i>&nbsp;{{'COMMAND_PANEL' | translate}}</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"addNewLine\">{{'ADD_NEW_LINE' | translate}} :</span>&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\" ng-click=\"vm.addNewline()\"><i class=\"fa fa-plus fa-1x\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"visualPanel\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div  class=\"panel panel-default\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\"><i class=\"fa fa-eye\"></i>&nbsp;{{'VISUAL_PANEL' | translate}}</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- lines -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"list-group-item\" ng-repeat=\"line in vm.configuration.lines track by $index\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- columns -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div ng-switch on=\"line.columns.length\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row linesList\" ng-switch-when=\"1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 lineCommandButtons\" ng-show=\"vm.configuration.lines.length > 1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-warning\" ng-hide=\"$index==0\" ng-click=\"vm.upThisLine($index)\"><i class=\"fa fa-arrow-up\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-warning\" ng-hide=\"$index==(vm.configuration.lines.length-1)\" ng-click=\"vm.downThisLine($index)\"><i class=\"fa fa-arrow-down\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-danger pull-right\" ng-click=\"vm.removeThisLine($index)\"><i class=\"fa fa-trash-o\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 well\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-lg btn-block  btn-default disabled\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{line.columns[0].control.type !== 'none'  ? line.columns[0].control.templateOptions.label : 'column 1'}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row linesList\" ng-switch-when=\"2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 lineCommandButtons\" ng-show=\"vm.configuration.lines.length > 1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-warning\" ng-hide=\"$index==0\" ng-click=\"vm.upThisLine($index)\"><i class=\"fa fa-arrow-up\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-warning\" ng-hide=\"$index==(vm.configuration.lines.length-1)\" ng-click=\"vm.downThisLine($index)\"><i class=\"fa fa-arrow-down\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-danger pull-right\" ng-click=\"vm.removeThisLine($index)\"><i class=\"fa fa-trash-o\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 well\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-lg btn-block  btn-default disabled\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{line.columns[0].control.type !== 'none'  ? line.columns[0].control.templateOptions.label || '' : 'column 1'}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 well\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-lg btn-block  btn-default disabled\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{line.columns[1].control.type !== 'none'  ? line.columns[1].control.templateOptions.label : 'column 2'}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row linesList\" ng-switch-when=\"3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 lineCommandButtons\" ng-show=\"vm.configuration.lines.length > 1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-warning\" ng-hide=\"$index==0\" ng-click=\"vm.upThisLine($index)\"><i class=\"fa fa-arrow-up\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-warning\" ng-hide=\"$index==(vm.configuration.lines.length-1)\" ng-click=\"vm.downThisLine($index)\"><i class=\"fa fa-arrow-down\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-danger pull-right\" ng-click=\"vm.removeThisLine($index)\"><i class=\"fa fa-trash-o\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 well\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-lg btn-block  btn-default disabled\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{line.columns[0].control.type !== 'none'  ? line.columns[0].control.templateOptions.label || '' : 'column 1'}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 well\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-lg btn-block  btn-default disabled\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{line.columns[1].control.type !== 'none'  ? line.columns[1].control.templateOptions.label || '' : 'column 2'}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 well\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-lg btn-block  btn-default disabled\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{line.columns[2].control.type !== 'none'  ? line.columns[2].control.templateOptions.label : 'column 3'}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"animate-switch\" ng-switch-when=\"first\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t<div id=\"commandPanel\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div  class=\"panel panel-default\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\"><i class=\"fa fa-keyboard-o\"></i>&nbsp;{{'COMMAND_PANEL' | translate}}</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"numberOfcolumsText text-center\"><i>- {{'SELECTED_LINE' | translate}} -</i></h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"numberOfcolumsText text-center\">{{'NUMBER_OF_COLUMN' | translate}} :</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-2 col-xs-offset-3 col-sm-2 col-sm-offset-3 col-md-2 col-md-offset-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary pull-right btnMinusColumns\" ng-click=\"vm.decreaseNumberOfColumns()\"><i class=\"fa fa-minus fa-1x\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-2 col-sm-2 col-md-2 text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"numberOfColumnsLabel \">{{vm.configuration.lines[vm.configuration.activeLine -1].columns.length}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-2 col-sm-2 col-md-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary pull-left btnAddColumns\" ng-click=\"vm.increaseNumberOfColumns()\"><i class=\"fa fa-plus fa-1x\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"visualPanel\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div  class=\"panel panel-default\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\"><i class=\"fa fa-eye\"></i>&nbsp;{{'VISUAL_PANEL' | translate}}</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- lines / columns -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"list-group-item\" ng-repeat=\"line in vm.configuration.lines track by $index\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- columns -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div ng-switch on=\"line.columns.length\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row linesList\" ng-switch-when=\"1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 lineCommandButtons\" ng-show=\"vm.configuration.lines.length > 1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn\" ng-class=\"{'btn-warning':($index + 1) !== vm.configuration.activeLine, 'btn-success': ($index + 1) === vm.configuration.activeLine}\" ng-click=\"vm.setActiveLineNumber($index + 1)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa\"  ng-class=\"{'fa-square-o': ($index + 1) !== vm.configuration.activeLine, 'fa-check-square-o': ($index + 1) === vm.configuration.activeLine}\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 well\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-lg btn-block  btn-default disabled\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{line.columns[0].control.type !== 'none'  ? line.columns[0].control.templateOptions.label : 'column 1'}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row linesList\" ng-switch-when=\"2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 lineCommandButtons\" ng-show=\"vm.configuration.lines.length > 1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn\" ng-class=\"{'btn-warning':($index + 1) !== vm.configuration.activeLine, 'btn-success': ($index + 1) === vm.configuration.activeLine}\" ng-click=\"vm.setActiveLineNumber($index + 1)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa\"  ng-class=\"{'fa-square-o': ($index + 1) !== vm.configuration.activeLine, 'fa-check-square-o': ($index + 1) === vm.configuration.activeLine}\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 well\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-lg btn-block  btn-default disabled\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{line.columns[0].control.type !== 'none'  ? line.columns[0].control.templateOptions.label : 'column 1'}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 well\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-lg btn-block  btn-default disabled\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{line.columns[1].control.type !== 'none'  ? line.columns[1].control.templateOptions.label : 'column 2'}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row linesList\" ng-switch-when=\"3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 lineCommandButtons\" ng-show=\"vm.configuration.lines.length > 1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn\" ng-class=\"{'btn-warning':($index + 1) !== vm.configuration.activeLine, 'btn-success': ($index + 1) === vm.configuration.activeLine}\" ng-click=\"vm.setActiveLineNumber($index + 1)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa\"  ng-class=\"{'fa-square-o': ($index + 1) !== vm.configuration.activeLine, 'fa-check-square-o': ($index + 1) === vm.configuration.activeLine}\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 well\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-lg btn-block  btn-default disabled\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{line.columns[0].control.type !== 'none'  ? line.columns[0].control.templateOptions.label : 'column 1'}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 well\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-lg btn-block  btn-default disabled\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{line.columns[1].control.type !== 'none'  ? line.columns[1].control.templateOptions.label : 'column 2'}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 well\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-lg btn-block  btn-default disabled\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{line.columns[2].control.type !== 'none'  ? line.columns[2].control.templateOptions.label : 'column 3'}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"animate-switch\" ng-switch-when=\"second\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"commandPanel\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div  class=\"panel panel-default\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\"><i class=\"fa fa-keyboard-o\"></i>&nbsp;{{'COMMAND_PANEL' | translate}}</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"numberOfcolumsText text-center\">- {{'APPLY_CTRL2COL' | translate}} -</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-12\" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<hr/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<blockquote>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"numberOfcolumsText\"><i class=\"fa fa-minus\"></i>&nbsp; {{'CLIC_TAP_2_OPEN' | translate}}.</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"numberOfcolumsText\"><i class=\"fa fa-minus\"></i>&nbsp; {{'SELECT_2_APPLY_COL' | translate}}.</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</blockquote>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"visualPanel\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div  class=\"panel panel-default\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\"><i class=\"fa fa-eye\"></i>&nbsp;{{'VISUAL_PANEL' | translate}}</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- lines / columns -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"list-group-item\" ng-repeat=\"line in vm.configuration.lines track by $index\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- columns -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div ng-switch on=\"line.columns.length\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row linesList\" ng-switch-when=\"1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 lineCommandButtons\" ng-show=\"vm.configuration.lines.length > 1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn\" ng-class=\"{'btn-warning':($index + 1) !== vm.configuration.activeLine, 'btn-success': ($index + 1) === vm.configuration.activeLine}\" ng-click=\"vm.setActiveLineNumber($index + 1)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa\"  ng-class=\"{'fa-square-o': ($index + 1) !== vm.configuration.activeLine, 'fa-check-square-o': ($index + 1) === vm.configuration.activeLine}\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 well\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-lg btn-block\" ng-class=\"{'btn-primary': !line.columns[0].control.edited, 'btn-success': line.columns[0].control.edited}\" ng-click=\"vm.showModalAddCtrlToColumn('', $index, 0)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{line.columns[0].control.type !== 'none'  ? line.columns[0].control.templateOptions.label : 'column 1'}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row linesList\" ng-switch-when=\"2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 lineCommandButtons\" ng-show=\"vm.configuration.lines.length > 1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn\" ng-class=\"{'btn-warning':($index + 1) !== vm.configuration.activeLine, 'btn-success': ($index + 1) === vm.configuration.activeLine}\" ng-click=\"vm.setActiveLineNumber($index + 1)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa\"  ng-class=\"{'fa-square-o': ($index + 1) !== vm.configuration.activeLine, 'fa-check-square-o': ($index + 1) === vm.configuration.activeLine}\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 well\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-lg btn-block\" ng-class=\"{'btn-primary': !line.columns[0].control.edited, 'btn-success': line.columns[0].control.edited}\" ng-click=\"vm.showModalAddCtrlToColumn('', $index, 0)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{line.columns[0].control.type !== 'none'  ? line.columns[0].control.templateOptions.label : 'column 1'}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 well\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-lg btn-block\" ng-class=\"{'btn-primary': !line.columns[1].control.edited, 'btn-success': line.columns[1].control.edited}\" ng-click=\"vm.showModalAddCtrlToColumn('', $index, 1)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{line.columns[1].control.type !== 'none'  ? line.columns[1].control.templateOptions.label : 'column 2'}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row linesList\" ng-switch-when=\"3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 lineCommandButtons\" ng-show=\"vm.configuration.lines.length > 1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn\" ng-class=\"{'btn-warning':($index + 1) !== vm.configuration.activeLine, 'btn-success': ($index + 1) === vm.configuration.activeLine}\" ng-click=\"vm.setActiveLineNumber($index + 1)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa\"  ng-class=\"{'fa-square-o': ($index + 1) !== vm.configuration.activeLine, 'fa-check-square-o': ($index + 1) === vm.configuration.activeLine}\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 well\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-lg btn-block\" ng-class=\"{'btn-primary': !line.columns[0].control.edited, 'btn-success': line.columns[0].control.edited}\" ng-click=\"vm.showModalAddCtrlToColumn('', $index, 0)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{line.columns[0].control.type !== 'none'  ? line.columns[0].control.templateOptions.label : 'column 1'}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 well\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-lg btn-block\" ng-class=\"{'btn-primary': !line.columns[1].control.edited, 'btn-success': line.columns[1].control.edited}\" ng-click=\"vm.showModalAddCtrlToColumn('', $index, 1)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{line.columns[1].control.type !== 'none'  ? line.columns[1].control.templateOptions.label : 'column 2'}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4 well\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-lg btn-block\" ng-class=\"{'btn-primary': !line.columns[2].control.edited, 'btn-success': line.columns[2].control.edited}\" ng-click=\"vm.showModalAddCtrlToColumn('', $index, 2)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{line.columns[2].control.type !== 'none'  ? line.columns[2].control.templateOptions.label : 'column 3'}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"animate-switch\" ng-switch-when=\"third\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"commandPanel\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div  class=\"panel panel-default\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\"><i class=\"fa fa-keyboard-o\"></i>&nbsp;{{'COMMAND_PANEL' | translate}}</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"inputSubmitButtontext\" class=\" greyText control-label\">{{'CUSTOM_SUBMIT_BTN' | translate}} :</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"inputSubmitButtontext\" placeholder=\"\" ng-model=\"vm.configuration.submitButtonText\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<hr/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"inputCancelButtontext\" class=\" greyText control-label\">{{'CUSTOM_CANCEL_BTN' | translate}} :</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"inputCancelButtontext\" placeholder=\"\" ng-model=\"vm.configuration.cancelButtonText\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<hr/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"inputNameFormtext\" class=\" greyText control-label\">{{'NAME_THIS_FORM' | translate}} :</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"inputNameFormtext\" placeholder=\"\" ng-model=\"vm.configuration.formName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-block btn-lg\" ng-click=\"vm.saveThisForm()\">{{'SAVE_THIS_FORM' | translate}}</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"visualPanel\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div  class=\"panel panel-default\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\"><i class=\"fa fa-thumbs-o-up\"></i>&nbsp;{{'FINAL_STEP' | translate}}</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<form ng-submit=\"vm.onSubmit()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<formly-form id=\"saveFormlyFom\" model=\"vm.dataModel\" fields=\"vm.wfFormFields\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"pull-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\" type=\"submit\">{{vm.configuration.submitButtonText}}</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\" type=\"cancel\">{{vm.configuration.cancelButtonText}}</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</formly-form>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</uib-tab>\n\n\t\t\t\t\t\t\t<uib-tab active=\"vm.tab.previewTab.active\" ng-if=\"vm.tab.previewTab.tabVisible\" heading=\"{{'PREVIEW_TAB' | translate}}\">\n\t\t\t\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t<!-- formly here -->\n\t\t\t\t\t\t\t\t\t<form ng-submit=\"vm.onSubmit()\">\n\t\t\t\t\t\t\t\t\t\t<formly-form id=\"previewFormlyForm\" model=\"vm.dataModel\" fields=\"vm.wfFormFields\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"pull-right\">\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\" type=\"submit\">{{vm.configuration.submitButtonText}}</button>\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\" type=\"cancel\">{{vm.configuration.cancelButtonText}}</button>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</formly-form>\n\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div ng-if=\"vm.tab.previewTab.modelsVisible\" class=\"panel panel-default\">\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t<p>{{'DATA_MODEL' | translate}}</p>\n\t\t\t\t\t\t\t\t\t<pre>\n\t\t\t\t\t\t\t\t\t\t{{vm.dataModel | json}}\n\t\t\t\t\t\t\t\t\t</pre>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div ng-if=\"vm.tab.previewTab.modelsVisible\" class=\"panel panel-default\">\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t<p>{{'FIELDS_MODEL' | translate}}</p>\n\t\t\t\t\t\t\t\t\t<pre>\n\t\t\t\t\t\t\t\t\t\t{{vm.wfFormFieldsOnlyNeededProperties | json}}\n\t\t\t\t\t\t\t\t\t</pre>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</uib-tab>\n\t\t\t\t\t\t</uib-tabset>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</section>\n\t\t\t<hr/>\n\t\t\t<!--<section>\n\t\t\t\t<h6 class=\"text-right\">Easy form generator : {{vm.easyFormGeneratorVERSION}} — Erwan DATIN (MacKentoch)</h6>\n\t\t\t</section>-->\n\t\t</div>\n\t</div>\n</section>\n";
        global.define = __define;
        return module.exports;
    });

    $__System.register('11', [], function (_export) {
        /* global angular */
        'use strict';

        var DEBUG_MODEL, initDebugModel, DEFAULT_TAB_MODEL, initTabModel, COLUMN_TEMPLATE, initColumnTemplate, LINE_TEMPLATE, initLineTemplate;
        return {
            setters: [],
            execute: function () {
                DEBUG_MODEL = {
                    showDebug: false,
                    configurationModelNumberofLines: 1
                };

                initDebugModel = function initDebugModel() {
                    return angular.copy(DEBUG_MODEL);
                };

                DEFAULT_TAB_MODEL = {
                    editTab: {
                        active: true
                    },
                    previewTab: {
                        active: false,
                        tabVisible: true,
                        modelsVisible: true
                    }
                };

                initTabModel = function initTabModel(isPreviewPanelVisible, arePreviewModelsVisible) {
                    var _tabModel = angular.copy(DEFAULT_TAB_MODEL);
                    angular.extend(_tabModel.previewTab, {
                        tabVisible: isPreviewPanelVisible,
                        modelsVisible: arePreviewModelsVisible
                    });
                    return _tabModel;
                };

                COLUMN_TEMPLATE = {
                    numColumn: -1,
                    exist: true,
                    control: {
                        type: 'none',
                        key: 'none',
                        subtype: 'none'
                        // templateOptions: {
                        //                     label: 'none',
                        //                     placeholder: 'none',
                        //                     required: false,
                        //                     description: 'Descriptive text'
                        //                   }
                    }
                };

                initColumnTemplate = function initColumnTemplate() {
                    return angular.copy(COLUMN_TEMPLATE);
                };

                LINE_TEMPLATE = {
                    line: -1,
                    activeColumn: 1,
                    columns: [{
                        numColumn: 1,
                        exist: true,
                        control: {
                            type: 'none',
                            key: 'none'
                            // templateOptions: {
                            //                     label: 'none',
                            //                     placeholder: 'none',
                            //                     required: false,
                            //                     description: 'Descriptive text'
                            //                   }
                        }
                    }]
                };

                initLineTemplate = function initLineTemplate() {
                    return angular.copy(LINE_TEMPLATE);
                };

                _export('initDebugModel', initDebugModel);

                _export('initTabModel', initTabModel);

                _export('initColumnTemplate', initColumnTemplate);

                _export('initLineTemplate', initLineTemplate);
            }
        };
    });
    $__System.registerDynamic("12", [], true, function($__require, exports, module) {
        ;
        var global = this,
            __define = global.define;
        global.define = undefined;
        module.exports = "<div class=\"modal-header\">\n  <h3 class=\"modal-title greyText\">\n    {{'SELECT_A_CTRL' | translate}}\n  </h3>\n</div>\n<div class=\"modal-body\">\n  <hr/>\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n      <h5 class=\"greyText\">\n        <i class=\"fa fa-filter\"></i>\n        &nbsp;\n        {{'SELECT_CTRL_IN_LIST' | translate}} :\n      </h5>\n    </div>\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n      <ol\n        class=\"nya-bs-select col-xs-12 col-sm-12 col-md-12 col-lg-12\"\n        ng-model=\"editControlModCtrl.modelNyaSelect\"\n        data-live-search=\"false\">\n        <li nya-bs-option=\"option in editControlModCtrl.nyaSelectFiltered.controls group by option.group\">\n          <span class=\"dropdown-header greyText\">\n            {{$group}}\n          </span> <!-- group header cannot be searched -->\n          <a ng-click=\"editControlModCtrl.selectThisControl(option.id)\">\n            <span>\n              {{ option.name }}\n            </span>\n            <span class=\"glyphicon glyphicon-ok check-mark\"></span>\n          </a>\n        </li>\n      </ol>\n    </div>\n  </div>\n  <hr/>\n  <div ng-switch on=\"editControlModCtrl.nyaSelect.selectedControl\">\n    <!--no control selected-->\n    <div ng-switch-when=\"none\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <h5 class=\"text-center texteRouge\">\n            <i class=\"fa fa-arrow-up\"></i>\n            &nbsp; {{'SELECT_A_CTRL' | translate}}\n          </h5>\n        </div>\n      </div>\n    </div>\n    <!--empty (or blank) control -->\n    <div ng-switch-when=\"empty\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h5 class=\"greyText\">\n                <i class=\"fa fa-eye\"></i>\n                &nbsp;\n                {{'PREVIEW_TAB' | translate}} :\n              </h5>\n            </div>\n          </div>\n          <hr/>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <h5 class=\"text-center greyText\">\n                {{'COL_WILL_BE_BLANK' | translate}}\n              </h5>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--header-->\n    <div ng-switch-when=\"Header\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h5 class=\"greyText\"><i class=\"fa fa-eye\"></i>\n                &nbsp;\n                {{'PREVIEW_TAB' | translate}} :\n              </h5>\n            </div>\n          </div>\n          <hr/>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <div class=\"\">\n                  <h2 class=\"text-center\">\n                    {{editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption}}\n                  </h2>\n                  <hr/>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h5 class=\"greyText\">\n                <i class=\"fa fa-pencil-square-o\"></i>\n                &nbsp;\n                {{'EDIT_PROPERTIES' | translate}} :\n                </h5>\n            </div>\n          </div>\n          <hr/>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextDescriptionUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'HEADER_TEXT' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption\"\n                  id=\"inputHeaderTextUpdate\"\n                  placeholder=\"{{'ADD_EDIT_HEADER_HERE' | translate}}\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--Subtitle-->\n    <div ng-switch-when=\"Subtitle\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          <div class=\"row\">\n              <div class=\"col-md-12\">\n                  <h5\n                    class=\"greyText\">\n                    <i class=\"fa fa-eye\"></i>\n                    &nbsp;\n                    {{'PREVIEW_TAB' | translate}} :\n                  </h5>\n              </div>\n          </div>\n          <hr/>\n          <div class=\"row\">\n              <div class=\"col-md-12\">\n                  <div class=\"form-group\">\n                    <div class=\"\">\n                      <h4 class=\"text-center\">\n                        {{editControlModCtrl.nyaSelect.temporyConfig.formlyPlaceholder}}\n                      </h4>\n                      <hr/>\n                    </div>\n                  </div>\n              </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h5\n                class=\"greyText\">\n                <i class=\"fa fa-pencil-square-o\"></i>\n                &nbsp;\n                {{'EDIT_PROPERTIES' | translate}} :\n              </h5>\n            </div>\n          </div>\n          <hr/>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputSubTitleTextUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'SUBTITLE_TEXT' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyPlaceholder\"\n                  id=\"inputSubTitleTextUpdate\"\n                  placeholder=\"{{'ADD_EDIT_SUBTIL_HERE' | translate}}\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- TextInput -->\n    <div ng-switch-when=\"TextInput\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h5 class=\"greyText\">\n                <i class=\"fa fa-eye\"></i>\n                &nbsp;\n                {{'PREVIEW_TAB' | translate}} :\n              </h5>\n            </div>\n          </div>\n          <hr/>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label\n                  for=\"inputText\"\n                  class=\"control-label textControlLabel\">\n                  {{editControlModCtrl.nyaSelect.temporyConfig.formlyLabel}}\n                  <span\n                    ng-if=\"editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\"\n                    class=\"textControlLabel\">\n                    *\n                  </span>\n                </label>\n                <div class=\"\">\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"inputText\"\n                    placeholder=\"{{editControlModCtrl.nyaSelect.temporyConfig.formlyPlaceholder}}\">\n                  <p class=\"help-block\">\n                  {{editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption}}\n                  </p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h5 class=\"greyText\">\n                <i class=\"fa fa-pencil-square-o\"></i>\n                &nbsp;\n                {{'EDIT_PROPERTIES' | translate}} :\n              </h5>\n            </div>\n          </div>\n          <hr/>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextLabelUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'LABEL_TEXT' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyLabel\"\n                  id=\"inputTextLabelUpdate\"\n                  placeholder=\"{{'ADD_EDIT_LABEL_HERE' | translate}}\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextplaceholderUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'PLACEHOLDER' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyPlaceholder\"\n                  id=\"inputTextplaceholderUpdate\"\n                  placeholder=\"{{'ADD_EDIT_PLACEHOLD' | translate}}\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextRequiredUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'REQUIRED' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <div class=\"checkboxCssCorrection\">&nbsp;</div>\n                <input\n                  type=\"checkbox\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\"\n                  id=\"inputTextRequiredUpdate\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextDescriptionUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'DESCRIPTION' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption\"\n                  id=\"inputTextDescriptionUpdate\"\n                  placeholder=\"{{'ADDEDIT_DESCRIPTION' | translate}}\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- password -->\n    <div ng-switch-when=\"Password\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h5 class=\"greyText\">\n                <i class=\"fa fa-eye\"></i>\n                &nbsp;\n                {{'PREVIEW_TAB' | translate}} :\n              </h5>\n            </div>\n          </div>\n          <hr/>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label\n                  for=\"inputPassword\"\n                  class=\"control-label textControlLabel\">\n                  {{editControlModCtrl.nyaSelect.temporyConfig.formlyLabel}}\n                  <span\n                    ng-if=\"editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\"\n                    class=\"textControlLabel\">\n                    *\n                  </span>\n                </label>\n                <div class=\"\">\n                  <input\n                    type=\"password\"\n                    class=\"form-control\"\n                    id=\"inputPassword\"\n                    placeholder=\"{{editControlModCtrl.nyaSelect.temporyConfig.formlyPlaceholder}}\">\n                  <p class=\"help-block\">\n                    {{editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption}}\n                  </p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n                <h5 class=\"greyText\">\n                  <i class=\"fa fa-pencil-square-o\"></i>\n                  &nbsp;\n                  {{'EDIT_PROPERTIES' | translate}} :\n                </h5>\n            </div>\n          </div>\n          <hr/>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextLabelUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'LABEL_TEXT' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyLabel\"\n                  id=\"inputTextLabelUpdate\"\n                  placeholder=\"{{'ADD_EDIT_LABEL_HERE' | translate}}\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextplaceholderUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'PLACEHOLDER' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyPlaceholder\"\n                  id=\"inputTextplaceholderUpdate\"\n                  placeholder=\"{{'ADD_EDIT_PLACEHOLD' | translate}}\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextRequiredUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'REQUIRED' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <div class=\"checkboxCssCorrection\">\n                  &nbsp;\n                </div>\n                <input\n                  type=\"checkbox\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\"\n                  id=\"inputTextRequiredUpdate\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextDescriptionUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'DESCRIPTION' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption\"\n                  id=\"inputTextDescriptionUpdate\"\n                  placeholder=\"{{'ADDEDIT_DESCRIPTION' | translate}}\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div ng-switch-when=\"Email\">\n      <!-- password -->\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h5 class=\"greyText\">\n                <i class=\"fa fa-eye\"></i>\n                &nbsp;\n                {{'PREVIEW_TAB' | translate}} :\n              </h5>\n            </div>\n          </div>\n          <hr/>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label\n                  for=\"inputEmail\"\n                  class=\"control-label textControlLabel\">\n                  {{editControlModCtrl.nyaSelect.temporyConfig.formlyLabel}}\n                  <span\n                    ng-if=\"editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\"\n                    class=\"textControlLabel\">\n                    *\n                  </span>\n                </label>\n                <div class=\"\">\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"inputEmail\"\n                    placeholder=\"{{editControlModCtrl.nyaSelect.temporyConfig.formlyPlaceholder}}\">\n                  <p class=\"help-block\">\n                    {{editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption}}\n                  </p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h5 class=\"greyText\">\n                <i class=\"fa fa-pencil-square-o\"></i>\n                &nbsp;\n                {{'EDIT_PROPERTIES' | translate}} :\n              </h5>\n            </div>\n          </div>\n          <hr/>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextLabelUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'LABEL_TEXT' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyLabel\"\n                  id=\"inputTextLabelUpdate\"\n                  placeholder=\"{{'ADD_EDIT_LABEL_HERE' | translate}}\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextplaceholderUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'PLACEHOLDER' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyPlaceholder\"\n                  id=\"inputTextplaceholderUpdate\"\n                  placeholder=\"{{'ADD_EDIT_PLACEHOLD' | translate}}\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextRequiredUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'REQUIRED' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <div class=\"checkboxCssCorrection\">\n                  &nbsp;\n                </div>\n                <input\n                  type=\"checkbox\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\"\n                  id=\"inputTextRequiredUpdate\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextDescriptionUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'DESCRIPTION' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption\"\n                  id=\"inputTextDescriptionUpdate\"\n                  placeholder=\"{{'ADDEDIT_DESCRIPTION' | translate}}\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div ng-switch-when=\"Date\">\n      <!-- datetimepicker (input type date not ok in all browsers) -->\n      <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h5 class=\"greyText\">\n                <i class=\"fa fa-eye\"></i>\n                &nbsp;\n                {{'PREVIEW_TAB' | translate}} :\n              </h5>\n            </div>\n          </div>\n          <hr/>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputDate\"\n                class=\"control-label textControlLabel\">\n                {{editControlModCtrl.nyaSelect.temporyConfig.formlyLabel}}\n                <span\n                  ng-if=\"editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\"\n                  class=\"textControlLabel\">\n                  *\n                </span>\n              </label>\n            <div class=\"\">\n              <div class=\"input-group\" >\n                <span class=\"input-group-addon\">\n                  <i class=\"glyphicon glyphicon-calendar\"></i>\n                </span>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  uib-datepicker-popup=\"{{editControlModCtrl.nyaSelect.temporyConfig.datepickerOptions.format}}\"\n                  ng-model=\"editControlModCtrl.demodt.dt\"\n                  is-open=\"editControlModCtrl.demodt.opened\"\n                  datepicker-options=\"editControlModCtrl.dateOptions\"\n                  close-text=\"Close\"\n                  ng-click=\"editControlModCtrl.open($event)\"\n                />\n              </div>\n              <p class=\"help-block\">\n                {{editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption}}\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"panel panel-default\">\n    <div class=\"panel-body\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <h5 class=\"greyText\">\n            <i class=\"fa fa-pencil-square-o\"></i>\n            &nbsp;\n            {{'EDIT_PROPERTIES' | translate}} :\n          </h5>\n        </div>\n      </div>\n      <hr/>\n      <div class=\"row\">\n        <div class=\"form-group\">\n          <label class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n            {{'DATE_FORMAT' | translate}} :\n          </label>\n          <div class=\"col-lg-9\">\n            <ol\n              class=\"nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg12\"\n              ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.datepickerOptions.format\"\n              id=\"dateformatSelect\">\n              <li\n                class=\"nya-bs-option\"\n                nya-bs-option=\"dateformat in editControlModCtrl.demodt.formats\"\n                value=\"dateformat\">\n                <a>\n                  {{dateformat}}\n                </a>\n              </li>\n            </ol>\n          </div>\n        </div>\n      </div>\n      <div class=\"marginTopFivepixels\"></div>\n        <div class=\"row\">\n          <div class=\"form-group\">\n            <label\n              for=\"inputTextLabelUpdate\"\n              class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n              {{'LABEL_TEXT' | translate}} :\n            </label>\n            <div class=\"col-lg-9\">\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyLabel\"\n                id=\"inputTextLabelUpdate\"\n                placeholder=\"{{'ADD_EDIT_LABEL_HERE' | translate}}\">\n            </div>\n          </div>\n        </div>\n        <div class=\"marginTopFivepixels\"></div>\n          <div class=\"row\">\n            <div class=\"form-group\">\n              <label\n                for=\"inputTextRequiredUpdate\"\n                class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                {{'REQUIRED' | translate}} :\n              </label>\n              <div class=\"col-lg-9\">\n                <div class=\"checkboxCssCorrection\">\n                  &nbsp;\n                </div>\n                <input\n                  type=\"checkbox\"\n                  ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\"\n                  id=\"inputTextRequiredUpdate\">\n              </div>\n            </div>\n          </div>\n          <div class=\"marginTopFivepixels\"></div>\n            <div class=\"row\">\n              <div class=\"form-group\">\n                <label\n                  for=\"inputTextDescriptionUpdate\"\n                  class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                  {{'DESCRIPTION' | translate}} :\n                </label>\n                <div class=\"col-lg-9\">\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption\"\n                    id=\"inputTextDescriptionUpdate\"\n                    placeholder=\"{{'ADDEDIT_DESCRIPTION' | translate}}\">\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div ng-switch-when=\"Texarea\">\n        <!-- textarea -->\n        <div class=\"panel panel-default\">\n          <div class=\"panel-body\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <h5 class=\"greyText\">\n                  <i class=\"fa fa-eye\"></i>\n                  &nbsp;\n                  {{'PREVIEW_TAB' | translate}} :\n                </h5>\n              </div>\n            </div>\n            <hr/>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <label\n                    for=\"textArea\"\n                    class=\"control-label textControlLabel\">\n                    {{editControlModCtrl.nyaSelect.temporyConfig.formlyLabel}}\n                    <span\n                      ng-if=\"editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\"\n                      class=\"textControlLabel\">\n                      *\n                    </span>\n                  </label>\n                  <div class=\"\">\n                    <textarea\n                      class=\"form-control\"\n                      ng-model=\"model[options.key]\"\n                      rows=\"3\"\n                      id=\"textArea\">\n                    </textarea>\n                    <p class=\"help-block\">\n                      {{editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption}}\n                    </p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"panel panel-default\">\n          <div class=\"panel-body\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <h5 class=\"greyText\">\n                  <i class=\"fa fa-pencil-square-o\"></i>\n                  &nbsp;\n                  {{'EDIT_PROPERTIES' | translate}} :\n                </h5>\n              </div>\n            </div>\n            <hr/>\n            <div class=\"row\">\n              <div class=\"form-group\">\n                <label\n                  for=\"inputTextLabelUpdate\"\n                  class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                  {{'LABEL_TEXT' | translate}} :\n                </label>\n                <div class=\"col-lg-9\">\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyLabel\"\n                    id=\"inputTextLabelUpdate\"\n                    placeholder=\"{{'ADD_EDIT_LABEL_HERE' | translate}}\">\n                </div>\n              </div>\n            </div>\n            <div class=\"marginTopFivepixels\"></div>\n              <div class=\"row\">\n                <div class=\"form-group\">\n                  <label\n                    for=\"inputTextRequiredUpdate\"\n                    class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                    {{'REQUIRED' | translate}} :\n                  </label>\n                  <div class=\"col-lg-9\">\n                    <div class=\"checkboxCssCorrection\">\n                      &nbsp;\n                    </div>\n                    <input\n                      type=\"checkbox\"\n                      ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\"\n                      id=\"inputTextRequiredUpdate\">\n                  </div>\n                </div>\n              </div>\n                <div class=\"marginTopFivepixels\"></div>\n                  <div class=\"row\">\n                    <div class=\"form-group\">\n                      <label\n                        for=\"inputTextDescriptionUpdate\"\n                        class=\"col-lg-3 control-label greyText editPropertiesLabel\">{{'DESCRIPTION' | translate}} :\n                      </label>\n                      <div class=\"col-lg-9\">\n                        <input\n                          type=\"text\"\n                          class=\"form-control\"\n                          ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption\"\n                          id=\"inputTextDescriptionUpdate\"\n                          placeholder=\"{{'ADDEDIT_DESCRIPTION' | translate}}\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div ng-switch-when=\"RichTextEditor\">\n              <!-- TextInput -->\n              <div class=\"panel panel-default\">\n                <div class=\"panel-body\">\n                  <div class=\"row\">\n                    <div class=\"col-md-12\">\n                      <h5 class=\"greyText\">\n                        <i class=\"fa fa-eye\"></i>\n                        &nbsp;\n                        {{'PREVIEW_TAB' | translate}} :\n                      </h5>\n                    </div>\n                  </div>\n                  <hr/>\n                  <div class=\"row\">\n                    <div class=\"col-md-12\">\n                      <div class=\"form-group\">\n                        <label\n                          for=\"RichTextEditor\"\n                          class=\"control-label textControlLabel\">\n                          {{editControlModCtrl.nyaSelect.temporyConfig.formlyLabel}}\n                          <span\n                            ng-if=\"editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\"\n                            class=\"textControlLabel\">\n                            *\n                          </span>\n                        </label>\n                        <div class=\"\">\n                          <text-angular\n                            ng-model=\"editControlModCtrl.model[options.key]\">\n                          </text-angular>\n                          <p class=\"help-block\">\n                            {{editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption}}\n                          </p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"panel panel-default\">\n                <div class=\"panel-body\">\n                  <div class=\"row\">\n                    <div class=\"col-md-12\">\n                      <h5 class=\"greyText\">\n                        <i class=\"fa fa-pencil-square-o\"></i>\n                        &nbsp;\n                        {{'EDIT_PROPERTIES' | translate}} :\n                      </h5>\n                    </div>\n                  </div>\n                  <hr/>\n              <!-- required can't be applied to rich text editor (textAngular) right now -->\n              <!--<div class=\"row\">\n                    <div class=\"form-group\">\n                      <label\n                        for=\"inputTextRequiredUpdate\"\n                        class=\"col-lg-3 control-label greyText editPropertiesLabel\">Required :\n                      </label>\n                      <div class=\"col-lg-9\">\n                        <div class=\"checkboxCssCorrection\">\n                          &nbsp;\n                        </div>\n                        <input\n                          type=\"checkbox\"\n                          ng-model=\"nyaSelect.temporyConfig.formlyRequired\" id=\"inputTextRequiredUpdate\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"marginTopFivepixels\"></div>-->\n                  <div class=\"row\">\n                    <div class=\"form-group\">\n                      <label\n                        for=\"inputTextDescriptionUpdate\"\n                        class=\"col-lg-3 control-label greyText editPropertiesLabel\">{{'DESCRIPTION' | translate}} :\n                      </label>\n                      <div class=\"col-lg-9\">\n                        <input\n                          type=\"text\"\n                          class=\"form-control\"\n                          ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption\"\n                          id=\"inputTextDescriptionUpdate\"\n                          placeholder=\"{{'ADDEDIT_DESCRIPTION' | translate}}\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div ng-switch-when=\"Radio\">\n              <!-- radios -->\n              <div class=\"panel panel-default\">\n                <div class=\"panel-body\">\n                  <div class=\"row\">\n                    <div class=\"col-md-12\">\n                      <h5 class=\"greyText\">\n                        <i class=\"fa fa-eye\"></i>\n                        &nbsp;\n                        {{'PREVIEW_TAB' | translate}} :\n                      </h5>\n                    </div>\n                  </div>\n                  <hr/>\n                  <div class=\"row\">\n                    <div class=\"col-md-12\">\n                      <div class=\"form-group\">\n                        <label\n                          for=\"basicSelect\"\n                          class=\"control-label textControlLabel\">\n                          {{editControlModCtrl.nyaSelect.temporyConfig.formlyLabel}}\n                          <span\n                            ng-if=\"editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\"\n                            class=\"textControlLabel\">\n                            *\n                          </span>\n                        </label>\n                        <div class=\"\">\n                          <div\n                            class=\"radio\"\n                            ng-repeat=\"radioRow in editControlModCtrl.radioRowCollection.rows\">\n                            <label>\n                              <input\n                                type=\"radio\"\n                                name=\"optionsRadios\"\n                                id=\"{{'optionsRadio-' + $index}}\"\n                                value=\"$index\"\n                                checked=\"\">\n                                {{radioRow.option}}\n                            </label>\n                          </div>\n                          <p class=\"help-block\">\n                            {{editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption}}\n                          </p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"panel panel-default\">\n                <div class=\"panel-body\">\n                  <div class=\"row\">\n                    <div class=\"col-md-12\">\n                      <h5\n                        class=\"greyText\">\n                        <i class=\"fa fa-pencil-square-o\"></i>\n                        &nbsp;\n                        {{'EDIT_PROPERTIES' | translate}} :\n                      </h5>\n                    </div>\n                  </div>\n                  <hr/>\n                  <div class=\"row\">\n                    <div class=\"col-lg-3 col-md-3\">\n                      <label\n                        for=\"radioRowCollection\"\n                        class=\" control-label greyText editPropertiesLabel\">\n                        {{'ADD_NEW_RADIO' | translate}} :\n                      </label>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div>\n                      <div class=\"form-group\">\n                        <div class=\"col-sm-9 col-xs-9 col-md-9 col-lg-9\">\n                          <input\n                            type=\"text\"\n                            class=\"form-control\"\n                            id=\"inputAddNewRadioOption\"\n                            placeholder=\"{{'ADD_RADIO_PLACEHOLD' | translate}}\"\n                            ng-model=\"editControlModCtrl.newOptionRadio.saisie\">\n                        </div>\n                        <div class=\"col-sm-3 col-xs-3 col-md-3 col-lg-3\">\n                          <button\n                            class=\"btn btn-primary\"\n                            ng-click=\"editControlModCtrl.addNewOptionRadio()\">\n                            {{'ADD' | translate}}\n                          </button>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-lg-3 col-md-3\">\n                      <label\n                        for=\"radioRowCollection\"\n                        class=\" control-label greyText editPropertiesLabel\">\n                        {{'EDIT_REMOVE_RADIO' | translate}} :\n                      </label>\n                    </div>\n                  </div>\n                    <div class=\"row\">\n                      <div class=\"form-group\">\n                        <div class-\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                          <div class=\"container\">\n                            <div ng-show=\"editControlModCtrl.radioRowCollection.rows.length === 0\">\n                              <h5 class=\"text-center greyText\">\n                                <em>\n                                  - {{'NO_RADIO_ADD_NEW' | translate}} -\n                                </em>\n                              </h5>\n                            </div>\n                            <table\n                              ng-if=\"editControlModCtrl.radioRowCollection.rows.length > 0\"\n                              class=\"table table-striped\">\n                              <thead>\n                              <tr>\n                                <th st-ratio=\"20\">\n                                  {{'ORDER' | translate}}\n                                </th>\n                                <th st-ratio=\"55\">\n                                  {{'OPTION' | translate}}\n                                </th>\n                                <th st-ratio=\"25\">\n                                </th>\n                              </tr>\n                              <tr>\n                                <th st-ratio=\"20\">\n                                </th>\n                                <th st-ratio=\"55\">\n                                  <input\n                                    ng-model=\"editControlModCtrl.radioFilter\"\n                                    placeholder=\"{{'SEARCH_4_OPTION' | translate}}\"\n                                    class=\"input-sm form-control\"\n                                    type=\"search\"\n                                  />\n                                </th>\n                                <th st-ratio=\"25\">\n                                </th>\n                              </tr>\n                              </thead>\n                              <tbody>\n                                <tr ng-repeat=\"radioRow in editControlModCtrl.radioRowCollection.rows | filter:radioFilter as radioRow\">\n                                  <td st-ratio=\"20\">\n                                    {{$index}}\n                                  </td>\n                                  <td st-ratio=\"55\">\n                                    {{radioRow.option}}\n                                  </td>\n                                  <td st-ratio=\"25\">\n                                    <div class=\"pull-right\">\n                                      <button\n                                        class=\"btn btn-primary\"\n                                        ng-click=\"editControlModCtrl.upThisRadioRow($index)\">\n                                        <i class=\"fa fa-arrow-up\"></i>\n                                      </button>\n                                      <button\n                                        class=\"btn btn-primary\"\n                                        ng-click=\"editControlModCtrl.downThisRadioRow($index)\">\n                                        <i class=\"fa fa-arrow-down\"></i>\n                                      </button>\n                                      <button\n                                        class=\"btn btn-danger\"\n                                        ng-click=\"editControlModCtrl.removeRadioRow($index)\">\n                                        <i class=\"fa fa-trash-o\"></i>\n                                      </button>\n                                    </div>\n                                  </td>\n                                </tr>\n                              </tbody>\n                            </table>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <hr/>\n                    <div class=\"marginTopFivepixels\"></div>\n                    <div class=\"row\">\n                      <div class=\"form-group\">\n                        <label\n                          for=\"inputTextLabelUpdate\"\n                          class=\"col-lg-3 control-label greyText editPropertiesLabel\">{{'LABEL_TEXT' | translate}} :\n                        </label>\n                        <div class=\"col-lg-9\">\n                          <input\n                            type=\"text\"\n                            class=\"form-control\"\n                            ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyLabel\"\n                            id=\"inputTextLabelUpdate\"\n                            placeholder=\"{{'ADD_EDIT_LABEL_HERE' | translate}}\">\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"marginTopFivepixels\"></div>\n                    <div class=\"row\">\n                      <div class=\"form-group\">\n                        <label\n                          for=\"inputTextRequiredUpdate\"\n                          class=\"col-lg-3 control-label greyText editPropertiesLabel\">{{'REQUIRED' | translate}} :\n                        </label>\n                        <div class=\"col-lg-9\">\n                          <div class=\"checkboxCssCorrection\">\n                            &nbsp;\n                          </div>\n                          <input\n                            type=\"checkbox\"\n                            ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\"\n                            id=\"inputTextRequiredUpdate\">\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"marginTopFivepixels\"></div>\n                    <div class=\"row\">\n                      <div class=\"form-group\">\n                        <label\n                          for=\"inputTextDescriptionUpdate\"\n                          class=\"col-lg-3 control-label greyText editPropertiesLabel\">{{'DESCRIPTION' | translate}} :\n                        </label>\n                        <div class=\"col-lg-9\">\n                          <input\n                            type=\"text\"\n                            class=\"form-control\"\n                            ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption\"\n                            id=\"inputTextDescriptionUpdate\"\n                            placeholder=\"{{'ADDEDIT_DESCRIPTION' | translate}}\">\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div ng-switch-when=\"Checkbox\">\n                <!-- checkbox -->\n                <div class=\"panel panel-default\">\n                  <div class=\"panel-body\">\n                    <div class=\"row\">\n                      <div class=\"col-md-12\">\n                        <h5 class=\"greyText\">\n                          <i class=\"fa fa-eye\"></i>\n                          &nbsp;\n                          {{'PREVIEW_TAB' | translate}} :\n                        </h5>\n                      </div>\n                    </div>\n                    <hr/>\n                    <div class=\"row\">\n                      <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                          <div class=\"col-md-12\">\n                            <div class=\"checkbox\">\n                              <label>\n                                <input\n                                  type=\"checkbox\"\n                                  id=\"checkBox\">\n                                <span class=\"blackText\">\n                                  {{editControlModCtrl.nyaSelect.temporyConfig.formlyLabel}}\n                                </span>\n                                <span\n                                  ng-if=\"editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\"\n                                  class=\"textControlLabel\">\n                                  *\n                                </span>\n                              </label>\n                            </div>\n                            <p class=\"help-block\">\n                              {{editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption}}\n                            </p>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"panel panel-default\">\n                  <div class=\"panel-body\">\n                    <div class=\"row\">\n                      <div class=\"col-md-12\">\n                        <h5 class=\"greyText\">\n                          <i class=\"fa fa-pencil-square-o\"></i>\n                          &nbsp;\n                          {{'EDIT_PROPERTIES' | translate}} :\n                        </h5>\n                      </div>\n                    </div>\n                    <hr/>\n                    <div class=\"row\">\n                      <div class=\"form-group\">\n                        <label\n                          for=\"inputTextLabelUpdate\"\n                          class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                          {{'LABEL_TEXT' | translate}} :\n                        </label>\n                        <div class=\"col-lg-9\">\n                          <input\n                            type=\"text\"\n                            class=\"form-control\"\n                            ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyLabel\"\n                            id=\"inputTextLabelUpdate\"\n                            placeholder=\"{{'ADD_EDIT_LABEL_HERE' | translate}}\">\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"marginTopFivepixels\"></div>\n                    <div class=\"row\">\n                      <div class=\"form-group\">\n                        <label\n                          for=\"inputTextRequiredUpdate\"\n                          class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                          {{'REQUIRED' | translate}} :\n                        </label>\n                        <div class=\"col-lg-9\">\n                          <div class=\"checkboxCssCorrection\">&nbsp;</div>\n                          <input\n                            type=\"checkbox\"\n                            ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\" id=\"inputTextRequiredUpdate\">\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"marginTopFivepixels\"></div>\n                    <div class=\"row\">\n                      <div class=\"form-group\">\n                        <label\n                          for=\"inputTextDescriptionUpdate\"\n                          class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                          {{'DESCRIPTION' | translate}} :\n                        </label>\n                        <div class=\"col-lg-9\">\n                          <input\n                            type=\"text\"\n                            class=\"form-control\"\n                            ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption\"\n                            id=\"inputTextDescriptionUpdate\"\n                            placeholder=\"{{'ADDEDIT_DESCRIPTION' | translate}}\">\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div ng-switch-when=\"BasicSelect\">\n                <!--  basic selects -->\n                <div class=\"panel panel-default\">\n                  <div class=\"panel-body\">\n                    <div class=\"row\">\n                      <div class=\"col-md-12\">\n                        <h5 class=\"greyText\">\n                          <i class=\"fa fa-eye\"></i>\n                          &nbsp;\n                          {{'PREVIEW_TAB' | translate}} :\n                        </h5>\n                      </div>\n                    </div>\n                    <hr/>\n                    <div class=\"row\">\n                      <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                          <label\n                            for=\"basicSelect\"\n                            class=\"control-label textControlLabel\">\n                            {{editControlModCtrl.nyaSelect.temporyConfig.formlyLabel}}\n                            <span\n                              ng-if=\"editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\"\n                              class=\"textControlLabel\">\n                              *\n                            </span>\n                          </label>\n                          <div class=\"\">\n                            <ol\n                              class=\"nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg12\"\n                              ng-model=\"editControlModCtrl.modelbasicSelect\"\n                              id=\"basicSelect\"\n                              disabled=\"editControlModCtrl.basicSelectRowCollection.rows.length === 0\">\n                              <li\n                                class=\"nya-bs-option\"\n                                nya-bs-option=\"basicSelectRow in editControlModCtrl.basicSelectRowCollection.rows\"\n                                value=\"$index\">\n                                <a>\n                                  {{basicSelectRow.option}}\n                                </a>\n                              </li>\n                            </ol>\n                            <p class=\"help-block\">\n                              {{editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption}}\n                            </p>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"panel panel-default\">\n                  <div class=\"panel-body\">\n                    <div class=\"row\">\n                      <div class=\"col-md-12\">\n                        <h5 class=\"greyText\">\n                          <i class=\"fa fa-pencil-square-o\"></i>\n                          &nbsp;\n                          {{'EDIT_PROPERTIES' | translate}} :\n                        </h5>\n                      </div>\n                    </div>\n                    <hr/>\n                    <div class=\"row\">\n                      <div class=\"col-lg-3 col-md-3\">\n                        <label\n                          for=\"basicSelectRowCollection\"\n                          class=\" control-label greyText editPropertiesLabel\">\n                          {{'ADD_NEW_OPTIONS' | translate}} :\n                        </label>\n                      </div>\n                    </div>\n                    <div class=\"row\">\n                      <div>\n                        <div class=\"form-group\">\n                          <div class=\"col-sm-9 col-xs-9 col-md-9 col-lg-9\">\n                          <input\n                            type=\"text\"\n                            class=\"form-control\"\n                            id=\"inputAddNewBasicOption\"\n                            placeholder=\"{{'ADD_A_NEW_OPTION' | translate}}\"\n                            ng-model=\"editControlModCtrl.newOptionBasicSelect.saisie\">\n                          </div>\n                          <div class=\"col-sm-3 col-xs-3 col-md-3 col-lg-3\">\n                            <button\n                              class=\"btn btn-primary\"\n                              ng-click=\"editControlModCtrl.addNewOptionBasicSelect()\">\n                              {{'ADD' | translate}}\n                            </button>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-lg-3 col-md-3\">\n                        <label class=\" control-label greyText editPropertiesLabel\">\n                          {{'EDIT_REMOVE_OPTIONS' | translate}} :\n                        </label>\n                      </div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"form-group\">\n                        <div class-\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                          <div class=\"container\">\n                            <div ng-if=\"editControlModCtrl.basicSelectRowCollection.rows.length === 0\">\n                              <h5 class=\"text-center greyText\">\n                                <em>\n                                  - {{'NO_OPTION_ADD_NEW' | translate}} -\n                                </em>\n                              </h5>\n                            </div>\n                            <table\n                              ng-if=\"editControlModCtrl.basicSelectRowCollection.rows.length > 0\"\n                              class=\"table table-striped\">\n                              <thead>\n                                <tr>\n                                  <th st-ratio=\"20\">\n                                    {{'ORDER' | translate}}\n                                  </th>\n                                  <th st-ratio=\"55\">\n                                    {{'OPTION' | translate}}\n                                  </th>\n                                  <th st-ratio=\"25\">\n                                  </th>\n                                </tr>\n                                <tr>\n                                  <th st-ratio=\"20\">\n                                  </th>\n                                  <th st-ratio=\"55\">\n                                    <input\n                                      ng-model=\"basicSelectFilter\"\n                                      placeholder=\"{{'SEARCH_4_OPTION' | translate}}\"\n                                      class=\"input-sm form-control\"\n                                      type=\"search\"\n                                    />\n                                  </th>\n                                  <th st-ratio=\"25\">\n                                  </th>\n                                </tr>\n                              </thead>\n                              <tbody>\n                                <tr ng-repeat=\"basicSelectRow in editControlModCtrl.basicSelectRowCollection.rows | filter:basicSelectFilter as basicSelectRow\">\n                                    <td st-ratio=\"20\">\n                                      {{$index}}\n                                    </td>\n                                    <td st-ratio=\"55\">\n                                      {{basicSelectRow.option}}\n                                    </td>\n                                    <td st-ratio=\"25\">\n                                      <div class=\"pull-right\">\n                                        <button\n                                          class=\"btn btn-primary\"\n                                          ng-click=\"editControlModCtrl.upThisRow($index)\">\n                                          <i class=\"fa fa-arrow-up\"></i>\n                                        </button>\n                                        <button\n                                          class=\"btn btn-primary\"\n                                          ng-click=\"editControlModCtrl.downThisRow($index)\">\n                                          <i class=\"fa fa-arrow-down\"></i>\n                                        </button>\n                                        <button\n                                          class=\"btn btn-danger\"\n                                          ng-click=\"editControlModCtrl.removeRow($index)\">\n                                          <i class=\"fa fa-trash-o\"></i>\n                                        </button>\n                                      </div>\n                                    </td>\n                                  </tr>\n                                </tbody>\n                              </table>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <hr/>\n                      <div class=\"row\">\n                        <div class=\"form-group\">\n                          <label\n                            for=\"inputTextLabelUpdate\"\n                            class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                            {{'LABEL_TEXT' | translate}} :\n                          </label>\n                          <div class=\"col-lg-9\">\n                            <input\n                              type=\"text\"\n                              class=\"form-control\"\n                              ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyLabel\"\n                              id=\"inputTextLabelUpdate\"\n                              placeholder=\"{{'ADD_EDIT_LABEL_HERE' | translate}}\">\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"marginTopFivepixels\"></div>\n                      <div class=\"row\">\n                        <div class=\"form-group\">\n                          <label\n                            for=\"inputTextRequiredUpdate\"\n                            class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                            Required :\n                          </label>\n                          <div class=\"col-lg-9\">\n                            <div class=\"checkboxCssCorrection\">\n                              &nbsp;\n                            </div>\n                            <input\n                              type=\"checkbox\"\n                              ng-model=\"nyaSelect.temporyConfig.formlyRequired\"\n                              id=\"inputTextRequiredUpdate\">\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"marginTopFivepixels\"></div>\n                      <div class=\"row\">\n                        <div class=\"form-group\">\n                          <label\n                            for=\"inputTextDescriptionUpdate\"\n                            class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                            {{'DESCRIPTION' | translate}} :\n                          </label>\n                          <div class=\"col-lg-9\">\n                            <input\n                              type=\"text\"\n                              class=\"form-control\"\n                              ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption\" id=\"inputTextDescriptionUpdate\"\n                              placeholder=\"{{'ADDEDIT_DESCRIPTION' | translate}}\">\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <!-- grouped selects -->\n                <div ng-switch-when=\"GroupedSelect\">\n                  <div class=\"panel panel-default\">\n                    <div class=\"panel-body\">\n                      <div class=\"row\">\n                        <div class=\"col-md-12\">\n                          <h5\n                            class=\"greyText\">\n                            <i class=\"fa fa-eye\"></i>\n                            &nbsp;\n                            {{'PREVIEW_TAB' | translate}} :\n                          </h5>\n                        </div>\n                      </div>\n                      <hr/>\n                      <div class=\"row\">\n                        <div class=\"col-md-12\">\n                          <div class=\"form-group\">\n                            <label\n                              for=\"select\"\n                              class=\"control-label textControlLabel\">\n                              {{editControlModCtrl.nyaSelect.temporyConfig.formlyLabel}}\n                              <span\n                                ng-if=\"editControlModCtrl.nyaSelect.temporyConfig.formlyRequired\"\n                                class=\"textControlLabel\">\n                                *\n                              </span>\n                            </label>\n                            <div class=\"\">\n                              <ol\n                                class=\"nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg12\"\n                                ng-model=\"modelGroupedSelect\"\n                                data-live-search=\"true\"\n                                disabled=\"editControlModCtrl.groupedSelectRowCollection.rows.length === 0\">\n                                <li\n                                  nya-bs-option=\"groupedSelectRow in editControlModCtrl.groupedSelectRowCollection.rows group by groupedSelectRow.group\"\n                                  value=\"$index\">\n                                  <span class=\"dropdown-header\">\n                                    {{groupedSelectRow.group}}\n                                  </span>\n                                  <a>\n                                    <span>\n                                      {{groupedSelectRow.option}}\n                                    </span>\n                                    <span class=\"glyphicon glyphicon-ok check-mark\">\n                                    </span>\n                                  </a>\n                                </li>\n                              </ol>\n                              <p class=\"help-block\">\n                                {{editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption}}\n                              </p>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"panel panel-default\">\n                    <div class=\"panel-body\">\n                      <div class=\"row\">\n                        <div class=\"col-md-12\">\n                          <h5\n                            class=\"greyText\">\n                            <i class=\"fa fa-pencil-square-o\"></i>\n                            &nbsp;\n                            {{'EDIT_PROPERTIES' | translate}} :\n                          </h5>\n                        </div>\n                      </div>\n                      <hr/>\n                      <div class=\"row\">\n                        <div class=\"col-lg-3 col-md-3\">\n                          <label\n                            for=\"groupedSelectRowCollection\"\n                            class=\" control-label greyText editPropertiesLabel\">\n                            {{'ADD_NEW_OPTIONS' | translate}} :\n                          </label>\n                        </div>\n                      </div>\n                      <div class=\"row\">\n                        <div>\n                          <div class=\"form-group\">\n                            <div class=\"col-sm-9 col-xs-9 col-md-9 col-lg-9\">\n                              <input\n                                type=\"text\"\n                                class=\"form-control\"\n                                id=\"inputAddNewGroupedOption\"\n                                placeholder=\"{{'ADD_A_NEW_OPTION' | translate}}\"\n                                ng-model=\"editControlModCtrl.newOptionGroupedSelect.saisie\">\n                            </div>\n                            <div class=\"col-sm-3 col-xs-3 col-md-3 col-lg-3\">\n                              <button\n                                class=\"btn btn-primary\"\n                                ng-click=\"editControlModCtrl.addNewOptionGroupedSelect()\">\n                                {{'ADD' | translate}}\n                              </button>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"row\">\n                        <div class=\"col-lg-3 col-md-3\">\n                          <label\n                            for=\"groupedSelectRowCollection\"\n                            class=\" control-label greyText editPropertiesLabel\">\n                            {{'ADD_NEW_GROUPS' | translate}} :\n                          </label>\n                        </div>\n                      </div>\n                      <div class=\"row\">\n                        <div>\n                          <div class=\"form-group\">\n                            <div class=\"col-sm-9 col-xs-9 col-md-9 col-lg-9\">\n                              <input\n                                id=\"inputAddNewGroupGroupedOption\"\n                                type=\"text\"\n                                class=\"form-control\"\n                                ng-model=\"editControlModCtrl.newGroupGroupedSelect.saisie\" id=\"inputTextLabelUpdateGroupedSelect\"\n                                placeholder=\"{{'ADD_A_NEW_GROUP' | translate}}\">\n                            </div>\n                            <div class=\"col-sm-3 col-xs-3 col-md-3 col-lg-3\">\n                              <button\n                                class=\"btn btn-primary\"\n                                ng-click=\"editControlModCtrl.addNewGroupToGroupedSelect()\">\n                                {{'ADD' | translate}}\n                              </button>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"row\">\n                        <div class=\"col-lg-3 col-md-3\">\n                          <label  class=\" control-label greyText editPropertiesLabel\">\n                            {{'EDIT_GROUPS_OPTIONS' | translate}} :\n                          </label>\n                        </div>\n                      </div>\n                      <div class=\"row\">\n                        <div class=\"form-group\">\n                          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                            <div class=\"container\">\n                              <div ng-if=\"editControlModCtrl.groupedSelectRowCollection.rows.length === 0\">\n                                <h5 class=\"text-center greyText\">\n                                  <em>\n                                    - {{'NO_OPTION_ADD_NEW' | translate}} -\n                                  </em>\n                                </h5>\n                              </div>\n                              <table\n                                ng-if=\"editControlModCtrl.groupedSelectRowCollection.rows.length > 0\"\n                                class=\"table table-striped\">\n                                <thead>\n                                  <tr>\n                                    <th st-ratio=\"20\">\n                                      {{'ORDER' | translate}}\n                                    </th>\n                                    <th st-ratio=\"25\">\n                                      {{'GROUP' | translate}}\n                                    </th>\n                                    <th st-ratio=\"30\">\n                                      {{'OPTION' | translate}}\n                                    </th>\n                                    <th st-ratio=\"25\">\n                                    </th>\n                                  </tr>\n                                  <tr>\n                                    <th st-ratio=\"20\">\n                                    </th>\n                                    <th st-ratio=\"25\">\n                                    </th>\n                                    <th st-ratio=\"30\">\n                                      <input\n                                        ng-model=\"editControlModCtrl.groupedSelectFilter\"\n                                        placeholder=\"{{'SEARCH_4_OPTION' | translate}}\"\n                                        class=\"input-sm form-control\"\n                                        type=\"search\"\n                                      />\n                                    </th>\n                                    <th st-ratio=\"25\">\n                                    </th>\n                                  </tr>\n                                  </thead>\n                                  <tbody>\n                                  <tr ng-repeat=\"groupedSelectRow in editControlModCtrl.groupedSelectRowCollection.rows | filter:editControlModCtrl.groupedSelectFilter as groupedSelectRow\">\n                                    <td st-ratio=\"20\">\n                                      {{$index}}\n                                    </td>\n                                    <td st-ratio=\"25\">\n                                      <div ng-if=\"editControlModCtrl.groupSelectGroupClick.showList === true\">\n                                        <div ng-if=\"editControlModCtrl.GroupedSelectGroups.list.length === 0\">\n                                          <p class=\"text-left noGroupText\">- {{'NO_GROUP_ADD_NEW' | translate}} -</p>\n                                        </div>\n                                        <div ng-if=\"editControlModCtrl.GroupedSelectGroups.list.length > 0\">\n                                          <ol class=\"nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg12 editGroupedSelectnyaSelect\" ng-model=\"groupedSelectRow.group\" id=\"modelGroupedOptionGroupedChoose\"\n                                          disabled=\"editControlModCtrl.GroupedSelectGroups.list.length === 0\">\n                                            <li class=\"nya-bs-option\" nya-bs-option=\"GroupedSelectGroup in editControlModCtrl.GroupedSelectGroups.list\" value=\"GroupedSelectGroup\">\n                                              <a>{{GroupedSelectGroup}}</a>\n                                            </li>\n                                          </ol>\n                                        </div>\n                                      </div>\n                                      <div ng-if=\"editControlModCtrl.groupSelectGroupClick.showList === false\">\n                                        {{groupedSelectRow.group}}\n                                      </div>\n                                    </td>\n                                    <td st-ratio=\"30\">\n                                      {{groupedSelectRow.option}}\n                                    </td>\n                                    <td st-ratio=\"25\">\n                                      <div class=\"pull-right\">\n                                        <button\n                                          class=\"btn btn-primary\"\n                                          ng-click=\"editControlModCtrl.upThisGroupedSelectRow($index)\">\n                                          <i class=\"fa fa-arrow-up\"></i>\n                                        </button>\n                                        <button\n                                          class=\"btn btn-primary\"\n                                          ng-click=\"editControlModCtrl.downThisGroupedSelectRow($index)\">\n                                          <i class=\"fa fa-arrow-down\"></i>\n                                        </button>\n                                        <button\n                                          class=\"btn btn-warning\"\n                                          ng-click=\"editControlModCtrl.showGroupListToChoose()\">\n                                          <i class=\"fa fa-pencil-square-o\"></i>\n                                        </button>\n                                        <button\n                                          class=\"btn btn-danger\"\n                                          ng-click=\"editControlModCtrl.removeGroupedSelectRow($index)\">\n                                          <i class=\"fa fa-trash-o\"></i>\n                                        </button>\n                                      </div>\n                                    </td>\n                                  </tr>\n                                </tbody>\n                              </table>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    <hr/>\n                    <div class=\"row\">\n                      <div class=\"form-group\">\n                        <label\n                          for=\"inputTextLabelUpdate\"\n                          class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                          {{'LABEL_TEXT' | translate}} :\n                        </label>\n                        <div class=\"col-lg-9\">\n                          <input\n                            type=\"text\"\n                            class=\"form-control\"\n                            ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyLabel\"\n                            id=\"inputTextLabelUpdate\"\n                            placeholder=\"{{'ADD_EDIT_LABEL_HERE' | translate}}\">\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"marginTopFivepixels\"></div>\n                    <div class=\"marginTopFivepixels\"></div>\n                    <div class=\"row\">\n                      <div class=\"form-group\">\n                        <label\n                          for=\"inputTextDescriptionUpdate\"\n                          class=\"col-lg-3 control-label greyText editPropertiesLabel\">\n                          {{'DESCRIPTION' | translate}} :\n                        </label>\n                        <div class=\"col-lg-9\">\n                          <input\n                            type=\"text\"\n                            class=\"form-control\"\n                            ng-model=\"editControlModCtrl.nyaSelect.temporyConfig.formlyDesciption\"\n                            id=\"inputTextDescriptionUpdate\"\n                            placeholder=\"{{'ADDEDIT_DESCRIPTION' | translate}}\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal-footer\">\n  <button\n    class=\"btn btn-primary\"\n    ng-class=\"{'disabled': editControlModCtrl.nyaSelect.selectedControl === 'none'}\"\n    ng-click=\"editControlModCtrl.ok()\">\n    {{'OK' | translate}}\n  </button>\n  <button\n    class=\"btn btn-warning\"\n    ng-click=\"editControlModCtrl.cancel()\">\n    {{'CANCEL' | translate}}\n  </button>\n</div>\n";
        global.define = __define;
        return module.exports;
    });

    $__System.register('13', ['11', '12', '14', '15', '16'], function (_export) {
        var initDebugModel, initTabModel, initColumnTemplate, initLineTemplate, editControlModalTemplate, EDIT_MODAL_CONTROLLER_NAME, EDIT_MODAL_CONTROLLERAS_NAME, _createClass, _classCallCheck, STEP_WAY_MAIN_CONTROLLER_NAME, STEP_WAY_MAIN_CONTROLLERAS_NAME, edaStepWayEasyFormGenController, toInject;

        return {
            setters: [function (_3) {
                initDebugModel = _3.initDebugModel;
                initTabModel = _3.initTabModel;
                initColumnTemplate = _3.initColumnTemplate;
                initLineTemplate = _3.initLineTemplate;
            }, function (_4) {
                editControlModalTemplate = _4['default'];
            }, function (_5) {
                EDIT_MODAL_CONTROLLER_NAME = _5.EDIT_MODAL_CONTROLLER_NAME;
                EDIT_MODAL_CONTROLLERAS_NAME = _5.EDIT_MODAL_CONTROLLERAS_NAME;
            }, function (_) {
                _createClass = _['default'];
            }, function (_2) {
                _classCallCheck = _2['default'];
            }],
            execute: function () {
                /* global angular */
                'use strict';

                STEP_WAY_MAIN_CONTROLLER_NAME = 'edaStepWayEasyFormGenController';
                STEP_WAY_MAIN_CONTROLLERAS_NAME = 'vm';

                edaStepWayEasyFormGenController = (function () {
                    function edaStepWayEasyFormGenController(easyFormGenVersion, $filter, toaster, $timeout, $uibModal, $log, $formlyProxy, $modalProxy, easyFormSteWayConfig) {
                        _classCallCheck(this, edaStepWayEasyFormGenController);

                        this.easyFormGenVersion = easyFormGenVersion;
                        this.$filter = $filter;
                        this.toaster = toaster;
                        this.$timeout = $timeout;
                        this.$modal = $uibModal;
                        this.$log = $log;
                        this.$formlyProxy = $formlyProxy;
                        this.$modalProxy = $modalProxy;
                        this.easyFormSteWayConfig = easyFormSteWayConfig;

                        this.init();
                    }

                    _createClass(edaStepWayEasyFormGenController, [{
                        key: 'init',
                        value: function init() {

                            this.dataModel = {};
                            this.wfFormFields = [];
                            this.wfFormFieldsOnlyNeededProperties = [];
                            this.easyFormGeneratorVERSION = this.easyFormGenVersion;
                            this.debug = initDebugModel();
                            this.tab = initTabModel(this.easyFormSteWayConfig.isPreviewPanelVisible(), this.easyFormSteWayConfig.arePreviewModelsVisible());
                            this.configuration = {}; //configuration model (contains array of lines which contains array of columns)
                            this.numberOfColumns = 1;
                            this.MaxNumberOfColumns = 3;
                            this.MinNumberOfColumns = 1;
                            this.columnTemplate = initColumnTemplate(); //TODO : check is really needed
                            this.lineTemplate = initLineTemplate(); //TODO : check if really needed
                            this.nyaSelect = {};
                            this.animationsEnabled = this.easyFormSteWayConfig.getModalAnimationValue(); //-> disabling animation untill correction in angular bootstrap
                            this.editControlModalSize = 'lg';
                            this.formlyList = {};
                            this.previewLoadedForm = { fieldsModel: [] };
                            this.configurationLoaded = {};
                            this.returnSaveEvent = false;
                            //this.resetToZeroModel         = resetToZeroModel; //function no more used

                            this.$formlyProxy.initConfigurationEditFromScratch(this.configuration);

                            this.$modalProxy.initNyaSelect(this.nyaSelect);

                            //console.info(`main controller : init nyaSelect model`);
                            //console.dir(angular.copy(this.nyaSelect));
                        }
                    }, {
                        key: 'onSubmit',
                        value: function onSubmit() {
                            var JSONedModel = this.$filter('json')(this.dataModel, 4);
                            this.toaster.pop({
                                type: 'info',
                                timeout: 2000,
                                title: 'it should save data model if it were not in editor',
                                body: 'data : ' + JSONedModel,
                                showCloseButton: true
                            });
                        }
                    }, {
                        key: 'countConfigurationModelLines',
                        value: function countConfigurationModelLines() {
                            this.debug.configurationModelNumberofLines = this.configuration.lines.length;
                            return this.configuration.lines.length;
                        }
                    }, {
                        key: 'setActiveLineNumber',
                        value: function setActiveLineNumber(lineNumber) {
                            if (lineNumber <= this.countConfigurationModelLines()) this.configuration.activeLine = lineNumber;
                        }
                    }, {
                        key: 'upThisLine',
                        value: function upThisLine(indexLine) {
                            if (indexLine > -1) {
                                if (this.configuration.lines[indexLine - 1]) {
                                    var currentLineObj = this.configuration.lines[indexLine];
                                    this.configuration.lines.splice(indexLine, 1);
                                    this.configuration.lines.splice(indexLine - 1, 0, currentLineObj);
                                    //manage selected aciveLine
                                    this.configuration.activeLine = 1;
                                }
                            }
                            //re-render formfield
                            this.$formlyProxy.applyConfigurationToformlyModel(this.configuration, this.wfFormFields, this.dataModel);
                            this.wfFormFieldsOnlyNeededProperties = angular.copy(this.wfFormFields);
                        }
                    }, {
                        key: 'downThisLine',
                        value: function downThisLine(indexLine) {
                            if (indexLine > -1) {
                                if (this.configuration.lines[indexLine + 1]) {
                                    var currentLineObj = this.configuration.lines[indexLine];
                                    this.configuration.lines.splice(indexLine, 1);
                                    this.configuration.lines.splice(indexLine + 1, 0, currentLineObj);
                                    //manage selected aciveLine
                                    this.configuration.activeLine = 1;
                                }
                            }
                            //re-render formfield
                            this.$formlyProxy.applyConfigurationToformlyModel(this.configuration, this.wfFormFields, this.dataModel);
                            this.wfFormFieldsOnlyNeededProperties = angular.copy(this.wfFormFields);
                        }
                    }, {
                        key: 'addNewline',
                        value: function addNewline() {
                            this.configuration.lines.push(initLineTemplate());
                            //re-render formfield
                            this.$formlyProxy.applyConfigurationToformlyModel(this.configuration, this.wfFormFields, this.dataModel);
                            this.wfFormFieldsOnlyNeededProperties = angular.copy(this.wfFormFields);
                        }
                    }, {
                        key: 'removeThisLine',
                        value: function removeThisLine(index) {
                            if (index > -1) {
                                if (this.configuration.lines.length > 1) {
                                    //manage selected aciveLine
                                    if (this.configuration.activeLine === index + 1) this.configuration.activeLine = 1;
                                    this.configuration.lines.splice(index, 1);
                                } else {
                                    this.$timeout(function () {
                                        this.toaster.pop({
                                            type: 'warning',
                                            title: 'Last line',
                                            body: 'Can\'t delete the last line',
                                            showCloseButton: true
                                        });
                                    }, 100);
                                }
                                //re-render formfield
                                this.$formlyProxy.applyConfigurationToformlyModel(this.configuration, this.wfFormFields, this.dataModel);
                                this.wfFormFieldsOnlyNeededProperties = angular.copy(this.wfFormFields);
                            }
                        }
                    }, {
                        key: 'increaseNumberOfColumns',
                        value: function increaseNumberOfColumns() {
                            var lineIndex = this.configuration.activeLine - 1;
                            if (this.configuration.lines[lineIndex].columns.length < this.MaxNumberOfColumns) {

                                var newNumberOfColumns = this.configuration.lines[lineIndex].columns.push(angular.copy(initColumnTemplate()));
                                this.configuration.lines[lineIndex].columns[newNumberOfColumns - 1].numColumn = newNumberOfColumns;
                            }
                            //re-render formfield
                            this.$formlyProxy.applyConfigurationToformlyModel(this.configuration, this.wfFormFields, this.dataModel);
                            this.wfFormFieldsOnlyNeededProperties = angular.copy(this.wfFormFields);
                        }
                    }, {
                        key: 'decreaseNumberOfColumns',
                        value: function decreaseNumberOfColumns() {
                            if (this.configuration.lines[this.configuration.activeLine - 1].columns.length > 1) {
                                this.configuration.lines[this.configuration.activeLine - 1].columns.splice(this.configuration.lines[this.configuration.activeLine - 1].columns.length - 1, 1);
                            }
                            this.$formlyProxy.applyConfigurationToformlyModel(this.configuration, this.wfFormFields, this.dataModel);
                            this.wfFormFieldsOnlyNeededProperties = angular.copy(this.wfFormFields);
                        }
                    }, {
                        key: 'resetStepCounter',
                        value: function resetStepCounter() {
                            this.configuration.configStepCounter = 0;
                        }
                    }, {
                        key: 'nextConfigStep',
                        value: function nextConfigStep() {
                            var configStepCounterMAX = this.configuration.listConfigStep.length - 1;
                            if (this.configuration.configStepCounter !== configStepCounterMAX) {
                                this.configuration.configStepCounter++;
                            }
                            this.setTrueThisStepIndicator(this.configuration.configStepCounter);
                        }
                    }, {
                        key: 'resetAllIndicators',
                        value: function resetAllIndicators() {
                            for (var i = this.configuration.stepIndicators.length - 1; i >= 0; i--) {
                                this.configuration.stepIndicators[i] = false;
                            }
                        }
                    }, {
                        key: 'setTrueThisStepIndicator',
                        value: function setTrueThisStepIndicator(indexIndicator) {
                            this.resetAllIndicators();
                            this.configuration.stepIndicators[indexIndicator] = true;
                        }
                    }, {
                        key: 'previousConfigStep',
                        value: function previousConfigStep() {
                            if (this.configuration.configStepCounter !== 0) {
                                this.configuration.configStepCounter--;
                            }
                            this.setTrueThisStepIndicator(this.configuration.configStepCounter);
                        }
                    }, {
                        key: 'stepReachable',
                        value: function stepReachable(indexStep) {
                            if (indexStep < this.configuration.configStepCounter) {
                                return 'disabled';
                            } else {
                                return 'enabled';
                            }
                        }
                    }, {
                        key: 'showModalAddCtrlToColumn',
                        value: function showModalAddCtrlToColumn(size, indexLine, numcolumn) {
                            var _this = this;

                            var editControlModal = {};
                            angular.extend(editControlModal, {
                                animation: this.animationsEnabled,
                                template: editControlModalTemplate,
                                controller: EDIT_MODAL_CONTROLLER_NAME,
                                controllerAs: EDIT_MODAL_CONTROLLERAS_NAME,
                                size: this.editControlModalSize,
                                resolve: {
                                    nyaSelect: function nyaSelect() {
                                        return _this.$modalProxy.getNyASelectFromSelectedLineColumn(_this.nyaSelect, _this.configuration, indexLine, numcolumn);
                                    }
                                }
                            });

                            var modalInstance = this.$modal.open(editControlModal);
                            modalInstance.result.then(function (modalAddCtrlModel) {
                                _this.$modalProxy.bindConfigurationModelFromModalReturn(indexLine, numcolumn, modalAddCtrlModel, _this.configuration);
                                _this.$formlyProxy.applyConfigurationToformlyModel(_this.configuration, _this.wfFormFields, _this.dataModel);
                                _this.wfFormFieldsOnlyNeededProperties = angular.copy(_this.wfFormFields);
                            }, function () {
                                //$log.info('Modal dismissed at: ' + new Date());
                            });
                        }
                    }, {
                        key: 'previewExistingform',
                        value: function previewExistingform(formlyform) {
                            var configlines = JSON.parse(formlyform.formlyField);
                            //here to replace with $scope.configuration : initialise configuration with lines
                            this.configurationLoaded = {};
                            this.$formlyProxy.bindConfigurationLines(this.configurationLoaded, configlines);
                            this.$formlyProxy.applyConfigurationToformlyModel(this.configurationLoaded, this.previewLoadedForm.fieldsModel, this.dataModel);
                            this.wfFormFieldsOnlyNeededProperties = angular.copy(this.wfFormFields);
                            this.previewLoadedForm.cancelButtonText = formlyform.cancelButtonText;
                            this.previewLoadedForm.submitButtonText = formlyform.submitButtonText;
                        }
                    }, {
                        key: 'saveThisForm',
                        value: function saveThisForm() {
                            if (typeof this.configuration.formName === 'undefined') {
                                this.toaster.pop({
                                    type: 'warning',
                                    timeout: 2000,
                                    title: 'Form name is undefined',
                                    body: 'Form has not been saved.',
                                    showCloseButton: true
                                });
                                return false;
                            }
                            if (this.configuration.formName === '') {
                                this.toaster.pop({
                                    type: 'warning',
                                    timeout: 2000,
                                    title: 'Form name is required',
                                    body: 'Form has not been saved.',
                                    showCloseButton: true
                                });
                                return false;
                            }
                            this.toaster.pop({
                                type: 'wait',
                                timeout: 10000,
                                title: 'Form is being saved',
                                body: 'Wait.',
                                showCloseButton: true
                            });
                            this.toaster.clear();
                            this.returnSaveEvent = true;
                            return true;
                        }
                    }]);

                    return edaStepWayEasyFormGenController;
                })();

                toInject = ['easyFormGenVersion', '$filter', 'toaster', '$timeout', '$uibModal', '$log', '$formlyProxy', '$modalProxy', 'easyFormSteWayConfig'];

                edaStepWayEasyFormGenController.$inject = toInject;

                _export('default', edaStepWayEasyFormGenController);

                _export('STEP_WAY_MAIN_CONTROLLER_NAME', STEP_WAY_MAIN_CONTROLLER_NAME);

                _export('STEP_WAY_MAIN_CONTROLLERAS_NAME', STEP_WAY_MAIN_CONTROLLERAS_NAME);
            }
        };
    });
    $__System.register('17', ['10', '13'], function (_export) {
        'use strict';

        var easyformTemplate, edaStepWayEasyFormGenController, STEP_WAY_MAIN_CONTROLLER_NAME, STEP_WAY_MAIN_CONTROLLERAS_NAME, STEP_WAY_DIRECTIVE_NAME;

        function edaStepWayEasyFormGenDirective($templateCache, $timeout, $formlyProxy, $modalProxy) {

            var directive = {
                restrict: 'E',
                scope: {
                    edaEasyFormGeneratorModel: '=',
                    edaSaveFormEvent: '&edaSaveFormEvent'
                },
                controller: STEP_WAY_MAIN_CONTROLLER_NAME,
                controllerAs: STEP_WAY_MAIN_CONTROLLERAS_NAME,
                replace: false,
                template: easyformTemplate,
                link: linkFct
            };
            return directive;

            function linkFct(scope) {

                //watch "scope.easyFormGeneratorModel"
                scope.$watch(function () {
                    return scope.edaEasyFormGeneratorModel;
                }, function (newValue, oldValue) {
                    loadExistingConfigurationModel();
                }, true);

                //watch "scope.vm.returnSaveEvent"" = catch saving form event
                scope.$watch(function () {
                    return scope.vm.returnSaveEvent;
                }, function (newValue, oldValue) {
                    if (newValue === true) {
                        var _easyFormGeneratorModel = {
                            formName: scope.vm.configuration.formName,
                            btnSubmitText: scope.vm.configuration.submitButtonText,
                            btnCancelText: scope.vm.configuration.cancelButtonText,
                            edaFieldsModel: scope.vm.configuration.lines,
                            edaFieldsModelStringified: angular.toJson(scope.vm.configuration.lines),
                            formlyFieldsModel: scope.vm.wfFormFieldsOnlyNeededProperties,
                            dataModel: scope.vm.dataModel
                        };
                        scope.edaSaveFormEvent({ edaEasyFormGeneratorModel: _easyFormGeneratorModel });
                        //back to false, waiting next save event
                        scope.returnSaveEvent = false;
                    }
                });

                function loadExistingConfigurationModel() {
                    if (angular.isDefined(scope.edaEasyFormGeneratorModel)) {
                        var configlines = returnAttributeConfigurationLinesIfNotEmpty();
                        scope.configurationLoaded = {};
                        $formlyProxy.bindConfigurationLines(scope.configurationLoaded, configlines);
                        /**
                         * rebind special control properties :
                         *
                         * formly expression properties
                         * Validators
                         * Validation
                         */
                        $modalProxy.refreshControlFormlyExpressionProperties(scope.configurationLoaded);
                        $modalProxy.refreshControlFormlyValidators(scope.configurationLoaded);
                        $modalProxy.refreshControlFormlyValidation(scope.configurationLoaded);
                        //apply configuration model
                        scope.vm.configuration = angular.copy(scope.configurationLoaded);
                        //apply formly model
                        $formlyProxy.applyConfigurationToformlyModel(scope.configurationLoaded, scope.vm.wfFormFields, scope.vm.model);
                        scope.vm.wfFormFieldsOnlyNeededProperties = angular.copy(scope.vm.wfFormFields);
                        scope.vm.dataModel = returnAttributeDataModelIfNotEmpty();
                        scope.vm.configuration.formName = angular.isString(scope.edaEasyFormGeneratorModel.formName) ? scope.edaEasyFormGeneratorModel.formName : '';
                        scope.vm.configuration.submitButtonText = angular.isString(scope.edaEasyFormGeneratorModel.btnSubmitText) ? scope.edaEasyFormGeneratorModel.btnSubmitText : 'Submit';
                        scope.vm.configuration.cancelButtonText = angular.isString(scope.edaEasyFormGeneratorModel.btnCancelText) ? scope.edaEasyFormGeneratorModel.btnCancelText : 'Cancel';
                    }
                }

                function returnAttributeConfigurationLinesIfNotEmpty() {
                    var edaEasyFormGeneratorModelToReturn = angular.isArray(scope.edaEasyFormGeneratorModel.edaFieldsModel) ? scope.edaEasyFormGeneratorModel.edaFieldsModel.length > 0 ? scope.edaEasyFormGeneratorModel.edaFieldsModel : emptyEdaFieldsModel() : emptyEdaFieldsModel();
                    return edaEasyFormGeneratorModelToReturn;
                }

                function returnAttributeDataModelIfNotEmpty() {
                    var dataModelToReturn = angular.isArray(scope.edaEasyFormGeneratorModel.dataModel) ? scope.edaEasyFormGeneratorModel.dataModel.length > 0 ? scope.edaEasyFormGeneratorModel.dataModel : {} : {};
                    return dataModelToReturn;
                }

                /**
                 * empty fields model : to display at least an empty line
                 * otherwise would look like ugly empty line like it were a bug
                 */
                function emptyEdaFieldsModel() {
                    var emptyModel = [{
                        "line": 1,
                        "activeColumn": 1,
                        "columns": [{
                            "numColumn": 1,
                            "exist": true,
                            "control": {
                                "type": "none",
                                "key": "none"
                            }
                        }]
                    }];
                    return emptyModel;
                }
            }
        }

        return {
            setters: [function (_) {
                easyformTemplate = _['default'];
            }, function (_2) {
                edaStepWayEasyFormGenController = _2['default'];
                STEP_WAY_MAIN_CONTROLLER_NAME = _2.STEP_WAY_MAIN_CONTROLLER_NAME;
                STEP_WAY_MAIN_CONTROLLERAS_NAME = _2.STEP_WAY_MAIN_CONTROLLERAS_NAME;
            }],
            execute: function () {
                STEP_WAY_DIRECTIVE_NAME = 'edaStepWayEasyFormGen';
                edaStepWayEasyFormGenDirective.$inject = ['$templateCache', '$timeout', '$formlyProxy', '$modalProxy'];

                _export('default', edaStepWayEasyFormGenDirective);

                _export('STEP_WAY_DIRECTIVE_NAME', STEP_WAY_DIRECTIVE_NAME);
            }
        };
    });
    $__System.register('18', [], function (_export) {
        /* global angular */
        'use strict';

        var EASY_FORM_STEP_WAY_CONFIG_NAME;

        function easyFormSteWayConfig($translateProvider) {
            var _configuration = defaultConfig();
            var _controlsList = controlsList();
            var _defaultLanguage = getDefaultLanguage();
            var _currentLanguage = initDefaultLanguage();
            var _showPreviewPanel = getDefaultshowPreviewPanel();
            var _showPreviewModels = getDefaultShowPreviewModel();
            /* jshint validthis:true */
            this.$get = easyFormStepWayConfigGET;
            this.setModalAnimation = setModalAnimation;
            this.getModalAnimation = getModalAnimation;
            this.configuration = _configuration;
            this.getEnabledControls = getEnabledControls;
            this.disableControl = disableControl;
            this.enableControl = enableControl;
            this.setLanguage = setLanguage;
            this.getCurrentLanguage = getCurrentLanguage;
            this.showPreviewPanel = showPreviewPanel;
            this.showPreviewModels = showPreviewModels;

            //set default config
            function defaultConfig() {
                var _defaultConfiguration = {
                    modalAnimated: false
                };
                return _defaultConfiguration;
            }

            //show preview panel by default
            function getDefaultshowPreviewPanel() {
                return true;
            }

            //show preview data, fields models in preview panel
            function getDefaultShowPreviewModel() {
                return true;
            }

            function getCurrentLanguage() {
                return _currentLanguage;
            }

            //list of controls
            function controlsList() {
                var controls = [{ name: 'empty', enabled: true }, { name: 'Header', enabled: true }, { name: 'Subtitle', enabled: true }, { name: 'TextInput', enabled: true }, { name: 'Password', enabled: true }, { name: 'Email', enabled: true }, { name: 'Date', enabled: true }, { name: 'Texarea', enabled: true }, { name: 'RichTextEditor', enabled: true }, { name: 'Radio', enabled: true }, { name: 'Checkbox', enabled: true }, { name: 'BasicSelect', enabled: true }, { name: 'GroupedSelect', enabled: true }];
                return controls;
            }

            function showPreviewPanel(wantToShow) {
                if (angular.isDefined(wantToShow)) {
                    if (wantToShow === true) _showPreviewPanel = true;
                    if (wantToShow === false) _showPreviewPanel = false;
                }
            }

            function showPreviewModels(wantToShow) {
                if (angular.isDefined(wantToShow)) {
                    if (wantToShow === true) _showPreviewModels = true;
                    if (wantToShow === false) _showPreviewModels = false;
                }
            }

            //language : set default to english
            function getDefaultLanguage() {
                var lang = 'en';
                return lang;
            }

            function setDefaultLanguage() {
                _currentLanguage = _defaultLanguage;
                $translateProvider.preferredLanguage(_currentLanguage);
                return _currentLanguage;
            }

            function setLanguage(language) {
                if (angular.isString(language)) {
                    _currentLanguage = language;
                    $translateProvider.preferredLanguage(language);
                } else {
                    setDefaultLanguage();
                }
            }

            function initDefaultLanguage() {
                $translateProvider.useSanitizeValueStrategy('escape'); //security : Enable escaping of HTML
                $translateProvider.fallbackLanguage(_defaultLanguage); //fallback language to default language
                $translateProvider.preferredLanguage(_defaultLanguage);
                return _defaultLanguage;
            }

            function getEnabledControls() {
                return _controlsList;
            }

            function disableControl(controlName) {
                if (angular.isString(controlName)) {
                    angular.forEach(_controlsList, function (aControl) {
                        if (aControl.name === controlName) aControl.enabled = false;
                    });
                }
            }

            function enableControl(controlName) {
                if (angular.isString(controlName)) {
                    angular.forEach(_controlsList, function (aControl) {
                        if (aControl.name === controlName) aControl.enabled = true;
                    });
                }
            }

            function setModalAnimation(flagConfig) {
                var valueToApply = flagConfig === true ? flagConfig : flagConfig === false ? flagConfig : _configuration.modalAnimated;

                _configuration.modalAnimated = valueToApply;
            }

            function getModalAnimation() {
                return _configuration.modalAnimated;
            }

            //$get implementation :
            easyFormStepWayConfigGET.$inject = ['$translate'];
            function easyFormStepWayConfigGET($translate) {

                var service = {
                    setModalAnimation: setModalAnimationFct,
                    getModalAnimationValue: getModalAnimationValue,
                    getListEnabledControl: getListEnabledControl,
                    setLanguage: switchLanguage,
                    getCurrentLanguage: getCurrentLanguage,
                    isPreviewPanelVisible: isPreviewPanelVisible,
                    arePreviewModelsVisible: arePreviewModelsVisible
                };
                return service;

                function getModalAnimationValue() {
                    return _configuration.modalAnimated;
                }

                function setModalAnimationFct(value) {
                    setModalAnimation(value);
                }

                function getListEnabledControl() {
                    return angular.copy(_controlsList);
                }

                function switchLanguage(language) {
                    if (angular.isString(language)) {
                        _currentLanguage = language;
                        $translate.use(language);
                    } else {
                        setDefaultLanguage();
                    }
                }

                function isPreviewPanelVisible() {
                    return _showPreviewPanel;
                }

                function arePreviewModelsVisible() {
                    return _showPreviewModels;
                }
            }
        }

        return {
            setters: [],
            execute: function () {
                EASY_FORM_STEP_WAY_CONFIG_NAME = 'easyFormSteWayConfig';
                easyFormSteWayConfig.$inject = ['$translateProvider'];

                _export('default', easyFormSteWayConfig);

                _export('EASY_FORM_STEP_WAY_CONFIG_NAME', EASY_FORM_STEP_WAY_CONFIG_NAME);
            }
        };
    });
    $__System.register('19', ['13', '17', '18'], function (_export) {
        /* global angular */
        'use strict';

        var edaStepWayEasyFormGenController, STEP_WAY_MAIN_CONTROLLER_NAME, edaStepWayEasyFormGenDirective, STEP_WAY_DIRECTIVE_NAME, easyFormSteWayConfig, EASY_FORM_STEP_WAY_CONFIG_NAME, STEP_WAY_MAIN_MODULE;
        return {
            setters: [function (_) {
                edaStepWayEasyFormGenController = _['default'];
                STEP_WAY_MAIN_CONTROLLER_NAME = _.STEP_WAY_MAIN_CONTROLLER_NAME;
            }, function (_2) {
                edaStepWayEasyFormGenDirective = _2['default'];
                STEP_WAY_DIRECTIVE_NAME = _2.STEP_WAY_DIRECTIVE_NAME;
            }, function (_3) {
                easyFormSteWayConfig = _3['default'];
                EASY_FORM_STEP_WAY_CONFIG_NAME = _3.EASY_FORM_STEP_WAY_CONFIG_NAME;
            }],
            execute: function () {
                STEP_WAY_MAIN_MODULE = 'easyFormStepwayMainModule';

                _export('default', angular.module(STEP_WAY_MAIN_MODULE, []).controller(STEP_WAY_MAIN_CONTROLLER_NAME, edaStepWayEasyFormGenController).directive(STEP_WAY_DIRECTIVE_NAME, edaStepWayEasyFormGenDirective).provider(EASY_FORM_STEP_WAY_CONFIG_NAME, easyFormSteWayConfig));
            }
        };
    });
    $__System.register('14', ['15', '16'], function (_export) {
        var _createClass, _classCallCheck, EDIT_MODAL_CONTROLLER_NAME, EDIT_MODAL_CONTROLLERAS_NAME, editControlModalController, toInject;

        return {
            setters: [function (_2) {
                _createClass = _2['default'];
            }, function (_3) {
                _classCallCheck = _3['default'];
            }],
            execute: function () {
                'use strict';

                EDIT_MODAL_CONTROLLER_NAME = 'editControlModalController';
                EDIT_MODAL_CONTROLLERAS_NAME = 'editControlModCtrl';

                editControlModalController = (function () {
                    function editControlModalController($uibModalInstance, nyaSelect, toaster, selectOptionManage, $modalProxy) {
                        _classCallCheck(this, editControlModalController);

                        this.$modalInstance = $uibModalInstance;
                        this.nyaSelect = nyaSelect;
                        this.toaster = toaster;
                        this.selectOptionManage = selectOptionManage;
                        this.$modalProxy = $modalProxy;

                        this.init();
                    }

                    _createClass(editControlModalController, [{
                        key: 'init',
                        value: function init() {
                            var initOptionModel = { rows: [] };

                            this.radioRowCollection = initOptionModel;
                            this.newOptionRadio = { saisie: '' };
                            this.basicSelectRowCollection = initOptionModel;
                            this.newOptionBasicSelect = { saisie: '' };
                            this.groupedSelectRowCollection = initOptionModel;
                            this.newOptionGroupedSelect = { saisie: '' };
                            this.GroupedSelectGroups = { list: [] };
                            this.newGroupGroupedSelect = { saisie: '' };
                            this.groupSelectGroupClick = { showList: false };
                            this.demodt = {};
                            this.dateOptions = this.dateOptionsInit();
                            this.demodt.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
                            this.nyaSelect.selectedControl = this.nyaSelect.temporyConfig.selectedControl;
                            this.nyaSelectFiltered = {};
                            this.modelNyaSelect = {};

                            //init today date
                            this.today();
                            //init nyaSelect model depending selected control
                            this.initNyaSelectConformingSelectedControl();
                        }
                    }, {
                        key: 'initNyaSelectConformingSelectedControl',
                        value: function initNyaSelectConformingSelectedControl() {
                            //place nya-select to selection if not none :
                            if (this.nyaSelect.selectedControl !== 'none') {
                                for (var i = this.nyaSelect.controls.length - 1; i >= 0; i--) {
                                    if (this.nyaSelect.controls[i].id === this.nyaSelect.selectedControl) this.modelNyaSelect = this.nyaSelect.controls[i];
                                }
                                if (this.nyaSelect.selectedControl === 'BasicSelect') this.bindBasicSelectFromNYA();
                                if (this.nyaSelect.selectedControl === 'GroupedSelect') this.bindGroupedSelectFromNYA();
                                if (this.nyaSelect.selectedControl === 'Radio') this.bindRadioFromNYA();
                            }
                            this.initNyaSelectFiltered();

                            // console.info(`modal controller : nyaSelect`);
                            // console.dir(this.nyaSelect);
                        }
                    }, {
                        key: 'initNyaSelectFiltered',
                        value: function initNyaSelectFiltered() {
                            var listCtrl = [].concat(this.$modalProxy.getFilteredNyaSelectObject());
                            angular.extend(this.nyaSelectFiltered, {
                                'controls': listCtrl,
                                'selectedControl': this.nyaSelect.selectedControl,
                                'temporyConfig': this.nyaSelect.temporyConfig
                            });
                        }
                    }, {
                        key: 'bindBasicSelectFromNYA',
                        value: function bindBasicSelectFromNYA() {
                            if (this.nyaSelect.temporyConfig.formlyOptions.length > 0) {
                                for (var i = 0; i <= this.nyaSelect.temporyConfig.formlyOptions.length - 1; i++) {
                                    var newOption = {
                                        'option': this.nyaSelect.temporyConfig.formlyOptions[i].name,
                                        'order': i,
                                        'group': ''
                                    };
                                    this.basicSelectRowCollection.rows.push(newOption);
                                }
                            }
                        }
                    }, {
                        key: 'bindRadioFromNYA',
                        value: function bindRadioFromNYA() {
                            if (this.nyaSelect.temporyConfig.formlyOptions.length > 0) {
                                for (var i = 0; i <= this.nyaSelect.temporyConfig.formlyOptions.length - 1; i++) {
                                    var newOption = {
                                        'option': this.nyaSelect.temporyConfig.formlyOptions[i].name,
                                        'order': i,
                                        'group': ''
                                    };
                                    this.radioRowCollection.rows.push(newOption);
                                }
                            }
                        }
                    }, {
                        key: 'bindGroupedSelectFromNYA',
                        value: function bindGroupedSelectFromNYA() {
                            if (this.nyaSelect.temporyConfig.formlyOptions.length > 0) {
                                for (var i = 0; i <= this.nyaSelect.temporyConfig.formlyOptions.length - 1; i++) {
                                    var newOption = {
                                        'option': this.nyaSelect.temporyConfig.formlyOptions[i].name,
                                        'order': i,
                                        'group': this.nyaSelect.temporyConfig.formlyOptions[i].group
                                    };
                                    this.groupedSelectRowCollection.rows.push(newOption);
                                }
                                var filteredgroup = _.uniq(_.pluck(this.groupedSelectRowCollection.rows, 'group'));
                                angular.copy(filteredgroup, this.GroupedSelectGroups.list);
                            }
                        }
                    }, {
                        key: 'addNewOptionRadio',
                        value: function addNewOptionRadio() {
                            var result = this.selectOptionManage.addNewOptionRadio(this.radioRowCollection, this.newOptionRadio.saisie);
                            if (result.resultFlag === false) {
                                this.toaster.pop({
                                    type: 'warning',
                                    timeout: 2000,
                                    title: result.details,
                                    body: '\'' + this.newOptionRadio.saisie + '\' cannot be added.',
                                    showCloseButton: true
                                });
                            }
                            this.newOptionRadio = { saisie: '' }; //reset input
                        }
                    }, {
                        key: 'removeRadioRow',
                        value: function removeRadioRow(index) {
                            var result = this.selectOptionManage.removeOption(this.radioRowCollection, index);
                            if (result.resultFlag === false) {
                                this.toaster.pop({
                                    type: 'warning',
                                    timeout: 2000,
                                    title: result.details,
                                    body: 'Delete was cancelled.',
                                    showCloseButton: true
                                });
                            }
                        }
                    }, {
                        key: 'upThisRadioRow',
                        value: function upThisRadioRow(index) {
                            var result = this.selectOptionManage.upthisOption(this.radioRowCollection, index);
                            if (result.resultFlag === false) {
                                this.toaster.pop({
                                    type: 'warning',
                                    timeout: 2000,
                                    title: result.details,
                                    body: 'Operation cancelled.',
                                    showCloseButton: true
                                });
                            }
                        }
                    }, {
                        key: 'downThisRadioRow',
                        value: function downThisRadioRow(index) {
                            var result = this.selectOptionManage.downthisOption(this.radioRowCollection, index);
                            if (result.resultFlag === false) {
                                this.toaster.pop({
                                    type: 'warning',
                                    timeout: 2000,
                                    title: result.details,
                                    body: 'Operation cancelled.',
                                    showCloseButton: true
                                });
                            }
                        }
                    }, {
                        key: 'addNewOptionBasicSelect',
                        value: function addNewOptionBasicSelect() {
                            var result = this.selectOptionManage.addNewOptionBasicSelect(this.basicSelectRowCollection, this.newOptionBasicSelect.saisie);
                            if (result.resultFlag === false) {
                                this.toaster.pop({
                                    type: 'warning',
                                    timeout: 2000,
                                    title: result.details,
                                    body: '\'' + this.newOptionBasicSelect.saisie + '\' cannot be added.',
                                    showCloseButton: true
                                });
                            }
                            this.newOptionBasicSelect = { saisie: '' }; //reset input
                        }
                    }, {
                        key: 'removeRow',
                        value: function removeRow(index) {
                            var result = this.selectOptionManage.removeOption(this.basicSelectRowCollection, index);
                            if (result.resultFlag === false) {
                                this.toaster.pop({
                                    type: 'warning',
                                    timeout: 2000,
                                    title: result.details,
                                    body: 'Delete was cancelled.',
                                    showCloseButton: true
                                });
                            }
                        }
                    }, {
                        key: 'upThisRow',
                        value: function upThisRow(index) {
                            var result = this.selectOptionManage.upthisOption(this.basicSelectRowCollection, index);
                            if (result.resultFlag === false) {
                                this.toaster.pop({
                                    type: 'warning',
                                    timeout: 2000,
                                    title: result.details,
                                    body: 'Operation cancelled.',
                                    showCloseButton: true
                                });
                            }
                        }
                    }, {
                        key: 'downThisRow',
                        value: function downThisRow(index) {
                            var result = this.selectOptionManage.downthisOption(this.basicSelectRowCollection, index);
                            if (result.resultFlag === false) {
                                this.toaster.pop({
                                    type: 'warning',
                                    timeout: 2000,
                                    title: result.details,
                                    body: 'Operation cancelled.',
                                    showCloseButton: true
                                });
                            }
                        }
                    }, {
                        key: 'showGroupListToChoose',
                        value: function showGroupListToChoose() {
                            this.groupSelectGroupClick.showList = !this.groupSelectGroupClick.showList;
                        }
                    }, {
                        key: 'addNewGroupToGroupedSelect',
                        value: function addNewGroupToGroupedSelect() {
                            if (this.newGroupGroupedSelect.saisie !== '') {
                                for (var i = this.GroupedSelectGroups.list.length - 1; i >= 0; i--) {
                                    if (this.GroupedSelectGroups.list[i] === this.newGroupGroupedSelect.saisie) {
                                        this.toaster.pop({
                                            type: 'warning',
                                            timeout: 2000,
                                            title: 'Group already exists',
                                            body: 'No group added.',
                                            showCloseButton: true
                                        });
                                    }
                                }
                                this.GroupedSelectGroups.list.push(this.newGroupGroupedSelect.saisie);
                            } else {
                                this.toaster.pop({
                                    type: 'warning',
                                    timeout: 2000,
                                    title: 'Not a valid group to add',
                                    body: 'No group added.',
                                    showCloseButton: true
                                });
                            }
                            this.newGroupGroupedSelect.saisie = '';
                        }
                    }, {
                        key: 'addNewOptionGroupedSelect',
                        value: function addNewOptionGroupedSelect() {
                            var result = this.selectOptionManage.addNewOptionGroupedSelect(this.groupedSelectRowCollection, this.newOptionGroupedSelect.saisie, '');
                            if (result.resultFlag === false) {
                                this.toaster.pop({
                                    type: 'warning',
                                    timeout: 2000,
                                    title: result.details,
                                    body: '\'' + this.newOptionGroupedSelect.saisie + '\' cannot be added.',
                                    showCloseButton: true
                                });
                            }
                            //bind nya : dont bind here $apply is not done fast enough
                            //bindGroupedSelectToNya();
                            //reset input
                            this.newOptionGroupedSelect = { saisie: '' };
                        }
                    }, {
                        key: 'removeGroupedSelectRow',
                        value: function removeGroupedSelectRow(index) {
                            var result = this.selectOptionManage.removeOption(this.groupedSelectRowCollection, index);
                            if (result.resultFlag === false) {
                                this.toaster.pop({
                                    type: 'warning',
                                    timeout: 2000,
                                    title: result.details,
                                    body: 'Delete was cancelled.',
                                    showCloseButton: true
                                });
                            }
                        }
                    }, {
                        key: 'upThisGroupedSelectRow',
                        value: function upThisGroupedSelectRow(index) {
                            var result = this.selectOptionManage.upthisOption(this.groupedSelectRowCollection, index);
                            if (result.resultFlag === false) {
                                this.toaster.pop({
                                    type: 'warning',
                                    timeout: 2000,
                                    title: result.details,
                                    body: 'Operation cancelled.',
                                    showCloseButton: true
                                });
                            }
                        }
                    }, {
                        key: 'downThisGroupedSelectRow',
                        value: function downThisGroupedSelectRow(index) {
                            var result = this.selectOptionManage.downthisOption(this.groupedSelectRowCollection, index);
                            if (result.resultFlag === false) {
                                this.toaster.pop({
                                    type: 'warning',
                                    timeout: 2000,
                                    title: result.details,
                                    body: 'Operation cancelled.',
                                    showCloseButton: true
                                });
                            }
                        }
                    }, {
                        key: 'today',
                        value: function today() {
                            this.demodt.dt = new Date();
                        }
                    }, {
                        key: 'clear',
                        value: function clear() {
                            this.demodt.dt = null;
                        }
                    }, {
                        key: 'open',
                        value: function open($event) {
                            $event.preventDefault();
                            $event.stopPropagation();
                            this.demodt.opened = true;
                        }
                    }, {
                        key: 'dateOptionsInit',
                        value: function dateOptionsInit() {
                            return {
                                formatYear: 'yy',
                                startingDay: 1,
                                showWeeks: true,
                                initDate: null
                            };
                        }
                    }, {
                        key: 'selectThisControl',
                        value: function selectThisControl(controlName) {
                            this.nyaSelect.selectedControl = 'none';
                            this.resetTemporyConfig();
                            for (var i = this.nyaSelect.controls.length - 1; i >= 0; i--) {
                                if (this.nyaSelect.controls[i].id === controlName) this.nyaSelect.selectedControl = this.nyaSelect.controls[i].id;
                            }
                            if (this.nyaSelect.selectedControl === 'Date') this.initDatePicker();
                        }
                    }, {
                        key: 'ok',
                        value: function ok() {
                            if (this.nyaSelect.selectedControl === 'BasicSelect') this.bindBasicSelectToNya();
                            if (this.nyaSelect.selectedControl === 'GroupedSelect') this.bindGroupedSelectToNya();
                            if (this.nyaSelect.selectedControl === 'Radio') this.bindRadioToNya();
                            //save config to control
                            this.$modalProxy.applyConfigToSelectedControl(this.nyaSelect);
                            //return current model to parent controller :
                            this.$modalInstance.close(this.nyaSelect);
                        }
                    }, {
                        key: 'cancel',
                        value: function cancel() {
                            this.$modalInstance.dismiss('cancel');
                        }
                    }, {
                        key: 'bindBasicSelectToNya',
                        value: function bindBasicSelectToNya() {
                            var resetNyASelectOptions = [];
                            this.nyaSelect.temporyConfig.formlyOptions = resetNyASelectOptions;
                            if (this.basicSelectRowCollection.rows.length > 0) {
                                for (var i = 0; i <= this.basicSelectRowCollection.rows.length - 1; i++) {
                                    var newOption = {
                                        'name': this.basicSelectRowCollection.rows[i].option,
                                        'value': i,
                                        'group': ''
                                    };
                                    this.nyaSelect.temporyConfig.formlyOptions.push(newOption);
                                }
                            }
                        }
                    }, {
                        key: 'bindGroupedSelectToNya',
                        value: function bindGroupedSelectToNya() {
                            this.nyaSelect.temporyConfig.formlyOptions = [];
                            for (var i = 0; i <= this.groupedSelectRowCollection.rows.length - 1; i++) {
                                var newOption = {
                                    'name': this.groupedSelectRowCollection.rows[i].option,
                                    'value': i,
                                    'group': this.groupedSelectRowCollection.rows[i].group
                                };
                                this.nyaSelect.temporyConfig.formlyOptions.push(newOption);
                            }
                        }
                    }, {
                        key: 'bindRadioToNya',
                        value: function bindRadioToNya() {
                            var resetNyASelectOptions = [];
                            this.nyaSelect.temporyConfig.formlyOptions = resetNyASelectOptions;
                            if (this.radioRowCollection.rows.length > 0) {
                                for (var i = 0; i <= this.radioRowCollection.rows.length - 1; i++) {
                                    var newOption = {
                                        'name': this.radioRowCollection.rows[i].option,
                                        'value': i,
                                        'group': ''
                                    };
                                    this.nyaSelect.temporyConfig.formlyOptions.push(newOption);
                                }
                            }
                        }
                    }, {
                        key: 'initDatePicker',
                        value: function initDatePicker() {
                            this.nyaSelect.temporyConfig.datepickerOptions = {
                                format: this.demodt.formats[0]
                            };
                        }
                    }, {
                        key: 'resetTemporyConfig',
                        value: function resetTemporyConfig() {
                            this.nyaSelectFiltered.temporyConfig = {
                                formlyLabel: '',
                                formlyRequired: false,
                                formlyPlaceholder: '',
                                formlyDesciption: '',
                                formlyOptions: []
                            };
                        }
                    }]);

                    return editControlModalController;
                })();

                toInject = ['$uibModalInstance', 'nyaSelect', 'toaster', 'selectOptionManage', '$modalProxy'];

                editControlModalController.$inject = toInject;

                _export('default', editControlModalController);

                _export('EDIT_MODAL_CONTROLLER_NAME', EDIT_MODAL_CONTROLLER_NAME);

                _export('EDIT_MODAL_CONTROLLERAS_NAME', EDIT_MODAL_CONTROLLERAS_NAME);
            }
        };
    });
    $__System.register('1a', ['14'], function (_export) {
        /* global angular */
        'use strict';

        var editModalController, EDIT_MODAL_CONTROLLER_NAME, EDIT_CONTROLE_MODAL_NAME;
        return {
            setters: [function (_) {
                editModalController = _['default'];
                EDIT_MODAL_CONTROLLER_NAME = _.EDIT_MODAL_CONTROLLER_NAME;
            }],
            execute: function () {
                EDIT_CONTROLE_MODAL_NAME = 'editControlModalModule';

                _export('default', angular.module(EDIT_CONTROLE_MODAL_NAME, []).controller(EDIT_MODAL_CONTROLLER_NAME, editModalController));
            }
        };
    });
    $__System.register('1b', [], function (_export) {
        /* global angular */

        'use strict';

        var resetNyaSelect, getResetConfig, returnControlFromAddCtrlModalModel, validKeyUniqueness;
        return {
            setters: [],
            execute: function () {
                resetNyaSelect = function resetNyaSelect(nyaSelectObj) {

                    var newNyaSelectObj = {
                        controls: [{
                            id: 'empty',
                            name: 'no control',
                            subtitle: 'no control',
                            group: 'Blank',
                            formlyType: 'blank',
                            formlySubtype: '',
                            formlyLabel: '',
                            formlyRequired: false,
                            formlyDesciption: '',
                            formlyOptions: [],
                            formlyExpressionProperties: {},
                            formlyValidators: {},
                            formlyValidation: {}
                        }, {
                            id: 'Header',
                            name: 'Header',
                            subtitle: 'no control',
                            group: 'Decoration',
                            formlyType: 'header',
                            formlySubtype: '',
                            formlyLabel: '',
                            formlyRequired: false,
                            formlyDesciption: '',
                            formlyOptions: [],
                            formlyExpressionProperties: {},
                            formlyValidators: {},
                            formlyValidation: {}
                        }, {
                            id: 'Subtitle',
                            name: 'Subtitle',
                            subtitle: 'no control',
                            group: 'Decoration',
                            formlyType: 'subTitle',
                            formlySubtype: '',
                            formlyLabel: '',
                            formlyRequired: false,
                            formlyDesciption: '',
                            formlyOptions: [],
                            formlyExpressionProperties: {},
                            formlyValidators: {},
                            formlyValidation: {}
                        }, {
                            id: 'TextInput',
                            name: 'Text input',
                            subtitle: 'Text input',
                            group: 'input',
                            formlyType: 'input',
                            formlySubtype: '',
                            formlyLabel: '',
                            formlyRequired: false,
                            formlyDesciption: '',
                            formlyOptions: [],
                            formlyExpressionProperties: {},
                            formlyValidators: {},
                            formlyValidation: {
                                messages: {
                                    required: function required(viewValue, modelValue, scope) {
                                        //return a required validation message :
                                        //-> '<label as name> is required '
                                        //-> or if not exists or empty just 'this field is required'
                                        var defaultReturnMsg = 'this Text input field is required';
                                        var returnMsg = typeof scope.to.label !== 'undefined' ? scope.to.label !== '' ? scope.to.label + ' is required' : defaultReturnMsg : defaultReturnMsg;
                                        return returnMsg;
                                    }
                                }
                            }
                        }, {
                            id: 'Password',
                            name: 'Password',
                            subtitle: 'Password',
                            group: 'input',
                            formlyType: 'input',
                            formlySubtype: 'password',
                            formlyLabel: '',
                            formlyRequired: false,
                            formlyDesciption: '',
                            formlyOptions: [],
                            formlyExpressionProperties: {},
                            formlyValidators: {},
                            formlyValidation: {
                                messages: {
                                    required: function required(viewValue, modelValue, scope) {
                                        //return a required validation message :
                                        //-> '<label as name> is required '
                                        //-> or if not exists or empty just 'this field is required'
                                        var defaultReturnMsg = 'this Password field is required';
                                        var returnMsg = typeof scope.to.label !== 'undefined' ? scope.to.label !== '' ? scope.to.label + ' is required' : defaultReturnMsg : defaultReturnMsg;
                                        return returnMsg;
                                    }
                                }
                            }
                        }, {
                            id: 'Email',
                            name: 'Email',
                            subtitle: 'Email',
                            group: 'input',
                            formlyType: 'input',
                            formlySubtype: 'email',
                            formlyLabel: '',
                            formlyRequired: false,
                            formlyDesciption: '',
                            formlyOptions: [],
                            formlyExpressionProperties: {},
                            formlyValidators: {
                                emailShape: {
                                    expression: function expression(viewValue, modelValue) {
                                        var value = modelValue || viewValue;
                                        return (/^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/.test(value)
                                        );
                                    },
                                    message: '$viewValue + \' is not a valid email\''
                                }
                            },
                            formlyValidation: {
                                messages: {
                                    required: function required(viewValue, modelValue, scope) {
                                        //return a required validation message :
                                        //-> '<label as name> is required '
                                        //-> or if not exists or empty just 'this field is required'
                                        var defaultReturnMsg = 'this Email field is required';
                                        var returnMsg = typeof scope.to.label !== 'undefined' ? scope.to.label !== '' ? scope.to.label + ' is required' : defaultReturnMsg : defaultReturnMsg;
                                        //check if validation is really dued to require validation
                                        //and not another validation like emailShape validator
                                        if (scope.to.required) return returnMsg;
                                    }
                                }
                            }
                        }, {
                            id: 'Date',
                            name: 'Date',
                            subtitle: 'Date',
                            group: 'input',
                            formlyType: 'datepicker',
                            formlySubtype: '',
                            formlyLabel: '',
                            formlyRequired: false,
                            formlyDesciption: '',
                            formlyOptions: [],
                            datepickerOptions: 'dd-MMMM-yyyy',
                            formlyExpressionProperties: {},
                            formlyValidators: {},
                            formlyValidation: {
                                messages: {
                                    required: function required(viewValue, modelValue, scope) {
                                        //return a required validation message :
                                        //-> '<label as name> is required '
                                        //-> or if not exists or empty just 'this field is required'
                                        var defaultReturnMsg = 'this Date field is required';
                                        var returnMsg = typeof scope.to.label !== 'undefined' ? scope.to.label !== '' ? scope.to.label + ' is required' : defaultReturnMsg : defaultReturnMsg;
                                        return returnMsg;
                                    }
                                }
                            }
                        }, {
                            id: 'Texarea',
                            name: 'Textarea',
                            subtitle: 'Textarea',
                            group: 'Textarea',
                            formlyType: 'textarea',
                            formlySubtype: '',
                            formlyLabel: '',
                            formlyRequired: false,
                            formlyDesciption: '',
                            formlyOptions: [],
                            formlyExpressionProperties: {},
                            formlyValidators: {},
                            formlyValidation: {
                                messages: {
                                    required: function required(viewValue, modelValue, scope) {
                                        //return a required validation message :
                                        //-> '<label as name> is required '
                                        //-> or if not exists or empty just 'this field is required'
                                        var defaultReturnMsg = 'this Textarea field is required';
                                        var returnMsg = typeof scope.to.label !== 'undefined' ? scope.to.label !== '' ? scope.to.label + ' is required' : defaultReturnMsg : defaultReturnMsg;
                                        return returnMsg;
                                    }
                                }
                            }
                        }, {
                            id: 'RichTextEditor',
                            name: 'RichTextEditor',
                            subtitle: 'RichTextEditor',
                            group: 'Textarea',
                            formlyType: 'richEditor',
                            formlySubtype: '',
                            formlyLabel: '',
                            formlyRequired: false,
                            formlyDesciption: '',
                            formlyOptions: [],
                            formlyExpressionProperties: {},
                            formlyValidators: {},
                            formlyValidation: {
                                messages: {
                                    required: function required(viewValue, modelValue, scope) {
                                        //return a required validation message :
                                        //-> '<label as name> is required '
                                        //-> or if not exists or empty just 'this field is required'
                                        var defaultReturnMsg = 'this RichTextEditor field is required';
                                        var returnMsg = typeof scope.to.label !== 'undefined' ? scope.to.label !== '' ? scope.to.label + ' is required' : defaultReturnMsg : defaultReturnMsg;
                                        return returnMsg;
                                    }
                                }
                            }
                        }, {
                            id: 'Radio',
                            name: 'Radio',
                            subtitle: 'Radio',
                            options: [],
                            group: 'Radio',
                            formlyType: 'radio',
                            formlySubtype: '',
                            formlyLabel: '',
                            formlyRequired: false,
                            formlyDesciption: '',
                            formlyOptions: [],
                            formlyExpressionProperties: {},
                            formlyValidators: {},
                            formlyValidation: {
                                messages: {
                                    required: function required(viewValue, modelValue, scope) {
                                        //return a required validation message :
                                        //-> '<label as name> is required '
                                        //-> or if not exists or empty just 'this field is required'
                                        var defaultReturnMsg = 'this Password field is required';
                                        var returnMsg = typeof scope.to.label !== 'undefined' ? scope.to.label !== '' ? scope.to.label + ' is required' : defaultReturnMsg : defaultReturnMsg;
                                        return returnMsg;
                                    }
                                }
                            }
                        }, {
                            id: 'Checkbox',
                            name: 'Checkbox',
                            subtitle: 'Checkbox',
                            group: 'Checkbox',
                            formlyType: 'checkbox',
                            formlySubtype: '',
                            formlyLabel: '',
                            formlyRequired: false,
                            formlyDesciption: '',
                            formlyOptions: [],
                            formlyExpressionProperties: {},
                            formlyValidators: {},
                            formlyValidation: {
                                messages: {
                                    required: function required(viewValue, modelValue, scope) {
                                        //return a required validation message :
                                        //-> '<label as name> is required '
                                        //-> or if not exists or empty just 'this field is required'
                                        var defaultReturnMsg = 'this Checkbox field is required';
                                        var returnMsg = typeof scope.to.label !== 'undefined' ? scope.to.label !== '' ? scope.to.label + ' is required' : defaultReturnMsg : defaultReturnMsg;
                                        return returnMsg;
                                    }
                                }
                            }
                        }, {
                            id: 'BasicSelect',
                            name: 'Basic select',
                            subtitle: 'Basic select',
                            options: [],
                            group: 'Select',
                            formlyType: 'basicSelect',
                            formlySubtype: '',
                            formlyLabel: '',
                            formlyRequired: false,
                            formlyDesciption: '',
                            formlyOptions: [],
                            formlyExpressionProperties: {},
                            formlyValidators: {},
                            formlyValidation: {
                                messages: {
                                    required: function required(viewValue, modelValue, scope) {
                                        //return a required validation message :
                                        //-> '<label as name> is required '
                                        //-> or if not exists or empty just 'this field is required'
                                        var defaultReturnMsg = 'this Basic select field is required';
                                        var returnMsg = typeof scope.to.label !== 'undefined' ? scope.to.label !== '' ? scope.to.label + ' is required' : defaultReturnMsg : defaultReturnMsg;
                                        return returnMsg;
                                    }
                                }
                            }
                        }, {
                            id: 'GroupedSelect',
                            name: 'Grouped Select',
                            subtitle: 'Grouped Select',
                            options: [],
                            group: 'Select',
                            formlyType: 'groupedSelect',
                            formlySubtype: '',
                            formlyLabel: '',
                            formlyRequired: false,
                            formlyDesciption: '',
                            formlyOptions: [],
                            formlyExpressionProperties: {},
                            formlyValidators: {},
                            formlyValidation: {
                                messages: {
                                    required: function required(viewValue, modelValue, scope) {
                                        //return a required validation message :
                                        //-> '<label as name> is required '
                                        //-> or if not exists or empty just 'this field is required'
                                        var defaultReturnMsg = 'this Grouped Select field is required';
                                        var returnMsg = typeof scope.to.label !== 'undefined' ? scope.to.label !== '' ? scope.to.label + ' is required' : defaultReturnMsg : defaultReturnMsg;
                                        return returnMsg;
                                    }
                                }
                            }
                        }],
                        selectedControl: 'none',
                        temporyConfig: {
                            selectedControl: 'none',
                            formlyLabel: '',
                            formlyRequired: false,
                            formlyDesciption: '',
                            formlyPlaceholder: '',
                            formlyOptions: [],
                            //expressions/validation fields
                            formlyExpressionProperties: {},
                            formlyValidators: {},
                            formlyValidation: {}
                        }

                    };

                    //reset
                    angular.copy(newNyaSelectObj, nyaSelectObj);
                    return true;
                };

                getResetConfig = function getResetConfig() {
                    var emptyConfig = {};
                    angular.extend(emptyConfig, {
                        formlyLabel: '',
                        formlyRequired: false,
                        formlyPlaceholder: '',
                        formlyDesciption: '',
                        formlyOptions: []
                    });
                    return emptyConfig;
                };

                /**
                 * data passed back to parent controller
                 * after control being finsihed editing in modal
                 */

                returnControlFromAddCtrlModalModel = function returnControlFromAddCtrlModalModel(CtrlModalModel) {

                    var modelToReturn = {
                        selectedControl: 'none',
                        formlyType: 'none',
                        formlySubtype: 'none',
                        formlyLabel: '',
                        formlyRequired: false,
                        formlyDesciption: '',
                        formlyPlaceholder: '',
                        formlyOptions: [],
                        //validation fields
                        formlyExpressionProperties: {},
                        formlyValidators: {},
                        formlyValidation: {}
                    };

                    for (var i = CtrlModalModel.controls.length - 1; i >= 0; i--) {
                        if (CtrlModalModel.selectedControl === CtrlModalModel.controls[i].id) {
                            modelToReturn.selectedControl = CtrlModalModel.selectedControl;
                            modelToReturn.formlyType = CtrlModalModel.controls[i].formlyType;
                            modelToReturn.formlySubtype = CtrlModalModel.controls[i].formlySubtype;
                            modelToReturn.formlyLabel = CtrlModalModel.controls[i].formlyLabel;
                            modelToReturn.formlyRequired = CtrlModalModel.controls[i].formlyRequired;
                            modelToReturn.formlyDesciption = CtrlModalModel.controls[i].formlyDesciption;
                            modelToReturn.formlyPlaceholder = CtrlModalModel.controls[i].formlyPlaceholder;
                            modelToReturn.formlyOptions = CtrlModalModel.controls[i].formlyOptions;

                            modelToReturn.formlyExpressionProperties = angular.copy(CtrlModalModel.controls[i].formlyExpressionProperties);
                            modelToReturn.formlyValidators = angular.copy(CtrlModalModel.controls[i].formlyValidators);
                            modelToReturn.formlyValidation = angular.copy(CtrlModalModel.controls[i].formlyValidation);

                            //particular properties
                            //datetpicker format
                            if (CtrlModalModel.controls[i].formlyType === 'datepicker') {
                                modelToReturn.datepickerOptions = CtrlModalModel.controls[i].datepickerOptions;
                            }
                        }
                    }
                    return modelToReturn;
                };

                /**
                 * validKeyUniqueness
                 * to be sure the "keys" are unique (in same formly field model)
                 */

                validKeyUniqueness = function validKeyUniqueness(thisKey, configurationObj) {
                    var isUnique = true;
                    //each lines
                    for (var i = configurationObj.lines.length - 1; i >= 0; i--) {
                        //each columns
                        for (var j = configurationObj.lines[i].columns.length - 1; j >= 0; j--) {
                            if (configurationObj.lines[i].columns[j].control.key === thisKey) {
                                isUnique = false;
                            }
                        }
                    }
                    return isUnique;
                };

                _export('resetNyaSelect', resetNyaSelect);

                _export('returnControlFromAddCtrlModalModel', returnControlFromAddCtrlModalModel);

                _export('validKeyUniqueness', validKeyUniqueness);

                _export('getResetConfig', getResetConfig);
            }
        };
    });
    $__System.register('1c', ['15', '16', '1b'], function (_export) {
        var _createClass, _classCallCheck, resetNyaSelect, returnControlFromAddCtrlModalModel, validKeyUniqueness, getResetConfig, CONTROLLER_MODAL_PROXY_SERVICE, $modalProxy;

        return {
            setters: [function (_) {
                _createClass = _['default'];
            }, function (_2) {
                _classCallCheck = _2['default'];
            }, function (_b) {
                resetNyaSelect = _b.resetNyaSelect;
                returnControlFromAddCtrlModalModel = _b.returnControlFromAddCtrlModalModel;
                validKeyUniqueness = _b.validKeyUniqueness;
                getResetConfig = _b.getResetConfig;
            }],
            execute: function () {
                'use strict';

                CONTROLLER_MODAL_PROXY_SERVICE = '$modalProxy';

                $modalProxy = (function () {
                    function $modalProxy(easyFormSteWayConfig) {
                        _classCallCheck(this, $modalProxy);

                        this.easyFormSteWayConfig = easyFormSteWayConfig;
                    }

                    _createClass($modalProxy, [{
                        key: 'initNyaSelect',
                        value: function initNyaSelect(nyaSelectObj) {
                            return resetNyaSelect(nyaSelectObj);
                        }
                    }, {
                        key: 'getControlsDefinition',
                        value: function getControlsDefinition() {
                            var controls = {};
                            resetNyaSelect(controls);
                            return controls;
                        }
                    }, {
                        key: 'getNyASelectFromSelectedLineColumn',
                        value: function getNyASelectFromSelectedLineColumn(nyaSelectObj, configurationObj, indexLine, numcolumn) {
                            resetNyaSelect(nyaSelectObj);
                            /**
                             * data send to modal controller
                             */
                            if (typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions != 'undefined') {

                                nyaSelectObj.temporyConfig.selectedControl = typeof configurationObj.lines[indexLine].columns[numcolumn].control.selectedControl != 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.selectedControl : 'none';
                                nyaSelectObj.temporyConfig.formlyLabel = typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.label != 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.label : '';
                                nyaSelectObj.temporyConfig.formlyRequired = typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.required != 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.required : '';
                                nyaSelectObj.temporyConfig.formlyDesciption = typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.description != 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.description : '';
                                nyaSelectObj.temporyConfig.formlyPlaceholder = typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.placeholder != 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.placeholder : '';
                                nyaSelectObj.temporyConfig.formlyOptions = typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.options != 'undefined' ? configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.options : '';

                                nyaSelectObj.temporyConfig.formlyExpressionProperties = typeof configurationObj.lines[indexLine].columns[numcolumn].control.formlyExpressionProperties != 'undefined' ? angular.copy(configurationObj.lines[indexLine].columns[numcolumn].control.formlyExpressionProperties) : {};
                                nyaSelectObj.temporyConfig.formlyValidators = typeof configurationObj.lines[indexLine].columns[numcolumn].control.formlyValidators != 'undefined' ? angular.copy(configurationObj.lines[indexLine].columns[numcolumn].control.formlyValidators) : {};
                                nyaSelectObj.temporyConfig.formlyValidation = typeof configurationObj.lines[indexLine].columns[numcolumn].control.formlyValidation != 'undefined' ? angular.copy(configurationObj.lines[indexLine].columns[numcolumn].control.formlyValidation) : {};

                                // particular case : datepicker
                                if (nyaSelectObj.temporyConfig.selectedControl === 'Date') {
                                    nyaSelectObj.temporyConfig.datepickerOptions = typeof configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.datepickerOptions != 'undefined' ? angular.copy(configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.datepickerOptions) : '';
                                }
                            }
                            return nyaSelectObj;
                        }
                    }, {
                        key: 'bindConfigurationModelFromModalReturn',
                        value: function bindConfigurationModelFromModalReturn(indexLine, numcolumn, modalAddCtrlModel, configurationObj) {

                            var extractedProps = returnControlFromAddCtrlModalModel(modalAddCtrlModel);
                            configurationObj.lines[indexLine].columns[numcolumn].control.selectedControl = extractedProps.selectedControl;
                            configurationObj.lines[indexLine].columns[numcolumn].control.type = extractedProps.formlyType;
                            configurationObj.lines[indexLine].columns[numcolumn].control.subtype = extractedProps.formlySubtype;
                            //reset templateOptions
                            configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions = {
                                label: '',
                                required: false,
                                description: '',
                                placeholder: '',
                                options: []
                            };
                            //then bind templateOptions
                            configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.label = extractedProps.formlyLabel;
                            configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.required = extractedProps.formlyRequired;
                            configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.description = extractedProps.formlyDesciption;
                            configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.placeholder = extractedProps.formlyPlaceholder;
                            configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.options = extractedProps.formlyOptions;
                            configurationObj.lines[indexLine].columns[numcolumn].control.formlyExpressionProperties = angular.copy(extractedProps.formlyExpressionProperties);
                            configurationObj.lines[indexLine].columns[numcolumn].control.formlyValidators = angular.copy(extractedProps.formlyValidators);
                            configurationObj.lines[indexLine].columns[numcolumn].control.formlyValidation = angular.copy(extractedProps.formlyValidation);

                            //////////////////////////////////////////
                            // add additionnal particular properties
                            //////////////////////////////////////////
                            //-> datepicker : datepickerOptions
                            if (configurationObj.lines[indexLine].columns[numcolumn].control.type === 'datepicker') {
                                configurationObj.lines[indexLine].columns[numcolumn].control.templateOptions.datepickerOptions = angular.copy(extractedProps.datepickerOptions);
                            }
                            /**
                             * unique key (set only first time) in this model is formly control type + Date.now();
                             */
                            var newKey = configurationObj.lines[indexLine].columns[numcolumn].control.type + '-' + Date.now();

                            if (validKeyUniqueness(newKey, configurationObj) === true) {
                                configurationObj.lines[indexLine].columns[numcolumn].control.key = newKey;
                            } else {
                                /**
                                 * 2nd attempt
                                 */
                                newKey = configurationObj.lines[indexLine].columns[numcolumn].control.type + '-' + Date.now();

                                if (validKeyUniqueness(newKey, configurationObj) === true) {
                                    configurationObj.lines[indexLine].columns[numcolumn].control.key = newKey;
                                } else {
                                    /**
                                     * 3rd attempt
                                     */
                                    newKey = configurationObj.lines[indexLine].columns[numcolumn].control.type + '-' + Date.now();
                                }
                            }
                            configurationObj.lines[indexLine].columns[numcolumn].control.edited = true;
                        }
                    }, {
                        key: 'applyConfigToSelectedControl',
                        value: function applyConfigToSelectedControl(nyaSelectObj) {
                            /**
                             * used in modal (edit control)
                             */
                            for (var i = nyaSelectObj.controls.length - 1; i >= 0; i--) {
                                if (nyaSelectObj.controls[i].id === nyaSelectObj.selectedControl) {

                                    nyaSelectObj.controls[i].formlyLabel = nyaSelectObj.temporyConfig.formlyLabel;
                                    nyaSelectObj.controls[i].formlyRequired = nyaSelectObj.temporyConfig.formlyRequired;
                                    nyaSelectObj.controls[i].formlyDesciption = nyaSelectObj.temporyConfig.formlyDesciption;
                                    nyaSelectObj.controls[i].formlyPlaceholder = nyaSelectObj.temporyConfig.formlyPlaceholder;
                                    nyaSelectObj.controls[i].formlyOptions = nyaSelectObj.temporyConfig.formlyOptions;

                                    if (nyaSelectObj.controls[i].id === 'Date') {
                                        nyaSelectObj.controls[i].datepickerOptions = angular.copy(nyaSelectObj.temporyConfig.datepickerOptions);
                                    }
                                }
                            }
                        }
                    }, {
                        key: 'resetTemporyConfig',
                        value: function resetTemporyConfig() {
                            return getResetConfig();
                        }

                        /**
                         * loading forms will not be able to retrieve formlyExpressionProperties
                         * -> here does the job
                         */
                    }, {
                        key: 'refreshControlFormlyExpressionProperties',
                        value: function refreshControlFormlyExpressionProperties(configurationModel) {
                            var _this = this;

                            if (angular.isObject(configurationModel)) {
                                //iterates lines
                                angular.forEach(configurationModel.lines, function (line, indexLine) {
                                    angular.forEach(line.columns, function (column, controlIndex) {
                                        var _controlsDefinition = _this.getControlsDefinition();
                                        angular.forEach(_controlsDefinition.controls, function (aControl, aControlIndex) {
                                            if (column.control.type === aControl.formlyType && column.control.subtype === aControl.formlySubtype) {
                                                //----> update control formlyExpressionProperties property
                                                column.control.formlyExpressionProperties = aControl.formlyExpressionProperties;
                                            }
                                        });
                                    });
                                });
                            }
                        }

                        /**
                         * loading forms will not be able to retrieve formlyValidators
                         * -> here does the job
                         */
                    }, {
                        key: 'refreshControlFormlyValidators',
                        value: function refreshControlFormlyValidators(configurationModel) {
                            var _this2 = this;

                            if (angular.isObject(configurationModel)) {
                                //iterates lines
                                angular.forEach(configurationModel.lines, function (line, indexLine) {
                                    angular.forEach(line.columns, function (column, controlIndex) {
                                        var _controlsDefinition = _this2.getControlsDefinition();
                                        angular.forEach(_controlsDefinition.controls, function (aControl, aControlIndex) {
                                            if (column.control.type === aControl.formlyType && column.control.subtype === aControl.formlySubtype) {
                                                //----> update control formlyValidators property
                                                column.control.formlyValidators = aControl.formlyValidators;
                                            }
                                        });
                                    });
                                });
                            }
                        }

                        /**
                         * loading forms will not be able to retrieve formlyValidation
                         * -> here does the job
                         */
                    }, {
                        key: 'refreshControlFormlyValidation',
                        value: function refreshControlFormlyValidation(configurationModel) {
                            var _this3 = this;

                            if (angular.isObject(configurationModel)) {
                                //iterates lines
                                angular.forEach(configurationModel.lines, function (line, indexLine) {
                                    angular.forEach(line.columns, function (column, controlIndex) {
                                        var _controlsDefinition = _this3.getControlsDefinition();
                                        angular.forEach(_controlsDefinition.controls, function (aControl, aControlIndex) {
                                            if (column.control.type === aControl.formlyType && column.control.subtype === aControl.formlySubtype) {
                                                //----> update control formlyValidation property
                                                column.control.formlyValidation = aControl.formlyValidation;
                                            }
                                        });
                                    });
                                });
                            }
                        }
                    }, {
                        key: 'filterDisabledControl',
                        value: function filterDisabledControl(nyaSelectObj) {
                            var listAllEnabledControl = this.easyFormSteWayConfig.getListEnabledControl();
                            var filteredNyaList = [];
                            angular.forEach(listAllEnabledControl, function (enabledControl) {
                                angular.forEach(nyaSelectObj.controls, function (nyaControl) {
                                    if (nyaControl.id === enabledControl.name && enabledControl.enabled === true) {
                                        filteredNyaList = filteredNyaList.concat(nyaControl);
                                    }
                                });
                            });
                            return filteredNyaList;
                        }
                    }, {
                        key: 'getFilteredNyaSelectObject',
                        value: function getFilteredNyaSelectObject() {
                            var newNyaSelectObj = {};
                            resetNyaSelect(newNyaSelectObj);
                            return angular.copy(this.filterDisabledControl(angular.copy(newNyaSelectObj)));
                            //return angular.copy(angular.copy(newNyaSelectObj));
                        }
                    }]);

                    return $modalProxy;
                })();

                $modalProxy.$inject = ['easyFormSteWayConfig'];

                _export('default', $modalProxy);

                _export('CONTROLLER_MODAL_PROXY_SERVICE', CONTROLLER_MODAL_PROXY_SERVICE);
            }
        };
    });
    $__System.register('1d', ['1c'], function (_export) {
        /* global angular */
        'use strict';

        var $modalProxy, CONTROLLER_MODAL_PROXY_SERVICE, MODAL_PROXY_MODULE_NAME;
        return {
            setters: [function (_c) {
                $modalProxy = _c['default'];
                CONTROLLER_MODAL_PROXY_SERVICE = _c.CONTROLLER_MODAL_PROXY_SERVICE;
            }],
            execute: function () {
                MODAL_PROXY_MODULE_NAME = 'modalProxyModule';

                _export('default', angular.module(MODAL_PROXY_MODULE_NAME, []).service(CONTROLLER_MODAL_PROXY_SERVICE, $modalProxy));
            }
        };
    });
    $__System.register('1e', [], function (_export) {
        /* global angular */

        'use strict';

        var configurationModelInit, configurationModelResult, isTemplateOptionDefined, extractTemplateOptionLabel, extractTemplateOptionDatepickerOptions, extractFormlyExpressionProperties, extractFormlyValidators, extractFormlyValidation, extractTemplateOptionRequired, extractTemplateOptionOptions, extractTemplateOptionType, extractTemplateOptionPlaceholder, extractTemplateOptionDescription, addDatepickerOptionsProperty, addOneColumnHeader, addOneColumnControl, addTwoColumnControl, addThreeColumnControl, resetDataModel, resetFormlyModel;
        return {
            setters: [],
            execute: function () {
                configurationModelInit = {
                    activeLine: 1,
                    listConfigStep: ['init', 'first', 'second', 'third'],
                    stepIndicators: [true, false, false, false],
                    configStepCounter: 0,
                    submitButtonText: 'submit',
                    cancelButtonText: 'cancel',
                    lines: [{
                        line: 1,
                        activeColumn: 1,
                        columns: [{
                            numColumn: 1,
                            exist: true,
                            control: {
                                type: 'none',
                                key: 'none' // ,
                                // templateOptions: {
                                //                     label: 'none',
                                //                     placeholder: 'none',
                                //                     required: false,
                                //                     description: 'Descriptive text'
                                //                   }
                            }
                        }]
                    }]
                };
                configurationModelResult = {
                    activeLine: 1,
                    listConfigStep: ['init', 'first', 'second', 'third'],
                    stepIndicators: [true, false, false, false],
                    configStepCounter: 0,
                    submitButtonText: 'submit',
                    cancelButtonText: 'cancel',
                    lines: []
                };

                isTemplateOptionDefined = function isTemplateOptionDefined(obj) {
                    return typeof obj.templateOptions !== 'undefined' ? true : false;
                };

                extractTemplateOptionLabel = function extractTemplateOptionLabel(obj) {
                    return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.label !== 'undefined' ? obj.templateOptions.label : '' : '';
                };

                extractTemplateOptionDatepickerOptions = function extractTemplateOptionDatepickerOptions(obj) {
                    return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.datepickerOptions !== 'undefined' ? angular.copy(obj.templateOptions.datepickerOptions) : { format: '' } : { format: '' };
                };

                extractFormlyExpressionProperties = function extractFormlyExpressionProperties(obj) {
                    return typeof obj.formlyExpressionProperties !== 'undefined' ? angular.copy(obj.formlyExpressionProperties) : {};
                };

                extractFormlyValidators = function extractFormlyValidators(obj) {
                    return typeof obj.formlyValidators !== 'undefined' ? angular.copy(obj.formlyValidators) : {};
                };

                extractFormlyValidation = function extractFormlyValidation(obj) {
                    return typeof obj.formlyValidation !== 'undefined' ? angular.copy(obj.formlyValidation) : {};
                };

                extractTemplateOptionRequired = function extractTemplateOptionRequired(obj) {
                    return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.required !== 'undefined' ? obj.templateOptions.required : '' : '';
                };

                extractTemplateOptionOptions = function extractTemplateOptionOptions(obj) {
                    return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.options !== 'undefined' ? obj.templateOptions.options : '' : '';
                };

                extractTemplateOptionType = function extractTemplateOptionType(obj) {
                    return typeof obj.subtype !== 'undefined' ? obj.subtype : '';
                };

                extractTemplateOptionPlaceholder = function extractTemplateOptionPlaceholder(obj) {
                    return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.placeholder !== 'undefined' ? obj.templateOptions.placeholder : '' : '';
                };

                extractTemplateOptionDescription = function extractTemplateOptionDescription(obj) {
                    return typeof obj.templateOptions !== 'undefined' ? typeof obj.templateOptions.description !== 'undefined' ? obj.templateOptions.description : '' : '';
                };

                addDatepickerOptionsProperty = function addDatepickerOptionsProperty(fieldToPush, configurationModel, lineIndex) {
                    fieldToPush.templateOptions.datepickerOptions = extractTemplateOptionDatepickerOptions(configurationModel.lines[lineIndex].columns[0].control);
                };

                addOneColumnHeader = function addOneColumnHeader(formlyModel, configurationModel, lineIndex) {
                    var headerTemplateCol0 = '<div class="row"><div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"><h2 class="text-center">' + extractTemplateOptionDescription(configurationModel.lines[lineIndex].columns[0].control) + '<h2></div></div><hr/>';
                    formlyModel.push({
                        template: typeof configurationModel.lines[lineIndex].columns[0].control.type !== 'undefined' ? configurationModel.lines[lineIndex].columns[0].control.type === 'header' ? headerTemplateCol0 : '<div></div>' : '<div></div>'
                    });
                };

                addOneColumnControl = function addOneColumnControl(formlyModel, configurationModel, lineIndex) {
                    var fieldToPush = {
                        className: 'col-xs-12',
                        type: typeof configurationModel.lines[lineIndex].columns[0].control.type !== 'undefined' ? configurationModel.lines[lineIndex].columns[0].control.type === 'none' ? 'blank' : configurationModel.lines[lineIndex].columns[0].control.type : 'blank',
                        key: typeof configurationModel.lines[lineIndex].columns[0].control.key !== 'undefined' ? configurationModel.lines[lineIndex].columns[0].control.key : 'blank' + Date.now(),
                        templateOptions: {
                            type: extractTemplateOptionType(configurationModel.lines[lineIndex].columns[0].control),
                            label: extractTemplateOptionLabel(configurationModel.lines[lineIndex].columns[0].control),
                            required: extractTemplateOptionRequired(configurationModel.lines[lineIndex].columns[0].control),
                            placeholder: extractTemplateOptionPlaceholder(configurationModel.lines[lineIndex].columns[0].control),
                            description: extractTemplateOptionDescription(configurationModel.lines[lineIndex].columns[0].control),
                            options: extractTemplateOptionOptions(configurationModel.lines[lineIndex].columns[0].control)
                        },
                        expressionProperties: extractFormlyExpressionProperties(configurationModel.lines[lineIndex].columns[0].control),
                        validators: extractFormlyValidators(configurationModel.lines[lineIndex].columns[0].control),
                        validation: extractFormlyValidation(configurationModel.lines[lineIndex].columns[0].control)
                    };
                    //////////////////////////////////////////////
                    //datepicker additionnal particular property
                    //////////////////////////////////////////////
                    if (configurationModel.lines[lineIndex].columns[0].control.type === 'datepicker') {
                        addDatepickerOptionsProperty(fieldToPush, configurationModel, lineIndex);
                    }

                    formlyModel.push(fieldToPush);
                };

                addTwoColumnControl = function addTwoColumnControl(formlyModel, configurationModel, lineIndex) {

                    //text header is stored in "description" in templateOtion model
                    var headerTemplateCol0 = {
                        className: 'col-xs-6',
                        template: '<div class="row"><div class=""><h2 class="text-center">' + extractTemplateOptionDescription(configurationModel.lines[lineIndex].columns[0].control) + '<h2><hr/></div></div>'
                    };

                    var headerTemplateCol1 = {
                        className: 'col-xs-6',
                        template: '<div class="row"><div class=""><h2 class="text-center">' + extractTemplateOptionDescription(configurationModel.lines[lineIndex].columns[1].control) + '<h2><hr/></div></div>'
                    };

                    var controlCol0 = {
                        className: 'col-xs-6',
                        type: typeof configurationModel.lines[lineIndex].columns[0].control.type !== 'undefined' ? configurationModel.lines[lineIndex].columns[0].control.type === 'none' ? 'blank' : configurationModel.lines[lineIndex].columns[0].control.type : 'blank',
                        key: typeof configurationModel.lines[lineIndex].columns[0].control.key !== 'undefined' ? configurationModel.lines[lineIndex].columns[0].control.key : 'blank' + Date.now(),
                        templateOptions: {
                            type: extractTemplateOptionType(configurationModel.lines[lineIndex].columns[0].control),
                            label: extractTemplateOptionLabel(configurationModel.lines[lineIndex].columns[0].control),
                            required: extractTemplateOptionRequired(configurationModel.lines[lineIndex].columns[0].control),
                            placeholder: extractTemplateOptionPlaceholder(configurationModel.lines[lineIndex].columns[0].control),
                            description: extractTemplateOptionDescription(configurationModel.lines[lineIndex].columns[0].control),
                            options: extractTemplateOptionOptions(configurationModel.lines[lineIndex].columns[0].control)
                        },
                        expressionProperties: extractFormlyExpressionProperties(configurationModel.lines[lineIndex].columns[0].control),
                        validators: extractFormlyValidators(configurationModel.lines[lineIndex].columns[0].control),
                        validation: extractFormlyValidation(configurationModel.lines[lineIndex].columns[0].control)
                    };
                    //////////////////////////////////////////////
                    //datepicker additionnal particular property
                    //////////////////////////////////////////////
                    if (configurationModel.lines[lineIndex].columns[0].control.type === 'datepicker') {
                        addDatepickerOptionsProperty(controlCol0, configurationModel, lineIndex);
                    }

                    var controlCol1 = {
                        className: 'col-xs-6',
                        type: typeof configurationModel.lines[lineIndex].columns[1].control.type !== 'undefined' ? configurationModel.lines[lineIndex].columns[1].control.type === 'none' ? 'blank' : configurationModel.lines[lineIndex].columns[1].control.type : 'blank',
                        key: typeof configurationModel.lines[lineIndex].columns[1].control.key !== 'undefined' ? configurationModel.lines[lineIndex].columns[1].control.key : 'blank' + Date.now(),
                        templateOptions: {
                            type: extractTemplateOptionType(configurationModel.lines[lineIndex].columns[1].control),
                            label: extractTemplateOptionLabel(configurationModel.lines[lineIndex].columns[1].control),
                            required: extractTemplateOptionRequired(configurationModel.lines[lineIndex].columns[1].control),
                            placeholder: extractTemplateOptionPlaceholder(configurationModel.lines[lineIndex].columns[1].control),
                            description: extractTemplateOptionDescription(configurationModel.lines[lineIndex].columns[1].control),
                            options: extractTemplateOptionOptions(configurationModel.lines[lineIndex].columns[1].control)
                        },
                        expressionProperties: extractFormlyExpressionProperties(configurationModel.lines[lineIndex].columns[1].control),
                        validators: extractFormlyValidators(configurationModel.lines[lineIndex].columns[1].control),
                        validation: extractFormlyValidation(configurationModel.lines[lineIndex].columns[1].control)
                    };

                    //////////////////////////////////////////////
                    //datepicker additionnal particular property
                    //////////////////////////////////////////////
                    if (configurationModel.lines[lineIndex].columns[1].control.type === 'datepicker') {
                        addDatepickerOptionsProperty(controlCol1, configurationModel, lineIndex);
                    }

                    var FieldGroup = [];

                    if (configurationModel.lines[lineIndex].columns[0].control.type === 'header') {
                        FieldGroup.push(headerTemplateCol0);
                    } else {
                        FieldGroup.push(controlCol0);
                    }

                    if (configurationModel.lines[lineIndex].columns[1].control.type === 'header') {
                        FieldGroup.push(headerTemplateCol1);
                    } else {
                        FieldGroup.push(controlCol1);
                    }

                    formlyModel.push({
                        className: 'row',
                        fieldGroup: FieldGroup
                    });
                };

                addThreeColumnControl = function addThreeColumnControl(formlyModel, configurationModel, lineIndex) {
                    //text header is stored in "description" in templateOtion model
                    var headerTemplateCol0 = {
                        className: 'col-xs-4',
                        template: '<div class="row"><div class=""><h2 class="text-center">' + extractTemplateOptionDescription(configurationModel.lines[lineIndex].columns[0].control) + '<h2><hr/></div></div>'
                    };

                    var headerTemplateCol1 = {
                        className: 'col-xs-4',
                        template: '<div class="row"><div class=""><h2 class="text-center">' + extractTemplateOptionDescription(configurationModel.lines[lineIndex].columns[1].control) + '<h2><hr/></div></div>'
                    };

                    var headerTemplateCol2 = {
                        className: 'col-xs-4',
                        template: '<div class="row"><div class=""><h2 class="text-center">' + extractTemplateOptionDescription(configurationModel.lines[lineIndex].columns[2].control) + '<h2><hr/></div></div>'
                    };

                    var controlCol0 = {
                        className: 'col-xs-4',
                        type: typeof configurationModel.lines[lineIndex].columns[0].control.type !== 'undefined' ? configurationModel.lines[lineIndex].columns[0].control.type === 'none' ? 'blank' : configurationModel.lines[lineIndex].columns[0].control.type : 'blank',
                        key: typeof configurationModel.lines[lineIndex].columns[0].control.key !== 'undefined' ? configurationModel.lines[lineIndex].columns[0].control.key : 'blank' + Date.now(),
                        templateOptions: {
                            type: extractTemplateOptionType(configurationModel.lines[lineIndex].columns[0].control),
                            label: extractTemplateOptionLabel(configurationModel.lines[lineIndex].columns[0].control),
                            required: extractTemplateOptionRequired(configurationModel.lines[lineIndex].columns[0].control),
                            placeholder: extractTemplateOptionPlaceholder(configurationModel.lines[lineIndex].columns[0].control),
                            description: extractTemplateOptionDescription(configurationModel.lines[lineIndex].columns[0].control),
                            options: extractTemplateOptionOptions(configurationModel.lines[lineIndex].columns[0].control)
                        },
                        expressionProperties: extractFormlyExpressionProperties(configurationModel.lines[lineIndex].columns[0].control),
                        validators: extractFormlyValidators(configurationModel.lines[lineIndex].columns[0].control),
                        validation: extractFormlyValidation(configurationModel.lines[lineIndex].columns[0].control)
                    };
                    //////////////////////////////////////////////
                    //datepicker additionnal particular property
                    //////////////////////////////////////////////
                    if (configurationModel.lines[lineIndex].columns[0].control.type === 'datepicker') {
                        addDatepickerOptionsProperty(controlCol0, configurationModel, lineIndex);
                    }

                    var controlCol1 = {
                        className: 'col-xs-4',
                        type: typeof configurationModel.lines[lineIndex].columns[1].control.type !== 'undefined' ? configurationModel.lines[lineIndex].columns[1].control.type === 'none' ? 'blank' : configurationModel.lines[lineIndex].columns[1].control.type : 'blank',
                        key: typeof configurationModel.lines[lineIndex].columns[1].control.key !== 'undefined' ? configurationModel.lines[lineIndex].columns[1].control.key : 'blank' + Date.now(),
                        templateOptions: {
                            type: extractTemplateOptionType(configurationModel.lines[lineIndex].columns[1].control),
                            label: extractTemplateOptionLabel(configurationModel.lines[lineIndex].columns[1].control),
                            required: extractTemplateOptionRequired(configurationModel.lines[lineIndex].columns[1].control),
                            placeholder: extractTemplateOptionPlaceholder(configurationModel.lines[lineIndex].columns[1].control),
                            description: extractTemplateOptionDescription(configurationModel.lines[lineIndex].columns[1].control),
                            options: extractTemplateOptionOptions(configurationModel.lines[lineIndex].columns[1].control)
                        },
                        expressionProperties: extractFormlyExpressionProperties(configurationModel.lines[lineIndex].columns[1].control),
                        validators: extractFormlyValidators(configurationModel.lines[lineIndex].columns[1].control),
                        validation: extractFormlyValidation(configurationModel.lines[lineIndex].columns[1].control)
                    };
                    //////////////////////////////////////////////
                    //datepicker additionnal particular property
                    //////////////////////////////////////////////
                    if (configurationModel.lines[lineIndex].columns[1].control.type === 'datepicker') {
                        addDatepickerOptionsProperty(controlCol1, configurationModel, lineIndex);
                    }
                    var controlCol2 = {
                        className: 'col-xs-4',
                        type: typeof configurationModel.lines[lineIndex].columns[2].control.type !== 'undefined' ? configurationModel.lines[lineIndex].columns[2].control.type === 'none' ? 'blank' : configurationModel.lines[lineIndex].columns[2].control.type : 'blank',
                        key: typeof configurationModel.lines[lineIndex].columns[2].control.key !== 'undefined' ? configurationModel.lines[lineIndex].columns[2].control.key : 'blank' + Date.now(),
                        templateOptions: {
                            type: extractTemplateOptionType(configurationModel.lines[lineIndex].columns[2].control),
                            label: extractTemplateOptionLabel(configurationModel.lines[lineIndex].columns[2].control),
                            required: extractTemplateOptionRequired(configurationModel.lines[lineIndex].columns[2].control),
                            placeholder: extractTemplateOptionPlaceholder(configurationModel.lines[lineIndex].columns[2].control),
                            description: extractTemplateOptionDescription(configurationModel.lines[lineIndex].columns[2].control),
                            options: extractTemplateOptionOptions(configurationModel.lines[lineIndex].columns[2].control)
                        },
                        expressionProperties: extractFormlyExpressionProperties(configurationModel.lines[lineIndex].columns[2].control),
                        validators: extractFormlyValidators(configurationModel.lines[lineIndex].columns[2].control),
                        validation: extractFormlyValidation(configurationModel.lines[lineIndex].columns[2].control)
                    };
                    //////////////////////////////////////////////
                    //datepicker additionnal particular property
                    //////////////////////////////////////////////
                    if (configurationModel.lines[lineIndex].columns[2].control.type === 'datepicker') {
                        addDatepickerOptionsProperty(controlCol2, configurationModel, lineIndex);
                    }

                    var FieldGroup = [];

                    if (configurationModel.lines[lineIndex].columns[0].control.type === 'header') {
                        FieldGroup.push(headerTemplateCol0);
                    } else {
                        FieldGroup.push(controlCol0);
                    }

                    if (configurationModel.lines[lineIndex].columns[1].control.type === 'header') {
                        FieldGroup.push(headerTemplateCol1);
                    } else {
                        FieldGroup.push(controlCol1);
                    }

                    if (configurationModel.lines[lineIndex].columns[2].control.type === 'header') {
                        FieldGroup.push(headerTemplateCol2);
                    } else {
                        FieldGroup.push(controlCol2);
                    }

                    formlyModel.push({
                        className: 'row',
                        fieldGroup: FieldGroup
                    });
                };

                resetDataModel = function resetDataModel(obj) {
                    var emptyDataModel = {};
                    angular.copy(emptyDataModel, obj);
                    return true;
                };

                resetFormlyModel = function resetFormlyModel(formlyModel) {
                    var resetformly = [];
                    angular.copy(resetformly, formlyModel);
                };

                _export('configurationModelInit', configurationModelInit);

                _export('configurationModelResult', configurationModelResult);

                _export('resetDataModel', resetDataModel);

                _export('resetFormlyModel', resetFormlyModel);

                _export('isTemplateOptionDefined', isTemplateOptionDefined);

                _export('extractTemplateOptionLabel', extractTemplateOptionLabel);

                _export('extractTemplateOptionDatepickerOptions', extractTemplateOptionDatepickerOptions);

                _export('extractFormlyExpressionProperties', extractFormlyExpressionProperties);

                _export('extractFormlyValidators', extractFormlyValidators);

                _export('extractFormlyValidation', extractFormlyValidation);

                _export('extractTemplateOptionRequired', extractTemplateOptionRequired);

                _export('extractTemplateOptionOptions', extractTemplateOptionOptions);

                _export('extractTemplateOptionType', extractTemplateOptionType);

                _export('extractTemplateOptionPlaceholder', extractTemplateOptionPlaceholder);

                _export('extractTemplateOptionDescription', extractTemplateOptionDescription);

                _export('addDatepickerOptionsProperty', addDatepickerOptionsProperty);

                _export('addOneColumnHeader', addOneColumnHeader);

                _export('addOneColumnControl', addOneColumnControl);

                _export('addTwoColumnControl', addTwoColumnControl);

                _export('addThreeColumnControl', addThreeColumnControl);
            }
        };
    });
    $__System.register('1f', ['15', '16', '1e'], function (_export) {
        var _createClass, _classCallCheck, configurationModelInit, configurationModelResult, resetDataModel, resetFormlyModel, addOneColumnHeader, addOneColumnControl, addTwoColumnControl, addThreeColumnControl, FORMLY_PROXY_SERVICE, $formlyProxy;

        return {
            setters: [function (_) {
                _createClass = _['default'];
            }, function (_2) {
                _classCallCheck = _2['default'];
            }, function (_e) {
                configurationModelInit = _e.configurationModelInit;
                configurationModelResult = _e.configurationModelResult;
                resetDataModel = _e.resetDataModel;
                resetFormlyModel = _e.resetFormlyModel;
                addOneColumnHeader = _e.addOneColumnHeader;
                addOneColumnControl = _e.addOneColumnControl;
                addTwoColumnControl = _e.addTwoColumnControl;
                addThreeColumnControl = _e.addThreeColumnControl;
            }],
            execute: function () {
                /* global angular */
                'use strict';

                FORMLY_PROXY_SERVICE = '$formlyProxy';

                $formlyProxy = (function () {
                    function $formlyProxy() {
                        _classCallCheck(this, $formlyProxy);

                        this.init();
                    }

                    _createClass($formlyProxy, [{
                        key: 'init',
                        value: function init() {}
                    }, {
                        key: 'initConfigurationEditFromScratch',
                        value: function initConfigurationEditFromScratch(configurationModel) {
                            angular.copy(configurationModelInit, configurationModel);
                        }
                    }, {
                        key: 'bindConfigurationLines',
                        value: function bindConfigurationLines(configurationModel, lines) {
                            if (angular.isArray(lines)) {
                                var configModelResult = configurationModelResult;
                                configModelResult.lines = [].concat(lines);
                                angular.copy(configModelResult, configurationModel);
                                return this.getMessageObject('configuration model is bound', 'lines are bound to configuration model.');
                            } else {
                                return this.getErrorObject('lines is not an array', 'Checks lines type, it is not an array.');
                            }
                        }
                    }, {
                        key: 'applyConfigurationToformlyModel',
                        value: function applyConfigurationToformlyModel(configurationModel, formlyModel, formlyDataModel) {
                            resetFormlyModel(formlyModel);
                            resetDataModel(formlyDataModel);
                            /**
                             * manage header here line0
                             */
                            var lineNumber = configurationModel.lines.length;
                            for (var i = 0; i < lineNumber; i++) {
                                //1 column line control
                                if (configurationModel.lines[i].columns.length === 1) {
                                    //test if template control = header
                                    if (configurationModel.lines[i].columns[0].control.type === 'header') {
                                        addOneColumnHeader(formlyModel, configurationModel, i);
                                    } else {
                                        addOneColumnControl(formlyModel, configurationModel, i);
                                    }
                                }
                                if (configurationModel.lines[i].columns.length === 2) {
                                    addTwoColumnControl(formlyModel, configurationModel, i);
                                }
                                if (configurationModel.lines[i].columns.length === 3) {
                                    addThreeColumnControl(formlyModel, configurationModel, i);
                                }
                            }
                        }
                    }, {
                        key: 'getMessageObject',
                        value: function getMessageObject(messageTitle, messageBody) {
                            var messageObj = {
                                noError: true,
                                title: messageTitle,
                                Message: messageBody
                            };
                            return messageObj;
                        }
                    }]);

                    return $formlyProxy;
                })();

                $formlyProxy.$inject = [];

                _export('default', $formlyProxy);

                _export('FORMLY_PROXY_SERVICE', FORMLY_PROXY_SERVICE);
            }
        };
    });
    $__System.register('20', ['1f'], function (_export) {
        /* global angular */
        'use strict';

        var $formlyProxy, FORMLY_PROXY_SERVICE, FORMLY_PROXY_MODULE_NAME;
        return {
            setters: [function (_f) {
                $formlyProxy = _f['default'];
                FORMLY_PROXY_SERVICE = _f.FORMLY_PROXY_SERVICE;
            }],
            execute: function () {
                FORMLY_PROXY_MODULE_NAME = 'formlyProxyModule';

                _export('default', angular.module(FORMLY_PROXY_MODULE_NAME, []).service(FORMLY_PROXY_SERVICE, $formlyProxy));
            }
        };
    });
    $__System.registerDynamic("21", [], true, function($__require, exports, module) {
        ;
        var global = this,
            __define = global.define;
        global.define = undefined;
        var $Object = Object;
        module.exports = {
            create: $Object.create,
            getProto: $Object.getPrototypeOf,
            isEnum: {}.propertyIsEnumerable,
            getDesc: $Object.getOwnPropertyDescriptor,
            setDesc: $Object.defineProperty,
            setDescs: $Object.defineProperties,
            getKeys: $Object.keys,
            getNames: $Object.getOwnPropertyNames,
            getSymbols: $Object.getOwnPropertySymbols,
            each: [].forEach
        };
        global.define = __define;
        return module.exports;
    });

    $__System.registerDynamic("22", ["21"], true, function($__require, exports, module) {
        ;
        var global = this,
            __define = global.define;
        global.define = undefined;
        var $ = $__require('21');
        module.exports = function defineProperty(it, key, desc) {
            return $.setDesc(it, key, desc);
        };
        global.define = __define;
        return module.exports;
    });

    $__System.registerDynamic("23", ["22"], true, function($__require, exports, module) {
        ;
        var global = this,
            __define = global.define;
        global.define = undefined;
        module.exports = {
            "default": $__require('22'),
            __esModule: true
        };
        global.define = __define;
        return module.exports;
    });

    $__System.registerDynamic("15", ["23"], true, function($__require, exports, module) {
        "use strict";
        ;
        var global = this,
            __define = global.define;
        global.define = undefined;
        var _Object$defineProperty = $__require('23')["default"];
        exports["default"] = (function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor)
                        descriptor.writable = true;
                    _Object$defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps)
                    defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                    defineProperties(Constructor, staticProps);
                return Constructor;
            };
        })();
        exports.__esModule = true;
        global.define = __define;
        return module.exports;
    });

    $__System.registerDynamic("16", [], true, function($__require, exports, module) {
        "use strict";
        ;
        var global = this,
            __define = global.define;
        global.define = undefined;
        exports["default"] = function(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        };
        exports.__esModule = true;
        global.define = __define;
        return module.exports;
    });

    $__System.register('24', ['15', '16'], function (_export) {
        var _createClass, _classCallCheck, SELECT_OPTION_MANAGE_NAME, selectOptionManage;

        return {
            setters: [function (_) {
                _createClass = _['default'];
            }, function (_2) {
                _classCallCheck = _2['default'];
            }],
            execute: function () {
                /* global angular */

                'use strict';

                SELECT_OPTION_MANAGE_NAME = 'selectOptionManage';

                selectOptionManage = (function () {
                    function selectOptionManage() {
                        _classCallCheck(this, selectOptionManage);
                    }

                    _createClass(selectOptionManage, [{
                        key: 'initModel',
                        value: function initModel(selectObj) {
                            this.resetModel(selectObj);
                        }
                    }, {
                        key: 'resetModel',
                        value: function resetModel(selectObj) {
                            var zeroModel = { rows: [] };
                            angular.copy(zeroModel, selectObj);
                        }
                    }, {
                        key: 'isOptionUnique',
                        value: function isOptionUnique(selectObj, textValue) {
                            for (var i = selectObj.rows.length - 1; i >= 0; i--) {
                                if (selectObj.rows[i].option === textValue) return false;
                            }
                            return true;
                        }
                    }, {
                        key: 'isOptionValidFormat',
                        value: function isOptionValidFormat(textValue) {
                            if (textValue !== '') return true;
                            return false;
                        }
                    }, {
                        key: 'addNewOptionRadio',
                        value: function addNewOptionRadio(selectObj, newOptionText) {
                            var fullResponse = {
                                resultFlag: false,
                                details: ''
                            };
                            var checkResult = this.validOption(selectObj, newOptionText);
                            if (checkResult.resultFlag === true) {

                                var newOption = {
                                    option: newOptionText,
                                    order: selectObj.rows.length
                                };

                                selectObj.rows.push(newOption);
                                fullResponse.resultFlag = true;
                                fullResponse.details = '';
                                return fullResponse;
                            } else {
                                angular.copy(checkResult, fullResponse);
                                return fullResponse;
                            }
                        }
                    }, {
                        key: 'addNewOptionBasicSelect',
                        value: function addNewOptionBasicSelect(selectObj, newOptionText) {
                            var fullResponse = {
                                resultFlag: false,
                                details: ''
                            };

                            var checkResult = this.validOption(selectObj, newOptionText);
                            if (checkResult.resultFlag === true) {

                                var newOption = {
                                    option: newOptionText,
                                    order: selectObj.rows.length
                                };

                                selectObj.rows.push(newOption);
                                fullResponse.resultFlag = true;
                                fullResponse.details = '';

                                return fullResponse;
                            } else {
                                angular.copy(checkResult, fullResponse);
                                return fullResponse;
                            }
                        }
                    }, {
                        key: 'addNewOptionGroupedSelect',
                        value: function addNewOptionGroupedSelect(selectObj, newOptionText, newOptionGroup) {
                            var fullResponse = {
                                resultFlag: false,
                                details: ''
                            };

                            var checkResult = this.validOption(selectObj, newOptionText);

                            if (checkResult.resultFlag === true) {

                                var newOption = {
                                    option: newOptionText,
                                    group: newOptionGroup,
                                    order: selectObj.rows.length
                                };

                                selectObj.rows.push(newOption);
                                fullResponse.resultFlag = true;
                                fullResponse.details = '';
                                return fullResponse;
                            } else {
                                angular.copy(checkResult, fullResponse);
                                return fullResponse;
                            }
                        }
                    }, {
                        key: 'removeOption',
                        value: function removeOption(selectObj, AtIndex) {
                            var fullResponse = {
                                resultFlag: false,
                                details: ''
                            };

                            if (AtIndex !== -1) {
                                selectObj.rows.splice(AtIndex, 1);
                                fullResponse.resultFlag = true;
                                fullResponse.details = '';
                                return fullResponse;
                            } else {
                                fullResponse.resultFlag = false;
                                fullResponse.details = 'Option index not valid';
                                return fullResponse;
                            }
                        }
                    }, {
                        key: 'upthisOption',
                        value: function upthisOption(selectObj, indexOption) {
                            var fullResponse = {
                                resultFlag: false,
                                details: ''
                            };

                            if (indexOption > -1) {
                                if (indexOption > 0) {
                                    if (selectObj.rows[indexOption - 1]) {
                                        var currentOption = selectObj.rows[indexOption];
                                        selectObj.rows.splice(indexOption, 1);
                                        selectObj.rows.splice(indexOption - 1, 0, currentOption);
                                        fullResponse.resultFlag = true;
                                        fullResponse.details = '';
                                        return fullResponse;
                                    } else {
                                        fullResponse.resultFlag = false;
                                        fullResponse.details = 'Can\'t retreive option from option index';
                                        return fullResponse;
                                    }
                                } else {
                                    fullResponse.resultFlag = true;
                                    fullResponse.details = '';
                                    return fullResponse;
                                }
                            } else {
                                fullResponse.resultFlag = false;
                                fullResponse.details = 'Option index not valid';
                                return fullResponse;
                            }
                        }
                    }, {
                        key: 'downthisOption',
                        value: function downthisOption(selectObj, indexOption) {
                            var fullResponse = {
                                resultFlag: false,
                                details: ''
                            };

                            if (indexOption > -1) {
                                if (indexOption < selectObj.rows.length - 1) {
                                    if (selectObj.rows[indexOption + 1]) {
                                        var currentOption = selectObj.rows[indexOption];
                                        selectObj.rows.splice(indexOption, 1);
                                        selectObj.rows.splice(indexOption + 1, 0, currentOption);
                                        fullResponse.resultFlag = true;
                                        fullResponse.details = '';
                                        return fullResponse;
                                    } else {
                                        fullResponse.resultFlag = false;
                                        fullResponse.details = 'Can\'t retreive option from option index';
                                        return fullResponse;
                                    }
                                } else {
                                    fullResponse.resultFlag = true;
                                    fullResponse.details = '';
                                    return fullResponse;
                                }
                            } else {
                                fullResponse.resultFlag = false;
                                fullResponse.details = 'Option index not valid';
                                return fullResponse;
                            }
                        }
                    }, {
                        key: 'validOption',
                        value: function validOption(selectObj, newOptionText) {
                            var fullResponse = {
                                resultFlag: false,
                                details: ''
                            };

                            if (typeof newOptionText === 'undefined') {
                                fullResponse.resultFlag = false;
                                fullResponse.details = 'Entered option is empty';
                                return fullResponse;
                            }

                            if (newOptionText !== '') {
                                for (var i = selectObj.rows.length - 1; i >= 0; i--) {
                                    if (selectObj.rows[i].option === newOptionText) {
                                        fullResponse.resultFlag = false;
                                        fullResponse.details = 'Entered option is not unique';
                                        return fullResponse;
                                    }
                                }
                                fullResponse.resultFlag = true;
                                fullResponse.details = '';
                                return fullResponse;
                            }
                            fullResponse.resultFlag = false;
                            fullResponse.details = 'Entered option is empty';
                            return fullResponse;
                        }
                    }]);

                    return selectOptionManage;
                })();

                selectOptionManage.$inject = [];

                _export('default', selectOptionManage);

                _export('SELECT_OPTION_MANAGE_NAME', SELECT_OPTION_MANAGE_NAME);
            }
        };
    });
    $__System.register('25', ['24'], function (_export) {
        /* global angular */
        'use strict';

        var selectOptionManage, SELECT_OPTION_MANAGE_NAME, COMMON_MODULE_NAME;
        return {
            setters: [function (_) {
                selectOptionManage = _['default'];
                SELECT_OPTION_MANAGE_NAME = _.SELECT_OPTION_MANAGE_NAME;
            }],
            execute: function () {
                COMMON_MODULE_NAME = 'commonModule';

                _export('default', angular.module(COMMON_MODULE_NAME, []).service(SELECT_OPTION_MANAGE_NAME, selectOptionManage));
            }
        };
    });
    $__System.register('26', [], function (_export) {
        'use strict';

        var DROP_ZONE_DIRECTIVE_NAME;

        function dropzone() {
            var directive = {
                restrict: 'AE',
                link: linkFct
            };
            return directive;

            function linkFct(scope, element, attrs) {
                var config = undefined;
                var dropzone = undefined;
                //console.log(scope);
                config = scope[attrs.dropzone];
                // create a Dropzone for the element with the given options
                dropzone = new Dropzone(element[0], config.options);
                // bind the given event handlers
                angular.forEach(config.eventHandlers, function (handler, event) {
                    return dropzone.on(event, handler);
                });
            }
        }

        return {
            setters: [],
            execute: function () {
                DROP_ZONE_DIRECTIVE_NAME = 'dropzone';

                _export('default', dropzone);

                _export('DROP_ZONE_DIRECTIVE_NAME', DROP_ZONE_DIRECTIVE_NAME);
            }
        };
    });
    $__System.register('27', ['26'], function (_export) {
        'use strict';

        var dropzone, DROP_ZONE_DIRECTIVE_NAME, DROP_ZONE_MODULE_NAME;
        return {
            setters: [function (_) {
                dropzone = _['default'];
                DROP_ZONE_DIRECTIVE_NAME = _.DROP_ZONE_DIRECTIVE_NAME;
            }],
            execute: function () {
                DROP_ZONE_MODULE_NAME = 'easyFirmStepWay.dropzone.module';

                _export('default', angular.module(DROP_ZONE_MODULE_NAME, []).directive(DROP_ZONE_DIRECTIVE_NAME, dropzone));
            }
        };
    });
    $__System.register('1', ['2', '4', '6', '19', '20', '25', '27', 'e', 'f', '1a', '1d'], function (_export) {
        'use strict';

        var easyFormStepWayConfig, EASY_FORM_VERSION_NAME, EASY_FORM_VERSION_VALUE, formlyConfig, easyFormStepwayMainModule, easyFormStepwayFormlyProxyModule, easyFormStepwayCommonModules, dropZoneModule, translateConfig, easyFormStepWayCoreModule, easyFormStepwayModalModule, easyFormStepwayModalProxyModule, STEP_WAY_MODULE_NAME, STEP_WAY_MODULES_INJECT, mainModule;
        return {
            setters: [function (_) {}, function (_2) {
                easyFormStepWayConfig = _2['default'];
                EASY_FORM_VERSION_NAME = _2.EASY_FORM_VERSION_NAME;
                EASY_FORM_VERSION_VALUE = _2.EASY_FORM_VERSION_VALUE;
            }, function (_3) {
                formlyConfig = _3['default'];
            }, function (_4) {
                easyFormStepwayMainModule = _4['default'];
            }, function (_5) {
                easyFormStepwayFormlyProxyModule = _5['default'];
            }, function (_6) {
                easyFormStepwayCommonModules = _6['default'];
            }, function (_7) {
                dropZoneModule = _7['default'];
            }, function (_e) {
                translateConfig = _e['default'];
            }, function (_f) {
                easyFormStepWayCoreModule = _f['default'];
            }, function (_a) {
                easyFormStepwayModalModule = _a['default'];
            }, function (_d) {
                easyFormStepwayModalProxyModule = _d['default'];
            }],
            execute: function () {
                STEP_WAY_MODULE_NAME = 'eda.easyformGen.stepway';
                STEP_WAY_MODULES_INJECT = [easyFormStepWayCoreModule.name, translateConfig.name, easyFormStepwayMainModule.name, easyFormStepwayModalModule.name, easyFormStepwayModalProxyModule.name, easyFormStepwayFormlyProxyModule.name, easyFormStepwayCommonModules.name, dropZoneModule.name];
                mainModule = angular.module(STEP_WAY_MODULE_NAME, STEP_WAY_MODULES_INJECT).value(EASY_FORM_VERSION_NAME, EASY_FORM_VERSION_VALUE).config(formlyConfig).config(easyFormStepWayConfig);

                _export('default', mainModule);
            }
        };
    });
})
(function(factory) {
    factory();
});
//# sourceMappingURL=eda.stepway.js.map
