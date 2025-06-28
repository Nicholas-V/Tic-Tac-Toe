export default function Log({turns}) {
    return <ol id="log" data-testid="game-log">
        {turns.map(turn => <li
            key={`${turn.square.row}${turn.square.col}`}>{turn.player} selected {turn.square.row}, {turn.square.col}</li>)}
    </ol>
}