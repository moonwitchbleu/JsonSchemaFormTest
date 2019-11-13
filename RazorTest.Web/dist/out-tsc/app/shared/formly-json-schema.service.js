import { __assign, __decorate, __read, __rest, __spread } from "tslib";
import { Injectable } from '@angular/core';
import { ɵreverseDeepMerge as reverseDeepMerge } from '@ngx-formly/core';
import { FormControl } from '@angular/forms';
import { pairwise, startWith } from 'rxjs/operators';
function isEmpty(v) {
    return v === '' || v === undefined || v === null;
}
function clearFieldModel(field) {
    if (field.key) {
        field.formControl.patchValue(undefined);
        field.formControl.markAsUntouched();
        delete field.model[field.key];
    }
    else if (field.fieldGroup) {
        field.fieldGroup.forEach(function (f) { return clearFieldModel(f); });
    }
}
function checkField(field) {
    field.options._checkField(field);
}
function isFieldValid(field) {
    if (field.key) {
        return field.formControl.valid;
    }
    return field.fieldGroup.every(function (f) { return isFieldValid(f); });
}
var FormlyJsonschemaService = /** @class */ (function () {
    function FormlyJsonschemaService() {
    }
    FormlyJsonschemaService.prototype.toFieldConfig = function (schema, options) {
        return this._toFieldConfig(schema, __assign({ schema: schema }, (options || {})));
    };
    FormlyJsonschemaService.prototype._toFieldConfig = function (schema, options) {
        var _this = this;
        schema = this.resolveSchema(schema, options);
        var field = {
            type: this.guessType(schema),
            defaultValue: schema.default,
            templateOptions: {
                label: schema.title,
                readonly: schema.readOnly,
                description: schema.description,
            },
        };
        switch (field.type) {
            case 'null': {
                this.addValidator(field, 'null', function (_a) {
                    var value = _a.value;
                    return value === null;
                });
                break;
            }
            case 'number':
            case 'integer': {
                field.parsers = [function (v) { return isEmpty(v) ? null : Number(v); }];
                if (schema.hasOwnProperty('minimum')) {
                    field.templateOptions.min = schema.minimum;
                }
                if (schema.hasOwnProperty('maximum')) {
                    field.templateOptions.max = schema.maximum;
                }
                if (schema.hasOwnProperty('exclusiveMinimum')) {
                    field.templateOptions.exclusiveMinimum = schema.exclusiveMinimum;
                    this.addValidator(field, 'exclusiveMinimum', function (_a) {
                        var value = _a.value;
                        return isEmpty(value) || (value > schema.exclusiveMinimum);
                    });
                }
                if (schema.hasOwnProperty('exclusiveMaximum')) {
                    field.templateOptions.exclusiveMaximum = schema.exclusiveMaximum;
                    this.addValidator(field, 'exclusiveMaximum', function (_a) {
                        var value = _a.value;
                        return isEmpty(value) || (value < schema.exclusiveMaximum);
                    });
                }
                if (schema.hasOwnProperty('multipleOf')) {
                    field.templateOptions.step = schema.multipleOf;
                    this.addValidator(field, 'multipleOf', function (_a) {
                        var value = _a.value;
                        return isEmpty(value) || (value % schema.multipleOf === 0);
                    });
                }
                break;
            }
            case 'textareaFT':
            case 'string': {
                var schemaType = schema.type;
                if (Array.isArray(schemaType) && schemaType.includes('null')) {
                    field.parsers = [function (v) { return isEmpty(v) ? null : v; }];
                }
                ['minLength', 'maxLength', 'pattern', 'readonly'].forEach(function (prop) {
                    if (schema.hasOwnProperty(prop)) {
                        field.templateOptions[prop] = schema[prop];
                    }
                });
                break;
            }
            case 'object': {
                field.fieldGroup = [];
                var _a = __read(this.resolveDependencies(schema), 2), propDeps_1 = _a[0], schemaDeps_1 = _a[1];
                Object.keys(schema.properties || {}).forEach(function (key) {
                    var f = _this._toFieldConfig(schema.properties[key], options);
                    field.fieldGroup.push(f);
                    f.key = key;
                    if (Array.isArray(schema.required) && schema.required.indexOf(key) !== -1) {
                        f.templateOptions.required = true;
                    }
                    if (!f.templateOptions.required && propDeps_1[key]) {
                        f.expressionProperties = {
                            'templateOptions.required': function (m) { return m && propDeps_1[key].some(function (k) { return !isEmpty(m[k]); }); },
                        };
                    }
                    if (schemaDeps_1[key]) {
                        field.fieldGroup.push(__assign(__assign({}, _this._toFieldConfig(schemaDeps_1[key], options)), { hideExpression: function (m) { return !m || isEmpty(m[key]); } }));
                    }
                });
                if (schema.oneOf) {
                    field.fieldGroup.push(this.resolveMultiSchema('oneOf', schema.oneOf, options));
                }
                if (schema.anyOf) {
                    field.fieldGroup.push(this.resolveMultiSchema('anyOf', schema.anyOf, options));
                }
                break;
            }
            case 'arrayFT':
            case 'array': {
                if (schema.hasOwnProperty('minItems')) {
                    field.templateOptions.minItems = schema.minItems;
                    this.addValidator(field, 'minItems', function (_a) {
                        var value = _a.value;
                        return isEmpty(value) || (value.length >= schema.minItems);
                    });
                }
                if (schema.hasOwnProperty('maxItems')) {
                    field.templateOptions.maxItems = schema.maxItems;
                    this.addValidator(field, 'maxItems', function (_a) {
                        var value = _a.value;
                        return isEmpty(value) || (value.length <= schema.maxItems);
                    });
                }
                if (schema.hasOwnProperty('uniqueItems')) {
                    field.templateOptions.uniqueItems = schema.uniqueItems;
                    this.addValidator(field, 'uniqueItems', function (_a) {
                        var value = _a.value;
                        if (isEmpty(value) || !schema.uniqueItems) {
                            return true;
                        }
                        var uniqueItems = Array.from(new Set(value.map(function (v) { return JSON.stringify(v); })));
                        return uniqueItems.length === value.length;
                    });
                }
                // resolve items schema needed for isEnum check
                if (schema.items && !Array.isArray(schema.items)) {
                    schema.items = this.resolveSchema(schema.items, options);
                }
                // TODO: remove isEnum check once adding an option to skip extension
                if (!this.isEnum(schema)) {
                    field.fieldGroup = [];
                    Object.defineProperty(field, 'fieldArray', {
                        get: function () {
                            if (!Array.isArray(schema.items)) {
                                // When items is a single schema, the additionalItems keyword is meaningless, and it should not be used.
                                return _this._toFieldConfig(schema.items, options);
                            }
                            var itemSchema = schema.items[field.fieldGroup.length]
                                ? schema.items[field.fieldGroup.length]
                                : schema.additionalItems;
                            return itemSchema
                                ? _this._toFieldConfig(itemSchema, options)
                                : {};
                        },
                        enumerable: true,
                        configurable: true,
                    });
                }
                break;
            }
            case 'selectFT': {
                if (schema.hasOwnProperty('multiple')) {
                    field.templateOptions.multiple = schema.multiple;
                }
                if (schema.hasOwnProperty('options')) {
                    field.templateOptions.options = schema.options;
                }
                break;
            }
            case 'multicheckboxFT':
            case 'radioFT':
            case 'radio': {
                if (schema.hasOwnProperty('options')) {
                    field.templateOptions.options = schema.options;
                }
                break;
            }
        }
        if (field.type && schema.hasOwnProperty('validators')) {
            Object.keys(schema.validators || {}).forEach(function (key) {
                _this.addValidator(field, key, schema.validators[key]);
            });
        }
        if (field.type && schema.hasOwnProperty('validation')) {
            Object.keys(schema.validation || {}).forEach(function (key) {
                _this.addValidation(field, key, schema.validation[key]);
            });
        }
        if (schema.hasOwnProperty('const')) {
            field.templateOptions.const = schema.const;
            this.addValidator(field, 'const', function (_a) {
                var value = _a.value;
                return value === schema.const;
            });
            if (!field.type) {
                field.defaultValue = schema.const;
            }
        }
        if (this.isEnum(schema)) {
            field.templateOptions.multiple = field.type === 'array';
            field.type = 'enum';
            field.templateOptions.options = this.toEnumOptions(schema);
        }
        // map in possible formlyConfig options from the widget property
        if (schema['widget'] && schema['widget'].formlyConfig) {
            field = reverseDeepMerge(schema['widget'].formlyConfig, field);
        }
        // if there is a map function passed in, use it to allow the user to
        // further customize how fields are being mapped
        return options.map ? options.map(field, schema) : field;
    };
    FormlyJsonschemaService.prototype.resolveSchema = function (schema, options) {
        if (schema.$ref) {
            schema = this.resolveDefinition(schema, options);
        }
        if (schema.allOf) {
            schema = this.resolveAllOf(schema, options);
        }
        return schema;
    };
    FormlyJsonschemaService.prototype.resolveAllOf = function (_a, options) {
        var _this = this;
        var allOf = _a.allOf, baseSchema = __rest(_a, ["allOf"]);
        if (!allOf.length) {
            throw Error("allOf array can not be empty " + allOf + ".");
        }
        return allOf.reduce(function (base, schema) {
            schema = _this.resolveSchema(schema, options);
            if (base.required && schema.required) {
                base.required = __spread(base.required, schema.required);
            }
            if (schema.uniqueItems) {
                base.uniqueItems = schema.uniqueItems;
            }
            // resolve to min value
            ['maxLength', 'maximum', 'exclusiveMaximum', 'maxItems', 'maxProperties']
                .forEach(function (prop) {
                if (!isEmpty(base[prop]) && !isEmpty(schema[prop])) {
                    base[prop] = base[prop] < schema[prop] ? base[prop] : schema[prop];
                }
            });
            // resolve to max value
            ['minLength', 'minimum', 'exclusiveMinimum', 'minItems', 'minProperties']
                .forEach(function (prop) {
                if (!isEmpty(base[prop]) && !isEmpty(schema[prop])) {
                    base[prop] = base[prop] > schema[prop] ? base[prop] : schema[prop];
                }
            });
            return reverseDeepMerge(base, schema);
        }, baseSchema);
    };
    FormlyJsonschemaService.prototype.resolveMultiSchema = function (mode, schemas, options) {
        var _this = this;
        var subscription = null;
        return {
            type: 'multischema',
            fieldGroup: [
                {
                    type: 'enum',
                    templateOptions: {
                        multiple: mode === 'anyOf',
                        options: schemas
                            .map(function (s, i) { return ({ label: s.title, value: i }); }),
                    },
                    hooks: {
                        onInit: function (f) {
                            var modeField = f.parent.fieldGroup[1];
                            var value = modeField.fieldGroup
                                .map(function (f, i) { return isFieldValid(f) ? i : -1; })
                                .filter(function (v) { return v !== -1; });
                            var normalizedValue = [value.length === 0 ? 0 : value[0]];
                            var formattedValue = mode === 'anyOf' ? normalizedValue : normalizedValue[0];
                            f.formControl = new FormControl(formattedValue);
                            setTimeout(function () { return checkField(modeField); });
                            subscription = f.formControl.valueChanges.pipe(startWith(formattedValue), pairwise()).subscribe(function (_a) {
                                var _b = __read(_a, 2), p = _b[0], q = _b[1];
                                if (Array.isArray(p)) {
                                    if (p.length >= q.length) {
                                        var indexToClear = p.find(function (v) { return !q.includes(v); });
                                        clearFieldModel(modeField.fieldGroup[indexToClear]);
                                    }
                                }
                                else {
                                    clearFieldModel(modeField);
                                }
                                checkField(modeField);
                            });
                        },
                        onDestroy: function () {
                            subscription && subscription.unsubscribe();
                        },
                    },
                },
                {
                    fieldGroup: schemas.map(function (s, i) { return (__assign(__assign({}, _this._toFieldConfig(s, options)), { hideExpression: function (m, fs, f) {
                            var control = f.parent.parent.fieldGroup[0].formControl;
                            return !control || (Array.isArray(control.value)
                                ? !control.value.includes(i)
                                : control.value !== i);
                        } })); }),
                },
            ],
        };
    };
    FormlyJsonschemaService.prototype.resolveDefinition = function (schema, options) {
        var _a = __read(schema.$ref.split('#/'), 2), uri = _a[0], pointer = _a[1];
        if (uri) {
            throw Error("Remote schemas for " + schema.$ref + " not supported yet.");
        }
        var definition = !pointer ? null : pointer.split('/').reduce(function (def, path) { return def && def.hasOwnProperty(path) ? def[path] : null; }, options.schema);
        if (!definition) {
            throw Error("Cannot find a definition for " + schema.$ref + ".");
        }
        if (definition.$ref) {
            return this.resolveDefinition(definition, options);
        }
        return __assign(__assign({}, definition), ['title', 'description', 'default'].reduce(function (annotation, p) {
            if (schema.hasOwnProperty(p)) {
                annotation[p] = schema[p];
            }
            return annotation;
        }, {}));
    };
    FormlyJsonschemaService.prototype.resolveDependencies = function (schema) {
        var deps = {};
        var schemaDeps = {};
        Object.keys(schema.dependencies || {}).forEach(function (prop) {
            var dependency = schema.dependencies[prop];
            if (Array.isArray(dependency)) {
                // Property dependencies
                dependency.forEach(function (dep) {
                    if (!deps[dep]) {
                        deps[dep] = [prop];
                    }
                    else {
                        deps[dep].push(prop);
                    }
                });
            }
            else {
                // schema dependencies
                schemaDeps[prop] = dependency;
            }
        });
        return [deps, schemaDeps];
    };
    FormlyJsonschemaService.prototype.guessType = function (schema) {
        var type = schema.type;
        if (!type && schema.properties) {
            return 'object';
        }
        if (Array.isArray(type)) {
            if (type.length === 1) {
                return type[0];
            }
            if (type.length === 2 && type.indexOf('null') !== -1) {
                return type[type[0] === 'null' ? 1 : 0];
            }
        }
        return type;
    };
    FormlyJsonschemaService.prototype.addValidator = function (field, name, validator) {
        field.validators = field.validators || {};
        field.validators[name] = validator;
    };
    FormlyJsonschemaService.prototype.addValidation = function (field, name, validation) {
        field.validation = field.validation || {};
        field.validation[name] = validation;
    };
    FormlyJsonschemaService.prototype.isEnum = function (schema) {
        var isConst = function (s) { return s.hasOwnProperty('const') || (s.enum && s.enum.length === 1); };
        return schema.enum
            || (schema.anyOf && schema.anyOf.every(isConst))
            || (schema.oneOf && schema.oneOf.every(isConst))
            || schema.uniqueItems && schema.items && !Array.isArray(schema.items) && this.isEnum(schema.items);
    };
    FormlyJsonschemaService.prototype.toEnumOptions = function (schema) {
        if (schema.enum) {
            return schema.enum.map(function (value) { return ({ value: value, label: value }); });
        }
        var toEnum = function (s) {
            var value = s.hasOwnProperty('const') ? s.const : s.enum[0];
            return { value: value, label: s.title || value };
        };
        if (schema.anyOf) {
            return schema.anyOf.map(toEnum);
        }
        if (schema.oneOf) {
            return schema.oneOf.map(toEnum);
        }
        return this.toEnumOptions(schema.items);
    };
    FormlyJsonschemaService = __decorate([
        Injectable({ providedIn: 'root' })
    ], FormlyJsonschemaService);
    return FormlyJsonschemaService;
}());
export { FormlyJsonschemaService };
//# sourceMappingURL=formly-json-schema.service.js.map