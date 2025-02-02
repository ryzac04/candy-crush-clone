
export const isColumnOfFour = (
    newBoard: string[],
    boardSize: number,
    formulaForColumnOfFour: number
) => {
    for (let i: number = 0; i <= formulaForColumnOfFour; i++) {
        const columnOfThree: number[] = [
            i,
            i + boardSize,
            i + boardSize * 2,
            i + boardSize * 3
        ];
        const decidedColor: string = newBoard[i];

        const isBlank: boolean = newBoard[i] === "";

        if (columnOfThree.every((candy: number) => newBoard[candy] === decidedColor && !isBlank)) {
            columnOfThree.forEach((candy: number) => newBoard[candy] = "");
            return true;
        }
    }
};

export const isColumOfThree = (
    newBoard: string[],
    boardSize: number,
    formulaForColumnOfThree: number
) => {
    for (let i: number = 0; i <= formulaForColumnOfThree; i++) {
        const columnOfThree: number[] = [
            i,
            i + boardSize,
            i + boardSize * 2,
        ];
        const decidedColor: string = newBoard[i];

        const isBlank: boolean = newBoard[i] === "";

        if (columnOfThree.every((candy: number) => newBoard[candy] === decidedColor && !isBlank)) {
            columnOfThree.forEach((candy: number) => newBoard[candy] = "");
            return true;
        }
    }
};

export const checkForRowOfFour = (
    newBoard: string[],
    boardSize: number,
    invalidMoves: number[]
) => {
    for (let i: number = 0; i < boardSize * boardSize; i++) {
        const rowOfFour = [i, i + 1, i + 2, i + 3];
        const decidedColor: string = newBoard[i];

        const isBlank: boolean = newBoard[i] === "";
        if (invalidMoves.includes(i)) continue;

        if (rowOfFour.every((candy: number) => newBoard[candy] === decidedColor && !isBlank)) {
            rowOfFour.forEach((candy: number) => newBoard[candy] = "");
            return true;
        }
    }
}

export const checkForColumnOfThree = (
    newBoard: String[],
    boardSize: number,
    formulaForColumnOfThree: number
) => {
    for (let i = 0; i <= formulaForColumnOfThree; i++) {
        const columnOfThree = [i, i + boardSize, i + boardSize * 2];
        const decidedColor = newBoard[i];
        const isBlank = newBoard[i] === "";

        if (
            columnOfThree.every(
                (square) => newBoard[square] === decidedColor && !isBlank
            )
        ) {
            columnOfThree.forEach((square) => (newBoard[square] = ""));
            return true;
        }
    }
};

export const checkForRowOfThree = (
    newBoard: string[],
    boardSize: number,
    invalidMoves: number[]
) => {
    for (let i: number = 0; i < boardSize * boardSize; i++) {
        const rowOfThree = [i, i + 1, i + 2];
        const decidedColor: string = newBoard[i];

        const isBlank: boolean = newBoard[i] === "";
        if (invalidMoves.includes(i)) continue;

        if (rowOfThree.every((candy: number) => newBoard[candy] === decidedColor && !isBlank)) {
            rowOfThree.forEach((candy: number) => newBoard[candy] = "");
            return true;
        }
    }
}