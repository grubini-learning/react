import { HTMLAttributes, useState } from "react";

export const Player: React.FC<
  { name: string; symbol: string } & HTMLAttributes<HTMLElement> & {
      changeName: (symbol: string, newName: string) => void;
    }
> = ({ name, symbol, changeName, ...rest }) => {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditting] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(event.target.value);
  };

  const handleClick = () => {
    // When updating state based on old value use the c urrent valuie function,
    // because of potentially dealing with stale state due to batching.
    setIsEditting((isEditing) => !isEditing);
    if (isEditing) {
      changeName(symbol, playerName);
    }
  };

  let player = <span className="player-name">{playerName}</span>;
  let btnCaption = "Edit";

  if (isEditing) {
    player = <input required value={playerName} onChange={handleChange} />;
    btnCaption = "Save";
  }

  return (
    <li {...rest}>
      <span className="player">
        {player}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{btnCaption}</button>
    </li>
  );
};
