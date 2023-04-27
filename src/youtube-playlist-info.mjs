import ytpl from "ytpl";

function showPlaylist() {
  // Define the playlist ID
  const playlistId = "PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ";

  // Get playlist metadata
  ytpl(playlistId, { limit: Infinity })
    .then((playlist) => {
      // Print the title of the playlist
      console.log("Playlist title:", playlist.title);

      // Loop through each video in the playlist and print its information
      playlist.items.forEach((video) => {
        console.log("Video title:", video.title);
        console.log("Video URL:", video.shortUrl);
        console.log("Video duration:", video.duration);
        console.log("Video thumbnail:", video.bestThumbnail.url);
      });
    })
    .catch(console.error);
}

/* Returns all the information of the playlist without pagination */
export async function getPlaylistAllInfo(playlistId) {
  return ytpl(playlistId, { limit: Infinity })
    .then((playlist) => {
      return playlist;
    })
    .catch((err) => err);
}

// showPlaylist();
// getPlaylistInfo("PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ");
// getPlaylistInfo("PLlrATfBNZ98dudnM48yfGUldqGD0S4FFb");
