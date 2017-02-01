(function () {
	'use strict';

	angular.module('uuid', [])

	.factory('uuid', [function () {

		return {
			new: function () {
		        var _p8 = function(s) {
		            var p = (Math.random().toString(16) + '000000000').substr(2, 8);
		            return s ? '-' + p.substr(0, 4) + '-' + p.substr(4, 4) : p;
		        };
		        return _p8() + _p8(!0) + _p8(!0) + _p8();
			}
		};

	}])

	.directive('uuid', ['uuid', function (uuid) {

		return {
			restrict: 'A',
			link: function ($scope, elem) {
				elem.attr('data-uuid', uuid.new());
			}
		};

	}]);

})(angular);