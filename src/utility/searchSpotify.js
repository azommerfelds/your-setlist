const searchSpotify = async (token, search) => {
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
  const searchData = data.tracks.items;
  const searchResults = searchData.map((track) => ({
    id: track.id,
    name: track.name,
    artist: track.artists[0].name,
  }));
  return searchResults;
};

export default searchSpotify;
