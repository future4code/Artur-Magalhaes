import React from 'react';
import style from 'styled-components'
import axios from 'axios'
import Playlists from './components/Playlists';

const axiosConfig = {
    headers: {
      Authorization: 'artur-magalhaes-mello'
    }
}

class App extends React.Component {
  state = {
    page: 'home',
    playlist: '',
    playlists: [],
    name: '',
  }

  componentDidMount = () => {
    this.getAllPlaylists()
  }

  componentDidUpdate = () => {
    this.getAllPlaylists()
  }

  getAllPlaylists = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',  
      axiosConfig)
      .then(response => {
        this.setState({
          playlists: response.data.result.list
        })
        console.log(response.data.result.list)
      })
      .catch(error => {
        console.log(error)
      })
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

  deletePlaylist = (id) => {
    const ok = window.confirm('Deseja apagar a playlist?')
    ok ? (
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
      axiosConfig)
      .then(response => {
        console.log(response.data.result.list)
        this.getAllPlaylists()
      })
      .catch(error => {
        console.log(error)
      })
      ) : window.alert('Playlist não foi apagada')
  }

  detailPlaylist = (playlist) => {
    this.setState({
      page: 'playlist',
      playlist: playlist
    })
  }

  pageHome = () => {
    this.setState({
      page: 'home'
    })
  }

  //onChanges
  onChangeAddPlaylist = (event) => {
    this.setState({
      name: event.target.value,
    })
  }

  render() {
    switch (this.state.page) {
      case 'home':
        return (
          <div>
            <input placeholder='Criar Playlist' 
              onChange={this.onChangeAddPlaylist}
              value={this.state.name}
            />
            <button onClick={this.addPlaylist}>Adicionar Playlist</button>
            {this.state.playlists.map(playlist => {
              return(
                <div>
                  <span key={playlist.id} onClick={() => this.detailPlaylist(playlist)}>{playlist.name} </span>
                  <button onClick={() => this.deletePlaylist(playlist.id)}>X</button>
                </div>
              )
            })}
          </div>
        )
      case 'playlist':
        return(
          <div>
            <button onClick={this.pageHome}>Voltar</button>
            <Playlists playlist={this.state.playlist}/>
          </div>
        )
    }
    
  }
}

export default App;
