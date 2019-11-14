using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.Web;
using RazorTest.Web.Model;
using RazorTest.Web.Utils;
using NJsonSchema.Validation;
using RazorTest.Data;
using RazorTest.Domain;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System.Linq;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace RazorTest.Web.api
{
    [Route("api/[controller]")]
    [ApiController]
    public class LotTypeController : Controller
    {
        private readonly RazorTestContext _context;

        public LotTypeController(RazorTestContext context)
        {
            _context = context;
        }

        // GET: api/<controller>
        [HttpGet]
        [Produces("application/json")]
        public async Task<ActionResult> Get()
        {
            List<LotTypeModel> lotTypesModel = new List<LotTypeModel>();

            var lotTypes = await _context.LotType
                .Include(x => x.Contact)
                .ToListAsync();

            lotTypes.ForEach(delegate(LotType lotType) {
                var lotTypeModel = new LotTypeModel();
                lotTypeModel.MapFromLotType(lotType);
                lotTypesModel.Add(lotTypeModel);
            });

            return Json(lotTypesModel);
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        [Produces("application/json")]
        public async Task<ActionResult> Get(int id)
        {
            Model.LotTypeModel lotModel = new LotTypeModel();

            if(id > 0)
            {
                var lotType = await _context.LotType
                    .Include(x => x.Contact)
                    .Include(x => x.BidType)
                    .FirstOrDefaultAsync(m => m.LotTypeId == id);

                lotModel.MapFromLotType(lotType);

                lotModel.BidTypes_m = new List<BidTypeModel>();
                lotModel.BidTypes_ms = new List<BidTypeModel>();

                lotModel.BidTypes_m.Add(new BidTypeModel
                {
                    BidTypeId = 2,
                    BidTypeName = "c/kg Live"
                });

                lotModel.BidTypes_m.Add(new BidTypeModel
                {
                    BidTypeId = 3,
                    BidTypeName = "c/kg Dressed"
                });

                lotModel.BidTypes_ms = lotModel.BidTypes_m.GetRange(0, lotModel.BidTypes_m.Count);

                if(lotType.Content != null && lotType.Content.Length > 0)
                    lotModel = JsonConvert.DeserializeObject<LotTypeModel>(lotType.Content);
            };

            return Json(lotModel);
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

        [HttpGet]
        [Route("lotTypeSchema")]
        [Produces("application/json")]
        public ActionResult GetLotTypeSchema()
        {
            var lotModel = new Model.LotTypeModel();
            var bidTypes = _context.BidTypes.ToListAsync().Result;

            var lotModelSchema = lotModel.GetLotJsonSchema(bidTypes);

            return Json(JsonSchemaHelper.JsonSchemaResolveOneOfDefinitions(lotModelSchema));
        }

        [Route("SaveLotType")]
        [HttpPost]
        public ActionResult SaveLotType([FromBody] LotTypeModel model)
        {
            if (ModelState.IsValid) {
                if (model.LotTypeId > 0)
                {
                    var lotType = model.MapToLotType();
                    lotType.Content = JsonConvert.SerializeObject(model);
                    _context.LotType.Attach(lotType).State = EntityState.Modified;
                }
                else
                {
                    var lotType = model.MapToLotType();
                    lotType.Content = JsonConvert.SerializeObject(model);
                    _context.LotType.Add(lotType);
                }
                _context.SaveChanges();
            }
            return Json(model);
        }
    }
}
