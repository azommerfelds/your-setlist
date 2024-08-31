const fetchSpotifyToken = require("../utility/node_fetchSpotifyToken");

const useSpotifyToken = async () => {
  try {
    const accessToken = await fetchSpotifyToken();
    console.log(accessToken);
  } catch (e) {
    console.log(`Error fetching token: `, e);
  }
};

useSpotifyToken();
