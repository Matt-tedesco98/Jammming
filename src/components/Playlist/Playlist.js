import React from "react";
import TrackList from "../TrackList/TrackList";

const Playlist = ( {playlistName, tracks, onNameChange, onSave, onRemove} ) => {


    return (
        <div className="Playlist">
            <input
                type="text"
                value={playlistName}
                onChange={(e) => onNameChange(e.target.value)}
                placeholder="Enter Playlist Name"
            />
            <TrackList tracks={tracks} onRemove={onRemove} isRemoval={true}/>
            <button onClick={onSave}>Save Playlist</button>
        </div>
    )
}

export default Playlist;