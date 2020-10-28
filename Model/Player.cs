using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace COokie.Model
{
    public class Player
    {
        public String Name { get; }

        public Boolean IsWhite { get; }

        public Player(String name, Boolean isWhite)
        {
            Name = name;
            IsWhite = isWhite;
        }
    }
}
