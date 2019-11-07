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

        [ReadOnly(true)]
        [Display(Name = "Model Description")]
        public string ModelDescription { get; set; }

        [Display(Name = "Agent Usercode")]
        [MaxLength(150, ErrorMessage = "Exceeds max length of 150")]
        public string AgentUserCode { get; set; }

        [ReadOnly(true)]
        [Display(Name = "Agent Name")]
        public string AgentName { get; set; }

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
        public string Comments { get; set; }

        [Display(Name = "Contact")]
        public ContactModel Contact { get; set; }

        [Display(Name = "Contacts - array")]
        public List<ContactModel> Contacts_a { get; set; }

        [Display(Name = "Active?")]
        public bool IsActive { get; set; }

        [Display(Name = "Bid Type")]
        public BidTypeModel BidType { get; set; }

        
        [Display(Name = "Bid Types - Multicheckbox")]
        public List<BidTypeModel> BidTypes_m { get; set; }


        [Display(Name = "Bid Types - Multiselect")]
        public List<BidTypeModel> BidTypes_ms { get; set; }

        public JsonSchema GetLotJsonSchema(List<BidType> bidTypes)
        {
            var settings = new JsonSchemaGeneratorSettings();
            //settings.DefaultEnumHandling = EnumHandling.String;

            var jsonSchema = JsonSchema.FromType<LotTypeModel>(settings);

            DefineExtensionData_Comments(jsonSchema);
            //DefineExtensionData_Color(jsonSchema);
            DefineExtensionData_AgentUserCode(jsonSchema);
            DefineExtensionData_BidType(jsonSchema, bidTypes);
            DefineExtensionData_BidTypes_m(jsonSchema, bidTypes);
            DefineExtensionData_BidTypes_ms(jsonSchema, bidTypes);
            DefineExtensionData_Contacts_a(jsonSchema);

            return jsonSchema;
        }

        private void DefineExtensionData_Comments(JsonSchema jsonSchema)
        {
            Dictionary<string, object> extensionData = new Dictionary<string, object>();
            extensionData.Add("type", Constants.Textarea_Field_Type);
            extensionData.Add("rows", "4");
            jsonSchema.Properties["Comments"].ExtensionData = extensionData;
        }

        private void DefineExtensionData_Color(JsonSchema jsonSchema)
        {
            //trying multi select for enum
            Dictionary<string, object> extensionData = new Dictionary<string, object>();
            extensionData.Add("type", Constants.Array_Field_Type);
            jsonSchema.Properties["Color"].ExtensionData = extensionData;

            extensionData = new Dictionary<string, object>();
            extensionData.Add("multiple", true);
            jsonSchema.Properties["Color"].ActualSchema.ExtensionData = extensionData;
        }

        private void DefineExtensionData_AgentUserCode(JsonSchema jsonSchema)
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
            
            Dictionary<string, object> extensionData = new Dictionary<string, object>();
            extensionData.Add("validators", new
            {
                validation = new[] { "validateAgentUser" }
            });
            jsonSchema.Properties["AgentUserCode"].ExtensionData = extensionData;
        }

        private void DefineExtensionData_BidType(JsonSchema jsonSchema, List<BidType> bidTypes = null)
        {
            Dictionary<string, object> extensionData = new Dictionary<string, object>();
            extensionData.Add("type", Constants.Radio_Field_Type);
            //extensionData.Add("type", Constants.Select_Field_Type);

            if (bidTypes != null)
            {
                extensionData.Add("options", bidTypes.Select(x => new
                {
                    value = x,
                    label = x.BidTypeName
                }));
            }

            jsonSchema.Properties["BidType"].ActualTypeSchema.ExtensionData = extensionData;
        }

        private void DefineExtensionData_BidTypes_m(JsonSchema jsonSchema, List<BidType> bidTypes = null)
        {
            Dictionary<string, object> extensionData = new Dictionary<string, object>();
            extensionData.Add("type", Constants.Multicheckbox_Field_Type);

            if (bidTypes != null)
            {
                extensionData.Add("options", bidTypes.Select(x => new
                {
                    value = x,
                    label = x.BidTypeName
                }));
            }

            jsonSchema.Properties["BidTypes_m"].ActualTypeSchema.ExtensionData = extensionData;
        }

        private void DefineExtensionData_BidTypes_ms(JsonSchema jsonSchema, List<BidType> bidTypes = null)
        {
            Dictionary<string, object> extensionData = new Dictionary<string, object>();
            extensionData.Add("type", Constants.Select_Field_Type);
            extensionData.Add("multiple", true);
            if (bidTypes != null)
            {
                extensionData.Add("options", bidTypes.Select(x => new
                {
                    value = x,
                    label = x.BidTypeName
                }));
            }
            jsonSchema.Properties["BidTypes_ms"].ActualTypeSchema.ExtensionData = extensionData;
        }

        private void DefineExtensionData_Contacts_a(JsonSchema jsonSchema, List<BidType> bidTypes = null)
        {
            Dictionary<string, object> extensionData = new Dictionary<string, object>();
            extensionData.Add("type", Constants.Array_Field_Type);
            jsonSchema.Properties["Contacts_a"].ActualTypeSchema.ExtensionData = extensionData;
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
