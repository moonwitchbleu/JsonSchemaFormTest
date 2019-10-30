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
                    .FirstOrDefaultAsync(m => m.LotTypeId == id);

                lotModel.MapFromLotType(lotType);
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
            var lotModelSchema = lotModel.GetLotJsonSchema();

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
                    _context.LotType.Attach(lotType).State = EntityState.Modified;
                }
                else
                {
                    _context.LotType.Add(model.MapToLotType());
                }
                _context.SaveChanges();
            }
            return Json(model);
        }
    }
}
