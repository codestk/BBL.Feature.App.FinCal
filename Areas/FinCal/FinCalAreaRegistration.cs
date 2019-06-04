using System.Web.Mvc;

namespace BBL.Feature.App.FinCal.Areas.FinCal
{
    public class FinCalAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "FinCal";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "FinCal_default",
                "FinCal/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}