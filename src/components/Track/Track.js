import React from "react";


const Track = ({track}) => {
    // track is an object with properties name, artist, album, and id
    // returns a div with the track's name, artist, and album
        return (
            <div className="Track">
                <h3>{track.name}</h3>
                <p>{track.artist} | {track.album}</p>
            </div>
        )
};

export default Track;