import React from 'react'
import style from 'styled-components'


function Playlists(props) {

  const { playlist } = props

  return(
    <div>
      {playlist.name}
    </div>)
}

export default Playlists;