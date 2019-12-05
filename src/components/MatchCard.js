import React, {Component} from 'react';
import { Card, CardContent, Segment } from 'semantic-ui-react';
import API from '../helper_methods/api'

const MatchCard = (props) => {

    const team_score_1 = props.match.team_matches[0].team_score || "Unknown 1"
    const team_score_2 = props.match.team_matches[1].team_score || "Unknown 2"

    const home = (props.match.team_matches[0].team_api_id === props.match.teams[0].api_id ? props.match.teams[0] : props.match.teams[1])
    const away = (props.match.team_matches[0].team_api_id !== props.match.teams[0].api_id ? props.match.teams[0] : props.match.teams[1])
    const home_color =  `#${home.color_1}`
    const away_color =  `#${away.color_1}`

    const position = () => {
        // debugger
       
        if (team_score_1 > team_score_2) {
            return (<Card.Description>{home.name.split('R')[0]} win against {away.name.split('R')[0]}
                <br />
                @ {props.match.location}, {props.match.city}
            </Card.Description>
        )}
        else if (team_score_1 < team_score_2) {
            return (<Card.Description>{away.name.split('R')[0]} win against {home.name.split('R')[0]}
                <br />
                @ {props.match.location}, {props.match.city}
            </Card.Description>
        )}
        else if (team_score_1 === team_score_2) {
            return (<Card.Description>{home.name.split('R')[0]} draw against {away.name.split('R')[0]}
                <br />
                @ {props.match.location}, {props.match.city}
            </Card.Description>
        )}
    }

    const teamColor = (color) => {
        return {backgroundColor: color}
    }

    const playedOrNot = () => {
        if (props.match.date < new Date().toISOString()) {
            return <Card.Content>
                <Card.Header > 
                    <Segment raised>
                        <span className='ribbon-left' style={teamColor(home_color)} />
                        {home.abbreviation}  {team_score_1} vs {team_score_2}  {away.abbreviation}
                        <span className='ribbon-right' style={teamColor(away_color)} />
                    </Segment>
                </Card.Header>
                {position()}
            </Card.Content> 
        }
        else {
            return <Card.Content>
            <Card.Header > 
                <Segment raised>
                    <span className='ribbon-left' style={teamColor(home_color)} />
                    {home.abbreviation} vs {away.abbreviation}
                    <span className='ribbon-right' style={teamColor(away_color)} />
                </Segment>
            </Card.Header>
            <Card.Description>{props.match.date}, {props.match.kick_off_time}
                <br />
                @ {props.match.location}, {props.match.city}
            </Card.Description>
        </Card.Content> 
        }
    }
    
    return (
        
        <Card >
            {playedOrNot()}
        </Card>
        
    )
}

export default MatchCard

