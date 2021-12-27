
export function win(board) {
    const winLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i = 0; i < winLines.length; i++) {
        const [a, b, c] = winLines[i];
        if (board[a] !== null && board[a] === board[b] && board[b] === board[c]) {
            return board[a];
        }
    }
    return null;
}

export function draw(board){
    for (let i=0; i<board.length; i++){
        if (board[i] === null) return false;
    }
    return true;
}