import React from 'react'
import style from 'styled-components'
import axios from 'axios'

let music = ''
let artist = ''
let url = ''

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

  return(
    <div>
      {playlist.name}
      <div>
        <input placeholder='Música' onChange={inputMusic} value={music}/>
        <input placeholder='Artista' onChange={inputArtist} value={artist}/>
        <input placeholder='URL' onChange={inputURL} value={url}/>
        <button onClick={addTrackToPlaylist}>Adicionar</button>
      </div>
    </div>)
}

export default Playlists;