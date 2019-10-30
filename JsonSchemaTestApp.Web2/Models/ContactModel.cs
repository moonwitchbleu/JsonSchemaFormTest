using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace JsonSchemaTestApp.Web.Models
{
    [Description("Contact")]
    public class ContactModel
    {
        public int ContactID { get; set; }

        public string Name { get; set; }


        public string Phone { get; set; }

        [Description("Email Address")]
        public string Email { get; set; }

    }
}
