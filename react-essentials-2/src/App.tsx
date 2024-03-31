import { useEffect, useState } from "react";
import { Player, Board } from "./components";

import { ITurn, IBoard, IPlayer } from "./model";

import { WinnerKey } from "./data";

const players: IPlayer = {
  X: "Player 1",
  O: "Player 2",
};

const generateBoard = (): IBoard => {
  return Array.from(Array(3), () => new Array(3).fill(null));
};

const rebuildBoard = (turns: ITurn[]): IBoard => {
  const board = generateBoard();

  for (let turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    board[row][col] = player;
  }

  return board;
};

const validateWinner = (board: any): string | null => {
  // iterate through the winner key, always ask myself can I make this more simple

  for (let key of WinnerKey) {
    const firstCell = board[key[0].row][key[0].col];
    const secondCell = board[key[1].row][key[1].col];
    const thirdCell = board[key[2].row][key[2].col];

    if (firstCell === secondCell && firstCell === thirdCell && firstCell)
      return firstCell;
  }

  return null;
};

const derivePlayer = (turn: ITurn): string => {
  const symbols = Object.keys(players);

  if (!turn) return symbols[0];

  let pl = turn.player;

  if (pl === "X") return symbols[1];

  return symbols[0];
};

const App = () => {
  const [gameTurns, setGameTurns] = useState<
    { square: { row: number; col: number }; player: string }[]
  >([]);
  const [realtimePlayers, setRealtimePlayers] = useState<IPlayer>(players);
  let activePlayer = derivePlayer(gameTurns[0]);
  let board = rebuildBoard(gameTurns);

  useEffect(() => {
    const result = validateWinner(board);

    if (result && realtimePlayers[result]) {
      alert(`Winner is ${realtimePlayers[result]}`);
      setGameTurns([]);
    } else if (gameTurns.length === 9) {
      alert("Draw");
      setGameTurns([]);
    }
  }, [gameTurns]);

  const handleMove = (row: number, col: number) => {
    setGameTurns((gameTurns) => {
      return [{ square: { row, col }, player: activePlayer }, ...gameTurns];
    });
  };

  const changeName = (symbol: string, newName: string) => {
    setRealtimePlayers((realtimePlayers) => {
      return {
        ...realtimePlayers,
        [symbol]: newName,
      };
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          {Object.keys(realtimePlayers).map((player, idx) => {
            return (
              <Player
                key={idx}
                {...{ name: realtimePlayers[player], symbol: player }}
                changeName={changeName}
                className={player === activePlayer ? "active" : ""}
              />
            );
          })}
        </ol>
        <Board board={board} handleMove={handleMove} />
      </div>
    </main>
  );
};

export default App;
