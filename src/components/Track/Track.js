import React from "react";


const Track = ({ track, onAdd, onRemove, isRemoval }) => {
    // track is an object with properties name, artist, album, and id
    // returns a div with the track's name, artist, and album
        return (
            <div className="Track">
                <h3>{track.name}</h3>
                <p>{track.artist} | {track.album}</p>
                {!isRemoval ? (<button onClick={() => onAdd(track)}>+</button>) : (<button onClick={() => onRemove(track)}>-</button> )}
            </div>
        )
};

export default Track;