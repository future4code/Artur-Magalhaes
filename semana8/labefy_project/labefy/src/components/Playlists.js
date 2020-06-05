import React from 'react'
import style from 'styled-components'
import axios from 'axios'

let music = ''
let artist = ''
let url = ''
let listMusic = []

const axiosConfig = {
    headers: {
      Authorization: 'artur-magalhaes-mello'
    }
}

const inputMusic = (event) => {
  music = event.target.value
}

const inputArtist = (event) => {
  artist = event.target.value
}

const inputURL = (event) => {
  url = event.target.value
}

function Playlists(props) {

  const { playlist } = props
  
  const getPlaylistTracks = (id) => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
      axiosConfig)
      .then(response => {
        listMusic = response.data.result.tracks
        console.log(listMusic)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const addTrackToPlaylist = () => {
    window.alert('Música Salva')
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlist.id}/tracks`,
      {"name": music,
      "artist": artist,
      "url": url,
      }, axiosConfig)
      .then(response => {
        music = ''
        artist = ''
        url = ''
      })
      .catch(error => {
          console.log(error)
      })
  }

  const list = listMusic.map(song=> {
      return (
        <div>
          <li key={song.id}>{song.name} - {song.name}</li>
          <audio src={`${song.url}`} controls></audio>
        </div>)
  })
  return(
    <div>
      {playlist.name}
      <div>
        <input placeholder='Música' onChange={inputMusic} value={music}/>
        <input placeholder='Artista' onChange={inputArtist} value={artist}/>
        <input placeholder='URL' onChange={inputURL} value={url}/>
        <button onClick={addTrackToPlaylist}>Adicionar</button>
      </div>
      {getPlaylistTracks(playlist.id)}
      {list}
    </div>)
}

export default Playlists;