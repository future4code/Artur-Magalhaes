import React from 'react'
import { DivAddMusic, H3, H2, DivContent, Input, Button, DivListMusic, DataList, AudioMedia } from './style'
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
            <DataList key={song.id}>{song.name} - {song.name}</DataList>
            <AudioMedia src={`${song.url}`} controls />
        </div>)
  })
  return(
    <div>
      <H2>{playlist.name.toUpperCase()}</H2>
      <DivContent>
        <DivAddMusic>
            <H3>Adicionar Música </H3>
                <Input placeholder='Música' onChange={inputMusic} value={music}/>
                <Input placeholder='Artista' onChange={inputArtist} value={artist}/>
                <Input placeholder='URL' onChange={inputURL} value={url}/>
                <Button onClick={addTrackToPlaylist}>ADICIONAR</Button>
        </DivAddMusic>
        <DivListMusic>
            {getPlaylistTracks(playlist.id)}
            <ol>
                {list}
            </ol>
        </DivListMusic>
      </DivContent>
    </div>)
}

export default Playlists;