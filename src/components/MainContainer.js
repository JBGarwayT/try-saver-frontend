import React, { Component } from 'react';
import './MainContainer.css'
import TeamInfoBox from './TeamInfoBox';
import LeagueInfoBox from './LeagueInfoBox';
import Matches from './Matches'
import API from '../helper_methods/api';

class MainContainer extends Component {

  state = {
    leagueMatches: []
  }

  componentDidMount(){
    API.getMatches()
    .then(matches => this.setState({ leagueMatches: matches}))
  }

  selectedTeamMatches = () => {
    const allTeamsInAllMatches = this.state.leagueMatches.filter(match => match.teams.find(team => team.id === this.props.selectedTeam ))
    return allTeamsInAllMatches
  }



  render() {
    return (
      <div className="grid-container">
        <div className="tabheaders">
          <button className="tablinks">English Premiership</button>
        </div>
        <Matches matches={this.props.selectedTeam !== "" ? this.selectedTeamMatches() : this.state.leagueMatches}>
        </Matches>
        <LeagueInfoBox teams={this.props.teams} chooseTeam={this.props.chooseTeam} />
        <TeamInfoBox players={this.props.players} ></TeamInfoBox>
      </div>
    );
  }

}

export default MainContainer;
