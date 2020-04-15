using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace werewolfv1.Models
{
    public class Player
    {        
        public int Id { get; set; }
        public string Name { get; set; }
        public bool Alive { get; set; }
        public IRole Role { get; set; }



    }
}
