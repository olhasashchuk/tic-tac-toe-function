import { useEffect, useState } from "react";
import calculateWinner from "../helpers/calculateWinner.js";

export function useBoard(initialState) {
    const [squares, setSquares] = useState(initialState)
    const [xIsNext, setXIsNext] = useState(true);
    const [winner, setWinner] = useState(null);

    const handleClick = (position) => {
        if (squares[position] || winner) {
            return;
        } else {
            const newSquares = [...squares];
            newSquares[position] = xIsNext ? 'X' : 'O';
            const newWinner = calculateWinner(newSquares);
            setSquares(newSquares);
            setWinner(newWinner);
            setXIsNext(!xIsNext);
            localStorage.setItem('gameState', JSON.stringify({ squares: newSquares, winner: newWinner }));
        }
    }
    useEffect(() => {
        const gameState = localStorage.getItem('gameState');
        if (gameState !== null) {
            const valueGameState = JSON.parse(gameState);
            setSquares(valueGameState.squares);
            setWinner(valueGameState.winner);
        }
    }, []);

    const resetGame = () => {
        setSquares(initialState);
        setWinner(null);
        localStorage.removeItem('gameState');
    }

    return {
        squares,
        winner,
        handleClick,
        resetGame,
    }
}