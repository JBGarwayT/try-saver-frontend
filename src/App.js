import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import Search from "./components/Search";
import API from './helper_methods/api'

class App extends Component {

  state = {
    teams: [],
    selectedTeam: "",
    teamMatches: [],
    userInput: '',
    players: [],
  }

  componentDidMount() {
    API.getTeams()
    .then(teams => this.setState({ 
      teams: teams,
      players: teams.map(team => team.players).flat(),
    }))
  }

  selectTeam = (teamID) => {
    const team = this.state.teams.find(team => team.id === teamID)
    this.setState({ 
      selectedTeam: teamID,
      teamMatches: team.matches
    })
  }

  fillSearch = (input) => {
    this.setState({
      selectedTeam: "",
      userInput: input,
    })
  }

  availableTeamsFromSearch = () => {
    if (this.state.userInput !== '')
      {
        const searchTerm = this.state.userInput.toLocaleLowerCase()
      return this.state.teams.filter(team => team.name.toLocaleLowerCase().includes(searchTerm))}
    else {
      return this.state.teams
    }
  }

  availabeTeamPlayers = () => {
    if (this.state.userInput !== '') {
      const searchTerm = this.state.userInput.toLocaleLowerCase()
      return this.state.players.filter(player => player.name.toLocaleLowerCase().includes(searchTerm))
    }
    else if (this.state.selectedTeam !== "") {
      const team = this.state.teams.find(t => t.id === this.state.selectedTeam)
      return team.players
    }
    else {
      const pleaseSelectATeam = [{
        name: "team to render players, Please select a"
      }]
      return pleaseSelectATeam
    }
  }

  clearSelectedTeam = () => {
    this.setState({
      selectedTeam: ""
    })
  }

  render() {
    return (
    <div className="App">
      <Header /> 
      <Search fillSearch={this.fillSearch}/>
      <MainContainer teams={this.availableTeamsFromSearch()} selectedTeam={this.state.selectedTeam} chooseTeam={this.selectTeam} players={this.availabeTeamPlayers()} clearTeam={this.clearSelectedTeam}/>
    </div>
    );
  }
  
}

export default App;
