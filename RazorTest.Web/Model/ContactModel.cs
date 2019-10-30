using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace RazorTest.Web.Model
{
    public class ContactModel
    {

        [Display(Name = "Contact Id")]
        public int ContactId { get; set; }

        [Display(Name = "Name")]
        public string Name { get; set; }

        [Display(Name = "Phone Number")]
        public string Phone { get; set; }

        [Display(Name = "Email Address")]
        [RegularExpression(pattern: @"^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$", ErrorMessage = "Invalid email address entered")]
        public string Email { get; set; }

    }
}
