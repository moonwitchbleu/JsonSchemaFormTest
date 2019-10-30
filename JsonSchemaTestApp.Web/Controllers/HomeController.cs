using JsonSchemaTestApp.Web.Models;
using JsonSchemaTestApp.Web.Utils;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
//using Newtonsoft.Json.Schema;
//using Newtonsoft.Json.Schema.Generation;
using NJsonSchema;
using NJsonSchema.Generation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Remoting;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;

namespace JsonSchemaTestApp.Web.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            LotType lotModel = new LotType() {
                LotTypeID = 2,
                Title = "test Title",
                Description = "test Desc",
                Color = Color.Orange
            };
            var lotModelSchema = lotModel.GetLotJsonSchema();

            ViewData["schema"] = JsonSchemaHelper.JsonSchemaResolveDefinitions(lotModelSchema);
            ViewData["model"] = JsonConvert.SerializeObject(lotModel);

            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}