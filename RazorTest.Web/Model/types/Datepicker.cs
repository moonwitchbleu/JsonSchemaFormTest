using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace RazorTest.Web.Model
{
    public class Datepicker
    {

        public int Year { get; set; }

        public int Month { get; set; }

        public int Day { get; set; }

        public Datepicker() { }

        public Datepicker(DateTime? date)
        {
            if(date != null)
            {
                DateTime nDate = (DateTime)date;
                Year = nDate.Year;
                Month = nDate.Month;
                Day = nDate.Day;
            }
        }

    }
}
