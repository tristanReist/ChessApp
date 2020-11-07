import { Case } from "./Case"

export enum PieceType
{
    Pawn,
}

export interface Piece {
    isWhite: boolean;
    position: number;
    logo: string;
    type: PieceType;
}

export function movePiece(piece: Piece, cases: Case[]): void {
    let converter = function(intId: number) : number {
        return   8 * (7 - Math.floor(intId / 8)) + intId % 8;
    };
    switch (piece.type) {
        case PieceType.Pawn:
            cases[converter(piece.position)].isIlluminated = true;
            break;
        default:
    }
}