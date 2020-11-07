using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace COokie.Model
{

    public enum PieceType
    {
        Pawn,
    }

    public abstract class ChessPiece
    {
        public Boolean IsWhite { get; }
        public int Position { get; }
        public string Logo { get; set; }

        public PieceType Type { get; set; }


        public ChessPiece(Boolean isWhite, int position)
        {
            IsWhite = isWhite;
            Position = position;
        }

        public abstract void DisplayMovements(Dictionary<string, Case> cases);
    }
}
