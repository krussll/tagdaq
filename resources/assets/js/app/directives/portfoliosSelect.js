(function () {

'use strict';

angular.module('appMain')
    .directive('portfoliosSelect', function($http, portfoliosService) {
        return {
            restrict:'E',
            template: '<a ng-disabled="isLoading" href="#buy-modal" data-toggle="modal" class="btn btn-success btn-{{buttonSize}}" ng-click="buy();"> Buy </a>',
            scope: {
                eventHandler: '&',
                buttonSize: '@',
                hashtagId: '@',
                price: '@',
                tag: '@'
            },
            link: function(scope, element, attrs, model) {
               scope.buy = function()
                {
                    buyTagService.setData(scope.hashtagId, scope.tag, scope.price);
                    buyTagService.setCallback(scope.eventHandler);
                }
            },
            
            
        };
    });

})();
