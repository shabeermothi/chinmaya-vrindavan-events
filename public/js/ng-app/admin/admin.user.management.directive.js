(function () {
    'use strict';

    angular.module('events.admin')
        .directive('manageUsers', userMgmtDirective)
        .controller('SubscriptionCtrl', SubscriptionCtrl)
        .factory('ManageUserService', ManageUserService);

    ManageUserService.$inject = ['$http', '$log', '$window'];
    SubscriptionCtrl.$inject = ['$scope', '$log', '$uibModalInstance', 'userObj', 'ManageUserService', 'SubscribeEventService'];

    function userMgmtDirective () {
        UserMgmtDirectiveCtrl.$inject = ['$scope', '$log', 'ManageUserService', '$uibModal', 'SubscribeEventService'];

        return {
            restrict: 'A',
            templateUrl: 'partials/admin/user-management/user-management.html',
            controller: UserMgmtDirectiveCtrl,
            controllerAs: 'vm'
        };

        function UserMgmtDirectiveCtrl ($scope, $log, ManageUserService, $uibModal, SubscribeEventService) {
            var vm = this;
            vm.currentPage = 0;
            vm.pageSize = 5;
            vm.numberOfPages = function () {
                return 1;
            };

            getUsers();

            vm.viewSubscriptions = function (size, userObj) {
                $uibModal.open({
                    animation: true,
                    ariaLabelledBy: 'modal-title',
                    ariaDescribedBy: 'modal-body',
                    templateUrl: 'partials/admin/user-management/subscription-details.html',
                    controller: 'SubscriptionCtrl',
                    controllerAs: 'subscriptionCtrl',
                    size: size,
                    resolve: {
                        userObj: function () {
                            return userObj
                        }
                    }
                });
            };

            vm.deleteUser = function (userId) {
                ManageUserService.deleteUser(userId).then(function () {
                    getUsers();
                });
            };

            function getUsers () {
                ManageUserService.getUsers().then(function (response) {
                    vm.users = response;

                    vm.currentPage = 0;
                    vm.pageSize = 5;
                    vm.numberOfPages=function(){
                        return Math.ceil(vm.users.length/vm.pageSize);
                    };
                });
            }

            vm.toggleAdmin = function (userId) {
                ManageUserService.updateUserDetails(userId).then(function () {
                    getUsers();
                });
            };
        }
    }

    function ManageUserService ($http, $log, $window) {
        return {
            getUsers: getUsers,
            deleteUser: deleteUser,
            updateUserDetails: updateUserDetails,
            getUserSubscriptions: getUserSubscriptions,
            unsubscribe: unsubscribe
        };

        function getUsers () {
            return $http({
                method: 'GET',
                url: '/users'
            }).then(function (response) {
                return response.data;
            });
        }

        function deleteUser (userId) {
            return $http({
                method: 'DELETE',
                url: '/users/' + userId
            }).then(function (response) {
                return response.data;
            });
        }

        function updateUserDetails (userId) {
            return $http({
                method: 'GET',
                url: '/users/' + userId
            }).then(function (response) {
                var userDetails = response.data;
                userDetails.isAdmin = !userDetails.isAdmin;

                return $http({
                    method: 'PUT',
                    url: '/users/' + userId,
                    data: userDetails
                }).then(function (response) {
                    return response.data;
                });
            });
        }

        function getUserSubscriptions (userId) {
            return $http({
               method: 'GET',
                url: '/user-events/' + userId + '/' + $window.sessionStorage.token
            }).then(function (response) {
                return response.data;
            });
        }

        function unsubscribe (event) {
            return $http({
                method: 'DELETE',
                url: '/user-events/' + event.eventId + '/' + event.userId + '/' + event.childId
            });
        }
    }

    function SubscriptionCtrl ($scope, $log, $uibModalInstance, userObj, ManageUserService, SubscribeEventService) {
        var subscriptionCtrl = this;

        ManageUserService.getUserSubscriptions(userObj._id).then(function (userSubscriptions) {
            subscriptionCtrl.userEvents = [];

            for (var i=0; i<userSubscriptions.length; i++) {
                const childId = userSubscriptions[i].childId;
                const eventId = userSubscriptions[i].eventId;
                const userId = userSubscriptions[i].userId;
                for (var k=0; k<userObj.familyDetails.length; k++) {

                    if (userObj.familyDetails[k].id === childId) {
                        const childName = angular.copy(userObj.familyDetails[k].name);

                        SubscribeEventService.getSubscriptionPrice(userSubscriptions[i].eventId, childId).then(function (subscriptionPriceResponse) {
                            if (subscriptionPriceResponse !== "") {
                                var userSubscriptions = angular.copy(subscriptionPriceResponse);
                                userSubscriptions.childName = childName;
                                userSubscriptions.childId = childId;
                                userSubscriptions.eventId = eventId;
                                userSubscriptions.userId = userId;

                                subscriptionCtrl.userEvents.push(userSubscriptions);
                            }
                        });
                    }
                }

            }
        });

        subscriptionCtrl.unsubscribe = function (subscriptionObj) {
            ManageUserService.unsubscribe(subscriptionObj).then(function () {
                subscriptionCtrl.userEvents.splice(subscriptionCtrl.userEvents.indexOf(subscriptionObj), 1);
            });
        };

        subscriptionCtrl.cancel = function () {
            $uibModalInstance.close();
        };
    }
})();
