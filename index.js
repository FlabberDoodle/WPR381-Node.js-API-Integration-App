// Tiaan Theron - 577856
// Andre Strauss - 577658
// Gianni Snyders - 577932
// Namhla Khoza - 577248 - Namhla made no attempt to Communicate or Contribute to the Assignment. 0 Input

require('dotenv').config();
const fs = require('fs');
const SpotifyWebApi = require('spotify-web-api-node');
const readline = require('readline');

// Setup the Spotify API from our .env file
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET
});

// Function to get user input and search for a song
function getUserInput() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Do you want to search manually or read from the file? (manual/file): ', (mode) => {
    if (mode.trim().toLowerCase() === 'file') {
      readFromFile();
      rl.close();
    } else {
      rl.question('Enter the name of the song you want to search: ', (song) => {
        rl.question('Enter the name of the artist (optional): ', (artist) => {
          rl.question('Do you want the album details as well? (yes/no): ', (includeAlbum) => {
            getSongDetails(song.trim(), artist.trim(), includeAlbum.trim().toLowerCase() === 'yes');
            rl.close();
          });
        });
      });
    }
  });
}

// Function to read and process commands from the file
function readFromFile() {
  fs.readFile('random.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading from file:', err.message);
      return;
    }

    const lines = data.split('\n').filter(line => line.trim() !== '');
    for (const line of lines) {
      const [song, artist, includeAlbum] = line.split(',').map(item => item.trim());
      getSongDetails(song, artist, includeAlbum.toLowerCase() === 'yes');
    }
  });
}

// The Function to get a song from Spotify
async function getSongDetails(query, artist, includeAlbum) {
  try {
    let searchQuery = `track:${query}`;
    if (artist) {
      searchQuery += ` artist:${artist}`;
    }
    const data = await spotifyApi.searchTracks(searchQuery);
    if (data.body.tracks.items.length > 0) {
      const song = data.body.tracks.items[0];
      const songDetails = {
        artists: song.artists.map(artist => artist.name).join(', '),
        name: song.name,
        preview_url: song.preview_url,
        album: song.album.name
      };

      // Output song details
      console.log(`Artist(s): ${songDetails.artists}`);
      console.log(`Song: ${songDetails.name}`);
      console.log(`Preview Link: ${songDetails.preview_url}`);
      if (includeAlbum) {
        console.log(`Album: ${songDetails.album}`);
      }

      // Save song details to SearchedSongs.txt
      appendSongDetailsToFile(songDetails, includeAlbum);
    } else {
      console.log('No results found.');
    }
  } catch (error) {
    console.error('Error occurred while fetching song details:', error.message);
  }
}

// Function to append song details to file
function appendSongDetailsToFile(songDetails, includeAlbum) {
  const details = `
Artist(s): ${songDetails.artists}
Song: ${songDetails.name}
Preview Link: ${songDetails.preview_url}
${includeAlbum ? `Album: ${songDetails.album}` : ''}
`;

  fs.appendFile('SearchedSongs.txt', details.trim() + '\n\n', (err) => {
    if (err) {
      console.error('Error writing to file:', err.message);
    } else {
      console.log('Song details appended to SearchedSongs.txt');
    }
  });
}

// Authenticate with Spotify API
async function authenticateSpotify() {
  try {
    const data = await spotifyApi.clientCredentialsGrant();
    spotifyApi.setAccessToken(data.body['access_token']);
    console.log('Spotify API authenticated.');

    // Get user input
    getUserInput();
  } catch (error) {
    console.error('Error authenticating Spotify API:', error.message);
  }
}

// Start the application
authenticateSpotify();