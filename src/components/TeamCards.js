import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import './Columns.css'

const TeamCards = (props) => {
 
    const date = Date()
    const nextMatch = props.rugbyTeam.matches.find(match => match.date >= new Date().toISOString())


    return (
        <Card onClick={e => props.click(props.rugbyTeam.id)} >
            <Card.Content>
            <Card.Header>{props.rugbyTeam.name}</Card.Header>
            <Card.Description>
                Next game on {nextMatch.date.split("T")[0]} 
                <br />
                @ {nextMatch.location}
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <a>
                <Icon name='user' />
                Squad size: {props.rugbyTeam.players.length}
            </a>
            </Card.Content>
        </Card>
    )
}

export default TeamCards;