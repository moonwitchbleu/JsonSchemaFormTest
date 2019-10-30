import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
let LotTypeComponent = class LotTypeComponent {
    constructor(route, router, fb, formlyJsonschema, data) {
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.formlyJsonschema = formlyJsonschema;
        this.data = data;
        this.title = 'Lot Type';
        this.form = new FormGroup({});
        this.options = {};
        this.fields = [{
                key: "LotTypeId",
                type: "input",
                className: "col-2",
                templateOptions: {
                    label: 'Lot Type Id',
                    required: true,
                    readonly: true
                },
            },
            {
                key: "Title",
                type: "input",
                className: "col-12",
                templateOptions: {
                    label: 'Title',
                    required: true,
                    minLength: 5,
                    maxLength: 50
                },
            },
            {
                key: "Description",
                type: "textarea",
                className: "col-12",
                templateOptions: {
                    label: 'Description',
                    required: true,
                    rows: 4,
                    minLength: 5,
                    maxLength: 250
                },
                validation: {
                    messages: {
                        minLength: (error, field) => `Please enter atleast ${field.templateOptions.minLength} characters.`,
                        maxLength: (error, field) => `Please enter not more than ${field.templateOptions.maxLength} characters.`
                    }
                }
            },
            {
                key: "Model",
                type: "input",
                defaultValue: "M000",
                className: "col-12",
                hideExpression: "!model.Description",
                templateOptions: {
                    label: "Model",
                    placeholder: "Enter Model here",
                    maxLength: 150
                },
                validators: {
                    checkAllowedModel: {
                        expression: this.checkAllowedModel,
                        message: "Model provided is not allowed."
                    }
                },
                validation: {
                    checkAllowedModel: function (viewValue, modelValue, scope) { }
                }
            },
            {
                key: "AgentUsercode",
                type: "input",
                className: "col-12",
                templateOptions: {
                    label: "Agent Usercode",
                    maxLength: 150
                }
            },
            /*{
                key: "PublishedDate",
                type: "input",
                className: "col-6",
                templateOptions: {
                    label: "Published Date",
                    type: "date",
                    datepickerPopup: "dd.MM.yyyy"
                }
            },*/
            {
                key: "PPublishedDate",
                type: "datepicker",
                className: "col-6",
                templateOptions: {
                    label: "Published Date",
                    datepickerPopup: "dd.MM.yyyy",
                    required: true
                },
                validation: {
                    messages: {}
                }
            },
            {
                key: "LotPrice",
                type: "input",
                className: "col-6",
                templateOptions: {
                    label: "Lot Price",
                    type: "number",
                    min: 10,
                    max: 100
                },
                validation: {
                    messages: {
                        min: (error, field) => `Lot Price should be atleast ${field.templateOptions.min}.`,
                        max: (error, field) => `Lot Price should be not more than ${field.templateOptions.max}.`
                    }
                }
            },
            {
                key: "Color",
                type: "select",
                className: "col-12",
                templateOptions: {
                    label: "Color",
                    multiple: false,
                    required: true,
                    options: [
                        { value: 0, label: "Red" },
                        { value: 1, label: "Orange" },
                        { value: 2, label: "Yellow" },
                        { value: 3, label: "Green" },
                        { value: 4, label: "Blue" },
                        { value: 5, label: "Indigo" },
                        { value: 6, label: "Violet" },
                        { value: 7, label: "Purple" },
                        { value: 8, label: "Pink" },
                        { value: 9, label: "White" },
                        { value: 10, label: "Black" }
                    ]
                }
            },
            {
                template: "<hr /><div><strong>Contact</strong></div>",
                className: "col-12"
            },
            {
                key: "Contact",
                templateOptions: { label: "Contact" },
                fieldGroupClassName: "row",
                className: "col-12",
                fieldGroup: [
                    {
                        key: "ContactId",
                        type: "input",
                        className: "col-12",
                        templateOptions: {
                            label: "Contact Id",
                            readonly: true
                        }
                    }, {
                        key: "Name",
                        type: "input",
                        className: "col-6",
                        templateOptions: {
                            label: "Name"
                        }
                    },
                    {
                        key: "Phone",
                        type: "input",
                        className: "col-6",
                        templateOptions: {
                            label: "Phone Number"
                        }
                    },
                    {
                        key: "Email",
                        type: "input",
                        className: "col-8",
                        templateOptions: {
                            label: "Email Address",
                            pattern: "^([\\w\\.\\-]+)@([\\w\\-]+)((\\.(\\w){2,3})+)$"
                        }
                    }
                ]
            }];
        this.fields3 = [
            {
                "type": "object",
                "templateOptions": {
                    "label": "LotTypeModel"
                },
                "fieldGroup": [
                    {
                        "key": "LotTypeId",
                        "type": "integer",
                        "templateOptions": {
                            "label": "Lot Type Id", "required": true
                        },
                        "ngModelElAttrs": {}
                    },
                    {
                        "key": "Title",
                        "type": "string",
                        "templateOptions": {
                            "label": "Title",
                            "minLength": 5,
                            "maxLength": 150,
                            "required": true
                        }
                    },
                    {
                        "key": "Description",
                        "type": "textarea",
                        "templateOptions": {
                            "label": "Description",
                            "minLength": 5,
                            "maxLength": 500,
                            "required": true,
                            "rows": 5
                        }
                    },
                    {
                        "key": "Model",
                        "type": "string",
                        "templateOptions": {
                            "label": "Model",
                            "maxLength": 150
                        },
                        "validators": {
                            "checkAllowedModel": {
                                "expression": this.checkAllowedModel,
                                "message": "Model provided is not allowed."
                            }
                        },
                        "validation": {
                            "checkAllowedModel": function (viewValue, modelValue, scope) { }
                        }
                    },
                    {
                        "key": "AgentUserCode",
                        "type": "string",
                        "templateOptions": {
                            "label": "Agent Usercode",
                            "maxLength": 150
                        }
                    },
                    {
                        "key": "PPublishedDate",
                        "type": "datepicker",
                        "templateOptions": {
                            "label": "Published Date",
                            "required": true,
                        }
                    },
                    {
                        "key": "LotPrice",
                        "type": "number",
                        "templateOptions": {
                            "label": "Lot Price",
                            "min": 10,
                            "max": 1000
                        }
                    },
                    {
                        "key": "Color",
                        "type": "enum",
                        "templateOptions": {
                            "label": "Color",
                            "description": "",
                            "multiple": false,
                            "options": [
                                { value: 0, label: "Red" },
                                { value: 1, label: "Orange" },
                                { value: 2, label: "Yellow" },
                                { value: 3, label: "Green" },
                                { value: 4, label: "Blue" },
                                { value: 5, label: "Indigo" },
                                { value: 6, label: "Violet" },
                                { value: 7, label: "Purple" },
                                { value: 8, label: "Pink" },
                                { value: 9, label: "White" },
                                { value: 10, label: "Black" }
                            ], "required": true
                        }
                    },
                    {
                        "key": "Contact",
                        "type": "object",
                        "templateOptions": {
                            "label": "Contact"
                        },
                        "fieldGroupClassName": "form-group row",
                        "fieldGroup": [
                            {
                                "type": "integer",
                                "templateOptions": {
                                    "label": "Contact Id",
                                    "readonly": true
                                },
                                "key": "ContactId"
                            },
                            {
                                "type": "string",
                                "className": "col-6",
                                "templateOptions": { "label": "Name" },
                                "key": "Name"
                            },
                            {
                                "type": "string",
                                "className": "col-6",
                                "templateOptions": {
                                    "label": "Phone Number"
                                },
                                "key": "Phone"
                            },
                            {
                                "key": "Email",
                                "type": "string",
                                "className": "col-8",
                                "templateOptions": {
                                    "label": "Email Address",
                                    "pattern": "^([\\w\\.\\-]+)@([\\w\\-]+)((\\.(\\w){2,3})+)$"
                                }
                            }
                        ]
                    }
                ]
            }
        ];
        this.schema2 = {
            "$schema": "http://json-schema.org/draft-04/schema#",
            "title": "LotType",
            "type": "object",
            "additionalProperties": false,
            "required": ["LotTypeId", "Title", "Description", "Color"],
            "properties": {
                "LotTypeId": {
                    "title": "Lot Type Id",
                    "type": "integer",
                    "format": "int32"
                },
                "Title": {
                    "title": "Title",
                    "type": "string",
                    "maxLength": 150,
                    "minLength": 5
                },
                "Description": {
                    "title": "Description",
                    "type": "string",
                    "maxLength": 500,
                    "minLength": 5
                },
                "Model": {
                    "title": "Model",
                    "type": ["null", "string"],
                    "maxLength": 150
                },
                "AgentUserCode": {
                    "title": "Agent Usercode",
                    "type": ["null", "string"],
                    "maxLength": 150
                },
                "PublishDate": {
                    "title": "Publish Date",
                    "type": "string",
                    "format": "date-time"
                },
                "LotPrice": {
                    "title": "Lot Price",
                    "type": "number",
                    "format": "decimal",
                    "maximum": 1000.0,
                    "minimum": 10.0
                },
                "Color": { "title": "Color", "minLength": 1, "allOf": [{ "$ref": "#/definitions/Color" }] }, "Contact": { "title": "Contact", "allOf": [{ "$ref": "#/definitions/Contact" }] }
            },
            "definitions": { "Color": { "type": "string", "description": "", "x-enumNames": ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet", "Purple", "Pink", "White", "Black"], "enum": ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet", "Purple", "Pink", "White", "Black"] }, "Contact": { "type": "object", "additionalProperties": false, "properties": { "ContactId": { "title": "Contact Id", "type": "integer", "format": "int32" }, "Name": { "title": "Name", "type": ["null", "string"] }, "Phone": { "title": "Phone Number", "type": ["null", "string"] }, "Email": { "title": "Email Address", "type": ["null", "string"], "pattern": "^([\\w\\.\\-]+)@([\\w\\-]+)((\\.(\\w){2,3})+)$" } } } }
        };
    }
    ngOnInit() {
        const lotTypeId = +this.route.snapshot.paramMap.get('id');
        this.data.loadLotTypeSchema()
            .subscribe(sucess => {
            if (sucess) {
                this.fields2 = [this.formlyJsonschema.toFieldConfig(this.data.lotTypeSchema)];
                //this.fields2 = [this.formlyJsonschema.toFieldConfig(this.schema2)];
                console.log(JSON.stringify(this.fields2));
            }
        });
        this.data.loadLotType(lotTypeId)
            .subscribe(data => {
            this.model = this.data.lotType;
            console.log(this.model);
            /*if (this.model.publishedDate) {
                var pDate = new Date(this.model.PublishedDate);
                this.model.PublishedDate = {
                    'year': PublishedDate.Year,
                    'month': pDate.getMonth() + 1,
                    'day': pDate.getDate()
                };
            }*/
        });
        console.log('Form:', this.form);
    }
    submit() {
        console.log(JSON.stringify(this.model));
        //if (this.form.valid) {
        /*var pDate = new Date(this.model.PPublishedDate.year, this.model.PPublishedDate.month - 1, this.model.PPublishedDate.day);
        pDate.setMinutes(pDate.getMinutes() - pDate.getTimezoneOffset());
        this.model.PublishedDate = pDate;
        */
        this.data.saveLotType(this.model)
            .subscribe(sucess => {
            if (sucess) {
                this.router.navigate(['/lot-type-list']);
            }
        });
        // }
    }
    checkAllowedModel(vv, mv) {
        if (vv.value && vv.value.lastIndexOf("M001") >= 0)
            return false;
        console.log(mv);
        return true;
    }
    validateAgentUser(vv, mv) {
        agentUsers: [] = ["agent1", "agent2", "agent3"];
        return true;
    }
};
LotTypeComponent = __decorate([
    Component({
        selector: 'lot-type',
        templateUrl: './lotType.component.html',
        styleUrls: ['../app.component.css']
    })
], LotTypeComponent);
export { LotTypeComponent };
//# sourceMappingURL=lotType.component.js.map