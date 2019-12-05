import React from 'react';


const LeagueHeader = (props) => {

    return (
        <button className="tablinks" onClick={e => props.click(props.lg.id)}>{props.lg.name.split(" 19")[0]}</button>
       
    )
}

export default LeagueHeader;