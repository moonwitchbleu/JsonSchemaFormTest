﻿using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using NJsonSchema;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RazorTest.Web.Utils
{
    public static class JsonSchemaHelper
    {
        public static string JsonSchemaResolveDefinitions(JsonSchema jsonSchema)
        {
            var dicJsonSchema = JsonConvert.DeserializeObject<Dictionary<string, dynamic>>(jsonSchema.ToJson());
            var definitions = GetJObjectCollection(dicJsonSchema["definitions"]);
            var properties = GetJObjectCollection(dicJsonSchema["properties"]);

            foreach (var property in properties)
            {
                var fields = GetJObjectCollection(property.Value);

                foreach (var field in fields)
                {

                    if (field.Key == "oneOf")
                    {
                        var fieldDefs = (JArray)field.Value;

                        foreach (var fieldDef in fieldDefs)
                        {
                            if (fieldDef["$ref"] != null)
                            {
                                var defName = ((string)fieldDef["$ref"]).Replace("#/definitions/", "");

                                if (fields.ContainsKey("title"))
                                    definitions[defName]["title"] = fields["title"];

                                dicJsonSchema["properties"][property.Key] = definitions[defName];
                                definitions.Remove(defName);
                            }
                        }
                    }
                }
            }

            if (definitions.Count == 0)
            {
                dicJsonSchema.Remove("definitions");
            }
            else
            {
                dicJsonSchema["definitions"] = definitions;
            }

            return JsonConvert.SerializeObject(dicJsonSchema);
        }

        public static string JsonSchemaResolveOneOfDefinitions(JsonSchema jsonSchema)
        {
            var dicJsonSchema = JsonConvert.DeserializeObject<Dictionary<string, dynamic>>(jsonSchema.ToJson());
            var definitions = GetJObjectCollection(dicJsonSchema["definitions"]);
            var properties = GetJObjectCollection(dicJsonSchema["properties"]);

            foreach (var property in properties)
            {
                string refValue = "";
                var fields = GetJObjectCollection(property.Value);

                foreach (var field in fields)
                {
                    if (refValue.Length > 0)
                        break;

                    if (field.Key == "oneOf")
                    {
                        var fieldDefs = (JArray)field.Value;

                        foreach (var fieldDef in fieldDefs)
                        {
                            if (fieldDef["$ref"] != null)
                                refValue = fieldDef["$ref"].ToString();
                        }
                    }
                }

                if (refValue.Length > 0)
                {
                    dicJsonSchema["properties"][property.Key]["$ref"] = refValue;
                    dicJsonSchema["properties"][property.Key].Remove("oneOf");
                }
            }

            return JsonConvert.SerializeObject(dicJsonSchema);
        }

        public static Dictionary<string, dynamic> GetJObjectCollection(dynamic obj)
        {
            Dictionary<string, dynamic> dJObject = new Dictionary<string, dynamic>();

            try
            {
                var jObject = (JObject)obj;

                if (jObject != null)
                {
                    dJObject = jObject.ToObject<Dictionary<string, dynamic>>();
                }
            }
            catch (Exception)
            {

            }

            return dJObject;
        }

    }
}