using COokie.Model;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;

namespace COokie.Controllers
{
    [Route("game")]
    [ApiController]
    public class GameController : ControllerBase
    {
        [HttpPost]
        [Route("registerPlayers")]
        public string RegisterPlayers(List<String> Names)
        {
            Player whitePlayer = new Player(Names[0], true);
            Player blackPlayer = new Player(Names[1], false);
            string gameId = Guid.NewGuid().ToString();


            Current.Instance.GameCache.AddGame(new Game(whitePlayer, blackPlayer, gameId));

            return gameId;            
        }

        [HttpGet]
        [Route("getPlayers")]
        public List<String> GetPlayers(string gameId)
        {
            Game game = Current.Instance.GameCache.GetGameById(gameId);
            List<String> result = new List<string>{game.GetWhitePlayer(), game.GetBlackPlayer()};
            return result;
        }

        [HttpGet]
        [Route("getCasesInformation")]
        public List<Case> GetCasesInformation(string gameId)
        {
            Game game = Current.Instance.GameCache.GetGameById(gameId);
            List<Case> result = game.GetCasesInformation();
            return result;
        }

    }
}
