using COokie.Model.PiecesTypes;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Threading.Tasks;

namespace COokie.Model
{
    public class Case
    {
        public string CaseIdString { get; }
        public int CaseIdInt { get; }
        public Boolean isIlluminated { get; set; }
        public Boolean isWhite { get; }
        public ChessPiece piece { get; set; }


        public Case(string id)
        {
            isIlluminated = false;
            CaseIdString = id;
            CaseIdInt = (id[0] - 97) * 8 + id[1] - 48;
            if (CaseIdInt % 2 == 0)
            {
                isWhite = true;
            }
            if ((id[0] - 97)  % 2 == 0)
            {
                if (id[1] % 2 == 0)
                {
                    isWhite = true;
                }
                else
                {
                    isWhite = false;
                }
            }
            else
            {
                if (id[1] % 2 == 0)
                {
                    isWhite = false;
                }
                else
                {
                    isWhite = true;
                }
            }
            this.PutTheRightPieceOnCase();
        }

        private void PutTheRightPieceOnCase()
        {
            if (CaseIdInt / 8 == 1)
            {
                this.piece = new Pawn(true, CaseIdInt);
            }
            /*
            else if (CaseIdInt / 8 == 6)
            {
                this.piece = new Pawn(false, CaseIdInt);
            }
            */
        }

        public void Illuminate(Dictionary<string, Case> cases)
        {
            if (piece != null)
            {
                piece.DisplayMovements(cases);
            }
        }
    }
}
