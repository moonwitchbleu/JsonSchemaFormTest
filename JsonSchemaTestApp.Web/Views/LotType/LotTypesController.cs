using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using JsonSchemaTestApp.Web.Data;
using JsonSchemaTestApp.Web.Models;

namespace JsonSchemaTestApp.Web.Views.LotType
{
    public class LotTypesController : Controller
    {
        private JsonSchemaTestAppWebContext db = new JsonSchemaTestAppWebContext();

        // GET: LotTypes
        public ActionResult Index()
        {
            return View(db.LotTypes.ToList());
        }

        // GET: LotTypes/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Models.LotType lotType = db.LotTypes.Find(id);
            if (lotType == null)
            {
                return HttpNotFound();
            }
            return View(lotType);
        }

        // GET: LotTypes/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: LotTypes/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "LotTypeID,Title,Description,Model,AgentUserCode,Color")] Models.LotType lotType)
        {
            if (ModelState.IsValid)
            {
                db.LotTypes.Add(lotType);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(lotType);
        }

        // GET: LotTypes/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Models.LotType lotType = db.LotTypes.Find(id);
            if (lotType == null)
            {
                return HttpNotFound();
            }
            return View(lotType);
        }

        // POST: LotTypes/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "LotTypeID,Title,Description,Model,AgentUserCode,Color")] Models.LotType lotType)
        {
            if (ModelState.IsValid)
            {
                db.Entry(lotType).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(lotType);
        }

        // GET: LotTypes/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Models.LotType lotType = db.LotTypes.Find(id);
            if (lotType == null)
            {
                return HttpNotFound();
            }
            return View(lotType);
        }

        // POST: LotTypes/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Models.LotType lotType = db.LotTypes.Find(id);
            db.LotTypes.Remove(lotType);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
