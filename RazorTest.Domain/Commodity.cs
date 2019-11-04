using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace RazorTest.Domain
{

    public class Commodity
    {
        public int CommodityId { get; set; }
        public string CommodityName { get; set; }
    }
}
