import React from 'react';


const MusicDetail = (props) => {
  if(!props.song) return null;

  return (
    <div>
    <h1>Top 20 Songs</h1>
    <h3>Track Name: {props.song['im:name'].label} </h3>
    <p>Artist: {props.song['im:artist'].label}</p>
    <img src={props.song["im:image"][2].label}/>

    </div>
  )

}
export default MusicDetail;
