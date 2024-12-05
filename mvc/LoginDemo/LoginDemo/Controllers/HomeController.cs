using System.Diagnostics;
using LoginDemo.Models;
using Microsoft.AspNetCore.Mvc;

namespace LoginDemo.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        /// <summary>
        /// Login Hyperlink
        /// </summary>
        /// <returns></returns>
        public IActionResult Login()
        {
            return View();
        }

        // POST: Handle Login Logic
        [HttpPost]
        public IActionResult Login(string username, string password)
        {
            // Static username and password for demonstration purposes
            if (username == "admin" && password == "password")
            {
                ViewData["Message"] = "Login Successful!";
            }
            else
            {
                ViewData["Message"] = "Incorrect Credentials!";
            }
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
