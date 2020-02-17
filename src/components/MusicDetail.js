import React from 'react';


const MusicDetail = (props) => {
  if(!props.song) return null;

  return (
    <div>
    <h3>Track Name: {props.song['im:name'].label} </h3>
    <p>Artist: {props.song['im:artist'].label}</p>
    <p>{props.song["im:image"][2].label}</p>

    </div>
  )

}
export default MusicDetail;
