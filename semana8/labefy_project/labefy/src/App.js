import React from 'react';
import styled from 'styled-components'
import axios from 'axios'

const axiosConfig = {
    headers: {
      Authorization: 'artur-magalhaes-mello'
    }
}

class App extends React.Component {
  state = {
    playlists: [],
    name: '',
  }

  

  addPlaylist = () => {

    const data = {
      name: this.state.name
    }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', 
      data, 
    axiosConfig )
    .then(response => {
      this.setState({
        name: ''
      })
      console.log(response) })
    .catch(error => {
      console.log(error) })   
  }

  //onChanges
  onChangeAddPlaylist = (event) => {
    this.setState({
      name: event.target.value,
    })
  }

  

  render() {
    return (
      <div>
        <input placeholder='Criar Playlist' 
          onChange={this.onChangeAddPlaylist}
          value={this.state.name}
        />
        <button onClick={this.addPlaylist}>Adicionar Playlist</button>
        
      </div>
    )
  }
}

export default App;
