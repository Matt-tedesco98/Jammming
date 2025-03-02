import React from "react";
import Track from "../Track/Track";


const TrackList = ({tracks = []}) => {
    if (!tracks || !Array.isArray(tracks)) {
        return (<p>Loading tracks.....</p>)
    }
    return (
        <div className="Track-list">
            {tracks.map((track => (
                <Track key={track.id} track={track} />
            )))}
        </div>
    );

};


export default TrackList;