import React from 'react';
import './Matches.css'
import MatchCard from './MatchCard';

const Matches = (props) => {
    return (
        <div id="Matches" className="grid-item" >
            {props.matches.map(m => <MatchCard match={m}/>)}
        </div>
    )
}

export default Matches;