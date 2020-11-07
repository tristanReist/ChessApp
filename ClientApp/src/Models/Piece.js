"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movePiece = exports.PieceType = void 0;
var PieceType;
(function (PieceType) {
    PieceType[PieceType["Pawn"] = 0] = "Pawn";
})(PieceType = exports.PieceType || (exports.PieceType = {}));
function movePiece(piece, cases) {
    var converter = function (intId) {
        return 8 * (7 - Math.floor(intId / 8)) + intId % 8;
    };
    switch (piece.type) {
        case PieceType.Pawn:
            cases[converter(piece.position)].isIlluminated = true;
            break;
        default:
    }
}
exports.movePiece = movePiece;
//# sourceMappingURL=Piece.js.map