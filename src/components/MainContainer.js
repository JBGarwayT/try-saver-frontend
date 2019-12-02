import React, { Component } from 'react';
import './MainContainer.css'
import TeamInfoBox from './TeamInfoBox';
import TeamCards from './TeamCards';
import LeagueInfoBox from './LeagueInfoBox';
import Matches from './Matches'
import API from '../helper_methods/api';
import { Header, Icon } from 'semantic-ui-react'

class MainContainer extends Component {

  state = {
    leagueMatches: []
  }

  componentDidMount(){
    API.getMatches()
    .then(matches => this.setState({ leagueMatches: matches}))
  }

  selectedMatches = () => {
    if (this.props.selectedTeam !== "") {
      const allTeamsInAllMatches = this.state.leagueMatches.filter(match => match.teams.find(team => team.id === this.props.selectedTeam ))
      return allTeamsInAllMatches}
    else {
      return this.state.leagueMatches.filter(match => match.date >= new Date().toISOString())
    }
  }

  presentSelectedTeam = () => {
    if (this.props.selectedTeam) {
      const team = this.props.teams.filter(team => team.id === this.props.selectedTeam)
      return <TeamCards rugbyTeam={team[0]} click={this.props.clearTeam} />
      // return team[0]
    }
    else {
      return "English Premiership teams"
    }
  }

  selectedTeamName = () => {
    if (this.props.selectedTeam) {
      const team = this.props.teams.filter(team => team.id === this.props.selectedTeam)
      return `${team[0].name} squad members`
    }
    else {
      return "Please select a club to see its squad members"
    }
  }

  render() {
    return (
      <div className="grid-container">
        <div className="tabheaders">
          <button className="tablinks">English Premiership</button>
        </div>
         <div className="tabheaders">
          <Header as='h2'>
            <Header.Content>
              You are looking at
            </Header.Content>
          </Header>
          <br />
          {this.presentSelectedTeam()}          
        </div>
        <div className="tabheaders">
          <Header as='h2'>
            <Header.Content>
              {this.selectedTeamName()}
            </Header.Content>
          </Header>
        </div>
        <Matches matches={this.selectedMatches()} />
        <LeagueInfoBox teams={this.props.teams} chooseTeam={this.props.chooseTeam} />
        <TeamInfoBox players={this.props.players} />
      </div>
    );
  }

}

export default MainContainer;
