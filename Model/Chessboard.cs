using Microsoft.VisualBasic.CompilerServices;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace COokie.Model
{
    public class Chessboard
    {
        Dictionary<string, Case> Cases;


        public Chessboard()
        {
            Cases = new Dictionary<string, Case>();
            string[] charBoard = {"a", "b", "c", "d", "e", "f", "g", "h"};
            for (int i = 0; i < 8; i++)
            { 
                for (int j = 0; j < 8; j++)
                {
                    string tempCase = charBoard[i] + j;
                    Cases.Add(tempCase, new Case(tempCase));
                }
            }

        }

        public List<Case> GetCasesList()
        {
            List<Case> result = new List<Case>();
            foreach (KeyValuePair<string, Case> entry in Cases)
            {
                result.Add(entry.Value);
            }
            return result;
        }
    }
}