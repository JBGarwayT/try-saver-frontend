import React from 'react';
import TeamCards from './TeamCards'
import PlayerCards from './PlayerCards';

const TeamInfoBox = (props) => {

    return (

        <div id="Players" className="grid-item">
            {props.players.map(pl => <PlayerCards player={pl}/>)}
        </div>
    )

}

export default TeamInfoBox;
