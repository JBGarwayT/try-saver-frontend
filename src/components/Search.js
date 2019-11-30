import React from 'react';
import { Input } from 'semantic-ui-react'

const Search = (props) => {
  return (
    <div>
      <strong>Search team or players:</strong>
      <br/>
      <Input loading icon='user' iconPosition='left' placeholder='Search teams/players' onChange={e => props.fillSearch(e.target.value)} className='search'/>
    </div>
  );
}


export default Search;

//       <label>
// <strong>Filter:</strong>
// <select onChange={null}>

//   <option value="Teams">Teams</option>
//   <option value="Players">Players</option>
//   <option value="Matches">Matches</option>
// </select>
// </label>
