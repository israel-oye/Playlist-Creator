var allSongs = [];
var displayBox = document.getElementById('showPlaylist');

function updateContent() {
    displayBox.innerHTML = '';

    allSongs.map((song, index) => {
        displayBox.innerHTML += `
                <div>${index + 1}. Song: ${song['songName']}<div/>
                 <div class="pb-2">Artist: ${song['artist']}<div/>
             `
    });
}


function addSong() {
    var songName = document.getElementById('songName').value;
    var songArtist = document.getElementById('songArtist').value;

    var songObj = {
        songName: songName,
        artist: songArtist
    }

    if (songName === '' || songArtist === '') {
        alert('Please enter a value!');
    } else {
        allSongs.push(songObj);
        console.log(allSongs);

        document.getElementById('songName').value = '';
        document.getElementById('songArtist').value = '';

        updateContent();
    }
}


function deleteSong() {
    var startingIndex = Number(prompt('Which number do you want to delete?'));
    allSongs.splice(startingIndex - 1, 1);
    updateContent();
}