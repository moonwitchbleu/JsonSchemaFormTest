﻿import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router'; 
import { FormlyFieldConfig, FormlyFormOptions, FormlyConfig } from '@ngx-formly/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormsModule, AsyncValidator, ValidationErrors } from '@angular/forms';
//import { FormlyJsonschema } from '@ngx-formly/core/json-schema';
import { FormlyJsonschemaService } from '../shared/formly-json-schema.service';
import { DataService } from '../shared/data.service';
import { LotType } from '../shared/lotType';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PickedDate } from '../shared/date';
import { FormlyJsonschemaOptions } from '@ngx-formly/core/json-schema/formly-json-schema.service';

@Component({
    selector: 'lot-type',
    templateUrl: './lotType.component.html',
    styleUrls: ['../app.component.css']
})
export class LotTypeComponent implements OnInit {
    title = 'Lot Type';
    form = new FormGroup({});
    model: LotType;
    options: FormlyJsonschemaOptions = {
    };

    fields: FormlyFieldConfig[] = [{
        key: "LotTypeId",
        type: "input",
        className: "col-2",
        templateOptions: {
            label: 'Lot Type Id',
            required: true,
            readonly: true,
            hidden: true
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
                    minLength: (error, field: FormlyFieldConfig) => `Please enter atleast ${field.templateOptions.minLength} characters.`,
                    maxLength: (error, field: FormlyFieldConfig) => `Please enter not more than ${field.templateOptions.maxLength} characters.`
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
            asyncValidators: {
                checkAllowedModel: {
                    expression: (control: FormControl) => {
                        return new Promise((resolve, reject) => {
                            setTimeout(() => {
                                resolve(this.checkAllowedModel);
                            }, 1000);
                        });
                    },
                    message: '',
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
    {
        key: "PublishedDate",
        type: "input",
        className: "col-6",
        templateOptions: {
            label: "Published Date",
            type: "date",
            datepickerPopup: "dd.MM.yyyy"
        }
        },
        {
            key: "Options",
            type: "radio",
            className: "col-6",
            templateOptions: {
                label: "Radio",
                options: [
                    { value: 1, label: 'test 1' }
                ]
            }
        },
        {
            key: "Options2",
            type: "radioFT",
            className: "col-6",
            templateOptions: {
                label: "Radio FT",
                options: [
                    { value: 1, label: 'test 1' },
                    { value: 1, label: 'test 2' }
                ]
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
                min: (error, field: FormlyFieldConfig) => `Lot Price should be atleast ${field.templateOptions.min}.`,
                max: (error, field: FormlyFieldConfig) => `Lot Price should be not more than ${field.templateOptions.max}.`
            }
        }
    },
    {
        key: "Color",
        type: "multicheckbox",
        className: "col-12",
        templateOptions: {
            label: "Color",
            //multiple: true,
            required: true,
            options: [
                { value: 0, label: "Red" }
                , { value: 1, label: "Orange" }
                , { value: 2, label: "Yellow" }
                , { value: 3, label: "Green" }
                , { value: 4, label: "Blue" }
                , { value: 5, label: "Indigo" }
                , { value: 6, label: "Violet" }
                , { value: 7, label: "Purple" }
                , { value: 8, label: "Pink" }
                , { value: 9, label: "White" }
                , { value: 10, label: "Black" }
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
                templateOptions:
                {
                    label: "Contact Id",
                    readonly: true
                }
            },{
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
                type: "email",
                label: "Email Address",
                pattern: "^([\\w\\.\\-]+)@([\\w\\-]+)((\\.(\\w){2,3})+)$"
            }
        }
        ]
    }];

    fields2: FormlyFieldConfig[];

    fields3 = [
        {
            "type": "object",
            "templateOptions":
            {
                "label": "LotTypeModel"
            },
            "fieldGroup": [
                {
                    "key": "LotTypeId",
                    "type": "integer",
                    "templateOptions":
                    {
                        "label": "Lot Type Id", "required": true
                    },
                    "ngModelElAttrs": {

                    }
                },
                {
                    "key": "Title",
                    "type": "string",
                    "templateOptions":
                    {
                        "label": "Title",
                        "minLength": 5,
                        "maxLength": 150,
                        "required": true
                    }
                },
                {
                    "key": "Description",
                    "type": "textarea",
                    "templateOptions":
                    {
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
                    "templateOptions":
                    {
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
                    "templateOptions":
                    {
                        "label": "Agent Usercode",
                        "maxLength": 150
                    }
                },
                {
                    "key": "PPublishedDate",
                    "type": "datepicker",
                    "templateOptions":
                    {
                        "label": "Published Date",
                        "required": true,
                    }
                },
                {
                    "key": "LotPrice",
                    "type": "number",
                    "templateOptions":
                    {
                        "label": "Lot Price",
                        "min": 10,
                        "max": 1000
                    }
                },
                {
                    "key": "Color",
                    "type": "enum",
                    "templateOptions":
                    {
                        "label": "Color",
                        "description": "",
                        "multiple": false,
                        "options": [
                        { value: 0, label: "Red" }
                        , { value: 1, label: "Orange" }
                        , { value: 2, label: "Yellow" }
                        , { value: 3, label: "Green" }
                        , { value: 4, label: "Blue" }
                        , { value: 5, label: "Indigo" }
                        , { value: 6, label: "Violet" }
                        , { value: 7, label: "Purple" }
                        , { value: 8, label: "Pink" }
                        , { value: 9, label: "White" }
                        , { value: 10, label: "Black" }
                        ], "required": true
                    }
                },
                {
                    "key": "Contact",
                    "type": "object",
                    "templateOptions":
                    {
                        "label": "Contact"
                    },
                    "fieldGroupClassName": "form-group row",
                    "fieldGroup": [
                        {
                            "type": "integer",
                            "templateOptions":
                            {
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
                            "templateOptions":
                            {
                                "label": "Phone Number"
                            },
                            "key": "Phone"
                        },
                        {
                            "key": "Email",
                            "type": "string",
                            "className": "col-8",
                            "templateOptions":
                            {
                                "label": "Email Address",
                                "pattern": "^([\\w\\.\\-]+)@([\\w\\-]+)((\\.(\\w){2,3})+)$"
                            }
                        }]
                }]
        }]

    schema2: {} = {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "LotType",
        "type": "object",
        "additionalProperties": false,
        "required": ["LotTypeId", "Title", "Description", "Color"],
        "properties": {
            "LotTypeId": {
                "title": "Lot Type Id",
                "type": "hidden",
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
                "type": "textarea",
                "maxLength": 500,
                "minLength": 5,
                "rows": 4
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
            "PublishedDate": {
                "title": "Publish Date",
                "type": "datepicker"
            },
            "LotPrice": {
                "title": "Lot Price",
                "type": "number",
                "format": "decimal",
                "maximum": 1000.0,
                "minimum": 10.0
            },
            "Comments": {
                "title": "Comments",
                "type": "textarea",
                "rows": 4
            },
            "IsItTrue": {
                "title": "Is it true?",
                "default": false,
                "type": "boolean"
            },
            "Color": { "title": "Color", "minLength": 1, "$ref": "#/definitions/Color" }, "Contact": { "title": "Contact", "$ref": "#/definitions/Contact" }

        },
        "definitions": { "Color": { "type": "string", "description": "", "x-enumNames": ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet", "Purple", "Pink", "White", "Black"], "enum": ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet", "Purple", "Pink", "White", "Black"] }, "Contact": { "type": "object", "additionalProperties": false, "properties": { "ContactId": { "title": "Contact Id", "type": "integer", "format": "int32" }, "Name": { "title": "Name", "type": ["null", "string"] }, "Phone": { "title": "Phone Number", "type": ["null", "string"] }, "Email": { "title": "Email Address", "type": ["null", "string"], "pattern": "^([\\w\\.\\-]+)@([\\w\\-]+)((\\.(\\w){2,3})+)$" } } } }
    };

    constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private formlyJsonschema: FormlyJsonschemaService, private data: DataService) {
    }

    ngOnInit(): void {
        const lotTypeId = +this.route.snapshot.paramMap.get('id');
        this.data.loadLotTypeData(lotTypeId).subscribe(([schema, data]) => {
            this.schema2 = schema;
            this.fields2 = [this.formlyJsonschema.toFieldConfig(this.schema2)];
            this.model = this.data.lotType;

            this.addValidators();
            this.addEvents();
            console.log("fields: ", this.fields2);
        })

        console.log('Form: ', this.form);
    }

    submit() {
        console.log(JSON.stringify(this.model));
       if (this.form.valid) {
            this.data.saveLotType(this.model)
                .subscribe(sucess => {
                    if (sucess) {
                        this.router.navigate(['/lot-type-list']);
                    }
                })
       }
    }

    addValidators() {
        let modelField = this.fields2[0].fieldGroup.find(function (m) { return m.key === "Model" });
        if (modelField) {
            modelField.asyncValidators = {
                /*checkAllowedModel: {
                    expression: this.checkAllowedModel,
                    message: "Model provided is not allowed."
                }
                */
                checkAllowedModel: {
                    expression: (viewValue, modelValue) => {
                        return new Promise((resolve, reject) => {
                            setTimeout(() => {
                                resolve(this.checkAllowedModel(viewValue, modelValue));
                            }, 500);
                        });
                    },
                    message: 'Model provided is not allowed.',
                }
            };

            //modelField.validation = {};
            //modelField.validation.checkAllowedModel = function (viewValue, modelValue, scope) { };

        }
    }

    addEvents() {
        let agentNameField = this.fields2[0].fieldGroup.find(function (m) { return m.key === "AgentName" });
        let agentUserCodeField = this.fields2[0].fieldGroup.find(function (m) { return m.key === "AgentUserCode" });

        if (agentNameField && agentUserCodeField) {
            agentUserCodeField.templateOptions.getAgentDetails = "this.getAgentDetails(field, $event)"; 
            agentUserCodeField.templateOptions.change = Function('field', '$event', agentUserCodeField.templateOptions.getAgentDetails).bind(this);
        }
    }

    checkAllowedModel(vv, mv) {
        let invalidModels: Array<string> = ['M001', 'M002', 'M003', 'M004', 'M005'];

        if (invalidModels.includes(vv.value))
            return false;

        return true;
    }

    getAgentDetails(field, event) {
        if (field) {
            if (field.formControl.valid && field.formControl.value.length > 0) {
                this.form.get('AgentName').setValue(this.data.getAgentDetails(field.formControl.value));
            }
        }
    }
}