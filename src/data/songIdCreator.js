const fs = require("fs");
const path = require("path");

// Load the songs array using require
const songs = require("./songsNode");

// Add unique IDs to each song
const updatedSongs = songs.map((song, index) => ({
  id: index + 1,
  ...song,
}));

// Convert the updated array back to a string
const updatedSongsString = JSON.stringify(updatedSongs, null, 2);

// Prepare the new file content
const newFileContent = `const songs = ${updatedSongsString};

module.exports = songs;
`;

// Write the updated array to a new file
const newFilePath = path.join(__dirname, "songs_with_ids.js");
fs.writeFileSync(newFilePath, newFileContent);

console.log("Unique IDs added to each song and saved to songs_with_ids.js");
