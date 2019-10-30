(function () {
    'use strict';

    angular
        .module('app')
        .controller('appCtrl', appCtrl);

    appCtrl.$inject = ['$location'];

    function appCtrl($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'appCtrl';

        activate();

        function activate() { }

        $scope.schema = {
            type: "object",
            properties: {
                name: { type: "string", minLength: 2, title: "Name", description: "Name or alias" },
                title: {
                    type: "string",
                    enum: ['dr', 'jr', 'sir', 'mrs', 'mr', 'NaN', 'dj']
                }
            }
        };

        $scope.form = [
            "*",
            {
                type: "submit",
                title: "Save"
            }
        ];

        $scope.model = {};
    }
})();
