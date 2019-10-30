using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace JsonSchemaTestApp.Web.Models
{
    [Description("Lot")]
    public class LotModel
    {
        [Required]
        public int LotID { get; set; }

        [Required]
        [MaxLength(150, ErrorMessage = "Exceed max length of 150")]
        public string Title { get; set; }

        [Required]
        [MaxLength(500, ErrorMessage = "Exceed max length of 500")]
        public string Description { get; set; }

        [Required]
        [EnumDataType(typeof(Color))]
        public string Color { get; set; }

        public ContactModel Contact { get; set; }
    }
}
