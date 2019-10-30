using JsonSchemaTestApp.Web.Models;
using JsonSchemaTestApp.Web.Utils;
using Newtonsoft.Json;
using NJsonSchema.Validation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Script.Serialization;

namespace JsonSchemaTestApp.Web.api
{
    [RoutePrefix("api/LotTypeApi")]
    public class LotTypeApiController : ApiController
    {
        // GET api/<controller>
        public string Get()
        {
            return "";   
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            LotType lotModel = new LotType();
            var lotModelSchema = lotModel.GetLotJsonSchema();

            return JsonSchemaHelper.JsonSchemaResolveDefinitions(lotModelSchema);
        }

        // POST api/<controller>
        [HttpPost]
        public void Post(string schemaForm)
        {
            string temp = schemaForm;
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }

        [Route("SaveLotType")]
        [HttpPost]
        public IHttpActionResult SaveLotType(LotType model)
        {
            
            LotType lotModel = new LotType();
            var validator = new JsonSchemaValidator();
            var lotModelSchema = lotModel.GetLotJsonSchema();
            var data = JsonConvert.SerializeObject(model);
            var result = validator.Validate(data, lotModelSchema);

            return Ok(model);
        }
    }
}