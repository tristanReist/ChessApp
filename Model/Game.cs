using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Permissions;
using System.Threading.Tasks;

namespace COokie.Model
{
    public class Game
    {
        public Player WhitePlayer { get; }
        public Player BlackPlayer { get; }
        public String GameID { get; }
        public DateTime StartGameTime { get; set; }

        public Chessboard Board;

        public Game(Player whitePlayer, Player blackPlayer, String gameId)
        {
            WhitePlayer = whitePlayer;
            BlackPlayer = blackPlayer;
            GameID = gameId;
            Board = new Chessboard();
        }

        public String GetWhitePlayer()
        {
            return WhitePlayer.Name;
        }

        public String GetBlackPlayer()
        {
            return BlackPlayer.Name;
        }

        public List<Case> GetCasesInformation()
        {
            return Board.GetCasesList();
        }

        public DateTime InitTimer()
        {
            StartGameTime = DateTime.Now;
            return StartGameTime;
        }
    }
}
