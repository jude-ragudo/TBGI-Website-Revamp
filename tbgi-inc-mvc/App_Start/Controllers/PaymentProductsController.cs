using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace tbgi_inc_mvc.Controllers
{
    public class PaymentProductsController : Controller
    {
        // GET: PaymentProducts
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult BillingInfo()
        {
            return View();
        }
    }
}