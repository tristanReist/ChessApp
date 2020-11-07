import { Piece } from "./Piece";

export interface Case {
    caseIdString: string;
    caseIdInt: number;
    isIlluminated: boolean;
    isWhite: boolean;
    piece: Piece;
}