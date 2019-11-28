import React from 'react';
import { Card, Icon, CardContent } from 'semantic-ui-react'

const PlayerCards = (props) => {

    const reverseName = props.player.name.split(", ")

    return (
        <Card >
            <Card.Content>
                <Card.Header> {reverseName[1]} {reverseName[0]}
                </Card.Header>
                <Card.Description>
                    Nationality: {props.player.nationality}, Gender: {props.player.gender}
                </Card.Description>
            </Card.Content>
            <CardContent extra>
                Height: {props.player.height}cm      Weight: {props.player.weight}kg      Pos: {props.player.position}
            </CardContent>
        </Card>
    )

}

export default PlayerCards