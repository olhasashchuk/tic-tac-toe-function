import Square from "./components/Square.jsx";
import { useBoard } from "./hooks/useBoard.jsx";
import { Button } from "./components/Button.jsx";

const initialBoard = new Array(9).fill(null);

function Board() {
    const { squares, winner, handleClick, resetGame } = useBoard(initialBoard) // useBoard => { squares, handleClick }

    const renderSquare = (i) => {
            return <Square key={i} value={squares[i]} onClick={() => {
                handleClick(i)
            }}/>
    }

    return (
    <div className="container board_container">
        <h1 className="text-white m-5">Tic-Tac-Toe Game</h1>
        <div>
            <div className="flex">
                {[0,1,2].map(renderSquare)}
            </div>
            <div className="flex">
                {[3,4,5].map(renderSquare)}
            </div>
            <div className="flex">
                {[6,7,8].map(renderSquare)}
            </div>
        </div>
        <h2 className="text-white m-5">Winner is {winner}   !</h2>
        <Button className="btn-success" onClick={resetGame}>Start New Game</Button>

    </div>
  )
}

export default Board
