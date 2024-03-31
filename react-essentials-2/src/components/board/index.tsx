import { IBoard } from "../../model";

export const Board: React.FC<{
  board: IBoard;
  handleMove: (row: number, col: number) => void;
}> = ({ board, handleMove }) => {
  return (
    <ol id="game-board">
      {board.map((row, rowIdx) => (
        <li key={rowIdx}>
          {
            <ol>
              {row.map((value, colIdx) => (
                <li key={colIdx}>
                  <button
                    onClick={() => handleMove(rowIdx, colIdx)}
                    disabled={!!board[rowIdx][colIdx]}
                  >
                    {value}
                  </button>
                </li>
              ))}
            </ol>
          }
        </li>
      ))}
    </ol>
  );
};
