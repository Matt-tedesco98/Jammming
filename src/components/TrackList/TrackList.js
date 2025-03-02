import React from "react";
import Track from "../Track/Track";


const TrackList = ({tracks = [], onAdd, isRemoval, onRemove = []}) => {
    return (
        <div className="Track-list">
            {tracks.map((track) => (
                <Track
                    key={track.id}
                    track={track}
                    onAdd={onAdd}
                    onRemove ={onRemove}
                    isRemoval={isRemoval}
                />
            ))}
        </div>
    );

};


export default TrackList;