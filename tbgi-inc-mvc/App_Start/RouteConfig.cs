using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace tbgi_inc_mvc
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Technology",
                url: "Technology",
                defaults: new { controller = "Home", action = "Technology" }
            );

            routes.MapRoute(
                name: "Products",
                url: "Products",
                defaults: new { controller = "Home", action = "Products" }
            );

            routes.MapRoute(
                name: "DistributionNetwork",
                url: "DistributionNetwork",
                defaults: new { controller = "Home", action = "DistributionNetwork" }
            );
            
            routes.MapRoute(
                name: "Services",
                url: "Services",
                defaults: new { controller = "Home", action = "Services" }
            );

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
