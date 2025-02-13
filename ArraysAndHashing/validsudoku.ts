// Determine if a 9 x 9 Sudoku board is valid.
// Only the filled cells need to be validated according to the following rules:
//
// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:
//
// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

function isValidSudoku(board: string[][]): boolean {
    let rows = new Array(9).fill(0).map(() => new Array(9).fill(0));
    let cols = new Array(9).fill(0).map(() => new Array(9).fill(0));
    let boxes = new Array(9).fill(0).map(() => new Array(9).fill(0));
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== ".") {
                let num = Number(board[i][j]) - 1;
                let k = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                if (rows[i][num] || cols[j][num] || boxes[k][num]) {
                    return false;
                }
                rows[i][num] = 1;
                cols[j][num] = 1;
                boxes[k][num] = 1;
            }
        }
    }
    return true;
}

export { isValidSudoku };
