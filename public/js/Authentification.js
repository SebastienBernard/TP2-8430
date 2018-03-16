var spotifyPlayer = new SpotifyPlayer();

spotifyPlayer.on('update', response => {
  // render the track received
});

spotifyPlayer.on('login', user => {
  if (user === null) {
    
  } else {
    
  }
});

spotifyPlayer.init();
spotifyPlayer.login();