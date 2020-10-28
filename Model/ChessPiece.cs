using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace COokie.Model
{
    public abstract class ChessPiece
    {
        public Boolean IsWhite { get; }
        public int Position { get; }

        public string Logo { get; }


        public ChessPiece(Boolean isWhite, int position)
        {
            IsWhite = isWhite;
            Position = Position;
        }
    }
}
