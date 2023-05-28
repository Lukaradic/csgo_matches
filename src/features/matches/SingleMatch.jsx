export function SingleMatch({ match }) {
    const teamOne = match.team1;
    const teamTwo = match.team2;
    return (
        <li className="match__single">
            <div className="match__single--first team">
                <h2 className="team__title">{teamOne.title}</h2>
            </div>
            <div className="match__single--second team">
                <h2 className="team__title">{teamTwo.title}</h2>
                
            </div>
        </li>
    )
}