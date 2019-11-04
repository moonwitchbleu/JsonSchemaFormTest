using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace RazorTest.Domain
{

    public class LotType
    {
        public int LotTypeId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Model { get; set; }
        public string AgentUserCode { get; set; }
        public DateTime? PublishedDate { get; set; }
        public decimal LotPrice { get; set; }
        public Color Color { get; set; }
        public Contact Contact { get; set; }
        public bool IsActive { get; set; }
    }
}
