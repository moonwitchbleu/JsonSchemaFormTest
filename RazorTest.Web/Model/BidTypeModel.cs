using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace RazorTest.Web.Model
{
    public class BidTypeModel
    {

        [Display(Name = "Bid Type Id")]
        public int BidTypeId { get; set; }

        [Display(Name = "Bid Type")]
        public string BidTypeName { get; set; }
    }
}
