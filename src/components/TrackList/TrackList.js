import React from "react";
import Track from "../Track/Track";


const TrackList = ({tracks = []}) => {
    // empty array as default value, catches the case where tracks is undefined
    if (!tracks || !Array.isArray(tracks)) {
        return (<p>Loading tracks.....</p>)
    }
    // returns a list of tracks using the Track component when tracks are available
    return (
        <div className="Track-list">
            {tracks.map((track => (
                <Track key={track.id} track={track} />
            )))}
        </div>
    );

};


export default TrackList;