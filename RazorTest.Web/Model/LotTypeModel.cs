using Newtonsoft.Json.Converters;
using NJsonSchema;
using NJsonSchema.Annotations;
using NJsonSchema.Generation;
using RazorTest.Domain;
using RazorTest.Web.Utils;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace RazorTest.Web.Model
{
    public class LotTypeModel
    {
        [Required]
        [Display(Name = "Lot Type Id")]
        public int LotTypeId { get; set; }

        [Required]
        [Display(Name = "Title")]
        [MinLength(5)]
        [MaxLength(150, ErrorMessage = "Exceed max length of 150")]
        public string Title { get; set; }

        [Required]
        [Display(Name = "Description")]
        [MinLength(5)]
        [MaxLength(500, ErrorMessage = "Exceed max length of 500")]
        public string Description { get; set; }

        [Display(Name = "Model")]
        [MaxLength(150, ErrorMessage = "Exceeds max length of 150")]
        public string Model { get; set; }

        [Display(Name = "Agent Usercode")]
        [MaxLength(150, ErrorMessage = "Exceeds max length of 150")]
        public string AgentUserCode { get; set; }

        [Display(Name = "Publish Date")]
        [JsonSchemaExtensionData("type", "datepicker")]
        public Datepicker PublishedDate { get; set; }

        [Display(Name = "Lot Price")]
        [DataType(DataType.Currency), Range(10, 1000)]
        public decimal LotPrice { get; set; }

        [Required]
        [Display(Name = "Color")]
        [JsonConverter(typeof(StringEnumConverter))]
        public Color Color { get; set; }

        [Display(Name = "Comment")]
        [JsonSchemaExtensionData("type", "textarea")]
        [JsonSchemaExtensionData("rows", "4")]
        public string Comments { get; set; }

        [Display(Name = "Contact")]
        [JsonSchemaExtensionData("type", "object")]
        public Contact Contact { get; set; }

        public JsonSchema GetLotJsonSchema()
        {
            var settings = new JsonSchemaGeneratorSettings();
            //settings.DefaultEnumHandling = EnumHandling.String;

            var jsonSchema = JsonSchema.FromType<LotTypeModel>(settings);

            //Add custom schema properties setting
            Dictionary<string, object> auActions = new Dictionary<string, object>();
            //auActions["onChange"] = "testValidate(modelValue, form)";

            //jsonSchema.Properties["LotTypeId"].IsReadOnly = true;
            //jsonSchema.Properties["AgentUserCode"].ExtensionData = auActions;

            return jsonSchema;
        }

        public LotType MapToLotType()
        {
            LotType lotType = new LotType
            {
                LotTypeId = LotTypeId,
                Title = Title,
                Description = Description,
                Model = Model,
                AgentUserCode = AgentUserCode,
                LotPrice = LotPrice,
                Color = Color,
                Contact = new Contact
                {
                    Name = Contact.Name,
                    Phone = Contact.Phone,
                    Email = Contact.Email
                }
            };

            if(lotType.PublishedDate != null)
            {
                lotType.PublishedDate = new DateTime(PublishedDate.Year, PublishedDate.Month, PublishedDate.Day);
            }

            return lotType;
            
        }

        public void MapFromLotType(LotType lotType)
        {
            ClearData();

            if (lotType != null)
            {
                LotTypeId = lotType.LotTypeId;
                Title = lotType.Title;
                Description = lotType.Description;
                Model = lotType.Model;
                AgentUserCode = lotType.AgentUserCode;
                PublishedDate = new Datepicker(lotType.PublishedDate);
                LotPrice = lotType.LotPrice;
                Color = lotType.Color;

                if (lotType.Contact != null)
                {
                    Contact = new Contact()
                    {
                        ContactId = lotType.Contact.ContactId,
                        Name = lotType.Contact.Name,
                        Phone = lotType.Contact.Phone,
                        Email = lotType.Contact.Email
                    };
                }
            }
        }

        public void ClearData()
        {
            LotTypeId = 0;
            Title = null;
            Description = null;
            Model = null;
            AgentUserCode = null;
            PublishedDate = null;
        }
    }
}
