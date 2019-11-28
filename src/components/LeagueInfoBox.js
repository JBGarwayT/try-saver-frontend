import React from 'react';
import TeamCards from './TeamCards';

const LeagueInfoBox = (props) => {
    return (
        <div id="Teams" className="grid-item">
            {props.teams.map(team => <TeamCards rugbyTeam={team} click={props.chooseTeam}/>)}
        </div>
    )
}

export default LeagueInfoBox;