import React from 'react';
import TeamCards from './TeamCards';

const LeagueInfoBox = (props) => {
    // 
    return (
        <div id="Teams" className="grid-item">
            {props.teams && props.teams.map(team => <TeamCards rugbyTeam={team} click={props.chooseTeam} message='Select this team'/>)}
        </div>
    )
}

export default LeagueInfoBox;