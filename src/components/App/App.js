import React, {useCallback, useState} from "react";

import TrackList from "../TrackList/TrackList";
import Playlist from "../Playlist/Playlist";


function App () {
    const [playlistName, setPlaylistName] = useState("New Playlist");
    const [playlistTracks, setPlaylistTracks] = useState([]);

    const [searchResults, setSearchResults] = useState([
        { id: 1, name: "Blinding Lights", artist: "The Weeknd", album: "After Hours" },
        { id: 2, name: "Levitating", artist: "Dua Lipa", album: "Future Nostalgia" },
        { id: 3, name: "Peaches", artist: "Justin Bieber", album: "Justice" },
    ]);

    const search = useCallback((term) => {
        console.log(term);
        setSearchResults([{name: term, artist: "Artist", album: "Album", id: 1}]);
    }, []);
    // update playlist name
    const updatePlaylistName = (newName) => {
        setPlaylistName(newName);
    };
    // handle saving the playlist
    const savePlaylist = () => {
        console.log(`Saving playlist: ${playlistName} with ${playlistTracks.length} tracks`);
        alert(`Saving playlist: ${playlistName}`);
        // clear the playlist name on save
        setPlaylistName("New Playlist");
    }

    // add a track to the playlist
    const addTrack = (track) => {
        console.log(`Adding track: ${track.name}`);
        // check if the track is already in the playlist
        if (!playlistTracks.some((t) => t.id === track.id)) {
            setPlaylistTracks((prevTracks) => [...prevTracks, track]);// add new track to the playlist
        } else {
            console.log(`${track.name} already in playlist`);
        }
    }

    // remove a track from the playlist
    const removeTrack = (track) => {
        setPlaylistTracks((prevTracks) => prevTracks.filter((t) => t.id !== track.id));
    };

    return(
            <div>
                <h1>Jammming</h1>

                {/* Search Results */}
                <div className="search-results">
                    <h2>Search Results</h2>
                    <TrackList tracks={searchResults} onAdd={addTrack} isRemoval={false} />
                </div>

                {/* Playlist */}
                <div className="playlist">
                    <Playlist
                        playlistName={playlistName}
                        tracks={playlistTracks}
                        onNameChange={updatePlaylistName}
                        onSave={savePlaylist}
                        onRemove = {removeTrack}
                    />
                </div>
            </div>
    );
}



export default App;