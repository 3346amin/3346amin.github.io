import { useState } from 'react';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, board }) {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handelSelectSquare(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedBoard = [
  //       ...prevGameBoard.map((innerArray) => [...innerArray]),
  //     ];
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedBoard;
  //   });

  //   onSelectSquare();
  // }
  // return (
  //   <ol id='game-board'>
  //     {gameBoard.map((row, rowIndex) => (
  //       <li key={rowIndex}>
  //         <ol>
  //           {row.map((playerSymbole, colIndex) => (
  //             <li key={colIndex}>
  //               <button onClick={() => handelSelectSquare(rowIndex, colIndex)}>
  //                 {playerSymbole}
  //               </button>
  //             </li>
  //           ))}
  //         </ol>
  //       </li>
  //     ))}
  //   </ol>
  // );

  return (
    <ol id='game-board'>
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbole, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbole !== null}
                >
                  {playerSymbole}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}