using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace werewolfv1.Models
{
    public class Witch: Villager, INightRole
    {
        public void NightAction()
        {
            //SavePlayer(PlayerAboutToDie);
            //KillPlayer(PlayerToKill);
        }

        private void SavePlayer(Player player)
        {
            
        }

        private void KillPlayer(Player player)
        {
            player.Alive = false;
        }
    }
}
