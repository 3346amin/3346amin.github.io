import { useState } from 'react';

export default function Player({
  initialName,
  symbol,
  isActive,
  onChengeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setEditing] = useState(false);

  let editablePlayerName = <span className='player-name'>{playerName}</span>;
  let editText = 'Edit';

  function handleEditClick() {
    setEditing((editing) => !editing);
    if (isEditing) {
      onChengeName(symbol, playerName);
    }
  }
  function handleChange(event) {
    console.log(event);
    setPlayerName(event.target.value);
  }

  if (isEditing) {
    editablePlayerName = (
      <input
        type='text'
        required
        value={playerName}
        onChange={handleChange}
      />
    );
    editText = 'Save';
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className='player'>
        {editablePlayerName}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{editText}</button>
    </li>
  );
}
