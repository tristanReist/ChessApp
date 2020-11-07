using Microsoft.Extensions.ObjectPool;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices.ComTypes;
using System.Threading.Tasks;
using System.Transactions;

namespace COokie.Model.PiecesTypes
{
    public class Pawn : ChessPiece
    {
        public Pawn(Boolean isWhite, int position) : base(isWhite, position)
        {
            Logo = "./Icons/WhitePawn.svg";
            Type = PieceType.Pawn;
        }

        
        public override void DisplayMovements(Dictionary<string, Case> cases)
        {
            //cases[this.StringId].isIlluminated = true;

        }
    }
}
