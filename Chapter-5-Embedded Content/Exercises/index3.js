// Alan Partridge Soundboard - JavaScript File

document.addEventListener("DOMContentLoaded", () => {
    const samples = document.querySelectorAll(".sample");
    const audioPlayer = document.getElementById("audioPlayer");

    samples.forEach(sample => {
        sample.addEventListener("click", () => {
            const soundSrc = sample.getAttribute("data-src");
            audioPlayer.src = soundSrc;
            audioPlayer.play();
        });
    });

    // Optional: Play audio again if it's already playing
    audioPlayer.addEventListener("ended", () => {
        audioPlayer.currentTime = 0;
    });
});