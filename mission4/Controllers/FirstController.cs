using Microsoft.AspNetCore.Mvc;
using mission4.Models;
//these are my controllers there are two for calculator one to get other to post
namespace mission4.Controllers
{
    public class FirstController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public IActionResult Calculator()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Calculator(CalculatorModel model)
        {
            return View();
        }
    }
}
