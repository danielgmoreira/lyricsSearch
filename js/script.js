function findLyrics(artist, song) {
    return fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
}

const form = document.querySelector('#lyrics_form');
form.addEventListener('submit', el => {
    el.preventDefault()
    doSubmit()
});

async function doSubmit() {
    const lyrics_el = document.querySelector('#lyrics');
    const artist = document.querySelector('#artist');
    const song = document.querySelector('#song')
    
    lyrics_el.innerHTML = '<div class="spinner-grow text-primary" role="status"><span class="sr-only">Loading...</span></div>'

    const lyricsResponse = await findLyrics(artist.value, song.value);
    const data = await lyricsResponse.json();
    lyrics_el.innerHTML = data.lyrics;
}

