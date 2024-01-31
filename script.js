console.log("let's write javascript");

async function getSongs() {

    let a = await fetch("http://127.0.0.1:5500/songs/");
    let response = await a.text();
    console.log(response);
    let div = document.createElement("div");
    div.innerHTML = response;
    let lists = div.getElementsByTagName("a");
    let songs = [];

    for (let index = 0; index < lists.length; index++) {
        const element = lists[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href);
        }
    }
    return songs;
}

async function main() {
    // Get the lists of all songs
    let songs = await getSongs()
    console.log(songs);

    // Play the first song
    var audio = new Audio(songs[0]);
    // audio.play();
    audio.addEventListener("loadeddata", () => {
        let duration = audio.duration;
        console.log(duration);
        // The duration variable now holds the duration (in seconds) of the audio clip
    });
}
main();