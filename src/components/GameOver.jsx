export function GameOver({ winner, restartMatch }) {
  return (
    <div id='game-over'>
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It's draw</p>}
      <p>
        <button onClick={restartMatch}>Remach</button>
      </p>
    </div>
  );
}
