import React from 'react';
import MusicDetail from './MusicDetail'


const MusicSelector = (props) => {

  const songs = props.songs.map((song, index) => {

    return (
      <MusicDetail song={song} key={index}/>
    )
  })

  return(
    <>
    {songs}
    </>
  )
}

export default MusicSelector;
