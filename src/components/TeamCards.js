import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import './Columns.css'

const TeamCards = (props) => {
 
    const nextMatch = props.rugbyTeam.matches.find(match => match.date >= new Date().toISOString())
    const match = () => {
        if (nextMatch) {
            return <Card.Description>
                Next game on {nextMatch.date.split("T")[0]} 
                <br />
                @ {nextMatch.location}
            </Card.Description>}
        else {
            return <Card.Description>
                There are no upcoming matches
            </Card.Description>}
    }

    return (
        <Card onClick={e => props.click(props.rugbyTeam.id)} >
            <Card.Content>
            <Card.Header>{props.rugbyTeam.name}</Card.Header>
                {match()}
            </Card.Content>
            <Card.Content extra>
            <a>
                <Icon />
                {props.message}
            </a>
            </Card.Content>
        </Card>
    )
}

export default TeamCards;