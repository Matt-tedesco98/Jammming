import React, {useCallback, useState} from "react";

import TrackList from "../TrackList/TrackList";


function App () {
    const [searchResults, setSearchResults] = useState([]);

    const [tracks, setTracks] = useState([
        { id: 1, name: "Blinding Lights", artist: "The Weeknd", album: "After Hours" },
        { id: 2, name: "Levitating", artist: "Dua Lipa", album: "Future Nostalgia" },
        { id: 3, name: "Peaches", artist: "Justin Bieber", album: "Justice" },
    ]);

    const search = useCallback((term) => {
        console.log(term);
        setSearchResults([{name: term, artist: "Artist", album: "Album", id: 1}]);
    }, []);

    return(
        <div>
            <h1>App</h1>
            <div className="App">
                <TrackList tracks={tracks} />
            </div>
        </div>
    )
}



export default App;