

function chess (piece){
    let lower = piece.toLowerCase();
    if (lower == 'knight'){
        return 'L-shape';
    } if (lower == 'bishop'){
        return 'diagonals';
    } if (lower == 'rook'){
        return 'columns & lines';
    } if (lower == 'king'){
        return 'one square any direction'
    } if (lower == 'queen'){
        return 'any squares any direction'
    } if (lower == 'pawn'){
        return 'one square forward, captures one square diagonally ahead'
    } else {
        return invalid;
    }
}

