import React, { useState } from "react";
import "./styles/App.css";
import Header from "./components/Header/Header";
import CreateSetlist from "./components/CreateSetlist/CreateSetlist";
import SelectSetlist from "./components/SelectSetlist/SelectSetlist";
import Setlist from "./components/Setlist/Setlist";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import useSpotifyToken from "./hooks/useSpotifyToken";
import searchSpotify from "./utility/searchSpotify";

function App() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [setlists, setSetlists] = useState([]);
  const [selectedSetlistId, setSelectedSetlistId] = useState(null);
  const spotifyToken = useSpotifyToken();

  const addSetlist = (name) => {
    const newSetlist = {
      id: setlists.length + 1,
      name: name,
      tracks: [],
    };
    setSetlists([...setlists, newSetlist]);
    setSelectedSetlistId(newSetlist.id);
  };

  const removeSetlist = (id) => {
    setSetlists(setlists.filter((setlist) => setlist.id !== id));
    setSelectedSetlistId(null);
  };

  const addSongToSetlist = (songSelected) => {
    setSetlists(
      setlists.map((setlist) => {
        if (setlist.id === selectedSetlistId) {
          if (!setlist.tracks.find((song) => song.id === songSelected.id)) {
            return { ...setlist, tracks: [...setlist.tracks, songSelected] };
          }
        }
        return setlist;
      })
    );
  };

  const removeSongFromSetlist = (songSelected) => {
    setSetlists(
      setlists.map((setlist) => {
        if (setlist.id === selectedSetlistId) {
          return {
            ...setlist,
            tracks: setlist.tracks.filter(
              (song) => song.id !== songSelected.id
            ),
          };
        }
        return setlist;
      })
    );
  };

  const handleSpotifySearch = async (e) => {
    e.preventDefault();
    const searchResults = await searchSpotify(spotifyToken, search);
    setResults(search ? searchResults : []);
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="left-column">
          <SelectSetlist
            setlists={setlists}
            setSelectedSetlistId={setSelectedSetlistId}
            removeSetlist={removeSetlist}
          />
          <CreateSetlist addSetlist={addSetlist} />
        </div>
        <div className="middle-column">
          {selectedSetlistId ? (
            <Setlist
              setlist={setlists.find(
                (setlist) => setlist.id === selectedSetlistId
              )}
              action={removeSongFromSetlist}
            />
          ) : (
            <p>◀ Create a new setlist to start</p>
          )}
        </div>
        <div className="right-column">
          {selectedSetlistId && (
            <>
              <SearchBar
                handleSearch={handleSpotifySearch}
                search={search}
                setSearch={setSearch}
              />
              <SearchResults results={results} action={addSongToSetlist} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
