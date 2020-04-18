using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace werewolfv1.Models
{
    public class DummyThings
    {
        public List<Player> Players = new List<Player>();

        private static readonly string[] Roles = new[]
        {
            "WereWolf", "Villager", "Witch", "Oracle", "Nem"
        };

        public DummyThings() {
            for (int i = 0; i < 5; i++)
            {
                Players.Add(new Player
                { 
                    Id = i,
                    Name = "laci" + i,
                    Alive = true,
                    RoleString = Roles[i]
                });
            }
        }
    }
}
