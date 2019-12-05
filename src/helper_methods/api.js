const teams_URL = 'http://localhost:3000/teams'
const matches_URL = 'http://localhost:3000/matches'
const leagues_URL = 'http://localhost:3000/leagues'

class API {

    static getLeagues = () => fetch(leagues_URL).then(resp => resp.json())

    static getTeams = () => fetch(teams_URL).then(resp => resp.json())

    static getMatches = () => fetch(matches_URL).then(resp => resp.json())

    // static getTeamMatches = () => fetch(teamMatches_URL).then(resp => resp.json())

}

export default API;