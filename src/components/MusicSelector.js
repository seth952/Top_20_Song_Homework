import React from 'react';
import MusicDetail from './MusicDetail'


const MusicSelector = (props) => {

  const songs = props.songs.map((song, index) => {

    return (
      <MusicDetail key={index} song={song}/>
    )
  })

  return(
    <>
    {songs}
    </>
  )
}

export default MusicSelector;
