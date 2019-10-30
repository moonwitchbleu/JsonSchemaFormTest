using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace JsonSchemaTestApp.Web.Models
{
    public class Contact
    {
        public int ContactID { get; set; }

        public string Name { get; set; }

        public string Phone { get; set; }

        [Description("Email Address")]
        [RegularExpression(pattern: @"^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$", ErrorMessage = "Invalid email address entered")]
        public string Email { get; set; }

    }
}
