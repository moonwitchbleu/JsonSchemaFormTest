using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Linq;
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
        [JsonSchemaExtensionData("type", Constants.Hidden_Field_Type)]
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
        [JsonSchemaExtensionData("type", Constants.Textarea_Field_Type)]
        public string Description { get; set; }

        [Display(Name = "Model")]
        [MaxLength(150, ErrorMessage = "Exceeds max length of 150")]
        public string Model { get; set; }

        [Display(Name = "Agent Usercode")]
        [MaxLength(150, ErrorMessage = "Exceeds max length of 150")]
        public string AgentUserCode { get; set; }

        [Required]
        [Display(Name = "Publish Date")]
        [JsonSchemaExtensionData("type", Constants.Datepicker_Field_Type)]
        public DateTime? PublishedDate { get; set; }

        [Display(Name = "Lot Price")]
        [DataType(DataType.Currency), Range(10, 1000)]
        public decimal LotPrice { get; set; }

        [Required]
        [Display(Name = "Color")]
        [JsonConverter(typeof(StringEnumConverter))]
        public Color Color { get; set; }

        [Display(Name = "Comment")]
        [JsonSchemaExtensionData("type", Constants.Textarea_Field_Type)]
        [JsonSchemaExtensionData("rows", "4")]
        public string Comments { get; set; }

        [Display(Name = "Contact")]
        public ContactModel Contact { get; set; }

        [Display(Name = "Active?")]
        public bool IsActive { get; set; }

        [Display(Name = "Bid Type")]
        public BidTypeModel BidType { get; set; }

        /*
        [Display(Name = "Bid Types")]
        public List<BidTypeModel> BidTypes { get; set; }
        */

        public JsonSchema GetLotJsonSchema(List<BidType> bidTypes)
        {
            var settings = new JsonSchemaGeneratorSettings();
            //settings.DefaultEnumHandling = EnumHandling.String;

            var jsonSchema = JsonSchema.FromType<LotTypeModel>(settings);

            AddSchemaValidators(jsonSchema);

            if(bidTypes != null)
                AddBidTypeItems(jsonSchema, bidTypes);

            return jsonSchema;
        }

        private void AddSchemaValidators(JsonSchema jsonSchema)
        {
            /*Dictionary<string, object> modelValidators = new Dictionary<string, object>();
            modelValidators.Add("validators", new
            {
                checkAllowedModel = new
                {
                    expression = "this.checkAllowedModel",
                    message = "Model provided is not allowed."
                }
            });
            modelValidators.Add("validation", new
            {
                checkAllowedModel = "function (viewValue, modelValue, scope) { }"
            });
            jsonSchema.Properties["Model"].ExtensionData = modelValidators;
            */
            
            Dictionary<string, object> agentUserCodeExtensionData = new Dictionary<string, object>();
            agentUserCodeExtensionData.Add("validators", new
            {
                validation = new[] { "validateAgentUser" }
            });
            jsonSchema.Properties["AgentUserCode"].ExtensionData = agentUserCodeExtensionData;
        }

        private void AddBidTypeItems(JsonSchema jsonSchema, List<BidType> bidTypes)
        {
            Dictionary<string, object> bidTypeExtendedData = new Dictionary<string, object>();
            bidTypeExtendedData.Add("type", Constants.Radio_Field_Type);
            bidTypeExtendedData.Add("options", bidTypes.Select(x => new {
                value = x,
                label = x.BidTypeName
            }));
            
            /*
            bidTypeExtendedData.Add("type", Constants.Array_Field_Type);
            bidTypeExtendedData.Add("items", new {
                type = "object",
                required = new[] {
                    "BidTypeName"
                }
            });
            */
            jsonSchema.Properties["BidType"].ActualTypeSchema.ExtensionData = bidTypeExtendedData;
            
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
                PublishedDate = PublishedDate,
                Color = Color,
                IsActive = IsActive,
                Contact = new Contact
                {
                    Name = Contact.Name,
                    Phone = Contact.Phone,
                    Email = Contact.Email
                }
            };

            if (BidType != null)
                lotType.BidType = new BidType
                {
                    BidTypeId = BidType.BidTypeId,
                    BidTypeName = BidType.BidTypeName
                };

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
                PublishedDate = lotType.PublishedDate;
                LotPrice = lotType.LotPrice;
                Color = lotType.Color;
                IsActive = lotType.IsActive;

                if (lotType.Contact != null)
                {
                    Contact = new ContactModel()
                    {
                        ContactId = lotType.Contact.ContactId,
                        Name = lotType.Contact.Name,
                        Phone = lotType.Contact.Phone,
                        Email = lotType.Contact.Email
                    };
                }

                if(lotType.BidType != null)
                {
                    BidType = new BidTypeModel()
                    {
                        BidTypeId = lotType.BidType.BidTypeId,
                        BidTypeName = lotType.BidType.BidTypeName
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
