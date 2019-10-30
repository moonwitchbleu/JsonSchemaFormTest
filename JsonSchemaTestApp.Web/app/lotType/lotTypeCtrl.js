
angular.module('app')
    .controller('lotTypeCtrl',
        ['$scope', 'lotTypeService',
            function ($scope, lotTypeService) {

                $scope.init = function (schema, model) {
                    $scope.schema = { "$schema": "http://json-schema.org/draft-04/schema#", "title": "LotType", "type": "object", "additionalProperties": false, "required": ["LotTypeID", "Title", "Description", "Color"], "properties": { "LotTypeID": { "title": "LotTypeID", "type": "integer", "readonly": true, "format": "int32" }, "Title": { "type": "string", "maxLength": 150, "minLength": 1 }, "Description": { "type": "string", "maxLength": 500, "minLength": 1 }, "Model": { "type": ["null", "string"], "maxLength": 150 }, "AgentUserCode": { "type": ["null", "string"], "maxLength": 150 }, "PublishDate": { "type": "string", "format": "date" }, "LotPrice": { "type": "number", "format": "decimal", "maximum": 10000.0, "minimum": 1.0, "pattern": "^[0-9]*(\\.[0-9]{1,2})?$" }, "Color": { "type": "string", "description": "", "x-enumNames": ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet", "Purple", "Pink", "White", "Black"], "enum": ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet", "Purple", "Pink", "White", "Black"] }, "Contact": { "type": "object", "additionalProperties": false, "properties": { "ContactID": { "type": "integer", "format": "int32" }, "Name": { "type": ["null", "string"] }, "Phone": { "type": ["null", "string"] }, "Email": { "type": ["null", "string"], "description": "Email Address", "pattern": "^([\\w\\.\\-]+)@([\\w\\-]+)((\\.(\\w){2,3})+)$" } } } } };
                    $scope.model = model;
                }


                $scope.form = [
                    {
                        key: "LotTypeID"
                    },
                    {
                        key: "NonExistent"
                    },
                    {
                        key: "Title"
                    },
                    {
                        key: "Description"
                    },
                    {
                        key: "Model"
                    },
                    {
                        key: "Color"
                    },
                    {
                        key: "LotPrice"
                    },
                    {
                        key: "AgentUserCode",
                        onChange: "validateAgentUser(modelValue)",
                        validationMessage: {
                            agentUserInvalid: 'Invalid Agent User Code entered'
                        }
                    },
                    {
                        key: "PublishDate",
                        "minDate": "01/01/1900",
                        "maxDate": new Date(),
                        "format": "dd/mm/yyyy",
                        validationMessage: {
                            publishDateInvalid: 'Invalid Publish Date entered'
                        }
                    },
                    {
                        key: "Contact"
                    },
                    {
                        type: "submit",
                        title: "Save"
                    }
                ];
                console.log($scope.model);

                $scope.onSubmit = function (form) {
                    // First we broadcast an event so all fields validate themselves
                    $scope.$broadcast('schemaFormValidate');

                    //validatePublishDate();

                    // Then we check if the form is valid
                    if (form.$valid) {
                        // ... do whatever you need to do with your data.
                        lotTypeService.saveLotType($scope.model);
                    }
                }

                function validatePublishDate() {
                    var dateReg = /^([0]?[1-9]|[1][0-2])[./-]([0]?[0-9]|[12][0-9]|[3][01])[./-]([0-9]{4}|[0-9]{2})$/;
                    $scope.$broadcast('schemaForm.error.PublishDate', 'publishDateInvalid', true);

                    if ($scope.model.PublishDate != undefined && !$scope.model.PublishDate.match(dateReg))
                        $scope.$broadcast('schemaForm.error.PublishDate', 'publishDateInvalid', false);
                }

                $scope.validateAgentUser = function (modelValue) {
                    $scope.$broadcast('schemaForm.error.AgentUserCode', 'agentUserInvalid', true);
                    if (modelValue != 'agentUser')
                        $scope.$broadcast('schemaForm.error.AgentUserCode', 'agentUserInvalid', false);
                }
            }]);