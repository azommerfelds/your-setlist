const fetchSpotifyToken = require("./node_fetchSpotifyToken");
const fs = require("fs");

// const getSpotifyToken = async () => {
//   try {
//     const accessToken = await fetchSpotifyToken();
//     return accessToken;
//   } catch (e) {
//     console.log(`Error fetching token: `, e);
//   }
// };

const searchRequest = async (token, search) => {
  const response = await fetch(
    `https://api.spotify.com/v1/search?q=${search}&type=track`, //https://api.spotify.com/v1/search?q=remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis&type=album
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();
  return data.tracks.items;
};

const searchSpotify = async () => {
  token = await fetchSpotifyToken();
  console.log(`token: ${token}`);
  search = "Banana";
  searchData = await searchRequest(token, search);
  const searchResults = searchData.map((track) => ({
    id: track.id,
    name: track.name,
    artist: track.artists[0].name,
  }));

  // Write the new object to a JSON file
  fs.writeFileSync(
    "../data/searchReesults.json",
    JSON.stringify(searchResults, null, 2),
    "utf-8"
  );
  return searchResults;
};
searchSpotify();
module.exports = searchSpotify;
