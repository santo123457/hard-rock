// display none
document.getElementById("list1").style.display = "none";
document.getElementById("list2").style.display = "none";
const displayLyrics = document.getElementsByClassName("single-lyrics");
for (let i = 0; i < displayLyrics.length; i++) {
  const element = displayLyrics[i];
  element.style.display = "none";

}

// find Your Song
document.getElementById("searchBtn").addEventListener("click", function () {
  const callSong = document.getElementById("checkInput").value;
  fetch("https://api.lyrics.ovh/suggest/" + callSong + "/")
    .then((resp) => resp.json())
    .then(function (data) {
      callArtists = (id1, no1) =>
        document.getElementById(id1).innerText = data.data[no1].artist.name;
      callSongs = (id2, no2) =>
        document.getElementById(id2).innerText = data.data[no2].title;

      callSongs("song1", 0);
      callArtists("artist1", 0);
      callSongs("song2", 1);
      callArtists("artist2", 1);
      callSongs("song3", 2);
      callArtists("artist3", 2);
      callSongs("song4", 3);
      callArtists("artist4", 3);
      callSongs("song5", 4);
      callArtists("artist5", 4);
      callSongs("song6", 5);
      callArtists("artist6", 5);
      callSongs("song7", 6);
      callArtists("artist7", 6);
      callSongs("song8", 7);
      callArtists("artist8", 7);
      callSongs("song9", 8);
      callArtists("artist9", 8);
      callSongs("song10", 9);
      callArtists("artist10", 9);

    })

  document.getElementById("list1").style.display = "block";
  document.getElementById("list2").style.display = "block";
})
// get lyrics


function getLyrics(id1, id2, id3, id4, id5, id6, id7) {

  document.getElementById(id1).addEventListener("click", function () {
    const theArtist = document.getElementById(id2).innerHTML;
    const theSong = document.getElementById(id3).innerHTML;
    const theArtistURI = encodeURI(theArtist);
    console.log(theArtist);
    const theSongURI = encodeURI(theSong);
    console.log(theSong);
    fetch("https://api.lyrics.ovh/v1/" + theArtistURI + "/" + theSongURI + "/")
      .then((resp) => resp.json())
      .then(function (data) {
        document.getElementById(id4).innerText = theArtist;
        document.getElementById(id5).innerText = theSong;
        document.getElementById(id6).innerText = data.lyrics;
        document.getElementById(id7).style.display = "block";
      })
  })
}
getLyrics("Lyrics1", "artist1", "song1", "artistName1", "songName1", "lyrics1", "fullLyrics1");
getLyrics("Lyrics2", "artist2", "song2", "artistName2", "songName2", "lyrics2", "fullLyrics2");
getLyrics("Lyrics3", "artist3", "song3", "artistName3", "songName3", "lyrics3", "fullLyrics3");
getLyrics("Lyrics4", "artist4", "song4", "artistName4", "songName4", "lyrics4", "fullLyrics4");
getLyrics("Lyrics5", "artist5", "song5", "artistName5", "songName5", "lyrics5", "fullLyrics5");
getLyrics("Lyrics6", "artist6", "song6", "artistName6", "songName6", "lyrics6", "fullLyrics6");
getLyrics("Lyrics7", "artist7", "song7", "artistName7", "songName7", "lyrics7", "fullLyrics7");
getLyrics("Lyrics8", "artist8", "song8", "artistName8", "songName8", "lyrics8", "fullLyrics8");
getLyrics("Lyrics9", "artist9", "song9", "artistName9", "songName9", "lyrics9", "fullLyrics9");
getLyrics("Lyrics10", "artist10", "song10", "artistName10", "songName10", "lyrics10", "fullLyrics10");





