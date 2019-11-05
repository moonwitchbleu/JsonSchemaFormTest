using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace RazorTest.Domain
{

    public class BidType
    {
        public int BidTypeId { get; set; }
        public string BidTypeName { get; set; }
    }
}
