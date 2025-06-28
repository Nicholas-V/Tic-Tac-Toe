export default function GameBoard({ onSelectSquare, board }) {


    return <ol id="game-board" data-testid="game-board">
        {board.map((row, rowIndex) => <li key={rowIndex} data-testid={`row-${rowIndex}`}>
            <ol>
                {row.map((playerSymbol, colIndex) => <li key={colIndex} data-testid={`col-${colIndex}`}>
                    <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
                </li>)}
            </ol>
        </li>)}
    </ol>
}