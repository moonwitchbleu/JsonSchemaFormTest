using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using RazorTest.Web.Utils;
using RazorTest.Web.Model;
using Newtonsoft.Json;
using RazorTest.Domain;

namespace RazorTest.Web.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;

        public IndexModel(ILogger<IndexModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
            Model.LotTypeModel lotModel = new Model.LotTypeModel()
            {
                LotTypeId = 2,
                Title = "test Title",
                Description = "test Desc",
                Color = Color.Orange
            };
            var lotModelSchema = lotModel.GetLotJsonSchema();

            ViewData["schema"] = JsonSchemaHelper.JsonSchemaResolveDefinitions(lotModelSchema);
            ViewData["model"] = JsonConvert.SerializeObject(lotModel);
        }
    }
}
