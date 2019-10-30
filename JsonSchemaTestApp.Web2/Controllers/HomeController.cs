using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using JsonSchemaTestApp.Web.Models;
using Newtonsoft.Json.Schema.Generation;
using Newtonsoft.Json.Schema;
using Newtonsoft.Json;

namespace JsonSchemaTestApp.Web.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            GetLotJsonSchema();

            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        private void GetLotJsonSchema()
        {
            JSchemaGenerator generator = new JSchemaGenerator();

            generator.DefaultRequired = Required.Default;
            generator.SchemaIdGenerationHandling = SchemaIdGenerationHandling.TypeName;

            JSchema schema = generator.Generate(typeof(LotModel));

        }
    }
}
