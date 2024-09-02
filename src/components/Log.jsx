export default function Log({ currentGame }) {
  return (
    <ol id='log'>
      {currentGame.length === 0
        ? undefined
        : currentGame.map((players) => (
            <li key={`${players.square.row}${players.square.col}`}>
              {players.player} selected {players.square.row},
              {players.square.col}
            </li>
          ))}
    </ol>
  );
}
