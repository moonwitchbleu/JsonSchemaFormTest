using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Optimization;

namespace JsonSchemaTestApp.Web.App_Start
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            AddAngularLibsBundles(bundles);
        }

        private static void AddAngularLibsBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/spa/ng").Include(
                "~/Scripts/angular.js"
                , "~/Scripts/angular-resource.js"
                , "~/Scripts/angular-animate.js"
                , "~/Scripts/angular-router.js"
                ));

        }
    }
}
