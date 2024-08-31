import { useState, useEffect } from "react";
import fetchSpotifyToken from "../utility/fetchSpotifyToken";

const useSpotifyToken = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const getToken = async () => {
      try {
        const accessToken = await fetchSpotifyToken();
        setToken(accessToken);
      } catch (error) {
        console.error("Error fetching Spotify access token:", error);
      }
    };

    getToken();

    const interval = setInterval(getToken, 3600 * 1000); // Refresh token every hour

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return token;
};

export default useSpotifyToken;
