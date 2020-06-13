import React from 'react'
import axios from 'axios'

class Song extends React.Component{
    state = {
        artits: '',
        music: '',
        lyric: '',
    }

    onClickSearch = (artits, music) => {
      axios.get(`https://api.lyrics.ovh/v1/${artits}/${music}`)
      .then(response => {
          console.log(response)
          this.setState({
              lyric: response.data.lyrics
          })
      })
    }

    onChangeGetArtist = (event) => {
        this.setState({
            artits: event.target.value
        })
    }

    onChangeGetMusic = (event) => {
        this.setState({
            music: event.target.value
        })
    }

    render() {
        return(
          <div>
            <input type='text' 
              placeholder='Artista' 
              onChange={this.onChangeGetArtist}/>
            <input type='text' 
              placeholder='Música' 
              onChange={this.onChangeGetMusic}/>
              <button onClick={() => this.onClickSearch(this.state.artits.toLowerCase(), this.state.music.toLowerCase())}>Buscar</button>
            <p>{this.state.lyric}</p>
          </div>
        )
    }
}

export default Song;