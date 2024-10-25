import { useEffect } from "react";
import { moveBelow, updateBoard } from "./store";
import { useAppDispatch, useAppSelector } from "./store/hooks"
import { createBoard } from "./utils/createBoard";
import Board from "./components/Board";
import { checkForRowOfFour, isColumnOfFour, checkForRowOfThree } from "./utils/moveCheckLogic";
import { isColumOfThree } from "./utils/moveCheckLogic";
import { formulaForColumnOfFour, generateInvalidMoves } from "./utils/formulas";
import { formulaForColumnOfThree } from "./utils/formulas";

function App() {

  const dispatch = useAppDispatch();

  const board = useAppSelector(({ candyCrush: { board } }) => board);
  const boardSize = useAppSelector(({ candyCrush: { boardSize } }) => boardSize);

  useEffect(() => {
    dispatch(updateBoard(createBoard(boardSize)));
  }, [boardSize, dispatch]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const newBoard = [...board];
      isColumnOfFour(newBoard, boardSize, formulaForColumnOfFour(boardSize));
      isColumOfThree(newBoard, boardSize, formulaForColumnOfThree(boardSize));
      checkForRowOfFour(newBoard, boardSize, generateInvalidMoves(boardSize, true));
      checkForRowOfThree(newBoard, boardSize, generateInvalidMoves(boardSize));
      dispatch(updateBoard(newBoard))
      dispatch(moveBelow());
    }, 150);
    return () => clearInterval(timeout);
  }, [board, boardSize, dispatch])

  return (
    <div className="flex items-center justify-center h-screen">
      <Board />
    </div >
  )
}

export default App