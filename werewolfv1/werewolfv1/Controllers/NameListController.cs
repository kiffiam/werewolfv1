using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using werewolfv1.Models;

namespace werewolfv1.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class NameListController: ControllerBase
    {
        private static readonly string[] Roles = new[]
        {
            "WereWolf", "Villager", "Witch", "Oracle"
        };

        private readonly ILogger<NameListController> _logger;

        public NameListController(ILogger<NameListController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Player> Get()
        {
            DummyThings dummyThings = new DummyThings();
            var rng = new Random();
            int i = 0;
            return dummyThings.Players.ToArray();
        }
    }
}
