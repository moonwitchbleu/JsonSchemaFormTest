using System.Web;
using System.Web.Optimization;

namespace Web
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            //AddAngularLibsBundles(bundles);
            //AddAngularAppBundles(bundles);
        }

        private static void AddAngularLibsBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/ng").Include(
                "~/Scripts/angular.js"
                , "~/Scripts/angular-resource.js"
                , "~/Scripts/angular-animate.js"
                ));
        }

        private static void AddAngularAppBundles(BundleCollection bundles)
        {

            var templatebundle = new ScriptBundle("~/bundles/templates");
            templatebundle.Include("~/app/templates.js");
            bundles.Add(templatebundle);


            var ngbundle = new ScriptBundle("~/bundles/app");
            ngbundle.Include(
                "~/app/app.js"
                , "~/app/services/*.js"
                //** filters
                , "~/app/filters/*.js"
                //** directives
                , "~/app/directives/*.js"
                //** features
                , "~/app/schemaForm/*.js"
                );

            bundles.Add(ngbundle);
        }
    }
}
