import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import Search from "./components/Search";
import API from './helper_methods/api'

class App extends Component {

  state = {
    leagues: [],
    selectedLeagueId: "3",
    teams: [],
    selectedTeam: "",
    userInput: '',
    players: [{
      name: "team to render players, Please select a"
    }],
  }

  componentDidMount() {
    API.getLeagues()
      .then(leagues => this.setState({
        leagues: leagues,
        teams: leagues.find(lg => lg.id === this.state.selectedLeagueId)
    }))
    API.getSingleLeague(this.state.selectedLeagueId)
      .then(league => this.setState({ 
        teams: league.teams,
    }))
  }

  changeLeagueId = (id) => {
    this.setState({
      selectedTeam: "",
      players: [{
        name: "team to render players, Please select a"
      }],
      selectedLeagueId: id,
    })
    API.getSingleLeague(id)
      .then(league => this.setState({ 
        teams: league.teams,
    }))
  }

  selectTeam = (teamID) => {
    API.getSingleTeam(teamID)
    .then(team => this.setState({ 
      players: team.players,
      selectedTeam: teamID,
      userInput: "",
    }))
  }

  fillSearch = (input) => {
    this.setState({
      selectedTeam: "",
      userInput: input,
    })
  }

  availableTeamsFromSearch = () => {
    if (this.state.userInput !== '') {
        const searchTerm = this.state.userInput.toLocaleLowerCase()
      return this.state.teams.filter(team => team.name.toLocaleLowerCase().includes(searchTerm))}
    else {
      return this.state.teams
    }
  }

  availabeTeamPlayers = () => {
    if (this.state.userInput !== '' && this.state.players !== [{name: "team to render players, Please select a"}]) {
      const searchTerm = this.state.userInput.toLocaleLowerCase()
      return this.state.players.filter(player => player.name.toLocaleLowerCase().includes(searchTerm))
    }
    else{
      return this.state.players
    }
  }

  clearSelectedTeam = () => {
    this.setState({
      selectedTeam: "",
      players: [{
        name: "team to render players, Please select a"
      }],
    })
  }

  render() {
    return (
    <div className="App">
      <Header /> 
      <Search fillSearch={this.fillSearch}/>
      <MainContainer teams={this.availableTeamsFromSearch()} selectedTeam={this.state.selectedTeam} chooseTeam={this.selectTeam} players={this.availabeTeamPlayers()} clearTeam={this.clearSelectedTeam} leagues={this.state.leagues} changeLeagueId={this.changeLeagueId}/>
    </div>
    );
  }
  
}

export default App;


