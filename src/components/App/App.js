import React, { useCallback, useState } from "react";
import "./App.css";

import Playlist from "../Playlist/Playlist";
import Spotify from "../../modules/Spotify";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResult/SearchResults";


function App() {
    const [playlistName, setPlaylistName] = useState("New Playlist");
    const [playlistTracks, setPlaylistTracks] = useState([]);

    const [searchResults, setSearchResults] = useState([]);

    const search = useCallback((term) => {
        console.log(term);
        Spotify.search(term).then(setSearchResults)
    }, []);
    // update playlist name
    const updatePlaylistName = (newName) => {
        setPlaylistName(newName);
    };
    // handle saving the playlist
    const savePlaylist = useCallback(() => {
        const trackUris = playlistTracks.map((track) => track.uri);
        console.log(`Saving playlist: ${playlistName} with ${playlistTracks.length} tracks and URIs: ${trackUris.join(", ")}`);
        alert(`Saving playlist: ${playlistName}`);
        Spotify.savePlaylist(playlistName, trackUris).then(() => {
            // clear the playlist name on save
            setPlaylistName("New Playlist");
            // clear playlist tracks on save
            setPlaylistTracks([]);
        });
    }, [playlistName, playlistTracks]);

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
    const removeTrack = useCallback((track) => {
        setPlaylistTracks((prevTracks) =>
            prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
        );
    }, []);

    return (
        <div>
            <h1>Jammming</h1>

            {/* Search Results */}
            <div className="App">
                <SearchBar onSearch={search} />
                <div className="App-playlist">
                    <SearchResults searchResults={searchResults} onAdd={addTrack} />
                    <Playlist
                        playlistName={playlistName}
                        tracks={playlistTracks}
                        onNameChange={updatePlaylistName}
                        onSave={savePlaylist}
                        onRemove={removeTrack}
                    />
                </div>
            </div>
        </div>
    );
}



export default App;