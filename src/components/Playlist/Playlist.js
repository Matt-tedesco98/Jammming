import React, {useState} from "react";
import "./Playlist.css";
import TrackList from "../TrackList/TrackList";

const Playlist = ( {playlistName, tracks, onNameChange, onSave, onRemove} ) => {
    const [isEditing, setIsEditing] = useState(false);
    const [tempName, setTempName] = useState(playlistName);

    // handle enter edit mode
    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleChange = (e) => {
        setTempName(e.target.value);
    }

    const handleBlur = () => {
            onNameChange(tempName);
            setIsEditing(false);
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            onNameChange(tempName);
            setIsEditing(false);
        }
    }

    return (
        <div className="Playlist">
            {isEditing ? (
            <input
                type="text"
                value={tempName}
                onChange={handleChange}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
                autoFocus
                placeholder="Enter Playlist Name"
            />
                ) : (
                    <h2 onClick={handleEditClick}>{playlistName || "Click to edit name"}</h2> )}
            <TrackList tracks={tracks} onRemove={onRemove} isRemoval={true}/>
            <button className="Playlist-save" onClick={onSave}>Save Playlist to Spotify</button>
        </div>
    )
}

export default Playlist;