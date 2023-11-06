import "./Board.styles.css";
import { useState } from "react";
import { Square } from "../square/Square.component";

export function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isCircle, setCircle] = useState(false);
  function handleClick(index) {
    const nextSquares = [...squares];
    if (isCircle) {
      nextSquares[index] = "O";
      setCircle(false);
    } else {
      nextSquares[index] = "X";
      setCircle(true);
    }

    setSquares(nextSquares);
    determinateWinner(nextSquares);
  }
  function determinateWinner(squares) {
    for (let i = 0; i < squares.length; i += 3) {
      console.log("winner: ", squares.slice(i, i + 3));
    }
  }

  return (
    <div className="board">
      {squares.map((square, index) => {
        return (
          <Square
            key={index}
            value={square}
            onClick={() => handleClick(index)}
          ></Square>
        );
      })}
    </div>
  );
}
