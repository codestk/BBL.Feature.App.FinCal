using Sitecore;
using Sitecore.Data;
using Sitecore.Data.Items;
using Sitecore.Mvc.Controllers;
using Sitecore.Mvc.Presentation;
using Sitecore.Web.UI.WebControls;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Threading.Tasks;
using System.IO;
using System.Text;

namespace BBL.Feature.App.FinCal.Areas.FinCal.Controllers
{
    public class FinCalController : SitecoreController
    {
        // GET: FinCal/FinCal
        public override ActionResult Index()
        {
            Item contentItem = null;
            var database = Context.Database;
            if (database != null)
                if (!string.IsNullOrEmpty(
                    RenderingContext.Current.Rendering.DataSource))
                    contentItem = database.GetItem(new ID(
                        RenderingContext.Current.Rendering.DataSource));

            return View(contentItem);
        }
    }
}