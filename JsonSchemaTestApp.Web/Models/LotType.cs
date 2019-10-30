using JsonSchemaTestApp.Web.Utils;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using NJsonSchema;
using NJsonSchema.Generation;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace JsonSchemaTestApp.Web.Models
{
    public class LotType
    {
        [Required]
        [Display(Name = "LotTypeID")]
        public int LotTypeID { get; set; }

        [Required]
        [MaxLength(150, ErrorMessage = "Exceed max length of 150")]
        public string Title { get; set; }

        [Required]
        [MaxLength(500, ErrorMessage = "Exceed max length of 500")]
        public string Description { get; set; }

        [MaxLength(150, ErrorMessage ="Exceeds max length of 150")]
        public string Model { get; set; }

        [DisplayName("Agent Usercode")]
        [MaxLength(150, ErrorMessage = "Exceeds max length of 150")]
        public string AgentUserCode { get; set; }

        [DisplayName("Publish Date")]
        [JsonConverter(typeof(DateFormatConverter))]
        public DateTime PublishDate { get; set; }

        [DisplayName("Lot Price")]
        [DataType(DataType.Currency), Range(1,10000)]
        [RegularExpression(pattern: @"^[0-9]*(\.[0-9]{1,2})?$", ErrorMessage = "Invalid price entered")]
        public decimal LotPrice { get; set; }

        [Required]
        [JsonConverter(typeof(StringEnumConverter))]
        public Color Color { get; set; }
        
        public Contact Contact { get; set; }

        public JsonSchema GetLotJsonSchema()
        {
            var settings = new JsonSchemaGeneratorSettings();
            //settings.DefaultEnumHandling = EnumHandling.String;

            var jsonSchema = JsonSchema.FromType<LotType>(settings);

            //Add custom schema properties setting
            Dictionary<string, object> auActions = new Dictionary<string, object>();
            //auActions["onChange"] = "testValidate(modelValue, form)";

            jsonSchema.Properties["LotTypeID"].IsReadOnly = true;
            //jsonSchema.Properties["AgentUserCode"].ExtensionData = auActions;

            return jsonSchema;
        }
    }
}
