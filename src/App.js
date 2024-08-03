import React, { useState } from "react";
import logo from "./logo.svg";
import "./styles/App.css";
import Header from "./components/Header/Header";
import CreateSetlist from "./components/CreateSetlist/CreateSetlist";
import SelectSetlist from "./components/SelectSetlist/SelectSetlist";
import Setlist from "./components/Setlist/Setlist";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import Track from "./components/Track/Track";
import songs from "./data/songs"; // replace with API data

function App() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [setlist, setSetlist] = useState([]);

  const addSong = (songSelected) => {
    if (!setlist.find((song) => song.id === songSelected.id)) {
      setSetlist([...setlist, songSelected]);
    }
  };

  const removeSong = (songSelected) => {
    setSetlist(setlist.filter((song) => song.id !== songSelected.id));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredSongs = songs.filter(
      (song) =>
        song.title.toLowerCase().includes(search.toLowerCase()) ||
        song.artist.toLowerCase().includes(search.toLowerCase())
    );
    if (search != "") {
      setResults(filteredSongs);
    } else setResults([]);
  };

  return (
    <div className="App">
      <Header></Header>
      <div>
        <CreateSetlist></CreateSetlist>
        <SelectSetlist></SelectSetlist>
      </div>
      <div>
        <Setlist setlist={setlist} action={removeSong}></Setlist>
      </div>
      <div>
        <SearchBar
          handleSearch={handleSearch}
          search={search}
          setSearch={setSearch}
        ></SearchBar>
        <SearchResults
          results={results}
          search={search}
          action={addSong}
        ></SearchResults>
      </div>
    </div>
  );
}

export default App;
