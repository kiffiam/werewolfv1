using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace werewolfv1.Models
{
    public class WereWolf : Villager, INightRole
    {
        public void NightAction()
        {
            VoteToKill();
        }

        private void VoteToKill()
        {
            throw new NotImplementedException();
        }
    }
}
