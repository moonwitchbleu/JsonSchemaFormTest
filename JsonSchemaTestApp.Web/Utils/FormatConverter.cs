using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace JsonSchemaTestApp.Web.Utils
{
    public class DateFormatConverter : Newtonsoft.Json.Converters.IsoDateTimeConverter
    {
        public DateFormatConverter()
        {
            DateTimeFormat = "dd/MM/yyyy";
        }
    }
}