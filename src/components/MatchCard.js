import React, {Component} from 'react';
import { Card, Label, CardContent, Segment } from 'semantic-ui-react';
import API from '../helper_methods/api'

const MatchCard = (props) => {

    const splitting = props.match.date.split("T")

    const date = splitting[0]
    const time = splitting[1].split(":00+")[0]

    const homeColor = '#' + props.match.teams[0].color_1

        return (
            
            <Card >
                <Card.Content>
                    <Card.Header > 
                        <Segment raised>
                            <div color={homeColor} ribbon />
                            <div color={homeColor} ribbon='right' />
                                {console.log(homeColor)}
                                {props.match.teams[0].abbreviation} vs {props.match.teams[1].abbreviation}
                        </Segment>
                    </Card.Header>
                    <Card.Description>{date} egg chasing starts at {time}
                        <br />
                        @ {props.match.location}, {props.match.city}
                    </Card.Description>
                </Card.Content>
                
            </Card>
           
        )
}

export default MatchCard


// <h1 class="ribbon">
//   <strong class="ribbon-content">Everybody loves ribbons</strong>
//   </h1>