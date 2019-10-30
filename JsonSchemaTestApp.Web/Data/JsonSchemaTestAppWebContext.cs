using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace JsonSchemaTestApp.Web.Data
{
    public class JsonSchemaTestAppWebContext : DbContext
    {
        // You can add custom code to this file. Changes will not be overwritten.
        // 
        // If you want Entity Framework to drop and regenerate your database
        // automatically whenever you change your model schema, please use data migrations.
        // For more information refer to the documentation:
        // http://msdn.microsoft.com/en-us/data/jj591621.aspx
    
        public JsonSchemaTestAppWebContext() : base("name=JsonSchemaTestAppWebContext")
        {
        }

        public System.Data.Entity.DbSet<JsonSchemaTestApp.Web.Models.LotType> LotTypes { get; set; }
    }
}
