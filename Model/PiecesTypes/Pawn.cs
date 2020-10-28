using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Transactions;

namespace COokie.Model.PiecesTypes
{
    public class Pawn : ChessPiece
    {
        public Pawn(Boolean isWhite, int position) : base(isWhite, position)
        {
        }
    }
}
